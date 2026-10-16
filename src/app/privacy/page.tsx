import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Debt Freedom",
  description: "How Alfirdaus Technologies Limited collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-cream py-16 md:py-24 px-5">
      <article className="max-w-[720px] mx-auto">

        <h1 className="font-serif text-[28px] md:text-[40px] text-navy leading-snug mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">
         Last updated: 24 February 2025
        </p>

        <div className="space-y-10 text-[16px] text-slate leading-[1.8]">

          {/* 1 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">1. Who We Are</h2>
            <p>
              This website is operated by <strong>Alfirdaus Technologies Limited</strong>, a company Registered with the corporate affairs commission ("we", "us", "our"). We are the data controller responsible for your personal data under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p className="mt-3">
              You can contact us at any time regarding your data by emailing{" "}
              <a href="mailto:privacy@alfirdaustechnologies.co.uk" className="text-teal-muted underline underline-offset-4 hover:text-teal-muted/80 transition-colors">
                privacy@alfirdaustechnologies.co.uk
              </a>.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">2. What Data We Collect</h2>
            <p className="mb-3">When you join our waitlist, we collect the following personal data directly from you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>First name</strong> — to personalise our communications with you.</li>
              <li><strong>Email address</strong> — to deliver the debt clearance guide and send you updates.</li>
              <li><strong>WhatsApp number</strong> (optional) — to send you debt tips and updates via WhatsApp, only if you explicitly opt in.</li>
              <li><strong>Debt range</strong> — a broad category (e.g. "Under £2,000", "£2,000 to £5,000") so we can tailor the guide to your situation. We do not collect exact debt figures, account numbers, or any financial account details.</li>
            </ul>
            <p className="mt-4 mb-3">We also automatically collect the following technical data when you submit the form:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>IP address</strong> — recorded with your consent timestamp as required by UK GDPR to demonstrate that consent was freely given.</li>
              <li><strong>User agent string</strong> — the browser and device you used when signing up, stored for security and fraud prevention purposes.</li>
            </ul>
            <p className="mt-4">
              We do <strong>not</strong> collect any special category data (such as health, race, religion, or biometric data). We do <strong>not</strong> collect data from children under 18.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">3. Lawful Basis for Processing</h2>
            <p className="mb-3">Under Article 6 of the UK GDPR, we process your data under the following lawful bases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent (Article 6(1)(a))</strong> — You gave explicit, informed consent via unticked checkboxes when joining the waitlist. This covers sending you the guide and updates via email, and via WhatsApp if you opted in separately.</li>
              <li><strong>Legitimate interest (Article 6(1)(f))</strong> — We process your IP address and user agent for security, fraud prevention, and to maintain an auditable consent log as required by law. Our legitimate interest in preventing abuse does not override your rights.</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> rely on "contract" or "legal obligation" as a basis for marketing communications. Your consent is the sole basis for all outreach.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">4. How We Use Your Data</h2>
            <p className="mb-3">We use your data only for the following specific purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To add you to the waitlist and assign you a queue position.</li>
              <li>To send you a confirmation email immediately after signup.</li>
              <li>To deliver the personalised debt clearance guide when it is ready.</li>
              <li>To send you periodic updates about the programme via email.</li>
              <li>To send you debt tips via WhatsApp, only if you explicitly opted in.</li>
              <li>To segment our communications based on your debt range so the content is relevant to you.</li>
              <li>To maintain a legally required audit trail of your consent.</li>
              <li>To prevent duplicate signups and detect fraudulent submissions.</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell, rent, trade, or share your personal data with third parties for their own marketing purposes. We do <strong>not</strong> use your data for automated decision-making or profiling.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">5. Who Has Access to Your Data</h2>
            <p className="mb-3">Your data is processed by the following services, each acting as a data processor under a binding contract:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Neon Technologies, Inc.</strong> — Cloud database hosting. Your data is stored exclusively in the <strong>EU Central (Frankfurt, Germany)</strong> region. Neon is SOC 2 Type II certified. Data never leaves the European Economic Area (EEA).</li>
              <li><strong>Resend, Inc.</strong> — Transactional email delivery. Resend processes your name and email address solely to deliver messages on our behalf. Resend is SOC 2 compliant.</li>
              <li><strong>Vercel, Inc.</strong> — Web hosting and serverless compute. Vercel processes form submissions transiently and does not store your personal data beyond the request lifecycle.</li>
              <li><strong>Cloudflare, Inc.</strong> — Bot protection (Turnstile). Cloudflare processes your IP address transiently to verify you are human. No personal data is stored by Cloudflare on our behalf.</li>
            </ul>
            <p className="mt-3">
              All processors are bound by data processing agreements that comply with UK GDPR Article 28. No processor may use your data for any purpose other than providing the service to us.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">6. International Data Transfers</h2>
            <p>
              Your personal data is stored in the <strong>EEA (Frankfurt, Germany)</strong> and does not leave the EEA. Where any of our processors are headquartered outside the UK or EEA (e.g. the United States), the actual data processing and storage occurs within EEA data centres. No international transfer mechanisms (such as Standard Contractual Clauses) are required because your data does not cross EEA borders.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">7. Data Retention</h2>
            <p className="mb-3">We retain your data for the following periods:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Waitlist and contact data</strong> (name, email, WhatsApp, debt range): Retained for <strong>24 months</strong> from the date of signup, or until you withdraw consent, whichever comes first.</li>
              <li><strong>Consent audit log</strong> (timestamps, IP, user agent, consent actions): Retained for <strong>24 months</strong> after consent is withdrawn, as required to demonstrate compliance with UK GDPR Article 7(1).</li>
            </ul>
            <p className="mt-3">
              After the retention period, your data is permanently and irreversibly deleted from all systems, including backups, within 30 days.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">8. Your Rights</h2>
            <p className="mb-3">Under the UK GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right of access (Article 15)</strong> — You can request a copy of all personal data we hold about you.</li>
              <li><strong>Right to rectification (Article 16)</strong> — You can ask us to correct any inaccurate or incomplete data.</li>
              <li><strong>Right to erasure (Article 17)</strong> — You can ask us to delete all your personal data. We will comply within 30 days unless we are legally required to retain the consent log.</li>
              <li><strong>Right to restriction (Article 18)</strong> — You can ask us to stop processing your data while a dispute is resolved.</li>
              <li><strong>Right to data portability (Article 20)</strong> — You can request your data in a machine-readable format (CSV or JSON).</li>
              <li><strong>Right to object (Article 21)</strong> — You can object to processing based on legitimate interest.</li>
              <li><strong>Right to withdraw consent (Article 7(3))</strong> — You can withdraw your consent at any time. This does not affect the lawfulness of processing before withdrawal.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email{" "}
              <a href="mailto:privacy@alfirdaustechnologies.co.uk" className="text-teal-muted underline underline-offset-4 hover:text-teal-muted/80 transition-colors">
                privacy@alfirdaustechnologies.co.uk
              </a>{" "}
              with the subject line "Data Rights Request". We will respond within <strong>one calendar month</strong> as required by law. We will not charge a fee unless your request is manifestly unfounded or excessive.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">9. How to Unsubscribe</h2>
            <p className="mb-3">You can stop receiving communications from us at any time:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Email:</strong> Every email we send includes an unsubscribe link at the bottom. Clicking it will immediately remove you from all email communications.</li>
              <li><strong>WhatsApp:</strong> Reply "STOP" to any WhatsApp message we send, and you will be removed immediately.</li>
              <li><strong>Full deletion:</strong> Email{" "}
                <a href="mailto:privacy@alfirdaustechnologies.co.uk" className="text-teal-muted underline underline-offset-4 hover:text-teal-muted/80 transition-colors">
                  privacy@alfirdaustechnologies.co.uk
                </a>{" "}
                and request complete data deletion.
              </li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">10. Cookies and Tracking</h2>
            <p>
              This website does <strong>not</strong> use any tracking cookies, analytics cookies, advertising cookies, or third-party cookies. We do not use Google Analytics, Facebook Pixel, or any similar tracking technology. The only cookies set are strictly necessary session cookies created by our hosting provider (Vercel) to deliver the website to your browser. These cookies do not collect personal data and are exempt from PECR consent requirements.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">11. Data Security</h2>
            <p className="mb-3">We implement the following technical and organisational measures to protect your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All data is encrypted in transit using TLS 1.3 (HTTPS).</li>
              <li>All data is encrypted at rest using AES-256 encryption.</li>
              <li>Database access is restricted to authenticated connections with strong credentials.</li>
              <li>Server-side input sanitization and validation on all form submissions.</li>
              <li>Bot protection via Cloudflare Turnstile to prevent automated abuse.</li>
              <li>Rate limiting to prevent bulk submissions.</li>
              <li>Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) on all pages.</li>
              <li>Regular dependency updates and vulnerability scanning.</li>
            </ul>
            <p className="mt-3">
              In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the Information Commissioner's Office (ICO) within 72 hours and inform affected individuals without undue delay, as required by UK GDPR Articles 33 and 34.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">12. Children's Privacy</h2>
            <p>
              Our services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately and we will delete it.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will notify you by email (if you are on our waitlist) and update the "Last updated" date at the top of this page. Your continued use of our services after a material change constitutes acceptance of the updated policy. If you do not agree with the changes, you may withdraw your consent and request data deletion.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">14. Your Right to Complain</h2>
            <p>
              If you are not satisfied with how we handle your data or respond to your rights requests, you have the right to lodge a complaint with the UK Information Commissioner's Office (ICO):
            </p>
            <p className="mt-3">
              <strong>Information Commissioner's Office</strong><br />
              Wycliffe House, Water Lane<br />
              Wilmslow, Cheshire, SK9 5AF<br />
              Telephone: 0303 123 1113<br />
              Website:{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-teal-muted underline underline-offset-4 hover:text-teal-muted/80 transition-colors">
                ico.org.uk
              </a>
            </p>
            <p className="mt-3">
              We would appreciate the opportunity to address your concerns before you contact the ICO. Please email us first at{" "}
              <a href="mailto:privacy@alfirdaustechnologies.co.uk" className="text-teal-muted underline underline-offset-4 hover:text-teal-muted/80 transition-colors">
                privacy@alfirdaustechnologies.co.uk
              </a>.
            </p>
          </section>

        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border-light text-center">
          <a href="/" className="text-sm text-teal-muted underline underline-offset-4 hover:text-teal-muted/80 transition-colors">
            Back to home
          </a>
        </div>

      </article>
    </main>
  );
}