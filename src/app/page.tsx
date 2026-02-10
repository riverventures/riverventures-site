import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Portfolio />
      <Services />
      <Team />
      <CTA />
    </main>
  );
}