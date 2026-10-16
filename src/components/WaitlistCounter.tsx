"use client";

import { useEffect, useState } from "react";

export default function WaitlistCounter() {
  const [claimed, setClaimed] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch("/api/waitlist");
        const data = await res.json();
        setClaimed(data.claimed);
      } catch {
        setClaimed(0);
      }
    }

    fetchCount();
    const interval = setInterval(fetchCount, 60000);
    return () => clearInterval(interval);
  }, []);

  if (claimed === null) return null;

  const remaining = Math.max(0, 100 - claimed);

  return (
    <div className="text-center mt-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1]">
        <span className="w-2 h-2 rounded-full bg-teal-muted animate-pulse" />
        <span className="text-sm text-gray-300">
          <span className="font-mono font-medium text-amber-gold">{claimed}</span>
          {" "}of 100 spots claimed
        </span>
      </div>
      {remaining <= 20 && remaining > 0 && (
        <p className="text-xs text-amber-gold/70 mt-2">
          Only {remaining} spots remaining
        </p>
      )}
      {remaining === 0 && (
        <p className="text-xs text-red-400 mt-2">
          The waitlist is full
        </p>
      )}
    </div>
  );
}