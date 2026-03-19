import { HeroSection } from "@/components/HeroSection";
import { WhyCISASection } from "@/components/WhyCISASection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FirstAttemptSection } from "@/components/FirstAttemptSection";
import { InfographicsSection } from "@/components/InfographicsSection";
import { WhoShouldSection } from "@/components/WhoShouldSection";
import { CTASection, FinalFormSection } from "@/components/CTASections";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Footer } from "@/components/Footer";

const Index = () => (
  <main className="pb-16 md:pb-0">
    <HeroSection />
    <WhyCISASection />
    <FeaturesSection />
    <InfographicsSection />
    <FirstAttemptSection />
    <WhoShouldSection />
    <CTASection />
    <FinalFormSection />
    <Footer />
    <StickyMobileCTA />
  </main>
);

export default Index;
