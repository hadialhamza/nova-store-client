import Link from "next/link";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import Image from "next/image";
import { baseURL } from "@/lib/axios";

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
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/items" className="text-primary hover:underline">
          Back to Items
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Link
        href="/items"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Items
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="rounded-2xl overflow-hidden bg-muted border">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-bold uppercase tracking-wider">
                {product.category || "General"}
              </span>
            </div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold text-primary mt-4">
              ${product.price}
            </p>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-4 pt-6 border-t">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-accent" />
              <span className="text-sm">In Stock & Ready to Ship</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-accent" />
              <span className="text-sm">Free Shipping on orders over $50</span>
            </div>
          </div>

          <button className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
