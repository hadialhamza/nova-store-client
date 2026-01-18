export default function ItemDetailsLoading() {
  return (
    <div className="container mx-auto px-4 pt-4 pb-10 sm:pb-14">
      {/* Top bar skeleton */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="h-9 w-32 rounded-full bg-muted animate-pulse" />
        <div className="h-4 w-48 rounded bg-muted animate-pulse" />
      </div>

      <div className="grid gap-10 lg:grid-cols-12">
        {/* Left Column Skeleton */}
        <div className="lg:col-span-7">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-3xl bg-muted animate-pulse max-w-2xl mx-auto aspect-square border border-white/5" />

          {/* Feature Grid */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border bg-background p-4 h-24"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-4 w-4 rounded-full bg-muted animate-pulse" />
                  <div className="h-4 w-24 rounded bg-muted animate-pulse" />
                </div>
                <div className="h-3 w-32 rounded bg-muted animate-pulse" />
              </div>
            ))}
          </div>

          {/* Description Skeleton */}
          <div className="mt-8 rounded-3xl border bg-background p-6 sm:p-8">
            <div className="h-6 w-32 rounded bg-muted animate-pulse mb-4" />
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-muted animate-pulse" />
              <div className="h-4 w-[90%] rounded bg-muted animate-pulse" />
              <div className="h-4 w-[95%] rounded bg-muted animate-pulse" />
              <div className="h-4 w-[80%] rounded bg-muted animate-pulse" />
            </div>

            <div className="mt-8 h-px w-full bg-border" />

            <div className="mt-8 h-6 w-24 rounded bg-muted animate-pulse mb-4" />
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border bg-muted/10 p-4 h-20"
                >
                  <div className="h-3 w-16 rounded bg-muted animate-pulse mb-2" />
                  <div className="h-4 w-24 rounded bg-muted animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column Skeleton (Buy Box) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <div className="rounded-3xl border bg-background p-6 sm:p-8">
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                <div className="h-6 w-20 rounded-full bg-muted animate-pulse" />
                <div className="h-6 w-24 rounded-full bg-muted animate-pulse" />
              </div>

              {/* Title */}
              <div className="space-y-2 mb-6">
                <div className="h-8 w-full rounded bg-muted animate-pulse" />
                <div className="h-8 w-2/3 rounded bg-muted animate-pulse" />
              </div>

              {/* Price Row */}
              <div className="flex justify-between items-end mb-8">
                <div>
                  <div className="h-3 w-10 rounded bg-muted animate-pulse mb-1" />
                  <div className="h-8 w-32 rounded bg-muted animate-pulse" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="h-3 w-24 rounded bg-muted animate-pulse" />
                  <div className="h-3 w-32 rounded bg-muted animate-pulse" />
                </div>
              </div>

              {/* Buttons */}
              <div className="grid gap-3">
                <div className="h-12 w-full rounded-full bg-muted animate-pulse" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-12 w-full rounded-full bg-muted animate-pulse" />
                  <div className="h-12 w-full rounded-full bg-muted animate-pulse" />
                </div>
              </div>

              {/* Trust List */}
              <div className="mt-8 space-y-3">
                <div className="h-4 w-24 rounded bg-muted animate-pulse" />
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-2">
                    <div className="h-4 w-4 rounded-full bg-muted animate-pulse" />
                    <div className="h-4 w-full rounded bg-muted animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
