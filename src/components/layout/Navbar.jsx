"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Bell, Menu, ShoppingCart, User } from "lucide-react";
import Logo from "../shared/Logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/items", label: "Items" },
  { href: "/admin/add-item", label: "Add Item" },
];

function isActivePath(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname?.startsWith(`${href}/`);
}

function initialsFromName(name) {
  const n = (name || "").trim();
  if (!n) return "U";
  const parts = n.split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("") || "U";
}

const NavLink = ({ href, label, active }) => (
  <Link
    href={href}
    className={[
      "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
      active
        ? "bg-primary/10 text-primary dark:text-indigo-400 dark:bg-indigo-400/10"
        : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
    ].join(" ")}
    aria-current={active ? "page" : undefined}
  >
    {label}
  </Link>
);

const IconButton = ({ label, onClick, children }) => {
  const base =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background/60 text-foreground hover:bg-muted transition-colors shadow-sm";

  return (
    <button type="button" aria-label={label} onClick={onClick} className={base}>
      {children}
    </button>
  );
};

const UserMenu = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const user = session?.user;
  if (status === "loading") {
    return (
      <div className="h-9 w-9 rounded-full border bg-muted/40 animate-pulse" />
    );
  }
  if (!user) {
    return (
      <Link href="/login">
        <Button className="rounded-full" variant="default">
          Login
        </Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="h-10 w-10 rounded-full outline-none ring-offset-background transition-all hover:ring-2 hover:ring-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Open user menu"
        >
          <Avatar className="h-full w-full border bg-background">
            <AvatarImage src={user.image || ""} alt={user.name || "User"} />
            <AvatarFallback>{initialsFromName(user.name)}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="space-y-0.5">
          <div className="text-sm font-semibold leading-none">
            {user.name || "Account"}
          </div>
          <div className="text-xs text-muted-foreground leading-none">
            {user.email || ""}
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => router.push("/profile")}>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={async () => {
            // redirect after sign out
            await signOut({ callbackUrl: "/" });
          }}
          className="text-destructive focus:text-destructive"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  const linksWithActive = useMemo(() => {
    return navLinks.map((link) => ({
      ...link,
      active: isActivePath(pathname, link.href),
    }));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b bg-background/70 backdrop-blur-xl supports-backdrop-filter:bg-background/50 shadow-sm transition-shadow">
        <div className="container mx-auto h-16 px-4 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <Logo />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <nav className="flex items-center gap-1 rounded-full border bg-background/60 p-1">
              {linksWithActive.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={link.active}
                />
              ))}
            </nav>

            <div className="flex items-center gap-2 pl-2">
              {/* Icons */}
              <IconButton label="Notifications">
                <Bell className="h-5 w-5" />
              </IconButton>
              <IconButton label="Cart">
                <ShoppingCart className="h-5 w-5" />
              </IconButton>
              <ModeToggle />
              <UserMenu />
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <UserMenu />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-95">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-2">
                  {linksWithActive.map((l) => (
                    <SheetClose asChild key={l.href}>
                      <Link
                        href={l.href}
                        className={[
                          "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          l.active
                            ? "bg-primary/10 text-primary dark:text-indigo-400 dark:bg-indigo-400/10"
                            : "text-foreground hover:bg-muted",
                        ].join(" ")}
                        aria-current={l.active ? "page" : undefined}
                      >
                        {l.label}
                        {l.active ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        ) : null}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-6 border-t pt-6 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <Bell className="w-4 h-4 mr-2" /> Notifications
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" /> Cart
                    </Button>
                  </div>

                  {!user ? (
                    <>
                      <SheetClose asChild>
                        <Link href="/login">
                          <Button className="w-full rounded-full">Login</Button>
                        </Link>
                      </SheetClose>
                    </>
                  ) : (
                    <div className="space-y-3">
                      <Button
                        className="w-full rounded-full"
                        variant="destructive"
                        onClick={() => signOut({ callbackUrl: "/login" })}
                      >
                        Logout
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="pointer-events-none h-px w-full bg-linear-to-r from-transparent via-foreground/10 to-transparent" />
    </header>
  );
}
