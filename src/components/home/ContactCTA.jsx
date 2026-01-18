import Link from "next/link";
import { MessageCircle, ArrowRight, HelpCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "../shared/SectionHeader";
import { cn } from "@/lib/utils";

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/30 dark:bg-indigo-950/10 p-8 md:p-16 text-center shadow-lg">

          {/* Background Decoration (Grid & Glow) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-indigo-500/10 blur-[100px] rounded-full -z-10" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">

            {/* Header Area */}
            <SectionHeader
              badgeText="24/7 Support"
              badgeIcon={HelpCircle}
              title="We're here to help you"
              description="Have questions about a product, your order, or just want to say hi? Our team is ready to assist you anytime."
              align="center"
            />

            {/* Social Proof / Avatar Group (Mockup) */}
            <div className="flex justify-center items-center -space-x-3 pb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white shadow-sm overflow-hidden bg-linear-to-br ${i === 1 ? "from-blue-500 to-indigo-500" :
                  i === 2 ? "from-purple-500 to-pink-500" :
                    i === 3 ? "from-emerald-500 to-teal-500" : "from-orange-500 to-red-500"
                  }`}>
                  {/* Mock User Initials or Image */}
                  <span className="opacity-90">U{i}</span>
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-medium text-muted-foreground shadow-sm">
                +20
              </div>
              <span className="ml-4 text-sm font-medium text-muted-foreground">Active Support Agents</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-indigo-500/20 shadow-lg">
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat with Us
                </Button>
              </Link>

              <Link href="/faq">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base bg-background/90 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30">
                  Visit FAQ Center
                </Button>
              </Link>
            </div>

            {/* Bottom Note */}
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-4 opacity-80">
              <Phone className="w-3 h-3" />
              <span>Call us directly: <span className="font-semibold text-foreground">+1 (800) 123-4567</span> (9am - 5pm EST)</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}