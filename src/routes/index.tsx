import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/brand/Footer";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { WhatsAppButton } from "@/components/brand/WhatsAppButton";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { ScrollExperience } from "@/components/experience/ScrollExperience";
import { BrandStory } from "@/components/sections/BrandStory";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { Newsletter } from "@/components/sections/Newsletter";
import { ProductRange } from "@/components/sections/ProductRange";
import { WhyHaBite } from "@/components/sections/WhyHaBite";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Ha Bite | Roasted Makhana" },
      { name: "description", content: "Discover Ha Bite roasted makhana in Tikka + Moringa Fusion — small bites, big goodness." },
      { property: "og:title", content: "Ha Bite | Roasted Makhana" },
      { property: "og:description", content: "Discover Ha Bite roasted makhana in Tikka + Moringa Fusion — small bites, big goodness." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <SiteHeader />
      <BrandIntro />
      <ScrollExperience />
      <FeaturedProduct />
      <WhyHaBite />
      <ProductRange />
      <BrandStory />
      <CustomerReviews />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
