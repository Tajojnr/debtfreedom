"use client";

import React from "react";

const providers = [
  "Barclaycard",
  "HSBC UK",
  "Lloyds Bank",
  "NatWest",
  "Santander",
  "Halifax",
  "MBNA",
  "Capital One",
  "Vanquis",
  "Aqua",
  "Virgin Money",
  "Tesco Bank",
  "Sainsbury's Bank",
  "Monzo",
  "Starling Bank",
];

export default function ProviderMarquee() {
  return (
    <section className="py-12 bg-[#060b13] border-y border-white/5 relative overflow-hidden">
      {/* Top ambient highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#34d399]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400">
          Works with all major UK credit card issuers
        </p>
      </div>

      {/* Marquee Container with Group for Hover Pause */}
      <div className="relative w-full overflow-hidden group">
        
        {/* Shiny Fading Gradient Edge Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#060b13] via-[#060b13]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#060b13] via-[#060b13]/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track - Pauses on Hover */}
        <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused] py-2">
          {/* Double array to create seamless loop */}
          {[...providers, ...providers].map((provider, i) => (
            <div
              key={i}
              className="
                relative
                shrink-0
                px-6 py-3
                rounded-xl
                bg-gradient-to-b from-white/[0.07] to-white/[0.02]
                border border-white/10
                backdrop-blur-md
                shadow-lg
                transition-all duration-300
                hover:scale-105
                hover:border-[#34d399]/50
                hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]
                flex items-center gap-3
                cursor-pointer
                overflow-hidden
              "
            >
              {/* Shiny Card Reflection Line */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent pointer-events-none" />

              {/* Bank Icon Dot */}
              <span className="w-2 h-2 rounded-full bg-[#34d399]/60 shrink-0" />

              {/* Provider Name */}
              <span className="text-sm font-medium text-slate-200 tracking-wide font-mono whitespace-nowrap">
                {provider}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}