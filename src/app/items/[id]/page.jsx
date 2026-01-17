import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { baseURL } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

async function getProduct(id) {
  try {
    const res = await fetch(`${baseURL}/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ItemDetailsPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-4">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
        <p className="text-muted-foreground">
          The product you are looking for does not exist or has been removed.
        </p>
        <Button asChild variant="outline">
          <Link href="/items">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Items
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <Button
        asChild
        variant="ghost"
        className="mb-8 pl-0 hover:pl-2 transition-all"
      >
        <Link href="/items">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Store
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="group relative rounded-3xl overflow-hidden bg-muted border aspect-square lg:aspect-auto lg:h-150 shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="px-3 py-1 text-sm rounded-full"
            >
              {product.category || "General"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-primary">${product.price}</p>
          </div>

          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <p>{product.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card border shadow-sm">
              <Truck className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-sm">Free Express Shipping</p>
                <p className="text-xs text-muted-foreground">
                  On all orders over $50
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card border shadow-sm">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-sm">2 Year Warranty</p>
                <p className="text-xs text-muted-foreground">
                  Full coverage included
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t">
            <div className="flex items-center gap-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <Check className="w-3 h-3" />
              </span>
              In Stock & Ready to Ship
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="w-full md:w-auto text-lg px-8 h-14 shadow-lg shadow-primary/25"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8">
                Save for Later
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
