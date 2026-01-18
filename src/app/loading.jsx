"use client";

import Logo from "@/components/logo/Logo";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background/90 backdrop-blur-2xl transition-all duration-500">
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Blob */}
        <div className="absolute top-[-10%] left-[-10%] w-160 h-160 bg-indigo-500/10 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite]" />
        {/* Bottom Blob */}
        <div
          className="absolute bottom-[-10%] right-[-10%] w-160 h-160 bg-emerald-500/10 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite]"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* MAIN LOADER ASSEMBLY */}
      <div className="relative flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in-95 duration-700">
        {/* --- ORBITAL RINGS SYSTEM --- */}
        <div className="relative flex items-center justify-center w-64 h-64">
          {/* Ring 1: Outer Dashed Orbit */}
          <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/30 w-full h-full animate-[spin_12s_linear_infinite]" />

          {/* Ring 2: Middle Gradient Ring */}
          <div className="absolute inset-4 rounded-full border-t-2 border-r-2 border-transparent border-t-indigo-500 border-r-purple-500 opacity-80 shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-[spin_3s_linear_infinite]" />

          {/* Ring 3: Inner Reverse Spin */}
          <div className="absolute inset-8 rounded-full border-b-2 border-l-2 border-transparent border-b-emerald-400/60 border-l-emerald-500/60 opacity-70 animate-[spin_4s_linear_infinite_reverse]" />

          {/* --- CENTRAL CORE (GLASS) --- */}
          <div className="relative z-10">
            {/* Glow behind Logo */}
            <div className="absolute inset-0 bg-indigo-500/30 blur-2xl rounded-full animate-pulse" />

            {/* Glass Container */}
            <div className="relative flex items-center justify-center w-32 h-32 bg-background/40 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl ring-1 ring-white/5">
              <div className="scale-125 transition-transform duration-1000 animate-[pulse_3s_ease-in-out_infinite]">
                <Logo compact={true} iconSize={52} priority={true} />
              </div>
            </div>
          </div>
        </div>

        {/* --- LOADING TYPOGRAPHY --- */}
        <div className="flex flex-col items-center gap-3 z-10">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400">
              System Processing
            </span>
          </div>

          <p className="text-sm font-medium text-muted-foreground animate-pulse">
            Preparing your experience...
          </p>
        </div>
      </div>
    </div>
  );
}
