import { baseURL } from "@/lib/axios";
import Hero from "@/components/home/Hero";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import Features from "@/components/home/Features";
import AboutSection from "@/components/home/AboutSection";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import Contact from "@/components/home/ContactCTA";

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
    // console.error("Failed to fetch products:", error);
    return [];
  }
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="flex flex-col pt-0 pb-10">
      {/* Hero Section */}
      <Hero products={featuredProducts.slice(0, 3)} />

      {/* Featured Items */}
      <FeaturedCollection featuredProducts={featuredProducts} />

      {/* Features */}
      <Features />

      {/* About Us */}
      <AboutSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Contact */}
      <Contact />
    </div>
  );
}
