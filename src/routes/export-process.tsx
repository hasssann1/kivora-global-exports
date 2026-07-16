import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/PageHero";
import exportImg from "@/assets/export.jpg";

export const Route = createFileRoute("/export-process")({
  head: () => ({
    meta: [
      { title: "Export Process | KIVORA Worldwide Football Shipping" },
      { name: "description", content: "From inquiry to delivery: KIVORA's end-to-end export workflow for wholesalers and private-label buyers worldwide." },
    ],
  }),
  component: ExportPage,
});

const STEPS = [
  ["Inquiry", "You share requirements, target quantities and specifications."],
  ["Quotation", "We respond within 24 hours with pricing, MOQ and timelines."],
  ["Sampling", "Free stock or paid custom prototypes shipped for evaluation."],
  ["Approval", "You sign off on sample, artwork, packaging and payment terms."],
  ["Production", "Bulk production begins with live progress updates."],
  ["Inspection", "In-house QC and optional third-party pre-shipment audit."],
  ["Packaging", "Retail-ready packaging and export-grade master cartons."],
  ["Shipping", "FOB Karachi, CIF or DDP by sea or air freight."],
  ["Documentation", "Invoice, packing list, COO, BL and inspection reports."],
  ["Delivery", "Container arrives at your port; post-delivery support included."],
];

function ExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Export Process"
        title="Ten steps from inquiry"
        accent="to delivered container."
        description="A clear, transparent workflow so international buyers know exactly what to expect at every stage."
        image={exportImg}
      />

      <section className="container-x py-24">
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-gold/60 via-white/10 to-transparent md:left-1/2" />
          <ol className="space-y-10">
            {STEPS.map(([t, d], i) => {
              const left = i % 2 === 0;
              return (
                <li key={t} className="relative md:grid md:grid-cols-2 md:gap-12">
                  <div className={`ml-16 md:ml-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Step {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-2 font-display text-2xl">{t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                  </div>
                  <span className="absolute left-6 top-1 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-gold shadow-[0_0_0_6px_oklch(0.78_0.14_82/0.15)] md:left-1/2" />
                </li>
              );
            })}
          </ol>
        </div>
        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex h-12 items-center rounded-full bg-gradient-gold px-8 text-sm font-semibold text-primary-foreground">
            Start your inquiry
          </Link>
        </div>
      </section>
    </>
  );
}