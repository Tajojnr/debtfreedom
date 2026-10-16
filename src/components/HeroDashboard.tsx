"use client";

import React from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Pay high-interest debt first",
    active: true,
  },
  {
    number: "02",
    title: "Build momentum with smaller balances",
    active: false,
  },
  {
    number: "03",
    title: "Stay on track each month",
    active: false,
  },
];

export default function HeroDashboard() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full bg-[#34d399]/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-72 h-72 rounded-full bg-[#34d399]/5 blur-[100px] pointer-events-none" />

      {/* Floating Card Accent */}
      <div className="absolute -top-6 -right-2 md:-right-6 z-20 w-44 h-28 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-950/90 border border-white/15 p-3 shadow-2xl backdrop-blur-md hidden sm:block transform rotate-6 hover:rotate-0 transition-transform duration-300">
        <div className="flex justify-between items-start">
          <div className="w-6 h-4 bg-amber-400/80 rounded-sm" />
          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">UK CARD</span>
        </div>
        <div className="mt-4">
          <p className="text-[10px] font-mono tracking-widest text-slate-300">•••• •••• •••• 4892</p>
          <div className="flex justify-between items-end mt-2">
            <span className="text-[8px] text-slate-400 font-mono">BARCLAYCARD / HSBC</span>
            <span className="text-[10px] font-bold text-[#34d399]">FREEZE APR</span>
          </div>
        </div>
      </div>

      <div className="relative rounded-3xl border border-white/10 bg-[#0c1b2c]/95 backdrop-blur-xl shadow-2xl overflow-hidden p-6 md:p-8">
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#34d399]/40 to-transparent" />

        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#34d399]/10 border border-[#34d399]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
          <span className="text-xs font-medium text-[#34d399]">Less stress. More freedom.</span>
        </div>

        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-medium">Your debt plan</p>
            <h3 className="font-serif text-4xl md:text-5xl tracking-tight text-white mt-1">£8,420</h3>
            <p className="mt-1 text-xs text-slate-400">remaining balance across 3 cards</p>
          </div>

          <div className="px-2.5 py-1 rounded-full bg-[#34d399]/10 border border-[#34d399]/20">
            <span className="text-[10px] font-medium uppercase tracking-wider text-[#34d399]">Personalized</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-end justify-between mb-2">
            <div>
              <p className="text-xs text-slate-400">Payoff progress</p>
              <p className="text-xs font-medium text-slate-200 mt-0.5">Payoff on track</p>
            </div>
            <span className="text-sm font-bold text-[#34d399]">64%</span>
          </div>

          <div className="h-2 w-full rounded-full bg-slate-800/80 overflow-hidden">
            <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-emerald-400 to-[#34d399] shadow-[0_0_12px_rgba(52,211,153,0.4)]" />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Estimated debt-free date</p>
              <p className="mt-1 font-serif text-xl text-white">April 2028</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Remaining</p>
              <p className="mt-1 text-base font-semibold text-[#34d399]">18 months</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-slate-300">Your strategy</p>
            <span className="text-[10px] text-slate-400">Step 1 of 3</span>
          </div>

          <div className="space-y-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 border transition",
                  step.active
                    ? "border-[#34d399]/20 bg-[#34d399]/10"
                    : "border-white/5 bg-transparent"
                )}
              >
                <div
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold",
                    step.active
                      ? "bg-[#34d399] text-[#080e18]"
                      : "bg-white/5 text-slate-500"
                  )}
                >
                  {step.number}
                </div>

                <span className={cn("text-xs", step.active ? "text-slate-100 font-medium" : "text-slate-400")}>
                  {step.title}
                </span>

                {step.active && (
                  <div className="ml-auto">
                    <svg className="w-4 h-4 text-[#34d399]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5">
          <div className="flex justify-between mb-2">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Current Balance</span>
            <span className="text-[10px] uppercase tracking-wider text-[#34d399] font-mono font-bold">£0 Freedom</span>
          </div>

          <svg className="w-full h-12" viewBox="0 0 400 60" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="debtLine" x1="0" y1="0" x2="400" y2="0">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <path
              d="M0 8 C45 10 55 15 90 20 C130 26 150 30 190 34 C230 39 260 40 300 47 C340 53 365 56 400 58"
              stroke="url(#debtLine)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="400" cy="58" r="4" fill="#34d399" />
          </svg>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-2 md:-right-4 bg-[#101f31] border border-white/10 rounded-xl p-3 shadow-2xl flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#34d399]/20 border border-[#34d399]/30 flex items-center justify-center">
          <svg className="w-4 h-4 text-[#34d399]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Target Goal</p>
          <p className="text-xs font-bold text-white">£0 Debt Achieved</p>
        </div>
      </div>
    </div>
  );
}