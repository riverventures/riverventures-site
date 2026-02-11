import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import RiverDivider from "@/components/RiverDivider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <RiverDivider />
      <Portfolio />
      <RiverDivider flip />
      <Services />
      <RiverDivider />
      <Team />
      <RiverDivider flip />
      <CTA />
    </main>
  );
}
