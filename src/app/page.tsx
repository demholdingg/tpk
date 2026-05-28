import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FeaturedFleet } from "@/components/sections/FeaturedFleet";
import { FleetListClient } from "@/components/sections/FleetListClient";
import { SectorsWeServe } from "@/components/sections/SectorsWeServe";
import { HEAVY_EQUIPMENT_FLEET } from "@/data";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <SectorsWeServe />
      <FeaturedFleet />
      <FleetListClient items={HEAVY_EQUIPMENT_FLEET.slice(0, 6)} />
    </>
  );
}
