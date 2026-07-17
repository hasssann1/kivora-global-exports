import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/PageHero";
import { ShieldCheck, ClipboardCheck, Search, Package, Camera, FileCheck2 } from "lucide-react";
import manufacturing from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Assurance | KIVORA Export Inspection Process" },
      { name: "description", content: "KIVORA quality assurance: supplier verification, in-line inspection at partner facilities, pre-shipment QC and third-party audit coordination." },
    ],
  }),
  component: QualityPage,
});

const STAGES = [
  { icon: Search, t: "Supplier Verification", d: "Every manufacturing partner is audited for capability, compliance and quality history before we place an order." },
  { icon: ClipboardCheck, t: "Pre-Production Checks", d: "Approved samples, materials and print artwork are locked and referenced against the bulk order." },
  { icon: ShieldCheck, t: "In-Line Inspection", d: "KIVORA inspectors visit partner facilities during production to catch issues before they scale." },
  { icon: Camera, t: "Pre-Shipment QC", d: "AQL-based inspection on the finished goods with photo and video reports shared with the buyer." },
  { icon: Package, t: "Packaging Verification", d: "Barcodes, retail packaging, master cartons and labelling checked against buyer specifications." },
  { icon: FileCheck2, t: "Third-Party Audits", d: "SGS, Intertek, Bureau Veritas or buyer-nominated inspectors welcomed at pre-shipment." },
];

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Assurance"
        title="Independent inspection"
        accent="on every export order."
        description="Because KIVORA is your export partner — not the factory — our quality team acts on your behalf. We inspect at the source so you receive exactly what was approved."
        image={manufacturing}
      />

      <section className="container-x py-24">
        <SectionEyebrow>Our QA Process</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
          Six checkpoints between your PO and the <span className="text-gradient-gold">container seal.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STAGES.map(({ icon: Icon, t, d }) => (
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
            ["FIFA Quality", "Certification available on request through partner facilities"],
            ["ISO 9001", "Sourcing from ISO-aligned manufacturing partners"],
            ["Third-Party QC", "SGS / Intertek / Bureau Veritas pre-shipment inspection welcomed"],
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
