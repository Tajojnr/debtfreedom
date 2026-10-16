"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "Is DebtLift a regulated debt advice service or financial advisor?",
    a: "No. DebtLift is an educational decision-support tool operated by Alfirdaus Technologies Limited. We do not provide regulated debt advice, manage debt consolidation plans, or act as debt brokers. Our resources provide structured mathematical models and self-help guide templates.",
  },
  {
    q: "Will joining the waitlist affect my UK credit rating?",
    a: "Not at all. Joining our waitlist only registers your contact details to receive our free clearance guide and early software access. We do not run credit checks or access your credit file.",
  },
  {
    q: "Does DebtLift work with all major UK credit card issuers?",
    a: "Yes. Our strategy frameworks apply to all major UK providers including Barclaycard, HSBC, Lloyds, NatWest, Santander, MBNA, Capital One, Vanquis, Aqua, Monzo, and Starling.",
  },
  {
    q: "How much does the service cost?",
    a: "Joining the waitlist and receiving our comprehensive UK Debt Clearance Guide is completely free. When our full software launches, waitlist members will receive priority lifetime discounts.",
  },
  {
    q: "How is my personal data protected under UK GDPR?",
    a: "Your data is encrypted and stored exclusively within PostgreSQL servers in the EU (Frankfurt) region. Alfirdaus Technologies Limited strictly enforces UK GDPR standards. We never sell your personal information to third-party lenders or lead generation agencies.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#34d399]" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Clear Answers
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Everything you need to know about DebtLift, data security, and our educational resources.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-[#0c1b2c]/80 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-white text-base md:text-lg hover:text-[#34d399] transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-2xl text-[#34d399] shrink-0 font-mono">
                  {openIndex === i ? "-" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}