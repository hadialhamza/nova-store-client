import ProductCard from "@/components/ProductCard";
import { baseURL } from "@/lib/axios";

async function getProducts() {
  try {
    const res = await fetch(`${baseURL}/products`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ItemsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">All Products</h1>
        <p className="text-muted-foreground text-lg">
          Explore our exclusive collection of premium items.
        </p>
      </div>

      <div className="bg-muted/30 p-1 rounded-xl">
        {/* Placeholder for future filters/search bar if needed */}
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/10 rounded-2xl border border-dashed">
          <div className="space-y-3">
            <p className="text-xl font-medium">No products found</p>
            <p className="text-muted-foreground">
              Check back later for new arrivals.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
