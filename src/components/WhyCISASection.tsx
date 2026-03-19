import { Bot, ShieldCheck, TrendingUp, Users } from "lucide-react";

const reasons = [
  { icon: Bot, text: "AI is transforming job roles — stay relevant with certified expertise" },
  { icon: ShieldCheck, text: "Companies prefer certified auditors and risk managers" },
  { icon: TrendingUp, text: "CISA certification increases credibility in global markets" },
  { icon: Users, text: "Helps professionals move into leadership roles" },
];

export const WhyCISASection = () => (
  <section className="bg-secondary py-16 md:py-20">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-foreground text-center mb-4">
        Why Professionals Are Getting CISA Certified in 2026
      </h2>
      <p className="text-center text-secondary-foreground/70 max-w-2xl mx-auto mb-12">
        In an era of AI disruption and increasing competition, CISA is your career shield.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {reasons.map((r) => (
          <div key={r.text} className="flex items-start gap-4 rounded-xl bg-secondary-foreground/5 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
              <r.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <p className="text-sm text-secondary-foreground/90 leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
