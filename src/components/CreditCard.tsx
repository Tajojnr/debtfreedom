"use client";

import React from "react";

export default function CreditCard() {
  return (
    <div className="relative w-64 h-40 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-5 border border-white/15 shadow-2xl backdrop-blur-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Top Ambient Card Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#34d399]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Chip & Logo */}
      <div className="flex justify-between items-start">
        <div className="w-8 h-6 bg-amber-400/80 rounded-md border border-amber-300/40" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
          UK CARD
        </span>
      </div>

      {/* Card Number */}
      <div className="mt-6">
        <p className="font-mono text-xs tracking-[0.2em] text-slate-200">
          •••• •••• •••• 4892
        </p>
      </div>

      {/* Card Details */}
      <div className="flex justify-between items-end mt-4 pt-2 border-t border-white/5">
        <div>
          <p className="text-[8px] font-mono uppercase text-slate-500">ISSUER</p>
          <p className="text-[10px] font-mono text-slate-300">BARCLAYCARD / HSBC</p>
        </div>
        <div className="text-right">
          <p className="text-[8px] font-mono uppercase text-slate-500">APR STATUS</p>
          <p className="text-[10px] font-mono font-bold text-[#34d399]">FREEZE REQUESTED</p>
        </div>
      </div>
    </div>
  );
}