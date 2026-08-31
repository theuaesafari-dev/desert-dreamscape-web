import { useEffect, useState } from "react";
import { X } from "lucide-react";
import duneBashing from "@/assets/dune-bashing.jpg";
import heroCity from "@/assets/hero-city.jpg";
import camelRide from "@/assets/camel-ride.jpg";
import sandboarding from "@/assets/sandboarding.jpg";
import desertCamp from "@/assets/desert-camp.jpg";
import fireShow from "@/assets/fire-show.jpg";
import tanoura from "@/assets/tanoura.jpg";
import bellyDance from "@/assets/belly-dance.jpg";
import bbqBuffet from "@/assets/bbq-buffet.jpg";
import arabicDress from "@/assets/arabic-dress.jpg";
import henna from "@/assets/henna.jpg";
import vipSeating from "@/assets/vip-seating.jpg";
import buggy from "@/assets/buggy.jpg";
import quadBike from "@/assets/quad-bike.jpg";
import { Reveal, SectionHeading } from "./primitives";

const IMAGES = [
  { src: duneBashing, alt: "Dune bashing with a 4x4 Land Cruiser on red sand" },
  { src: heroCity, alt: "Premium Land Cruiser with the Dubai skyline" },
  { src: camelRide, alt: "Camel ride across sunset dunes" },
  { src: sandboarding, alt: "Sandboarding on golden dunes" },
  { src: desertCamp, alt: "Arabian desert camp at night" },
  { src: fireShow, alt: "Fire show performance at the desert camp" },
  { src: tanoura, alt: "Traditional Tanoura dance" },
  { src: bellyDance, alt: "Traditional dance performance" },
  { src: bbqBuffet, alt: "BBQ buffet dinner in the desert" },
  { src: arabicDress, alt: "Traditional Arabic dress photography on the dunes" },
  { src: henna, alt: "Henna painting at the desert camp" },
  { src: vipSeating, alt: "VIP sofa seating and dining lounge" },
  { src: buggy, alt: "Dune buggy ride across the dunes" },
  { src: quadBike, alt: "Quad bike experience on the dunes" },
];

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="gallery" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading eyebrow="Moments" title="Gallery" align="center" />

        <div className="mt-14 columns-2 gap-4 [column-fill:balance] md:columns-3 lg:columns-4">
          {IMAGES.map((image, i) => (
            <Reveal key={image.alt} delay={(i % 4) * 70} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden"
                aria-label={`Open image: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full object-cover brightness-95 transition-all duration-[700ms] ease-out group-hover:scale-[1.04] group-hover:brightness-110"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute top-6 right-6 grid h-11 w-11 place-items-center border border-gold/50 text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-[88vh] max-w-[92vw]" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[80vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-xs tracking-[0.2em] text-cream/60 uppercase">
              {activeImage.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
