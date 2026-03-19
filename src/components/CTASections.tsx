import { Button } from "@/components/ui/button";
import { LeadForm } from "./LeadForm";

export const CTASection = () => {
  const scrollToForm = () => {
    document.getElementById("final-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground">
          Take the Next Step in Your Career with CISA Certification
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto">
          Join 5000+ professionals who transformed their careers with ZOC Learnings. Limited seats available.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="cta"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            onClick={scrollToForm}
          >
            Book Free Consultation
          </Button>
          <Button
            size="lg"
            variant="ctaOutline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            onClick={scrollToForm}
          >
            Get Course Details
          </Button>
        </div>
      </div>
    </section>
  );
};

export const FinalFormSection = () => (
  <section id="final-form" className="bg-muted py-16 md:py-20">
    <div className="container">
      <div className="max-w-md mx-auto">
        <LeadForm
          title="Get Your CISA Certification Roadmap"
          subtitle="Limited seats for upcoming batch"
          ctaText="Get Course Details"
        />
      </div>
    </div>
  </section>
);
