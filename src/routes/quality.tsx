import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/PageHero";
import { ShieldCheck, Wind, Circle, Waves, Ruler, Weight, Droplets, ClipboardCheck } from "lucide-react";
import manufacturing from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Control | KIVORA FIFA-Standard Testing" },
      { name: "description", content: "KIVORA quality control: FIFA-standard testing of air retention, sphericity, bounce, water absorption, weight and abrasion." },
    ],
  }),
  component: QualityPage,
});

const TESTS = [
  { icon: Wind, t: "Air Retention", d: "Balls tested for pressure loss over 72 hours to FIFA thresholds." },
  { icon: Circle, t: "Shape Retention", d: "Post-fatigue sphericity measured after 2,000 impact cycles." },
  { icon: Waves, t: "Bounce Testing", d: "Rebound height verified at controlled temperature and pressure." },
  { icon: Droplets, t: "Water Absorption", d: "Weight increase measured under simulated wet conditions." },
  { icon: ShieldCheck, t: "Abrasion Resistance", d: "Surface wear tested to ensure long field life." },
  { icon: Weight, t: "Weight Tolerance", d: "Every batch verified within FIFA weight windows." },
  { icon: Ruler, t: "Circumference", d: "Sphericity and circumference measured on statistical samples." },
  { icon: ClipboardCheck, t: "In-line Inspection", d: "QC checkpoints at every production stage, not just final." },
];

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Control"
        title="FIFA-standard testing"
        accent="on every production run."
        description="Our QC lab replicates FIFA testing protocols so buyers can be confident that every KIVORA ball meets its stated specification."
        image={manufacturing}
      />

      <section className="container-x py-24">
        <SectionEyebrow>Testing</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
          Every ball, every batch, <span className="text-gradient-gold">tested to spec.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTS.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-card p-6">
              <Icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-display text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-8 rounded-3xl border border-gold/20 bg-[color:var(--surface)] p-10 md:grid-cols-3 md:p-14">
          {[
            ["FIFA Quality", "Certification available on request"],
            ["ISO 9001", "Quality management aligned"],
            ["Third-Party", "SGS / Intertek pre-shipment inspection welcome"],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="font-display text-2xl text-gradient-gold">{t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}