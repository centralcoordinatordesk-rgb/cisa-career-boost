import { Button } from "@/components/ui/button";
import { Award, Globe, HeartHandshake, Leaf } from "lucide-react";
import { LeadForm } from "./LeadForm";
import zocLogo from "@/assets/zoc-logo.png";

const badges = [
  { icon: Award, label: "18+ Years Training Experience" },
  { icon: Globe, label: "Global Certification Experts" },
  { icon: HeartHandshake, label: "Career Support Included" },
];

export const HeroSection = () => {
  const scrollToForm = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Header */}
      <header className="bg-background sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <img src={zocLogo} alt="ZOC Learnings Canada" className="h-10 md:h-12 w-auto" />
          <a
            href="tel:+1"
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Call Us
          </a>
        </div>
        <div className="border-b border-border" />
      </header>

      <section className="bg-background py-12 md:py-20">
        <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5">
              <Leaf className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent-foreground">Most Preferred Institute</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] leading-tight font-extrabold text-secondary">
              Pass CISA Certification in Your First Attempt —{" "}
              <span className="text-primary">Secure Your Career</span> in an Uncertain Job Market
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Live online CISA certification training designed for professionals in the USA and Canada.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2.5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20">
                    <b.icon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Golden leaf stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "5000+", label: "Professionals Trained" },
                { value: "92%", label: "First Attempt Pass Rate" },
                { value: "40+", label: "Countries Served" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-lg bg-accent/10 border border-accent/30">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Leaf className="h-3.5 w-3.5 text-accent" />
                    <span className="text-xl md:text-2xl font-extrabold text-secondary">{stat.value}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="cta" size="lg" onClick={() => scrollToForm("final-form")}>
                Book Free CISA Consultation
              </Button>
              <Button variant="ctaOutline" size="lg" onClick={() => scrollToForm("final-form")}>
                Get Course Details
              </Button>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:sticky lg:top-8">
            <LeadForm
              title="Get CISA Course Details"
              subtitle="Limited seats for upcoming batch"
              ctaText="Get Course Details"
            />
          </div>
        </div>
      </div>
    </section>
    </>
};
