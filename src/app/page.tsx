import Calculator from "@/components/Calculator";
import Navbar from "@/components/Navbar";
import HeroDashboard from "@/components/HeroDashboard";
import ProviderMarquee from "@/components/ProviderMarquee";
import DebtSplit from "@/components/DebtSplit";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import FAQ from "@/components/FAQ";
import WaitlistForm from "@/components/WaitlistForm";
import WaitlistCounter from "@/components/WaitlistCounter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080e18] text-slate-100 overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#34d399]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#34d399]" />
                <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                  UK Debt Relief, Done Differently
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-white leading-[1.08]">
                Your debt has a number. <br />
                <span className="italic font-normal text-slate-300">So does your way out.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                Get a personalised, step-by-step strategy to pay off your credit cards, regain control of your money, and finally build the life you want.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#join"
                  className="bg-[#34d399] hover:bg-[#10b981] text-[#080e18] px-8 py-4 rounded-full font-bold text-base transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(52,211,153,0.3)] inline-flex items-center gap-3"
                >
                  <span>Build My Debt Plan</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 sm:pt-0 font-mono">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#34d399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Takes 60 seconds
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#34d399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Free to start
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <HeroDashboard />
            </div>

          </div>
        </div>
      </section>

      {/* PROVIDER MARQUEE */}
      <ProviderMarquee />

      {/* DEBT SPLIT SECTION */}
      <DebtSplit />
      {/* INTERACTIVE CALCULATOR SECTION */}
      <Calculator />

      {/* HOW IT WORKS SECTION (#how-it-works) */}
      <HowItWorks />

      {/* IMPACT SECTION (#impact) */}
      <Impact />

      {/* FAQ SECTION (#faq) */}
      <FAQ />

      {/* WAITLIST FORM SECTION (#join) */}
      <section id="join" className="py-24 relative overflow-hidden bg-[#060b13] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10 space-y-4">
            <WaitlistCounter />
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
              Get Your Free UK Debt Clearance Guide
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base">
              Join the waitlist today and receive our instant step-by-step breakdown for freezing card APRs and reducing monthly payments.
            </p>
          </div>

          <WaitlistForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#060b13] py-16 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#34d399] rounded flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-[#080e18] rounded-sm" />
              </div>
              <span className="font-serif font-bold text-white text-lg tracking-tight">DebtLift</span>
            </div>

            <div className="flex flex-wrap gap-6 text-slate-400 font-medium">
              <Link href="/privacy" className="hover:text-[#34d399] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#34d399] transition-colors">Terms of Service</Link>
              <a href="mailto:support@alfirdaustechnologies.co.uk" className="hover:text-[#34d399] transition-colors">Contact Support</a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 space-y-4 text-slate-500 leading-relaxed">
            <p>
              <strong>FCA Disclaimer:</strong> DebtLift is an educational information service operated by Alfirdaus Technologies Limited. DebtLift is not a debt advice provider, financial advisor, or credit broker, and is not authorised or regulated by the Financial Conduct Authority (FCA) to provide regulated financial advice under the Financial Services and Markets Act 2000.
            </p>
            <p>
              <strong>UK GDPR Notice:</strong> By submitting your details on this waitlist, you consent to Alfirdaus Technologies Limited storing your information securely in the EU (Frankfurt) region for administrative contact and distribution of debt clearance guide materials.
            </p>
            <p className="pt-2 text-slate-400">
              © 2026 Alfirdaus Technologies Limited. Registered with the corporate affairs commission. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}