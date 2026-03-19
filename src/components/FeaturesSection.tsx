import { BookOpen, Brain, MessageCircleQuestion, Linkedin, FileText, Compass } from "lucide-react";

const features = [
  { icon: BookOpen, title: "CISA Exam Prep", desc: "Aligned with latest ISACA framework and exam objectives" },
  { icon: Brain, title: "Mock Tests & Simulations", desc: "Realistic exam simulations to build confidence" },
  { icon: MessageCircleQuestion, title: "Doubt Clearing Sessions", desc: "Live Q&A with experienced CISA trainers" },
  { icon: Linkedin, title: "LinkedIn Optimization", desc: "Profile optimization for maximum recruiter visibility" },
  { icon: FileText, title: "Resume Optimization", desc: "Tailored for USA/Canada job market standards" },
  { icon: Compass, title: "Career Mentoring", desc: "Career positioning and growth guidance" },
];

export const FeaturesSection = () => (
  <section className="bg-background py-16 md:py-20">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-extrabold text-secondary text-center mb-4">
        What You Get with ZOC Learnings
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Everything you need to pass CISA and accelerate your career — all in one program.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-secondary mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
