import Link from "next/link";
import { ShoppingBag, Menu, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-primary"
        >
          <ShoppingBag className="w-6 h-6" />
          <span>NovaStore</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/items"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Items
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link
            href="/admin/add-item"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Add Item
          </Link>
        </div>

        <button className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
