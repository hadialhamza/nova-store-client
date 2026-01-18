"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Zap,
  Truck,
  Users,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const BG_COLORS = [
  "bg-blue-50/80 dark:bg-blue-950/20",
  "bg-purple-50/80 dark:bg-purple-950/20",
  "bg-emerald-50/80 dark:bg-emerald-950/20",
];

export default function Hero({ products = [] }) {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-background/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:items-stretch min-h-125">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center space-y-8 py-8 md:py-12">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm border-indigo-500/30 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/10"
              >
                <Zap className="w-3.5 h-3.5 mr-1 fill-current" />
                New Collection 2026
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Explore the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Future of Lifestyle
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Discover premium gadgets, trending fashion, and daily essentials.
              Join thousands of happy customers experiencing quality without
              compromise.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/items">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base shadow-sm hover:shadow-md transition-all"
                >
                  Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full h-12 px-8 text-base"
                >
                  View Collections
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 max-w-lg">
              <div className="p-3 md:p-4 rounded-xl border border-border/60 bg-background/80 shadow-sm hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-indigo-600 dark:text-indigo-400">
                  <Users className="w-4 h-4" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-70">
                    Users
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold">50k+</h4>
              </div>
              <div className="p-3 md:p-4 rounded-xl border border-border/60 bg-background/80 shadow-sm hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-purple-600 dark:text-purple-400">
                  <LayoutGrid className="w-4 h-4" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-70">
                    Brands
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold">200+</h4>
              </div>
              <div className="p-3 md:p-4 rounded-xl border border-border/60 bg-background/80 shadow-sm hover:border-amber-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-70">
                    Rating
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold">4.9</h4>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: SWIPER */}
          <div className="relative h-full min-h-112.5 w-full">
            <Swiper
              effect={"creative"}
              creativeEffect={{
                prev: { shadow: false, translate: [0, 0, -400], opacity: 0 },
                next: { translate: ["100%", 0, 0] },
              }}
              grabCursor={true}
              modules={[Autoplay, Pagination, EffectCreative]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="h-full w-full rounded-3xl"
              wrapperClass="h-full"
            >
              {products.map((product, idx) => {
                const bgColor = BG_COLORS[idx % BG_COLORS.length];
                return (
                  <SwiperSlide key={product._id || idx} className="h-full">
                    <div
                      className={`relative h-full w-full ${bgColor} flex flex-col p-6 md:p-10 rounded-3xl border border-border/40 overflow-hidden`}
                    >
                      {/* Slide Header */}
                      <div className="flex justify-between items-start z-10">
                        <Badge
                          variant="secondary"
                          className="bg-background/80 shadow-sm"
                        >
                          {product.category || "In Stock"}
                        </Badge>
                        <div className="text-right">
                          <p className="text-xs font-bold text-muted-foreground uppercase">
                            Price
                          </p>
                          <p className="text-xl font-bold text-foreground">
                            ${product.price}
                          </p>
                        </div>
                      </div>

                      {/* Image Area (Flexible Height) */}
                      <div className="flex-1 flex items-center justify-center py-6 relative">
                        {/* Circle Decorations */}
                        <div className="absolute w-64 h-64 bg-white/20 dark:bg-white/5 rounded-full blur-3xl -z-10" />

                        <div className="relative w-full h-62.5 md:h-full max-h-87.5">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                            priority={idx === 0}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>

                      {/* Info Card - Distinct Background */}
                      <div className="mt-auto bg-card/90 dark:bg-card/80 bg-gradient-subtle p-5 rounded-2xl border border-border shadow-md">
                        <div className="flex justify-between items-end gap-2">
                          <div>
                            <h3 className="text-lg font-bold text-foreground line-clamp-1">
                              {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                              {product.description ||
                                "Premium quality product selected for you."}
                            </p>
                          </div>
                          <Link href={`/items/${product._id}`}>
                            <Button
                              size="icon"
                              className="rounded-full shadow-md shrink-0"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        {/* BOTTOM FEATURE CARDS */}
        <div className="mt-16 pt-8 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Secure Payment",
              desc: "100% Protected",
              color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/20",
            },
            {
              icon: Truck,
              title: "Fast Delivery",
              desc: "Worldwide Shipping",
              color: "text-blue-600 bg-blue-100 dark:bg-blue-900/20",
            },
            {
              icon: ArrowRight,
              title: "30 Days Return",
              desc: "Easy Return Policy",
              color: "text-purple-600 bg-purple-100 dark:bg-purple-900/20",
            },
            {
              icon: Users,
              title: "24/7 Support",
              desc: "Dedicated Team",
              color: "text-orange-600 bg-orange-100 dark:bg-orange-900/20",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 p-4 rounded-2xl border border-border/50 transition-all duration-300 bg-gradient-subtle shadow-sm hover:-translate-y-1"
            >
              <div
                className={`p-3 rounded-full ${item.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-foreground">
                  {item.title}
                </p>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
