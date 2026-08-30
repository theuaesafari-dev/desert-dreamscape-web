import duneBashing from "@/assets/dune-bashing.jpg";
import camelRide from "@/assets/camel-ride.jpg";
import sandboarding from "@/assets/sandboarding.jpg";
import desertCamp from "@/assets/desert-camp.jpg";
import fireShow from "@/assets/fire-show.jpg";
import tanoura from "@/assets/tanoura.jpg";
import bellyDance from "@/assets/belly-dance.jpg";
import henna from "@/assets/henna.jpg";
import arabicDress from "@/assets/arabic-dress.jpg";
import sheesha from "@/assets/sheesha.jpg";
import bbqBuffet from "@/assets/bbq-buffet.jpg";
import refreshments from "@/assets/refreshments.jpg";
import heroCity from "@/assets/hero-city.jpg";
import heroDunes from "@/assets/hero-dunes.jpg";
import { Reveal, SectionHeading } from "./primitives";

const STAGES = [
  { title: "Adventure", copy: "Thrill & excitement in the dunes", image: duneBashing },
  { title: "Culture", copy: "Authentic Arabian traditions", image: arabicDress },
  { title: "Entertainment", copy: "Live shows & performances", image: tanoura },
  { title: "Dining", copy: "Delicious BBQ buffet dinner", image: bbqBuffet },
  { title: "Hospitality", copy: "Comfortable & memorable service", image: desertCamp },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative border-t border-border/40 bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Journey Begins"
          title="The Desert Experience"
          subtitle="A perfect blend of adventure, culture, entertainment and dining."
        />
      </div>

      <div className="hide-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8">
        {STAGES.map((stage, i) => (
          <Reveal
            key={stage.title}
            delay={i * 90}
            className="group relative aspect-[3/4] w-[78vw] shrink-0 snap-center overflow-hidden sm:w-[46vw] lg:w-[24vw]"
          >
            <img
              src={stage.image}
              alt={`${stage.title} — ${stage.copy}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="eyebrow">0{i + 1}</span>
              <h3 className="display mt-3 text-2xl text-cream">{stage.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{stage.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function AdventureSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Into the Dunes"
          title="Adventure & Fun"
        />

        <Reveal className="relative mt-14 aspect-[16/9] overflow-hidden">
          <img
            src={duneBashing}
            alt="4x4 Land Cruiser dune bashing on red desert sand"
            width={1600}
            height={1008}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-md sm:bottom-12 sm:left-12">
            <h3 className="display text-[clamp(1.6rem,4vw,3rem)] text-cream">Dune Bashing</h3>
            <p className="mt-3 font-serif text-lg text-sand">
              Thrilling dune bashing on red sand with a 4x4 Land Cruiser.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            {
              image: camelRide,
              title: "Camel Ride",
              copy: "Traditional camel ride experience.",
              alt: "Tourists on a camel ride across sunset dunes",
            },
            {
              image: sandboarding,
              title: "Sandboarding",
              copy: "Exciting sandboarding on golden dunes.",
              alt: "Traveller sandboarding down a golden dune",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="group relative aspect-[7/5] overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
              <div className="absolute bottom-0 p-7">
                <h3 className="display text-2xl text-cream">{item.title}</h3>
                <p className="mt-2 text-sm text-cream/70">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EntertainmentSection() {
  const shows = [
    { title: "Fire Show", copy: "Spectacular fire show", image: fireShow, alt: "Fire show performer at a desert camp at night" },
    { title: "Tanoura Dance", copy: "Traditional Tanoura dance", image: tanoura, alt: "Tanoura dancer spinning in an illuminated skirt" },
    { title: "Belly Dance", copy: "Captivating belly dance performance", image: bellyDance, alt: "Traditional dance performance at a desert camp" },
  ];
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading eyebrow="After Sundown" title="Live Entertainment" align="center" />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {shows.map((show, i) => (
            <Reveal
              key={show.title}
              delay={i * 140}
              className="group relative aspect-[4/5] overflow-hidden md:aspect-[3/5] md:even:translate-y-8"
            >
              <img
                src={show.image}
                alt={show.alt}
                loading="lazy"
                className="h-full w-full object-cover brightness-[0.85] transition-all duration-[900ms] ease-out group-hover:scale-105 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="gold-rule mb-5 w-10 transition-all duration-500 group-hover:w-20" />
                <h3 className="display text-2xl text-cream">{show.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-cream/70 opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
                  {show.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CultureSection() {
  const items = [
    { title: "Henna Painting", copy: "Beautiful henna painting", image: henna, alt: "Henna being painted on a hand at a desert camp" },
    { title: "Arabic Dress", copy: "Traditional Arabic dress for photography", image: arabicDress, alt: "Couple in traditional Arabic dress on the dunes" },
    { title: "Sheesha", copy: "Sheesha experience", image: sheesha, alt: "Ornate sheesha at an Arabian desert camp" },
  ];
  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading eyebrow="Arabian Traditions" title="Cultural Experiences" tone="light" />
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="group">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="display mt-6 text-xl text-ink">{item.title}</h3>
              <p className="mt-2 font-serif text-lg text-ink/60">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FoodSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading eyebrow="Dinner Under the Stars" title="Food & Refreshments" />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="group relative aspect-[16/10] overflow-hidden">
            <img
              src={bbqBuffet}
              alt="Arabian BBQ buffet dinner served at a desert camp"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-full w-full scale-105 object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <h3 className="display text-2xl text-cream">BBQ Buffet Dinner</h3>
              <p className="mt-2 font-serif text-lg text-sand">
                Vegetarian and non-vegetarian options
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} className="group relative aspect-[4/5] overflow-hidden lg:aspect-auto">
            <img
              src={refreshments}
              alt="Arabic tea and coffee service on a brass tray at a desert camp"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <h3 className="display text-2xl text-cream">Refreshments</h3>
              <p className="mt-2 font-serif text-lg text-sand">
                Unlimited soft drinks, water, tea &amp; coffee
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TransfersSection() {
  return (
    <section className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="City to Sand" title="Transfers Included" />
            <Reveal delay={120}>
              <ul className="mt-10 space-y-5">
                {[
                  "Pick-up & drop-off by 4x4 SUV",
                  "From Hotel / Residence",
                  "Dubai & Sharjah",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-4 border-b border-border/40 pb-5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                    <span className="text-lg text-cream/85">{line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={80} className="group relative aspect-[4/3] overflow-hidden">
            <img
              src={heroCity}
              alt="Premium 4x4 SUV with the Dubai skyline at golden hour"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <img
              src={heroDunes}
              alt="Desert dunes at sunset"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[1200ms] ease-out group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <p className="absolute bottom-6 left-6 text-[0.65rem] tracking-[0.32em] text-cream/80 uppercase">
              Dubai → Desert
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
