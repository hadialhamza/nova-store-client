import { BadgeCheck, Quote, Star } from "lucide-react";
import SectionHeader from "../SectionHeader";

const TESTIMONIALS = [
  {
    name: "Alex Johnson",
    role: "Verified Buyer",
    rating: 5,
    text: "Delivery was fast and the packaging felt premium. The product quality exceeded my expectations. The whole checkout experience was smooth on mobile too.",
  },
  {
    name: "Sophia Martinez",
    role: "Verified Buyer",
    rating: 5,
    text: "Clean product pages, transparent pricing, and no confusion at checkout. I’ve ordered twice already and everything arrived exactly as described.",
  },
  {
    name: "Ryan Cooper",
    role: "Verified Buyer",
    rating: 4,
    text: "Great selection and the UI feels really modern. Support replied quickly when I had a sizing question. Overall a solid shopping experience.",
  },
];

function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rating;
        return (
          <Star
            key={i}
            className={[
              "h-4 w-4",
              filled ? "fill-primary text-primary" : "text-muted-foreground/40",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}

function AvatarFallback({ name }) {
  const initials =
    name
      ?.trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((n) => n[0]?.toUpperCase())
      .join("") || "U";

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full border bg-muted/20 text-sm font-semibold">
      {initials}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="relative h-full rounded-2xl border bg-background bg-gradient-subtle p-6 shadow-sm transition-colors hover:border-primary/30">
      {/* top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <Stars rating={t.rating} />
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/15 px-3 py-1 text-xs text-muted-foreground">
            <BadgeCheck className="h-4 w-4 text-primary" />
            {t.role}
          </div>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border bg-muted/10 text-primary">
          <Quote className="h-5 w-5" />
        </div>
      </div>

      {/* quote */}
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {t.text}
      </p>

      {/* divider */}
      <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />

      {/* author */}
      <div className="mt-5 flex items-center gap-3">
        <AvatarFallback name={t.name} />
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-none">{t.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>

      {/* subtle border ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-border/60" />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badgeText="Testimonials"
          badgeIcon={BadgeCheck}
          title="What customers say"
          description="Trusted by shoppers who value quality, clean UI, and a smooth checkout experience."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
