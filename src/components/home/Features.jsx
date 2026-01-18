import {
  Truck,
  ShieldCheck,
  Headset,
  BadgeCheck,
  RefreshCw,
  Gift,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "../SectionHeader";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Global Shipping",
    description: "Fast international shipping with real-time order tracking.",
    icon: Truck,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    hoverBorder: "group-hover:border-blue-500/50",
  },
  {
    title: "Secure Payments",
    description: "100% secure payment gateways with 256-bit encryption.",
    icon: ShieldCheck,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
    hoverBorder: "group-hover:border-emerald-500/50",
  },
  {
    title: "24/7 Expert Support",
    description: "Our dedicated support team is available round the clock.",
    icon: Headset,
    color: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-100 dark:bg-violet-900/20",
    hoverBorder: "group-hover:border-violet-500/50",
  },
  {
    title: "100% Authentic",
    description: "Verified original products directly from authorized brands.",
    icon: BadgeCheck,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    hoverBorder: "group-hover:border-orange-500/50",
  },
  {
    title: "Easy Returns",
    description:
      "Hassle-free 30-day return policy with instant refund options.",
    icon: RefreshCw,
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-100 dark:bg-rose-900/20",
    hoverBorder: "group-hover:border-rose-500/50",
  },
  {
    title: "Member Rewards",
    description: "Earn points on every purchase and redeem exclusive rewards.",
    icon: Gift,
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/20",
    hoverBorder: "group-hover:border-cyan-500/50",
  },
];

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <div
      className={cn(
        "group relative p-6 md:p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:bg-card",
        feature.hoverBorder,
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col gap-5">
        {/* Header: Icon & Arrow */}
        <div className="flex justify-between items-start">
          <div
            className={cn(
              "h-14 w-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
              feature.bgColor,
              feature.color,
            )}
          >
            <Icon className="h-7 w-7" />
          </div>

          {/* Arrow appears on hover */}
          <div className="p-2 rounded-full bg-muted/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight className="h-4 w-4 text-foreground" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {feature.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeader
            badgeText="Why Choose Nova"
            badgeIcon={BadgeCheck}
            title="Experience Shopping Reimagined"
            description="We go beyond just selling products. We deliver a seamless, secure, and rewarding lifestyle experience tailored just for you."
            align="center"
          />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
