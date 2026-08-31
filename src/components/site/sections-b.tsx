import { Crown, Check, Minus, ArrowDown } from "lucide-react";
import duneBashing from "@/assets/dune-bashing.jpg";
import camelRide from "@/assets/camel-ride.jpg";
import bbqBuffet from "@/assets/bbq-buffet.jpg";
import fireShow from "@/assets/fire-show.jpg";
import vipSeating from "@/assets/vip-seating.jpg";
import buggy from "@/assets/buggy.jpg";
import quadBike from "@/assets/quad-bike.jpg";
import desertCamp from "@/assets/desert-camp.jpg";
import heroDunes from "@/assets/hero-dunes.jpg";
import { whatsappLink } from "@/lib/site";
import { GoldButton, Reveal, SectionHeading } from "./primitives";

const REGULAR_GROUPS = [
  {
    title: "Adventure & Fun",
    items: [
      "Thrilling dune bashing on red sand",
      "4x4 Land Cruiser experience",
      "Traditional camel ride",
      "Sandboarding on golden dunes",
    ],
    image: duneBashing,
    alt: "Land Cruiser dune bashing on red sand",
  },
  {
    title: "Live Entertainment",
    items: ["Fire show", "Traditional Tanoura dance", "Belly dance performance"],
    image: fireShow,
    alt: "Fire show at a desert camp",
  },
  {
    title: "Cultural Experiences",
    items: ["Henna painting", "Traditional Arabic dress for photography", "Sheesha"],
    image: camelRide,
    alt: "Camel ride at sunset in the desert",
  },
  {
    title: "Food & Refreshments",
    items: [
      "BBQ buffet dinner",
      "Vegetarian and non-vegetarian options",
      "Unlimited soft drinks",
      "Water",
      "Tea",
      "Coffee",
    ],
    image: bbqBuffet,
    alt: "BBQ buffet dinner at a desert camp",
  },
  {
    title: "Transfers",
    items: [
      "Pick-up and drop-off by 4x4 SUV",
      "Hotel/residence transfers from Dubai & Sharjah",
    ],
    image: desertCamp,
    alt: "Arabian desert camp at night",
  },
];

export function RegularSafariSection() {
  return (
    <section id="regular-safari" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Package One"
          title={
            <>
              Regular Evening
              <br />
              Desert Safari
            </>
          }
          subtitle="Adventure, culture, entertainment and dining in one unforgettable evening."
        />

        <div className="mt-16 space-y-4">
          {REGULAR_GROUPS.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 80}
              className="group grid items-stretch gap-0 overflow-hidden border border-border/40 md:grid-cols-[0.9fr_1.1fr] md:odd:[direction:ltr]"
            >
              <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto md:min-h-[240px]">
                <img
                  src={group.image}
                  alt={group.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/35" />
              </div>
              <div className="p-7 sm:p-10">
                <span className="eyebrow">0{i + 1}</span>
                <h3 className="display mt-3 text-2xl text-cream">{group.title}</h3>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cream/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <GoldButton href={whatsappLink("Hello, I would like to book the Regular Evening Desert Safari.")}>
            Book Regular Safari
          </GoldButton>
        </Reveal>
      </div>
    </section>
  );
}

export function VipSection() {
  const extras = [
    "Premium sofa seating",
    "45+ dishes",
    "Unlimited food",
    "Unlimited BBQ",
    "Dedicated VIP dining experience",
    "No waiting in the food line",
  ];
  return (
    <section id="vip-safari" className="relative overflow-hidden py-24 sm:py-32">
      <img
        src={vipSeating}
        alt="Premium VIP desert camp dining lounge with sofa seating"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <Crown className="h-5 w-5 text-gold" />
          <span className="eyebrow">Package Two</span>
        </div>
        <Reveal className="mt-5 max-w-3xl">
          <h2 className="display text-[clamp(2rem,6vw,4.25rem)] text-cream">VIP Desert Safari</h2>
          <p className="mt-6 font-serif text-[clamp(1.05rem,2.2vw,1.5rem)] text-sand">
            More comfort. More choice. A premium way to experience the desert.
          </p>
          <div className="gold-rule mt-8 w-24" />
        </Reveal>

        <Reveal delay={120} className="mt-14 border border-gold/30 bg-ink/60 p-7 backdrop-blur-sm sm:p-12">
          <p className="text-[0.68rem] tracking-[0.3em] text-cream/60 uppercase">
            The full safari experience, plus
          </p>
          <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {extras.map((extra) => (
              <li key={extra} className="flex items-start gap-4 border-b border-gold/15 pb-4">
                <Crown className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-lg text-cream/90">{extra}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <GoldButton href={whatsappLink("Hello, I am interested in the VIP Desert Safari.")}>
              Enquire About VIP
            </GoldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const COMPARISON: { feature: string; regular: boolean; vip: boolean }[] = [
  { feature: "Dune Bashing (4x4)", regular: true, vip: true },
  { feature: "Camel Ride", regular: true, vip: true },
  { feature: "Sand Boarding", regular: true, vip: true },
  { feature: "Henna Painting", regular: true, vip: true },
  { feature: "Arabic Dress Photography", regular: true, vip: true },
  { feature: "Sheesha", regular: true, vip: true },
  { feature: "Live Shows", regular: true, vip: true },
  { feature: "BBQ Buffet Dinner", regular: true, vip: true },
  { feature: "Unlimited Soft Drinks, Water, Tea & Coffee", regular: true, vip: true },
  { feature: "Sofa Seating", regular: false, vip: true },
  { feature: "45+ Dishes", regular: false, vip: true },
  { feature: "Unlimited Food", regular: false, vip: true },
  { feature: "Unlimited BBQ", regular: false, vip: true },
  { feature: "Dedicated VIP Dining Experience", regular: false, vip: true },
  { feature: "No Waiting in Food Line", regular: false, vip: true },
];

function Mark({ on }: { on: boolean }) {
  return on ? (
    <Check className="mx-auto h-4 w-4 text-gold" aria-label="Included" />
  ) : (
    <Minus className="mx-auto h-4 w-4 text-cream/25" aria-label="Not included" />
  );
}

export function ComparisonSection() {
  return (
    <section className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Compare Your Experience"
          title="Regular vs VIP"
          align="center"
        />

        <Reveal className="hide-scrollbar mt-14 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border/60">
                <th className="py-5 pr-4 text-[0.65rem] tracking-[0.28em] text-cream/60 uppercase">
                  Feature
                </th>
                <th className="w-32 py-5 text-center text-[0.65rem] tracking-[0.28em] text-cream/60 uppercase">
                  Regular
                </th>
                <th className="w-40 bg-gold/8 py-5 text-center text-[0.65rem] tracking-[0.28em] text-gold uppercase">
                  <span className="inline-flex items-center gap-2">
                    <Crown className="h-3.5 w-3.5" /> VIP
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-border/30">
                  <td className="py-4 pr-4 text-sm text-cream/85">{row.feature}</td>
                  <td className="py-4 text-center">
                    <Mark on={row.regular} />
                  </td>
                  <td className="bg-gold/8 py-4 text-center">
                    <Mark on={row.vip} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

export function ThirdExperienceSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <img
        src={heroDunes}
        alt="Empty desert dunes at sunset"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow">Package Three</p>
          <h2 className="display mt-5 text-[clamp(1.8rem,5.5vw,3.5rem)] text-cream">
            Third Safari Experience
          </h2>
          <div className="gold-rule mx-auto mt-8 w-24" />
          <p className="mt-8 font-serif text-2xl text-sand">Package details coming soon.</p>
          <p className="mt-3 text-sm tracking-[0.14em] text-cream/60 uppercase">
            Stay tuned for an unforgettable experience.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function AddOnsSection() {
  const addons = [
    {
      title: "Buggy Ride",
      copy: "Feel the thrill of the dunes with our powerful buggy ride.",
      image: buggy,
      alt: "Dune buggy racing across golden sand dunes",
    },
    {
      title: "Quad Bike Experience",
      copy: "Ride the dunes on a powerful quad bike for an unforgettable adventure.",
      image: quadBike,
      alt: "Rider on a quad bike cresting a golden dune",
    },
  ];
  return (
    <section id="add-ons" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display text-[clamp(2.2rem,7vw,5rem)] text-cream">Add-Ons on Demand</h2>
          <p className="mt-5 inline-block border border-ember/60 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.3em] text-ember uppercase">
            Exclusive of Package
          </p>
          <p className="mt-6 max-w-xl font-serif text-lg text-sand/80">
            Available on request and charged separately from the safari package.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {addons.map((addon, i) => (
            <Reveal
              key={addon.title}
              delay={i * 130}
              className="group relative overflow-hidden border border-gold/20 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="relative aspect-[7/5] overflow-hidden">
                <img
                  src={addon.image}
                  alt={addon.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              </div>
              <div className="bg-charcoal/80 p-7 sm:p-9">
                <h3 className="display text-2xl text-cream">{addon.title}</h3>
                <p className="mt-3 text-sm text-cream/70">{addon.copy}</p>
                <a
                  href={whatsappLink(`Hello, I would like to add the ${addon.title} to my safari.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-[0.68rem] font-semibold tracking-[0.26em] text-gold uppercase transition-colors duration-300 hover:text-champagne"
                >
                  Request on WhatsApp
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const JOURNEY = [
  "Pick-up from Hotel",
  "Desert Arrival",
  "Adventure Activities",
  "Cultural Experiences",
  "Evening Entertainment",
  "Delicious Dinner",
  "Drop-off to Hotel",
];

export function JourneySection() {
  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <SectionHeading eyebrow="Step by Step" title="Your Journey With Us" tone="light" align="center" />
        <ol className="mt-16 space-y-0">
          {JOURNEY.map((step, i) => (
            <Reveal as="li" key={step} delay={i * 70} className="relative flex items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink/20 bg-ink text-xs font-semibold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < JOURNEY.length - 1 ? (
                  <span className="my-1 h-10 w-px bg-ink/20" />
                ) : null}
              </div>
              <div className={i < JOURNEY.length - 1 ? "-mt-11" : "-mt-1"}>
                <h3 className="display text-lg text-ink sm:text-xl">{step}</h3>
                {i < JOURNEY.length - 1 ? (
                  <ArrowDown className="mt-2 h-3.5 w-3.5 text-ink/30" aria-hidden />
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhyUsSection() {
  const points = [
    "Professional & Experienced Team",
    "Well-Maintained 4x4 Vehicles",
    "Authentic Arabian Experience",
    "Quality Food & Top Hospitality",
    "Safety, Comfort & Satisfaction",
  ];
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Trust" title="Why Choose The UAE Safari?" />
            <ul className="mt-10 space-y-0">
              {points.map((point, i) => (
                <Reveal as="li" key={point} delay={i * 80}>
                  <div className="flex items-center gap-5 border-b border-border/40 py-5">
                    <span className="text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-lg text-cream/85">{point}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={100} className="relative aspect-[4/5] overflow-hidden">
            <img
              src={desertCamp}
              alt="Authentic Arabian desert camp lit by lanterns at night"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
