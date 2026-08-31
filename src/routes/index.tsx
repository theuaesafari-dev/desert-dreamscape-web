import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import {
  AdventureSection,
  CultureSection,
  EntertainmentSection,
  ExperienceSection,
  FoodSection,
  TransfersSection,
} from "@/components/site/sections-a";
import {
  AddOnsSection,
  ComparisonSection,
  JourneySection,
  RegularSafariSection,
  ThirdExperienceSection,
  VipSection,
  WhyUsSection,
} from "@/components/site/sections-b";
import { GallerySection } from "@/components/site/gallery";
import { FinalCta, SiteFooter, WhatsAppFloat } from "@/components/site/closing";

const TITLE = "Dubai Desert Safari | THE UAE SAFARI";
const DESCRIPTION =
  "Premium Dubai desert safari with dune bashing, camel rides, live shows, BBQ buffet dinner and VIP seating. Hotel transfers across Dubai & Sharjah.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <ExperienceSection />
        <AdventureSection />
        <EntertainmentSection />
        <CultureSection />
        <FoodSection />
        <TransfersSection />
        <RegularSafariSection />
        <VipSection />
        <ComparisonSection />
        <ThirdExperienceSection />
        <AddOnsSection />
        <JourneySection />
        <WhyUsSection />
        <GallerySection />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
