import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Globe,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import SectionHeader from "../SectionHeader";

const HIGHLIGHTS = [
  {
    title: "Curated Quality",
    desc: "Every product is selected for build quality, design, and real-world value.",
    icon: BadgeCheck,
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Clear timelines, tracked shipping, and support from order to doorstep.",
    icon: Truck,
  },
  {
    title: "Secure Checkout",
    desc: "Trusted payment methods with a smooth, encrypted checkout experience.",
    icon: ShieldCheck,
  },
  {
    title: "Global Sourcing",
    desc: "We partner with verified suppliers and brands from different regions.",
    icon: Globe,
  },
];

const VALUES = [
  {
    title: "Design-first products",
    desc: "We choose items that look great, feel premium, and fit modern lifestyles.",
    icon: Sparkles,
  },
  {
    title: "Responsible choices",
    desc: "We prefer durable materials and suppliers that care about sustainability.",
    icon: Leaf,
  },
];

function InfoCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border bg-background bg-gradient-subtle p-5 shadow-sm hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border bg-muted/20 text-primary">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-semibold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            badgeText="About"
            badgeIcon={BadgeCheck}
            title="About NovaStore"
            description="NovaStore brings future-ready products to your doorstep. We focus on quality, design, and a smooth shopping experience that works great on every device."
            align="left"
          />

          <Link
            href="/items"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-90"
          >
            Explore products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />

        {/* Main layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Left: rich text */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              At{" "}
              <span className="font-semibold text-foreground">NovaStore</span>,
              we believe shopping should feel effortless and premium. Founded in{" "}
              <span className="font-semibold text-foreground">2026</span>, our
              mission is simple: curate products that are genuinely useful,
              visually polished, and priced fairly.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We carefully review each item for build quality, functionality,
              and long-term value. Whether you’re exploring modern tech,
              lifestyle essentials, or standout accessories, we aim to make
              every purchase feel like a smart upgrade.
            </p>

            {/* Two value cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border bg-muted/10 bg-gradient-subtle p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border bg-background text-primary">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold">{v.title}</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* FAQ*/}
            <div className="mt-6 rounded-2xl border bg-background p-6">
              <h3 className="text-base font-semibold">
                What makes us different?
              </h3>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm font-semibold">Curated, not crowded</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We don’t list everything. We list the right things, so you
                    can find better products faster.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Clear product info</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Transparent descriptions and pricing so you know what you’re
                    getting before checkout.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Support that replies</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If anything feels confusing, we help quickly and keep it
                    simple.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* brand panel */}
          <div className="space-y-6">
            {/* Brand card */}
            <div className="rounded-3xl border bg-muted/10 bg-gradient-subtle p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Brand</p>
                  <p className="text-lg font-semibold tracking-tight">
                    NovaStore
                  </p>
                </div>

                {/* lightweight logo block */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-background text-primary font-semibold">
                  NS
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border bg-background p-4">
                  <p className="text-xs text-muted-foreground">Focus</p>
                  <p className="text-sm font-semibold">Modern essentials</p>
                </div>
                <div className="rounded-2xl border bg-background p-4">
                  <p className="text-xs text-muted-foreground">Standard</p>
                  <p className="text-sm font-semibold">Quality + value</p>
                </div>
                <div className="rounded-2xl border bg-background p-4">
                  <p className="text-xs text-muted-foreground">Experience</p>
                  <p className="text-sm font-semibold">Fast & smooth UI</p>
                </div>
                <div className="rounded-2xl border bg-background p-4">
                  <p className="text-xs text-muted-foreground">Promise</p>
                  <p className="text-sm font-semibold">Support you can trust</p>
                </div>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <InfoCard
                  key={h.title}
                  icon={h.icon}
                  title={h.title}
                  desc={h.desc}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
