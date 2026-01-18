import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  RefreshCcw,
} from "lucide-react";
import Logo from "./logo/Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/20 mt-auto">
      <div className="container mx-auto px-4 py-10">
        {/* Top grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <Logo />

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Discover curated products with a premium feel. Fast checkout,
              reliable delivery, and support you can trust.
            </p>

            {/* Trust row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-2xl border bg-background/60 p-2.5">
                <Truck className="h-4 w-4 text-primary" />
                <p className="text-xs font-medium">Fast delivery</p>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border bg-background/60 p-2.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <p className="text-xs font-medium">Secure checkout</p>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border bg-background/60 p-2.5">
                <RefreshCcw className="h-4 w-4 text-primary" />
                <p className="text-xs font-medium">Easy returns</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold">Shop</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/items" className="hover:text-primary">
                    All Items
                  </Link>
                </li>
                <li>
                  <Link
                    href="/items?sort=popular"
                    className="hover:text-primary"
                  >
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="/items?sort=new" className="hover:text-primary">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-primary">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold">Company</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="" className="hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-primary">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-primary">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold">Legal</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-primary">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-sm font-semibold">Support</p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <div className="min-w-0">
                  <p className="font-medium text-foreground">Email</p>
                  <p className="truncate">hamzaglory@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p>+880 1765 060 631</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p>Rangpur, Bangladesh</p>
                </div>
              </div>
            </div>
            {/* 
            <Link
              href=""
              className="inline-flex items-center justify-center rounded-full border bg-background px-5 py-2 text-sm font-semibold hover:bg-muted transition"
            >
              Contact Support →
            </Link> */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} NovaStore. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <Link href="" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="" className="hover:text-primary">
              Terms
            </Link>
            <Link href="" className="hover:text-primary">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
