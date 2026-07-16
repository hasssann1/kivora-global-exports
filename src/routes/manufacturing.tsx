import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/PageHero";
import { Layers, Scissors, Printer, Palette, ShieldCheck, Wind, Weight, Ruler, Package, Container } from "lucide-react";
import manufacturing from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing | KIVORA Football Production Process" },
      { name: "description", content: "Vertically integrated football manufacturing: raw material, panel cutting, printing, stitching, bladder insertion, QC and export." },
    ],
  }),
  component: ManufacturingPage,
});

const STAGES = [
  { icon: Layers, t: "Raw Materials", d: "PU, TPU, PVC and rubber sourced from qualified suppliers." },
  { icon: Scissors, t: "Panel Cutting", d: "Die-cut panels for perfect symmetry and consistency." },
  { icon: Printer, t: "Printing", d: "Multi-color offset and screen printing with Pantone matching." },
  { icon: Palette, t: "Design Prep", d: "Artwork preparation, color separation and prototype approval." },
  { icon: Layers, t: "Bonding & Stitching", d: "Thermal bonding, machine or hand stitching by trained artisans." },
  { icon: Wind, t: "Bladder Insertion", d: "Butyl and latex bladders installed with precision seals." },
  { icon: ShieldCheck, t: "Quality Inspection", d: "Panel alignment, seam integrity and finish inspected 100%." },
  { icon: Wind, t: "Inflation Testing", d: "Air-retention and pressure stability verified." },
  { icon: Weight, t: "Weight Testing", d: "Every batch confirmed within FIFA weight tolerances." },
  { icon: Ruler, t: "Circumference Testing", d: "Sphericity and circumference measured on all sizes." },
  { icon: Package, t: "Packaging", d: "Custom retail, master carton and gift box packaging." },
  { icon: Container, t: "Container Loading", d: "Optimized container loading for FOB, CIF and DDP shipments." },
];

function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="A vertically integrated"
        accent="production line."
        description="Every stage of the football lifecycle happens under one roof, giving us control over quality, cost and delivery timelines."
        image={manufacturing}
      />

      <section className="container-x py-24">
        <div className="mb-14 max-w-2xl">
          <SectionEyebrow>Process</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Twelve stages. <span className="text-gradient-gold">One standard.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STAGES.map(({ icon: Icon, t, d }, i) => (
            <div key={t} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition hover:border-gold/40">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-gold" />
                <span className="font-display text-sm text-gold/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-[color:var(--surface)] p-10 md:grid-cols-3 md:p-14">
          {[
            ["2M+", "Units / year capacity"],
            ["45 days", "Typical bulk lead time"],
            ["100%", "In-line QC coverage"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-4xl text-gradient-gold md:text-5xl">{v}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}