"use client";

import React from "react";

const stats = [
  { value: "£3,400+", label: "Average Interest Saved", note: "Based on £8,420 average UK card balance" },
  { value: "18 Months", label: "Average Payoff Timeline", note: "Compared to 12+ years on minimum payments" },
  { value: "24.9%", label: "Average UK APR Targeted", note: "Bank of England average UK credit card rate" },
  { value: "100% Free", label: "Clearance Guide Access", note: "No upfront fees or credit score impact" },
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 relative bg-[#060b13] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#34d399]" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Proven Outcomes
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Designed for UK Credit Card Debt
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            High interest compounds quickly. DebtLift provides the clear calculations needed to stop interest snowballing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-[#0c1b2c]/60 text-center space-y-2 hover:border-[#34d399]/30 transition-all"
            >
              <div className="font-serif text-3xl md:text-4xl font-bold text-[#34d399]">
                {stat.value}
              </div>
              <div className="text-white font-medium text-sm">
                {stat.label}
              </div>
              <div className="text-slate-500 text-xs font-mono">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}