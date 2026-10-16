"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Calculator", href: "#calculator" },
    { name: "Impact", href: "#impact" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-[#080e18]/90 backdrop-blur-xl border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* PREMIUM FINTECH LOGO */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-b from-[#112236] to-[#0a1524] border border-white/15 p-2 group-hover:border-[#34d399]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            
            {/* Custom Ascending Vector Mark */}
            <svg
              className="w-full h-full text-[#34d399] transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Ascending Arch / D-Monogram */}
              <path
                d="M6 26V6C14 6 22 8 22 16C22 24 14 26 6 26Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-40"
              />
              {/* Core Upward Vector Beam */}
              <path
                d="M11 21L17 15L21 19L27 11"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 11H27V17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 rounded-xl bg-[#34d399]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-serif font-bold text-2xl text-white tracking-tight">
                Debt
              </span>
              <span className="font-serif font-bold text-2xl text-[#34d399] tracking-tight">
                Lift
              </span>
              <span className="ml-1.5 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                UK
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-[#34d399] transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#join"
            className="bg-[#34d399] hover:bg-[#10b981] text-[#080e18] px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(52,211,153,0.25)]"
          >
            Get Free Guide
          </Link>
        </div>

        {/* Mobile CTA */}
        <Link
          href="#join"
          className="md:hidden bg-[#34d399] text-[#080e18] px-4 py-1.5 rounded-full text-xs font-bold"
        >
          Get Free Guide
        </Link>
      </div>
    </nav>
  );
}