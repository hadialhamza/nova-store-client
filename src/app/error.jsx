"use client";

import { useEffect } from "react";
import { RotateCcw, Home, MessageSquare, AlertOctagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000" />

      {/* Content Card */}
      <div className="relative px-6">
        <div className="relative w-full max-w-lg mx-auto p-8 md:p-12 rounded-3xl bg-background/80 border border-border/50 shadow-2xl animate-in fade-in zoom-in-95 duration-500 hover:shadow-primary/5 transition-shadow">
          {/* Icon Area */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/20 blur-2xl rounded-full animate-pulse" />
              <div className="relative h-20 w-20 rounded-2xl bg-linear-to-br from-destructive/10 to-destructive/5 border border-destructive/20 flex items-center justify-center shadow-inner">
                <AlertOctagon className="h-10 w-10 text-destructive" />
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-destructive/20 animate-bounce delay-100" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-primary/20 animate-bounce delay-300" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-br from-foreground to-foreground/70">
              System Error
            </h1>
            <div className="relative group">
              <div className="absolute -inset-2 bg-destructive/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="relative text-muted-foreground text-sm md:text-base leading-relaxed font-medium">
                We encountered an unexpected issue.
                <br />
                <span className="text-xs font-mono mt-2 block opacity-70 bg-muted/50 py-1 px-2 rounded w-fit mx-auto border border-border/50">
                  Code: {error?.digest || "UNKNOWN_ERROR"}
                </span>
              </p>
            </div>
          </div>

          {/* Error Message Detail */}
          <div className="mb-8 p-4 rounded-xl bg-destructive/5 border border-destructive/10 text-center">
            <p className="text-xs text-destructive/80 font-mono wrap-break-word">
              {error?.message || "There was a problem processing your request."}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              size="lg"
              onClick={() => reset()}
              className="w-full sm:w-auto min-w-35 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Retry
            </Button>

            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-35 rounded-full hover:bg-secondary/50 transition-colors active:scale-95"
              >
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border/30 text-center">
            <Link
              href=""
              className="inline-flex items-center text-xs text-muted-foreground hover:text-primary transition-colors group"
            >
              <MessageSquare className="mr-2 h-3 w-3 group-hover:scale-110 transition-transform" />
              Report this issue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
