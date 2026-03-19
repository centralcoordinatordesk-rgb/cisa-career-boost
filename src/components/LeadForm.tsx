import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LeadFormProps {
  title: string;
  subtitle?: string;
  ctaText: string;
}

export const LeadForm = ({ title, subtitle, ctaText }: LeadFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-lg">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-secondary mb-2">Thank You!</h3>
        <p className="text-muted-foreground">Our team will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-lg space-y-4">
      <div>
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
        {subtitle && (
          <p className="text-sm text-primary font-semibold mt-1">🔥 {subtitle}</p>
        )}
      </div>

      <input
        required
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        required
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        required
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <select
        required
        value={form.experience}
        onChange={(e) => setForm({ ...form, experience: e.target.value })}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring text-muted-foreground"
      >
        <option value="">Years of Experience</option>
        <option value="0-2">0–2 years</option>
        <option value="3-5">3–5 years</option>
        <option value="5-10">5–10 years</option>
        <option value="10+">10+ years</option>
      </select>

      <Button variant="cta" size="lg" className="w-full" type="submit">
        {ctaText}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        No spam. Your data is secure with us.
      </p>
    </form>
  );
};
