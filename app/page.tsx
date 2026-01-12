import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import TrustBar from "@/components/TrustBar";
import PainSolution from "@/components/PainSolution";
import FeatureGrid from "@/components/FeatureGrid";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import BonusSection from "@/components/BonusSection";
import FAQ from "@/components/FAQ";
import UrgencySection from "@/components/UrgencySection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <PainSolution />
      <FeatureGrid />
      <Portfolio />
      <WhyChooseUs />
      <BonusSection />
      <FAQ />
      <UrgencySection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
