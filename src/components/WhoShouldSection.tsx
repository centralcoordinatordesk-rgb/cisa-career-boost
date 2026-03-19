import { ShieldCheck, Lock, TrendingUp, ClipboardCheck, Globe } from "lucide-react";

const audiences = [
  { icon: ShieldCheck, label: "IT Professionals" },
  { icon: Lock, label: "Security Professionals" },
  { icon: TrendingUp, label: "Risk and Compliance Professionals" },
  { icon: ClipboardCheck, label: "Audit Managers" },
  { icon: Globe, label: "Professionals planning career growth in USA or Canada" },
];

export const WhoShouldSection = () => (
  <section className="bg-background py-16 md:py-20">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-extrabold text-secondary text-center mb-4">
        Who Should Take This Course
      </h2>
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
        If you fall into any of these categories, CISA certification can transform your career trajectory.
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {audiences.map((a) => (
          <div
            key={a.label}
            className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-sm"
          >
            <a.icon className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">{a.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
