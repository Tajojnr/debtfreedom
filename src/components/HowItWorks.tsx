"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Map Your Card Balances",
    description: "Enter your current UK credit card balances, limits, and APR rates in under 60 seconds. No credit check required.",
  },
  {
    number: "02",
    title: "Generate Interest-Reduction Plan",
    description: "Our algorithm calculates the mathematically optimal repayment order, prioritising high-APR debt while protecting your credit rating.",
  },
  {
    number: "03",
    title: "Execute & Freeze High Interest",
    description: "Follow clear monthly action points and access step-by-step templates to request interest freezes directly from UK card issuers.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#34d399]" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Methodology
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            How DebtLift Works
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Three practical steps to transition from minimum payments to total debt independence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 rounded-2xl border border-white/10 bg-[#0c1b2c]/80 backdrop-blur-md hover:border-[#34d399]/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-3xl font-bold text-[#34d399]">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#34d399]/10 group-hover:border-[#34d399]/20 transition-colors">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-[#34d399] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}