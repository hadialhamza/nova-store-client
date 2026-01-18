import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "../SectionHeader";

export default function FeaturedCollection({ featuredProducts = [] }) {
  const hasProducts = featuredProducts?.length > 0;

  return (
    <section className="container mx-auto px-4 py-14 sm:py-16">
      {/* Header row */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          badgeText="Featured"
          badgeIcon={Sparkles}
          title="Featured Collection"
          description="Handpicked items just for you. Quality meets innovation in our latest selection."
          align="left"
        />

        <Link
          href="/items"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-90"
        >
          View all items <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Divider */}
      <div className="mt-8 h-0.5 w-full bg-linear-to-r from-transparent via-border to-transparent" />

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hasProducts ? (
          featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="col-span-full">
            <div className="rounded-2xl border border-dashed bg-muted/10 p-10 text-center">
              <p className="text-sm font-semibold">Loading featured items...</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Please wait a moment while we fetch the latest picks.
              </p>

              {/* skeleton */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-2xl border bg-background p-4">
                    <div className="aspect-16/10 rounded-xl bg-muted/30" />
                    <div className="mt-4 h-4 w-3/4 rounded bg-muted/30" />
                    <div className="mt-2 h-4 w-1/2 rounded bg-muted/30" />
                    <div className="mt-4 h-10 w-full rounded-full bg-muted/30" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
