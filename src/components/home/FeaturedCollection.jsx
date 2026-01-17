import ProductCard from "@/components/ProductCard";

export default function FeaturedCollection({ featuredProducts }) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-12 space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Featured Collection
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl">
          Handpicked items just for you. Quality meets innovation in our latest
          selection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.length > 0 ? (
          featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-muted/20 rounded-xl border border-dashed">
            <p className="text-muted-foreground">Loading featured items...</p>
          </div>
        )}
      </div>
    </section>
  );
}
