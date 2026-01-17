import Link from "next/link";
import Image from "next/image";

export default function FeaturedCollection({ featuredProducts }) {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProducts.length > 0 ? (
          featuredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-card"
            >
              <div className="aspect-video relative bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg truncate">{product.name}</h3>
                <p className="text-primary font-bold">${product.price}</p>
                <Link
                  href={`/items/${product._id}`}
                  className="block text-center w-full py-2 mt-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-muted-foreground">
            Loading featured items...
          </p>
        )}
      </div>
    </section>
  );
}
