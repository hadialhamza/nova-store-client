"use client";

import { Mail, Bell, CheckCircle, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Main Card with Gradient Border Concept */}
        <div className="group relative rounded-[2.5rem] p-0.5 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/10">
          <div className="relative rounded-[2.4rem] bg-background h-full overflow-hidden">
            {/* Inner Content Container */}
            <div className="relative px-6 py-12 md:px-16 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Decorative Background Blob */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-pink-500/10 rounded-full blur-[80px]" />

              {/* Left Side: Text Content */}
              <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl relative z-10">
                <Badge
                  variant="outline"
                  className="mb-2 border-indigo-200 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300 dark:border-indigo-800"
                >
                  <Bell className="w-3 h-3 mr-2 animate-pulse" /> Weekly Digest
                </Badge>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Join the{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                    Nova Community
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground">
                  Unlock early access to exclusive drops, expert tech reviews,
                  and subscriber-only discounts. Join <strong>15,000+</strong>{" "}
                  savvy shoppers today.
                </p>

                {/* Feature List */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-foreground/80">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-500" /> No Spam
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-500" /> Exclusive
                    Offers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-500" />{" "}
                    Unsubscribe Anytime
                  </span>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-full max-w-md relative z-10">
                <div className="bg-card/50 border border-border p-6 rounded-3xl shadow-sm">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-3"
                  >
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        className="w-full h-14 pl-12 pr-4 rounded-2xl border border-input bg-background/80 text-foreground shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg shadow-indigo-500/20"
                    >
                      Subscribe Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="w-3 h-3" />
                    <span>Your email is 100% secure with us.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
