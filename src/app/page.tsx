/**
 * Página inicial — composição de seções (padrão didático).
 * Cada seção é um componente isolado em /components/sections.
 */

import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Services } from "@/components/sections/Services";
import { LogisticsDashboard } from "@/components/sections/LogisticsDashboard";
import { TrackingSection } from "@/components/sections/TrackingSection";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Differentiators } from "@/components/sections/Differentiators";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Services />
      <LogisticsDashboard />
      <TrackingSection />
      <About />
      <Testimonials />
      <Differentiators />
      <FinalCta />
    </>
  );
}
