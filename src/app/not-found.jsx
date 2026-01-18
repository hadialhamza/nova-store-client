"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ghost, Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute inset-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px] animate-pulse delay-1000" />

      {/* Main Content */}
      <div className="relative px-6 text-center animate-in fade-in zoom-in-95 duration-500">
        {/* 404 Text Effect */}
        <div className="relative mb-6">
          <h1 className="text-[10rem] md:text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-foreground/80 to-foreground/20 select-none opacity-50">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur rounded-full animate-bounce duration-2000" />
              <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-3xl bg-background/50 border border-white/10 shadow-md flex items-center justify-center">
                <Ghost className="h-12 w-12 md:h-16 md:w-16 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4 max-w-lg mx-auto relative z-10 -mt-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Page not found
          </h2>
          <p className="text-muted-foreground text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved or deleted.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link href="/">
            <Button
              size="lg"
              className="rounded-full h-12 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <Link href="/items">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full h-12 px-8 active:scale-95 transition-all"
            >
              <Search className="mr-2 h-4 w-4" />
              Browse Items
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
