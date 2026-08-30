import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "figure";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <h2
        className={cn(
          "display text-[clamp(2rem,6vw,4.25rem)]",
          tone === "light" ? "text-ink" : "text-cream",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-6 font-serif text-[clamp(1.05rem,2.2vw,1.5rem)] leading-relaxed",
            tone === "light" ? "text-ink/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
      <div className={cn("gold-rule mt-8 w-24", align === "center" && "mx-auto")} />
    </Reveal>
  );
}

export function GoldButton({
  href,
  children,
  variant = "solid",
  className,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-500",
    variant === "solid"
      ? "bg-gold text-ink hover:bg-champagne hover:shadow-[0_18px_44px_-18px_var(--gold)]"
      : "border border-gold/60 text-champagne hover:border-gold hover:bg-gold/10",
    className,
  );
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
