"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./logo/Logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";

const NavItems = ({ onLinkClick }) => (
  <>
    <Link
      href="/"
      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      onClick={onLinkClick}
    >
      Home
    </Link>
    <Link
      href="/items"
      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      onClick={onLinkClick}
    >
      Items
    </Link>
    <Link
      href="/login"
      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      onClick={onLinkClick}
    >
      Login
    </Link>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems onLinkClick={closeMenu} />
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/admin/add-item">
              <Button>Add Item</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 text-muted-foreground hover:text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b shadow-lg flex flex-col items-center gap-4 py-6 animate-in slide-in-from-top-2">
          <NavItems onLinkClick={closeMenu} />
          <Link href="/admin/add-item" onClick={closeMenu}>
            <Button>Add Item</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
