"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import Script from "next/script";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | "success" | "error";

const DEBT_RANGES = [
  { value: "under_2k", label: "Under £2,000", desc: "Early stage, highly fixable" },
  { value: "2k_to_5k", label: "£2,000 to £5,000", desc: "The most common range" },
  { value: "5k_to_10k", label: "£5,000 to £10,000", desc: "Needs a clear strategy" },
  { value: "over_10k", label: "Over £10,000", desc: "We have helped many at this level" },
];

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement | string, options: Record<string, unknown>) => string;
      getResponse: (widgetId: string) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export default function WaitlistForm() {
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [position, setPosition] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [debtRange, setDebtRange] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consentEmail, setConsentEmail] = useState(false);
  const [consentWhatsapp, setConsentWhatsapp] = useState(false);

  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (step === 2 && turnstileRef.current && window.turnstile && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        theme: "dark",
      });
    }
  }, [step]);

  function handleStep1(e: FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    const name = firstName.trim();
    const mail = email.trim().toLowerCase();

    if (!name || name.length < 2) {
      setErrorMsg("Please enter your first name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setFirstName(name);
    setEmail(mail);
    setStep(2);
  }

  async function handleStep2(e: FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!debtRange) {
      setErrorMsg("Please select your debt range.");
      return;
    }

    if (!consentEmail) {
      setErrorMsg("We need your consent to email you the guide.");
      return;
    }

    let turnstileToken = "";
    if (widgetIdRef.current && window.turnstile) {
      turnstileToken = window.turnstile.getResponse(widgetIdRef.current);
    }

    if (!turnstileToken) {
      setErrorMsg("Please complete the security check.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim().toLowerCase(),
          whatsapp: whatsapp.trim() || null,
          debtRange,
          consentEmail,
          consentWhatsapp,
          turnstileToken,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStep("error");
        return;
      }

      setPosition(data.position);
      setStep("success");
    } catch {
      setErrorMsg("Connection error. Please check your internet and try again.");
      setStep("error");
    } finally {
      setLoading(false);
    }
  }

  if (step === "success") {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-teal-muted/20 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-teal-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-cream mb-2">
          You are on the list, {firstName}.
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-2">
          You are number {position} in line.
        </p>
        <p className="text-gray-500 text-xs leading-relaxed">
          When we reach 100 signups, you will receive your personalised debt clearance guide directly to your inbox.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
      />

      <form onSubmit={step === 1 ? handleStep1 : handleStep2} className="space-y-5" noValidate>
        <div className="flex items-center justify-center gap-2 mb-1">
          <div className={cn("w-8 h-1 rounded-full transition-colors duration-300", step === 1 ? "bg-amber-gold" : "bg-amber-gold/40")} />
          <div className={cn("w-8 h-1 rounded-full transition-colors duration-300", step === 2 ? "bg-amber-gold" : "bg-white/10")} />
        </div>

        {step === 1 && (
          <>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1.5">First name</label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
                required
                className="w-full px-4 py-3.5 rounded-input bg-white/[0.08] border border-white/[0.15] text-cream placeholder-gray-500 focus:outline-none focus:border-amber-gold focus:ring-[3px] focus:ring-amber-gold/15 transition-all duration-200 text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3.5 rounded-input bg-white/[0.08] border border-white/[0.15] text-cream placeholder-gray-500 focus:outline-none focus:border-amber-gold focus:ring-[3px] focus:ring-amber-gold/15 transition-all duration-200 text-base"
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">How much credit card debt are you carrying?</label>
              <div className="grid grid-cols-1 gap-2.5">
                {DEBT_RANGES.map((range) => (
                  <button
                    key={range.value}
                    type="button"
                    onClick={() => setDebtRange(range.value)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-input border transition-all duration-200",
                      debtRange === range.value
                        ? "border-amber-gold bg-amber-gold/10"
                        : "border-white/[0.15] bg-white/[0.05] hover:border-white/30"
                    )}
                  >
                    <span className={cn("block text-sm font-medium", debtRange === range.value ? "text-amber-gold" : "text-cream")}>
                      {range.label}
                    </span>
                    <span className="block text-xs text-gray-500 mt-0.5">{range.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1.5">
                WhatsApp number <span className="text-gray-500">(optional)</span>
              </label>
              <input
                id="whatsapp"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="07XXX XXXXXX"
                className="w-full px-4 py-3.5 rounded-input bg-white/[0.08] border border-white/[0.15] text-cream placeholder-gray-500 focus:outline-none focus:border-amber-gold focus:ring-[3px] focus:ring-amber-gold/15 transition-all duration-200 text-base"
              />
            </div>

            <div className="space-y-3 pt-1">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={consentEmail}
                  onChange={(e) => setConsentEmail(e.target.checked)}
                  className="mt-1 w-[18px] h-[18px] rounded accent-amber-gold cursor-pointer"
                />
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                  Yes, send me the free debt guide and updates via email.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={consentWhatsapp}
                  onChange={(e) => setConsentWhatsapp(e.target.checked)}
                  className="mt-1 w-[18px] h-[18px] rounded accent-amber-gold cursor-pointer"
                />
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                  Yes, also send me tips via WhatsApp. No spam. Unsubscribe anytime.
                </span>
              </label>
            </div>

            <div ref={turnstileRef} className="flex justify-center pt-2" />
          </>
        )}

        {errorMsg && (
          <p className="text-red-400 text-sm text-center" role="alert">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 rounded-btn bg-amber-gold text-navy font-semibold text-base tracking-wide hover:bg-amber-hover hover:-translate-y-[1px] hover:shadow-btn-hover active:translate-y-0 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {loading ? "Securing your spot..." : step === 1 ? "Continue" : "Claim My Spot"}
        </button>

        {step === 1 && (
          <p className="text-center text-xs text-gray-500">Step 1 of 2. We will never share your data.</p>
        )}

        {step === 2 && (
          <button
            type="button"
            onClick={() => { setStep(1); setErrorMsg(""); }}
            className="w-full text-center text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            Back
          </button>
        )}
      </form>
    </>
  );
}