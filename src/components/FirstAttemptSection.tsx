import { Target, GraduationCap, Lightbulb, BarChart3 } from "lucide-react";

const pillars = [
  { icon: Target, title: "Structured Exam Strategy", desc: "Step-by-step study plan covering all 5 CISA domains" },
  { icon: GraduationCap, title: "Experienced Trainers", desc: "Learn from CISA-certified professionals with 15+ years experience" },
  { icon: Lightbulb, title: "Focused Preparation", desc: "Methodology designed to maximize retention and recall" },
  { icon: BarChart3, title: "Practical Exam Insights", desc: "Real exam patterns, tips, and time management techniques" },
];

export const FirstAttemptSection = () => (
  <section className="bg-muted py-16 md:py-20">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-extrabold text-secondary text-center mb-4">
        Our Training Is Designed for First Attempt Success
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        92% of our students pass CISA on their first attempt. Here's why.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p, i) => (
          <div key={p.title} className="text-center space-y-3">
            <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground">
              <p.icon className="h-6 w-6" />
            </div>
            <div className="text-2xl font-extrabold text-primary">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="font-bold text-secondary">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
