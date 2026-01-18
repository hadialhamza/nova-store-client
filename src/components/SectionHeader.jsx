import { cn } from "@/lib/utils";

export default function SectionHeader({
  badgeText = "Section",
  badgeIcon: BadgeIcon,
  title,
  description,
  align = "center", // "center" | "left"
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "space-y-3",
        isCenter ? "text-center items-center" : "text-left items-start",
        className,
      )}
    >
      {/* Badge */}
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border bg-muted/20 px-3 py-1 text-xs font-medium text-muted-foreground",
        )}
      >
        {BadgeIcon ? <BadgeIcon className="h-4 w-4 text-primary" /> : null}
        <span>{badgeText}</span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>

      {/* Description */}
      {description ? (
        <p
          className={cn(
            "text-muted-foreground",
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl",
            "text-sm sm:text-base",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
