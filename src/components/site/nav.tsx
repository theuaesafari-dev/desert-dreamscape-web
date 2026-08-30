import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePageScrollProgress } from "@/hooks/use-reveal";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Regular Safari", href: "#regular-safari" },
  { label: "VIP Safari", href: "#vip-safari" },
  { label: "Add-Ons", href: "#add-ons" },
  { label: "Gallery", href: "#gallery" },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="THE UAE SAFARI home">
      <span
        className={cn(
          "grid place-items-center border border-gold/60 text-gold transition-all duration-500",
          compact ? "h-9 w-9" : "h-11 w-11",
        )}
      >
        <span className="display text-sm leading-none">US</span>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "display block text-cream transition-all duration-500",
            compact ? "text-sm" : "text-base",
          )}
        >
          The UAE Safari
        </span>
        <span className="block text-[0.55rem] tracking-[0.34em] text-gold uppercase">
          Beyond Roads
        </span>
      </span>
    </a>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = usePageScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-ink/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 sm:px-8",
          scrolled ? "py-3" : "py-6",
        )}
      >
        <Logo compact={scrolled} />

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[0.7rem] font-semibold tracking-[0.2em] text-cream/75 uppercase transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/70 px-6 py-3 text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase transition-all duration-500 hover:bg-gold hover:text-ink"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center border border-gold/40 text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className="h-px origin-left bg-gold transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col justify-center gap-2 bg-ink/97 px-8 transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${open ? i * 60 : 0}ms` }}
            className={cn(
              "display border-b border-border/40 py-5 text-3xl text-cream transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            {link.label}
          </a>
        ))}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-8 bg-gold px-7 py-4 text-center text-xs font-semibold tracking-[0.22em] text-ink uppercase"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
