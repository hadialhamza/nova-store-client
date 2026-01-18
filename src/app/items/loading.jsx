import { ProductCardSkeleton } from "@/components/shared/ProductCard";

export default function ItemsLoading() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-14">
      {/* Page header skeleton */}
      <div className="relative overflow-hidden rounded-3xl border bg-muted/10 p-7 sm:p-10">
        <div className="relative space-y-8">
          {/* Header Row Skeleton */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Left: Back Link */}
            <div className="flex-1 flex justify-start">
              <div className="h-5 w-24 bg-muted animate-pulse rounded" />
            </div>

            {/* Center: Badge & Title */}
            <div className="flex-2 flex flex-col items-center gap-3">
              {/* Badge */}
              <div className="h-7 w-36 bg-muted animate-pulse rounded-full" />
              {/* Title */}
              <div className="h-10 w-48 bg-muted animate-pulse rounded-lg" />
            </div>

            {/* Right: Info Card */}
            <div className="flex-1 flex justify-end">
              <div className="hidden sm:block h-10 w-40 bg-muted animate-pulse rounded-2xl" />
            </div>
          </div>

          {/* Description Skeleton */}
          <div className="flex flex-col items-center space-y-2 w-full max-w-lg mx-auto">
            <div className="h-4 w-full bg-muted animate-pulse rounded" />
            <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
          </div>

          {/* Category chips skeleton */}
          <div className="flex flex-wrap justify-center gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-24 bg-muted animate-pulse rounded-full"
              />
            ))}
          </div>

          {/* Filters row skeleton */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
            <div className="h-10 w-48 bg-muted animate-pulse rounded-2xl" />
            <div className="hidden sm:block h-4 w-40 bg-muted animate-pulse rounded" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 h-px w-full bg-border/50" />

      {/* Products grid skeleton */}
      <div className="mt-10">
        {/* Count and sort skeleton */}
        <div className="mb-5 flex items-center justify-between">
          <div className="h-5 w-32 bg-muted animate-pulse rounded" />
          <div className="hidden sm:flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-7 w-20 bg-muted animate-pulse rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-14 h-px w-full bg-border/50" />
    </div>
  );
}
