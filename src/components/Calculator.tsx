"use client";

import React, { useState, useMemo } from "react";

export default function Calculator() {
  const [balance, setBalance] = useState<number>(8500);
  const [salary, setSalary] = useState<number>(35000);
  const [contributionPercent, setContributionPercent] = useState<number>(10);
  const [apr, setApr] = useState<number>(24.9);

  const results = useMemo(() => {
    const monthlyGross = salary / 12;
    const monthlyPayment = monthlyGross * (contributionPercent / 100);
    const monthlyInterestRate = apr / 100 / 12;

    const minimumInterestPayment = balance * monthlyInterestRate;
    const isNeverPaid = monthlyPayment <= minimumInterestPayment;

    let monthsToPayoff = 0;
    let totalInterest = 0;

    if (!isNeverPaid) {
      monthsToPayoff = Math.ceil(
        -Math.log(1 - (balance * monthlyInterestRate) / monthlyPayment) /
          Math.log(1 + monthlyInterestRate)
      );
      totalInterest = monthsToPayoff * monthlyPayment - balance;
    }

    const dlMonths = Math.ceil(balance / monthlyPayment);
    const timeSavedMonths = monthsToPayoff - dlMonths;

    return {
      monthlyPayment,
      minimumInterestPayment,
      isNeverPaid,
      monthsToPayoff,
      yearsToPayoff: (monthsToPayoff / 12).toFixed(1),
      totalInterest,
      dlMonths,
      dlYears: (dlMonths / 12).toFixed(1),
      timeSaved: timeSavedMonths > 0 ? (timeSavedMonths / 12).toFixed(1) : "0",
    };
  }, [balance, salary, contributionPercent, apr]);

  const formatGBP = (num: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(num);

  return (
    <section id="calculator" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#34d399]/10 border border-[#34d399]/20">
            <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#34d399]">
              Live Projection
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            See the True Cost of Your Debt
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Adjust the sliders below to see how much of your salary is being eaten by bank interest, and how fast you could be free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Sliders */}
          <div className="lg:col-span-5 space-y-8 p-6 md:p-8 rounded-3xl border border-white/10 bg-[#0c1b2c]/80 backdrop-blur-md">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-medium text-slate-300">Total Credit Card Debt</label>
                <span className="font-serif text-2xl text-white">{formatGBP(balance)}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="40000"
                step="500"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#34d399]"
              />
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex justify-between items-end">
                <label className="text-sm font-medium text-slate-300">Annual Salary (Gross)</label>
                <span className="font-serif text-2xl text-white">{formatGBP(salary)}</span>
              </div>
              <input
                type="range"
                min="20000"
                max="120000"
                step="1000"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#34d399]"
              />
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex justify-between items-end">
                <div>
                  <label className="text-sm font-medium text-slate-300 block">Monthly Contribution</label>
                  <span className="text-[10px] text-slate-500 font-mono">{contributionPercent}% of salary</span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-2xl text-[#34d399]">{formatGBP(results.monthlyPayment)}</span>
                  <span className="text-xs text-slate-400 block">/ month</span>
                </div>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                step="1"
                value={contributionPercent}
                onChange={(e) => setContributionPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#34d399]"
              />
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex justify-between items-end">
                <label className="text-sm font-medium text-slate-300">Average APR</label>
                <span className="font-serif text-2xl text-white">{apr}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="0.1"
                value={apr}
                onChange={(e) => setApr(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#34d399]"
              />
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="lg:col-span-7 space-y-6">
            {results.isNeverPaid ? (
              <div className="p-8 rounded-3xl border border-red-500/30 bg-red-500/10 backdrop-blur-md flex flex-col items-center text-center justify-center min-h-[300px]">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl text-white mb-2">Debt Danger Zone</h3>
                <p className="text-red-300 max-w-md">
                  Your monthly payment of {formatGBP(results.monthlyPayment)} does not cover the {formatGBP(results.minimumInterestPayment)} monthly interest. Your balance is growing every month.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl border border-white/10 bg-[#101f31] relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-slate-700" />
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-4">Current Path</p>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Time to Debt-Free</p>
                      <p className="font-serif text-4xl text-white">{results.yearsToPayoff} <span className="text-xl text-slate-500">years</span></p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Total Interest Paid to Bank</p>
                      <p className="font-serif text-3xl text-red-400">{formatGBP(results.totalInterest)}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border border-[#34d399]/30 bg-[#34d399]/5 relative overflow-hidden shadow-[0_0_40px_rgba(52,211,153,0.1)]">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#10b981] to-[#34d399]" />
                  <p className="text-[11px] font-mono text-[#34d399] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                    With DebtLift Plan
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-slate-300 mb-1">Time to Debt-Free</p>
                      <p className="font-serif text-4xl text-white">{results.dlYears} <span className="text-xl text-slate-500">years</span></p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-300 mb-1">Interest Saved</p>
                      <p className="font-serif text-3xl text-[#34d399]">{formatGBP(results.totalInterest)}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!results.isNeverPaid && (
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#34d399]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#34d399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-300 font-medium">Why the massive difference?</p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    By following the DebtLift strategy to freeze interest rates, 100% of your {formatGBP(results.monthlyPayment)} payment goes toward principal balance, shaving <strong>{results.timeSaved} years</strong> off your sentence.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}