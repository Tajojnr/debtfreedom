import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Debt Freedom",
  description: "Terms governing your use of the Debt Freedom website and services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-cream py-16 md:py-24 px-5">
      <article className="max-w-[720px] mx-auto">

        <h1 className="font-serif text-[28px] md:text-[40px] text-navy leading-snug mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-12">
         Last updated: 24 February 2025
        </p>

        <div className="space-y-10 text-[16px] text-slate leading-[1.8]">

          {/* 1 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">1. Agreement to These Terms</h2>
            <p>
              By accessing or using this website (the "Site") and any services offered through it (the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Site or Services.
            </p>
            <p className="mt-3">
              These Terms constitute a legally binding agreement between you and <strong>Alfirdaus Technologies Limited</strong>, a company Registered with the corporate affairs commission ("we", "us", "our").
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">2. Description of Services</h2>
            <p className="mb-3">We currently offer the following Services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Waitlist registration</strong> — You may sign up to join a limited waitlist to receive a free, personalised debt clearance guide prepared by our financial expert.</li>
              <li><strong>Educational content</strong> — We provide general information about credit card debt, interest calculations, repayment strategies, and related financial topics via our website, email, and WhatsApp.</li>
              <li><strong>Debt clearance guide</strong> — A step-by-step educational guide tailored to broad debt categories, delivered to waitlist members when available.</li>
            </ul>
            <p className="mt-3">
              We reserve the right to modify, suspend, or discontinue any Service at any time without prior notice. We will make reasonable efforts to notify waitlist members of material changes via email.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">3. Important Financial Disclaimer</h2>
            <div className="bg-navy/[0.04] border border-border-light rounded-card p-6 my-4">
              <p className="font-semibold text-navy mb-2">Please read this section carefully.</p>
              <p className="mb-3">
                All content provided through our Site and Services is for <strong>general educational and informational purposes only</strong>. It does not constitute financial advice, legal advice, tax advice, or any other form of professional advice.
              </p>
              <p className="mb-3">
                Alfirdaus Technologies Limited is a technology company. We are <strong>not</strong> authorised or regulated by the Financial Conduct Authority (FCA) and do not provide regulated financial services. Our financial expert collaborator provides input in a personal capacity based on their professional experience. Their involvement does not constitute a regulated advisory relationship between you and them.
              </p>
              <p className="mb-3">
                The debt clearance guide and all related materials are educational resources designed to help you understand your options. They are <strong>not</strong> a substitute for personalised advice from a qualified, FCA-regulated financial adviser who has assessed your complete financial situation.
              </p>
              <p>
                You should always seek independent professional advice before making any financial decisions, including but not limited to debt consolidation, debt management plans, Individual Voluntary Arrangements (IVAs), bankruptcy, or any other debt solution.
              </p>
            </div>
            <p className="mt-3">
              By using our Services, you acknowledge that you have read and understood this disclaimer and that you are relying on our content at your own risk.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">4. No Guarantees of Results</h2>
            <p>
              While our strategies and materials are based on real-world experience and have helped many individuals improve their financial situations, we <strong>do not guarantee</strong> any specific results. Individual outcomes depend on numerous factors including your total debt, income, expenses, interest rates, creditor behaviour, and personal circumstances.
            </p>
            <p className="mt-3">
              Any statistics, case studies, or testimonials referenced on our Site (such as the number of families helped or debt clearance rates) reflect the historical experience of our financial expert collaborator and are not a guarantee that you will achieve similar results.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">5. Eligibility</h2>
            <p>
              You must be at least 18 years old and a resident of the United Kingdom to use our Services. By signing up for the waitlist, you represent and warrant that you meet these requirements. We reserve the right to verify eligibility and to refuse service to anyone at our sole discretion.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">6. Waitlist Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Waitlist registration is free of charge.</li>
              <li>Waitlist spots are limited and allocated on a first-come, first-served basis.</li>
              <li>Joining the waitlist does not guarantee receipt of the guide or any other product or service.</li>
              <li>We reserve the right to close the waitlist at any time without notice.</li>
              <li>You may remove yourself from the waitlist at any time by using the unsubscribe link in any email or by contacting us directly.</li>
              <li>Duplicate registrations using multiple email addresses are not permitted and may result in all entries being removed.</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">7. Your Obligations</h2>
            <p className="mb-3">When using our Site and Services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and truthful information when registering for the waitlist.</li>
              <li>Not submit false, misleading, or fraudulent information.</li>
              <li>Not attempt to gain unauthorised access to our systems, databases, or infrastructure.</li>
              <li>Not use automated tools, bots, or scripts to interact with our Site or submit form entries.</li>
              <li>Not attempt to circumvent any security measures including rate limiting or bot protection.</li>
              <li>Not use our Services for any unlawful purpose.</li>
              <li>Not reproduce, distribute, or commercially exploit any content from our Site without our prior written consent.</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">8. Intellectual Property</h2>
            <p>
              All content on this Site, including but not limited to text, graphics, logos, designs, software, code, and the debt clearance guide, is the property of Alfirdaus Technologies Limited or its licensors and is protected by UK and international copyright, trademark, and intellectual property laws.
            </p>
            <p className="mt-3">
              You may not copy, reproduce, republish, upload, post, transmit, or distribute any material from this Site in any way without our prior written permission, except that you may print or download extracts for your personal, non-commercial use.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">9. Third-Party Links and Services</h2>
            <p>
              Our Site may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites. You access third-party sites at your own risk.
            </p>
            <p className="mt-3">
              We do not endorse any specific debt solution provider, financial institution, or credit card company. References to specific providers (e.g. in our provider marquee) are for informational purposes only and do not constitute endorsements or partnerships.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">10. Limitation of Liability</h2>
            <p className="mb-3">
              To the fullest extent permitted by English law:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our Services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</li>
              <li>We shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the Site or Services, including but not limited to damages for loss of profits, goodwill, data, or other intangible losses.</li>
              <li>We shall not be liable for any financial loss or debt-related consequences arising from your reliance on our educational content.</li>
              <li>Our total liability to you for all claims arising out of or relating to these Terms or the Services shall not exceed the amount you have paid to us in the 12 months preceding the claim (which, for free Services, is zero).</li>
            </ul>
            <p className="mt-3">
              Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot be excluded under English law.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Alfirdaus Technologies Limited, its directors, employees, agents, and collaborators from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with your breach of these Terms, your use of the Services, or your violation of any applicable law or regulation.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">12. Data Protection</h2>
            <p>
              Your use of our Services is also governed by our{" "}
              <a href="/privacy" className="text-teal-muted underline underline-offset-4 hover:text-teal-muted/80 transition-colors">
                Privacy Policy
              </a>, which explains how we collect, use, and protect your personal data. By using our Services, you consent to the data practices described in the Privacy Policy.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">13. Electronic Communications</h2>
            <p>
              By joining our waitlist, you consent to receive electronic communications from us via email and, if opted in, via WhatsApp. These communications may include service announcements, the debt clearance guide, educational content, and updates. You may withdraw your consent at any time as described in our Privacy Policy.
            </p>
            <p className="mt-3">
              You acknowledge that electronic communications satisfy any legal requirement that such communications be in writing.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">14. Changes to These Terms</h2>
            <p>
              We reserve the right to update or modify these Terms at any time. Material changes will be communicated to waitlist members via email. The "Last updated" date at the top of this page will reflect the most recent revision. Your continued use of the Site and Services after any changes constitutes your acceptance of the revised Terms. If you do not agree with the changes, you must stop using the Services and may request deletion of your data.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">15. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">16. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>. Any disputes arising out of or in connection with these Terms or the Services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          {/* 17 */}
          <section>
            <h2 className="font-serif text-xl text-navy mb-3">17. Contact Us</h2>
            <p className="mb-3">
              If you have any questions about these Terms, please contact us:
            </p>
            <p>
              <strong>Alfirdaus Technologies Limited</strong><br />
              Email:{" "}
              <a href="mailto:hello@alfirdaustechnologies.co.uk" className="text-teal-muted underline underline-offset-4 hover:text-teal-muted/80 transition-colors">
                hello@alfirdaustechnologies.co.uk
              </a>
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