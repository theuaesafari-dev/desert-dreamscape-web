import { MessageCircle, Phone, Instagram, Globe } from "lucide-react";
import nightCamp from "@/assets/night-camp.jpg";
import {
  AREAS,
  BRAND,
  INSTAGRAM,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_RAW,
  TAGLINE,
  WEBSITE,
  whatsappLink,
} from "@/lib/site";
import { GoldButton, Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={nightCamp}
        alt="Desert camp glowing under a starry night sky"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/72" />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 text-center sm:px-8">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,9vw,6.5rem)] text-cream">
            Beyond Roads.
            <br />
            <span className="gold-text">Beyond Limits.</span>
          </h2>
          <p className="mt-7 font-serif text-[clamp(1.1rem,2.4vw,1.75rem)] text-sand">
            Your Dubai desert adventure awaits.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <GoldButton href={whatsappLink()}>Book Your Desert Safari</GoldButton>
            <GoldButton href={whatsappLink()} variant="outline">
              WhatsApp Us
            </GoldButton>
          </div>
          <div className="mt-12 flex flex-col items-center gap-3 text-sm tracking-[0.2em] text-cream/75 uppercase">
            <a href={`tel:+${PHONE_RAW}`} className="hover:text-gold">
              {PHONE_DISPLAY}
            </a>
            <span className="text-cream/50">{WEBSITE}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-ink py-16">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <p className="display text-xl text-cream">{BRAND}</p>
          <p className="mt-3 font-serif text-lg text-gold">{TAGLINE}</p>
          <p className="mt-4 text-sm text-cream/55">Premium Dubai Desert Safari — {AREAS}</p>
        </div>

        <nav className="space-y-3 text-sm text-cream/70" aria-label="Footer">
          {[
            { label: "Experience", href: "#experience" },
            { label: "Regular Safari", href: "#regular-safari" },
            { label: "VIP Safari", href: "#vip-safari" },
            { label: "Add-Ons", href: "#add-ons" },
            { label: "Gallery", href: "#gallery" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="block transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="space-y-3 text-sm text-cream/70">
          <a href={`tel:+${PHONE_RAW}`} className="flex items-center gap-3 hover:text-gold">
            <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gold"
          >
            <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gold"
          >
            <Instagram className="h-4 w-4 text-gold" /> {INSTAGRAM}
          </a>
          <p className="flex items-center gap-3">
            <Globe className="h-4 w-4 text-gold" /> {WEBSITE}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1400px] px-5 sm:px-8">
        <div className="gold-rule" />
        <p className="mt-6 text-xs tracking-[0.2em] text-cream/40 uppercase">
          © {new Date().getFullYear()} {BRAND}
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with THE UAE SAFARI on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex items-center gap-3 border border-gold/50 bg-ink/90 px-4 py-3 backdrop-blur-md transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ink sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="h-5 w-5 text-gold transition-colors duration-500 group-hover:text-ink" />
      <span className="hidden text-[0.65rem] font-semibold tracking-[0.24em] uppercase sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
