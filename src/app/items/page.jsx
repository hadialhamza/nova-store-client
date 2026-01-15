import ProductCard from "@/components/ProductCard";
import { baseURL } from "@/lib/axios";

async function getProducts() {
  try {
    const res = await fetch(`${baseURL}/products`, {
      cache: "no-store", // Ensure fresh data
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
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            No products found or failed to load.
          </p>
        </div>
      )}
    </div>
  );
}
