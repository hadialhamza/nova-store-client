import Link from "next/link";
import { SlidersHorizontal, Sparkles, ArrowLeft, Info } from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { baseURL } from "@/lib/axios";

async function getProducts() {
  try {
    const res = await fetch(`${baseURL}/products`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

const CATEGORY_CHIPS = ["Electronics", "Fashion", "Accessories", "Lifestyle"];

export default async function ItemsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-10 sm:py-14">
      {/* Page header */}
      <div className="relative overflow-hidden rounded-3xl border bg-muted/10 p-7 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />

        <div className="relative space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                Curated collection
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                All Products
              </h1>

              <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                Explore our full catalog of premium items. Clean browsing, clear
                pricing, and a smooth checkout experience.
              </p>
            </div>

            {/* quick info card */}
            <div className="rounded-2xl border bg-background p-4 sm:min-w-55">
              <p className="text-xs text-muted-foreground">Available</p>
              <p className="mt-1 text-2xl font-bold text-primary">
                {products?.length ?? 0}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">products</p>
            </div>
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {CATEGORY_CHIPS.map((c) => (
              <button
                key={c}
                type="button"
                className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-foreground/80 hover:bg-muted/30"
              >
                {c}
              </button>
            ))}
          </div>

          {/* Filters row placeholder */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center gap-2 rounded-2xl border bg-background px-4 py-3 text-sm text-muted-foreground">
              <SlidersHorizontal className="h-4 w-4 text-primary" />
              Filters and sorting will appear here (optional)
            </div>

            <div className="inline-flex items-center gap-2 rounded-2xl border bg-background px-4 py-3 text-sm text-muted-foreground">
              <Info className="h-4 w-4 text-primary" />
              Tip: click a product to view details
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />

      {/* Products grid */}
      <div className="mt-10">
        {products.length > 0 ? (
          <>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {products.length}
                </span>{" "}
                items
              </p>

              <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border bg-muted/15 px-3 py-1">
                  Newest
                </span>
                <span className="rounded-full border bg-muted/15 px-3 py-1">
                  Popular
                </span>
                <span className="rounded-full border bg-muted/15 px-3 py-1">
                  Price
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-3xl border border-dashed bg-muted/10 p-12 text-center">
            <div className="mx-auto max-w-md space-y-3">
              <p className="text-xl font-semibold">No products found</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We couldn’t load products right now. Please check back later for
                new arrivals.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border bg-background px-6 py-3 text-sm font-semibold hover:bg-muted/20"
              >
                Go Home
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom divider */}
      <div className="mt-14 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
