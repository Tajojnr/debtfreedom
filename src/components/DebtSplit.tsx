"use client";

import { useEffect, useRef, useState } from "react";

export default function DebtSplit() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="my-10">
      {/* The bar */}
      <div className="relative w-full h-14 rounded-xl overflow-hidden bg-navy/5 flex">
        {/* Interest portion */}
        <div
          className="h-full bg-gradient-to-r from-[#8B4513] to-amber-gold flex items-center justify-center transition-all duration-1000 ease-out"
          style={{ width: visible ? "83%" : "0%" }}
        >
          {visible && (
            <span className="text-white font-semibold text-sm md:text-base tracking-wide">
              83p to the bank
            </span>
          )}
        </div>

        {/* Principal portion */}
        <div
          className="h-full bg-teal-muted flex items-center justify-center transition-all duration-1000 ease-out delay-300"
          style={{ width: visible ? "17%" : "0%" }}
        >
          {visible && (
            <span className="text-white font-semibold text-xs md:text-sm">
              17p
            </span>
          )}
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-amber-gold" />
          <span className="text-sm text-gray-500">Interest (gone forever)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-teal-muted" />
          <span className="text-sm text-gray-500">Your debt reduced</span>
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-sm text-gray-400 mt-4 italic">
        For every pound you pay on a typical UK credit card minimum payment.
      </p>
    </div>
  );
}