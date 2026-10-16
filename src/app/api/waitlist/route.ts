import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";

const sql = neon(process.env.DATABASE_URL!);
const resend = new Resend(process.env.RESEND_API_KEY!);

function sanitize(str: string): string {
  return str.trim().replace(/[<>]/g, "").slice(0, 200);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUKPhone(phone: string): boolean {
  if (!phone) return true;
  const cleaned = phone.replace(/[\s\-()]/g, "");
  return /^(?:\+44|0)7\d{9}$/.test(cleaned);
}

async function verifyTurnstile(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

async function sendConfirmationEmail(name: string, email: string, position: number) {
  try {
    await resend.emails.send({
      from: "Debt Freedom <onboarding@resend.dev>",
      to: email,
      subject: `You are on the list, ${name}. Here is what happens next.`,
      text: `Hi ${name},

Thank you for joining the Debt Freedom waitlist. You are number ${position} in line.

Here is what happens next:

1. We are collecting 100 people who are serious about escaping credit card debt.
2. Once we reach 100, our financial expert will prepare your personalised debt clearance guide based on the information you shared.
3. You will receive it directly in your inbox, completely free.

In the meantime, here is one thing you can do tonight:

Open your banking app and write down the exact balance and APR for every credit card you have. Not the minimum payment. The full balance and the interest rate. Most people avoid looking at these numbers. Just seeing them clearly is the first real step.

We will be in touch soon.

Take care,
The Debt Freedom Team

P.S. If you did not sign up for this, you can ignore this email. Your data will be deleted automatically.`,
    });
  } catch (error) {
    console.error("Email error:", error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      email,
      whatsapp,
      debtRange,
      consentEmail,
      consentWhatsapp,
      turnstileToken,
    } = body;

    const isHuman = await verifyTurnstile(turnstileToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 403 }
      );
    }

    const cleanName = sanitize(firstName);
    const cleanEmail = email?.trim().toLowerCase();
    const cleanWhatsapp = whatsapp?.trim() || null;

    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { error: "Please enter your first name." },
        { status: 400 }
      );
    }

    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (cleanWhatsapp && !isValidUKPhone(cleanWhatsapp)) {
      return NextResponse.json(
        { error: "Please enter a valid UK mobile number." },
        { status: 400 }
      );
    }

    const validRanges = ["under_2k", "2k_to_5k", "5k_to_10k", "over_10k"];
    if (!validRanges.includes(debtRange)) {
      return NextResponse.json(
        { error: "Please select a valid debt range." },
        { status: 400 }
      );
    }

    if (!consentEmail) {
      return NextResponse.json(
        { error: "Email consent is required." },
        { status: 400 }
      );
    }

    const existing = await sql`
      SELECT id FROM subscribers
      WHERE email_lower = ${cleanEmail} AND deleted_at IS NULL
    `;

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "This email is already on the waitlist." },
        { status: 409 }
      );
    }

    const [{ count: currentCount }] = await sql`
      SELECT COUNT(*) as count FROM waitlist
      WHERE cohort = 1 AND status = 'waiting'
    `;

    if (parseInt(currentCount) >= 100) {
      return NextResponse.json(
        { error: "The waitlist is currently full." },
        { status: 410 }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "0.0.0.0";

    const userAgent = req.headers.get("user-agent") || "unknown";

    const [subscriber] = await sql`
      INSERT INTO subscribers (
        first_name, email, whatsapp, debt_range,
        consent_email, consent_whatsapp, source, metadata
      ) VALUES (
        ${cleanName}, ${cleanEmail}, ${cleanWhatsapp}, ${debtRange},
        ${consentEmail}, ${consentWhatsapp || false}, 'tiktok',
        ${JSON.stringify({ ip, userAgent })}::jsonb
      )
      RETURNING id
    `;

    const position = parseInt(currentCount) + 1;

    await sql`
      INSERT INTO waitlist (subscriber_id, position, cohort)
      VALUES (${subscriber.id}, ${position}, 1)
    `;

    await sql`
      INSERT INTO consent_log (subscriber_id, action, channel, ip_address, user_agent)
      VALUES (${subscriber.id}, 'granted', 'email', ${ip}::inet, ${userAgent})
    `;

    if (consentWhatsapp && cleanWhatsapp) {
      await sql`
        INSERT INTO consent_log (subscriber_id, action, channel, ip_address, user_agent)
        VALUES (${subscriber.id}, 'granted', 'whatsapp', ${ip}::inet, ${userAgent})
      `;
    }

    await sendConfirmationEmail(cleanName, cleanEmail, position);

    return NextResponse.json({
      success: true,
      position,
      isFull: position >= 100,
    });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const [{ count }] = await sql`
    SELECT COUNT(*) as count FROM waitlist
    WHERE cohort = 1 AND status = 'waiting'
  `;

  const claimed = parseInt(count);

  return NextResponse.json(
    { claimed, total: 100, remaining: Math.max(0, 100 - claimed) },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    }
  );
}