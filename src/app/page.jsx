import Link from "next/link";
import { ArrowRight, Star, Truck, Shield, Clock } from "lucide-react";
import { baseURL } from "@/lib/axios";
import Image from "next/image";

async function getFeaturedProducts() {
  try {
    const res = await fetch(`${baseURL}/products`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      return [];
    }
    const products = await res.json();
    return products.slice(0, 6);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="flex flex-col gap-16 pb-10">
      {/* 1. Hero Section */}
      <section className="relative h-125 flex items-center justify-center bg-linear-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Future of Shopping <br />{" "}
            <span className="text-primary">Is Here</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest trends in technology, fashion, and lifestyle.
            Curated for the modern innovator.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/items"
              className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Featured Items */}
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
                  {/* Use standard img for simplicity in task or Next Image if preferred. Using img as domains not configured */}
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

      {/* 3. Features / Value Props */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Fast Delivery</h3>
            <p className="text-muted-foreground">
              We ship worldwide with express options available.
            </p>
          </div>
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Secure Payment</h3>
            <p className="text-muted-foreground">
              Your transactions are protected with 256-bit encryption.
            </p>
          </div>
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">24/7 Support</h3>
            <p className="text-muted-foreground">
              Our team is available round the clock to help you.
            </p>
          </div>
        </div>
      </section>

      {/* 4. About Us */}
      <section className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold">About NovaStore</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At NovaStore, we believe in bringing the future to your doorstep.
            Founded in 2024, our mission is to curate the most innovative
            products from around the globe. We scrutinize every item for
            quality, sustainability, and design excellence.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you are a tech enthusiast, a fashion icon, or someone who
            appreciates fine home decor, we have something special for you.
          </p>
        </div>
        <div className="flex-1 h-100 bg-accent/10 rounded-2xl flex items-center justify-center">
          <span className="text-accent font-logo text-4xl">NS</span>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 border rounded-xl bg-card space-y-4">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Absolutely amazing service! The product quality exceeded my
                  expectations and delivery was super fast
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-bold">Alex Johnson</p>
                    <p className="text-xs text-muted-foreground">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Newsletter */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold">Join the Innovation</h2>
          <p className="max-w-xl mx-auto opacity-90">
            Subscribe to our newsletter to get early access to new drops and
            exclusive discounts.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="button"
              className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section className="container mx-auto px-4 text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
        <p className="text-muted-foreground mb-6">
          Our support team is ready to assist you with any inquiries.
        </p>
        <Link
          href="/contact"
          className="text-primary font-bold hover:underline"
        >
          Contact Support &rarr;
        </Link>
      </section>
    </div>
  );
}
