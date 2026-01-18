import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  ShieldCheck,
  Truck,
  RefreshCcw,
  CreditCard,
  BadgeCheck,
  Heart,
} from "lucide-react";
import { baseURL } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

async function getProduct(id) {
  try {
    const res = await fetch(`${baseURL}/products/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

function formatPrice(price) {
  const n = Number(price ?? 0);
  if (Number.isNaN(n)) return "$0.00";
  return `$${n.toFixed(2)}`;
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description?.slice(0, 160) || "View product details.",
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ItemDetailsPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-28">
        <div className="mx-auto max-w-xl rounded-3xl border bg-muted/10 p-10 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border bg-background text-primary">
            <BadgeCheck className="h-6 w-6" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Product not found
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The product you’re looking for doesn’t exist or has been removed.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/items">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Items
              </Link>
            </Button>
            <Button asChild className="rounded-full">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const category = product.category || "General";

  return (
    <div className="container mx-auto px-4 pt-4 pb-10 sm:pb-14">
      {/* Top bar: back + breadcrumb */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          asChild
          variant="ghost"
          className="w-fit rounded-full px-0 hover:bg-transparent"
        >
          <Link
            href="/items"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Store
          </Link>
        </Button>

        <div className="text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          <span className="mx-2">/</span>
          <Link href="/items" className="hover:text-foreground">
            Items
          </Link>{" "}
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Hero layout */}
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Gallery */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border bg-muted/10 max-w-2xl mx-auto">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />
            <div className="relative aspect-square w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Detail blocks under image */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border bg-background p-4">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold">Fast Delivery</p>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Tracked shipping nationwide
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold">Warranty</p>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Coverage included
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-4">
              <div className="flex items-center gap-2">
                <RefreshCcw className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold">Easy Returns</p>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Simple return policy
              </p>
            </div>
          </div>

          {/* Description & details */}
          <div className="mt-8 rounded-3xl border bg-background p-6 sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight">
              Description
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />

            <h3 className="mt-8 text-lg font-semibold tracking-tight">
              Details
            </h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border bg-muted/10 p-4">
                <p className="text-xs text-muted-foreground">Category</p>
                <p className="mt-1 text-sm font-semibold">{category}</p>
              </div>

              <div className="rounded-2xl border bg-muted/10 p-4">
                <p className="text-xs text-muted-foreground">Availability</p>
                <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <Check className="h-3 w-3" />
                  </span>
                  In stock
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buy box */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <div className="rounded-3xl border bg-background p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-full px-3 py-1">
                  {category}
                </Badge>
                <span className="rounded-full border bg-muted/10 px-3 py-1 text-xs text-muted-foreground">
                  Premium pick
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {product.name}
              </h1>

              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Price</p>
                  <p className="text-3xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-muted-foreground">
                    Secure checkout
                  </p>
                  <div className="mt-1 inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <CreditCard className="h-4 w-4 text-primary" />
                    Cards & trusted payments
                  </div>
                </div>
              </div>

              {/* Primary actions */}
              <div className="mt-6 grid gap-3">
                <Button size="lg" className="h-12 rounded-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full"
                  >
                    Buy Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Save
                  </Button>
                </div>
              </div>

              {/* Trust list */}
              <div className="mt-8 rounded-2xl border bg-muted/10 p-4">
                <p className="text-sm font-semibold">What you get</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted">
                      <Check className="h-3 w-3" />
                    </span>
                    Fast delivery with tracking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted">
                      <Check className="h-3 w-3" />
                    </span>
                    Secure payment & encrypted checkout
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted">
                      <Check className="h-3 w-3" />
                    </span>
                    Easy returns if it’s not right
                  </li>
                </ul>
              </div>

              <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />

              <p className="mt-6 text-xs text-muted-foreground">
                Tip: You can save items to compare later.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom divider */}
      <div className="mt-14 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
