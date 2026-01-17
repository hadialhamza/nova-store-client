"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import api from "@/lib/axios";
import { toast } from "sonner";

export default function AddItemPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "Electronics",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic URL validation
    try {
      new URL(formData.image);
    } catch (_) {
      toast.error("Please enter a valid Image URL");
      setLoading(false);
      return;
    }

    try {
      await api.post("/products", {
        ...formData,
        price: parseFloat(formData.price),
      });
      toast.success("Product added successfully!");
      router.push("/items");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Plus className="w-8 h-8 text-primary" /> Add New Item
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 border p-8 rounded-2xl bg-card shadow-sm"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium">Product Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-background border focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="e.g. Wireless Mouse"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Price ($)</label>
            <input
              name="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="0.00"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Fashion</option>
              <option>Home Decor</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-background border focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="https://example.com/image.jpg"
            required
          />
          <p className="text-xs text-muted-foreground">
            Must be a valid URL (e.g. https://...)
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-background border focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Product details..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50"
        >
          {loading ? "Adding..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}
