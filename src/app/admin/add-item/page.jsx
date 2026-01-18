"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Plus,
  Package,
  DollarSign,
  Tag,
  Image as ImageIcon,
  FileText,
  Loader2,
  ArrowLeft,
  Eye,
  Sparkles,
} from "lucide-react";
import api from "@/lib/axios";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AddItemPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "Electronics",
  });

  // Auth Protection
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "image") setImageError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Basic URL Validation
      new URL(formData.image);

      await api.post("/products", {
        ...formData,
        price: parseFloat(formData.price),
      });

      toast.success("Product added to inventory!");
      router.push("/items");
      router.refresh();
    } catch (error) {
      if (error.code === "ERR_INVALID_URL") {
        toast.error("Please enter a valid Image URL starting with http/https");
      } else {
        console.error(error);
        toast.error("Failed to create product. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-background py-10 pb-20 relative">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <Link
              href="/items"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Inventory
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center gap-2">
              Add New Product{" "}
              <Sparkles className="w-6 h-6 text-amber-500 fill-amber-500 hidden md:block" />
            </h1>
            <p className="text-muted-foreground mt-1">
              Create a new listing for your store. Fill in the details below.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => router.push("/items")}>
              Cancel
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORM section */}
          <div className="lg:col-span-2 space-y-6">
            <form
              onSubmit={handleSubmit}
              className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm space-y-6"
            >
              {/* Product Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 h-11 rounded-xl bg-background border border-input focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                    placeholder="e.g. Sony WH-1000XM5 Headphones"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
                    <input
                      name="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 h-11 rounded-xl bg-background border border-input focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 h-11 rounded-xl bg-background border border-input focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all appearance-none"
                    >
                      <option>Electronics</option>
                      <option>Furniture</option>
                      <option>Fashion</option>
                      <option>Home Decor</option>
                      <option>Accessories</option>
                      <option>Other</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  Image URL <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 h-11 rounded-xl bg-background border border-input focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                    placeholder="https://example.com/product-image.jpg"
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground ml-1">
                  Supported formats: .jpg, .png, .webp
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-input focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none"
                    placeholder="Describe your product clearly..."
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl text-base font-semibold shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.01]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />{" "}
                      Publishing...
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5 mr-2" /> Publish Product
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* PREVIEW section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Live Preview Card */}
            <div className="sticky top-24 space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Eye className="w-4 h-4" /> Live Preview
              </h3>

              <div className="group relative bg-card rounded-2xl border border-border shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image Area */}
                <div className="relative w-full aspect-square bg-muted flex items-center justify-center overflow-hidden">
                  {formData.image && !imageError ? (
                    <Image
                      src={formData.image}
                      alt="Preview"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => setImageError(true)}
                      unoptimized
                    />
                  ) : (
                    <div className="flex flex-col items-center text-muted-foreground/50">
                      <ImageIcon className="w-12 h-12 mb-2" />
                      <span className="text-xs font-medium">No Image</span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 rounded-md bg-background/80 text-xs font-bold shadow-sm">
                      {formData.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 space-y-3">
                  <div>
                    <h4 className="font-bold text-lg leading-tight line-clamp-1">
                      {formData.name || "Product Name"}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {formData.description ||
                        "Product description will appear here..."}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <span className="text-xl font-extrabold text-primary">
                      ${formData.price || "0.00"}
                    </span>
                    <button className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-4 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-blue-700 dark:text-blue-300">
                  💡 Pro Tip
                </h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 leading-relaxed">
                  High-quality images increase conversion by 40%. Ensure your
                  description highlights the key benefits of the product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
