import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import ProductCard, { ProductCardSkeleton } from "@/components/shared/ProductCard";
import SectionHeader from "../shared/SectionHeader";

export default function FeaturedCollection({ featuredProducts = [] }) {
  const hasProducts = featuredProducts?.length > 0;

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
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
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {hasProducts
          ? featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
          : Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
      </div>
    </section>
  );
}
