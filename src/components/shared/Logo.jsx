import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Jost, Outfit } from "next/font/google";

const fontNova = Jost({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-nova",
});

const fontStore = Outfit({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
  variable: "--font-store",
});

export default function Logo({
  href = "/",
  compact = false,
  iconSize = 40,
  className,
  textClassName,
  priority = true,
}) {
  return (
    <Link
      href={href}
      aria-label="Nova Store Home"
      className={cn(
        "inline-flex items-center hover:opacity-90 transition-opacity",
        className,
      )}
    >
      {/* Light mode icon */}
      <Image
        src="/brand/nova-store_icon_light.png"
        alt="Nova Store"
        width={iconSize}
        height={iconSize}
        priority={priority}
        className="block dark:hidden shrink-0"
        style={{ width: "auto", height: "auto" }}
      />

      {/* Dark mode icon */}
      <Image
        src="/brand/nova-store_icon_dark.png"
        alt="Nova Store"
        width={iconSize}
        height={iconSize}
        priority={priority}
        className="hidden dark:block shrink-0"
        style={{ width: "auto", height: "auto" }}
      />

      {!compact && (
        <span
          className={cn(
            "text-2xl tracking-tighter flex items-baseline -ml-1.5",
            textClassName,
          )}
        >
          <span className={cn(fontNova.className, "font-bold text-primary")}>
            NOVA
          </span>

          <span
            className={cn(fontStore.className, "text-foreground font-light")}
          >
            Store
          </span>
        </span>
      )}
    </Link>
  );
}
