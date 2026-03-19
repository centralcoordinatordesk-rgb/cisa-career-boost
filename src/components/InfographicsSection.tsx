import { Briefcase, ShieldCheck, Search, BarChart3, Database, ClipboardList } from "lucide-react";

const jobRoles = [
  { icon: ShieldCheck, role: "IS Auditor", salary: "$95K–$130K", demand: 92 },
  { icon: Briefcase, role: "IT Audit Manager", salary: "$120K–$165K", demand: 88 },
  { icon: Search, role: "Compliance Analyst", salary: "$85K–$115K", demand: 85 },
  { icon: BarChart3, role: "Risk Manager", salary: "$110K–$150K", demand: 90 },
  { icon: Database, role: "IT Governance Lead", salary: "$125K–$170K", demand: 82 },
  { icon: ClipboardList, role: "Internal Auditor", salary: "$80K–$120K", demand: 78 },
];

const comparisons = [
  { label: "Average Salary Increase", without: "3–5%", with: "18–25%" },
  { label: "Interview Callback Rate", without: "12%", with: "38%" },
  { label: "Leadership Eligibility", without: "Limited", with: "Preferred" },
  { label: "Global Recognition", without: "Regional", with: "160+ Countries" },
];

export const InfographicsSection = () => (
  <section className="bg-secondary py-16 md:py-20">
    <div className="container space-y-16">
      {/* Horizontal Bar Chart - Job Roles */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-foreground text-center mb-3">
          Typical CISA Job Roles & Demand
        </h2>
        <p className="text-center text-secondary-foreground/70 mb-10 max-w-xl mx-auto">
          CISA opens doors to high-paying roles across industries
        </p>

        <div className="space-y-4 max-w-2xl mx-auto">
          {jobRoles.map((j) => (
            <div key={j.role} className="flex items-center gap-4">
              <div className="flex items-center gap-2 w-44 shrink-0">
                <j.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">{j.role}</span>
              </div>
              <div className="flex-1 relative">
                <div className="h-8 rounded-md bg-secondary-foreground/10 overflow-hidden">
                  <div
                    className="h-full rounded-md bg-primary flex items-center justify-end pr-3 transition-all"
                    style={{ width: `${j.demand}%` }}
                  >
                    <span className="text-xs font-bold text-primary-foreground">{j.demand}%</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-accent w-28 text-right">{j.salary}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-foreground text-center mb-3">
          CISA Certified vs Non-Certified
        </h2>
        <p className="text-center text-secondary-foreground/70 mb-10 max-w-xl mx-auto">
          See the measurable career impact of getting CISA certified
        </p>

        <div className="max-w-2xl mx-auto rounded-xl overflow-hidden border border-secondary-foreground/10">
          <div className="grid grid-cols-3 bg-secondary-foreground/10">
            <div className="p-4 text-sm font-bold text-secondary-foreground">Metric</div>
            <div className="p-4 text-sm font-bold text-secondary-foreground/60 text-center">Without CISA</div>
            <div className="p-4 text-sm font-bold text-accent text-center">With CISA ✓</div>
          </div>
          {comparisons.map((c, i) => (
            <div
              key={c.label}
              className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-secondary-foreground/5" : ""}`}
            >
              <div className="p-4 text-sm text-secondary-foreground/90">{c.label}</div>
              <div className="p-4 text-sm text-secondary-foreground/50 text-center">{c.without}</div>
              <div className="p-4 text-sm font-semibold text-accent text-center">{c.with}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
