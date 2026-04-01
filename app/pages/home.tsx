import { Link } from "react-router";
import type { Route } from "../pages/+types/home";
import Hero from "~/components/hero";
import FeaturesSection from "~/components/featureCard";
import StatsSection from "~/components/stateSection";
import CTASection from "~/components/ctaSection";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Modern Quiz App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
   
    <div className=" w-[1280px] mx-auto">
      <Hero />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}

