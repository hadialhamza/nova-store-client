import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  ShoppingCart,
  Tag,
  Truck,
  ShieldCheck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {
  const { _id, name, description, price, category, image } = product || {};

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-background/60 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      {/* Top image */}
      <div className="relative aspect-16/10 overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name || "Product"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          priority={false}
        />

        {/* Category chip */}
        {category ? (
          <div className="absolute left-3 top-3">
            <Badge className="border-0 bg-background/70 text-foreground flex items-center gap-1.5 px-2.5">
              <Tag className="w-3 h-3 text-primary" />
              {category}
            </Badge>
          </div>
        ) : null}

        {/* Quick view button */}
        <div className="absolute right-3 top-3 hidden md:block">
          <Button
            asChild
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full border bg-background/90 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1"
          >
            <Link aria-label="View details" href={`/items/${_id}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="space-y-2 p-4 pb-2">
        <CardTitle className="line-clamp-1 text-base font-semibold tracking-tight transition-colors group-hover:text-primary">
          {name}
        </CardTitle>

        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 px-4 pb-4">
        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full border bg-muted/30 px-2 py-1">
            <Truck className="w-3.5 h-3.5 text-blue-500" />
            Fast delivery
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border bg-muted/30 px-2 py-1">
            <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
            Secure checkout
          </span>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex items-end justify-between gap-3 border-t bg-muted/20 p-4">
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">Price</p>
          <p className="text-lg font-bold text-primary">
            ${Number(price ?? 0).toFixed(2)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>

          <Button asChild className="rounded-full">
            <Link
              href={`/items/${_id}`}
              className="inline-flex items-center gap-2"
            >
              View Details <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

export const ProductCardSkeleton = () => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-background/60 shadow-sm">
      <div className="relative aspect-16/10 overflow-hidden bg-muted animate-pulse" />
      <div className="space-y-3 p-4">
        <div className="h-5 w-2/3 rounded-lg bg-muted animate-pulse" />
        <div className="h-4 w-full rounded-lg bg-muted animate-pulse" />
        <div className="flex items-center justify-between gap-2 pt-2">
          <div className="h-4 w-1/3 rounded-lg bg-muted animate-pulse" />
          <div className="h-4 w-1/3 rounded-lg bg-muted animate-pulse" />
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between p-4 pt-0">
        <div className="space-y-1">
          <div className="h-3 w-8 rounded-full bg-muted animate-pulse" />
          <div className="h-6 w-16 rounded-lg bg-muted animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
          <div className="h-10 w-24 rounded-full bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
};
