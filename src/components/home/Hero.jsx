import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
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
  );
}
