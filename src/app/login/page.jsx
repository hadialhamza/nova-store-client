"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, Loader2, Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Invalid credentials. Please try again.");
      } else {
        toast.success("Welcome back! Redirecting...");
        router.push("/items");
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to auto-fill credentials
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    if (field === "email") setEmail(text);
    if (field === "password") setPassword(text);
    setCopied(field);
    toast.info(`Copied & Pasted: ${text}`);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background py-10 px-4">
      {/* 2. Main Login Card */}
      <div className="w-full max-w-105 relative animate-in fade-in zoom-in-95 duration-500">
        <div className="relative bg-background/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="h-12 w-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20">
              <Lock className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Credentials Hint Box */}
          <div className="mb-6 p-4 rounded-xl bg-secondary/50 border border-border/50 text-sm space-y-2 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Demo Credentials (Click to fill)
            </p>

            {/* Email Copy */}
            <div
              onClick={() => copyToClipboard("admin@novastore.com", "email")}
              className="flex items-center justify-between p-2 rounded-lg bg-background/50 hover:bg-background cursor-pointer transition-colors border border-transparent hover:border-indigo-500/30"
            >
              <code className="text-indigo-600 dark:text-indigo-400 font-mono">
                admin@novastore.com
              </code>
              {copied === "email" ? (
                <Check className="w-3.5 h-3.5 text-green-500" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-muted-foreground" />
              )}
            </div>

            {/* Password Copy */}
            <div
              onClick={() => copyToClipboard("password123", "password")}
              className="flex items-center justify-between p-2 rounded-lg bg-background/50 hover:bg-background cursor-pointer transition-colors border border-transparent hover:border-indigo-500/30"
            >
              <code className="text-indigo-600 dark:text-indigo-400 font-mono">
                password123
              </code>
              {copied === "password" ? (
                <Check className="w-3.5 h-3.5 text-green-500" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-muted-foreground" />
              )}
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 h-11 rounded-xl bg-secondary/30 border border-input focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                  placeholder="name@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium">Password</label>
                <Link
                  href="#"
                  className="text-xs text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 h-11 rounded-xl bg-secondary/30 border border-input focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-11 rounded-xl text-base font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02]"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing
                  In...
                </>
              ) : (
                "Sign In to Dashboard"
              )}
            </Button>
          </form>

          {/* Divider */}
          {/* <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div> */}

          {/* Social Logins */}
          {/* <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="h-11 rounded-xl hover:bg-secondary/80"
            >
              <Chrome className="mr-2 h-4 w-4" /> Google
            </Button>
            <Button
              variant="outline"
              className="h-11 rounded-xl hover:bg-secondary/80"
            >
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
          </div> */}

          {/* Footer */}
          {/* <p className="mt-8 text-center text-xs text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-indigo-600 hover:underline font-medium"
            >
              Create Account
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}
