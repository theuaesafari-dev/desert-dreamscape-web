import heroCity from "@/assets/hero-city.jpg";
import heroDunes from "@/assets/hero-dunes.jpg";
import { useScrollProgress } from "@/hooks/use-reveal";
import { whatsappLink } from "@/lib/site";
import { GoldButton } from "./primitives";

const clamp = (v: number) => Math.min(1, Math.max(0, v));

export function Hero() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  // Staged cinematic journey: city -> approach -> desert.
  const approach = clamp(progress / 0.45);
  const desert = clamp((progress - 0.35) / 0.5);
  const copyFade = clamp((progress - 0.55) / 0.3);

  return (
    <div ref={ref} id="top" className="relative h-[280vh] md:h-[320vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        {/* City layer */}
        <img
          src={heroCity}
          alt="Premium 4x4 Land Cruiser on the Dubai city edge at golden hour"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `scale(${1.05 + approach * 0.22}) translate3d(0, ${approach * -3}%, 0)`,
            opacity: 1 - desert * 0.95,
            filter: `saturate(${1 - desert * 0.25})`,
          }}
        />

        {/* Desert layer */}
        <img
          src={heroDunes}
          alt="Golden Arabian sand dunes at sunset"
          width={1920}
          height={1088}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: desert,
            transform: `scale(${1.18 - desert * 0.14})`,
          }}
        />

        {/* Dust / heat haze */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_100%,var(--sand),transparent_60%)] mix-blend-soft-light"
          style={{ opacity: 0.25 + desert * 0.45 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-ink" />

        {/* Copy */}
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <div
              className="max-w-3xl"
              style={{
                opacity: 1 - copyFade,
                transform: `translate3d(0, ${copyFade * -40}px, 0)`,
              }}
            >
              <p className="eyebrow mb-6">The UAE Safari</p>
              <h1 className="display text-[clamp(2.7rem,10vw,7.5rem)] text-cream">
                Beyond Roads.
                <br />
                <span className="gold-text">Beyond Limits.</span>
              </h1>
              <p className="mt-7 font-serif text-[clamp(1.1rem,2.6vw,1.75rem)] text-sand">
                Premium Dubai Desert Safari
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <GoldButton href={whatsappLink()}>Book Your Safari</GoldButton>
                <GoldButton href="#experience" variant="outline">
                  Explore the Experience
                </GoldButton>
              </div>
            </div>
          </div>
        </div>

        {/* Journey caption */}
        <div className="absolute inset-x-0 bottom-8 mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <span className="text-[0.6rem] tracking-[0.34em] text-cream/50 uppercase">
            {desert > 0.6 ? "Enter the desert" : "Leave the city"}
          </span>
          <span className="text-[0.6rem] tracking-[0.34em] text-cream/50 uppercase">
            Dubai &amp; Sharjah
          </span>
        </div>
      </div>
    </div>
  );
}
