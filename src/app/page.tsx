import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhySection } from "@/components/sections/WhySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FeaturedFleet } from "@/components/sections/FeaturedFleet";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhySection />
      <ProjectsSection />
      <FeaturedFleet />
      <CtaSection />
    </>
  );
}
