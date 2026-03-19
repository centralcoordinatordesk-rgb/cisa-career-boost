import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const StickyMobileCTA = () => {
  const scrollToForm = () => {
    document.getElementById("final-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/95 backdrop-blur border-t border-border md:hidden">
      <Button variant="cta" size="lg" className="w-full" onClick={scrollToForm}>
        Book Free CISA Consultation
        <ArrowUp className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
};
