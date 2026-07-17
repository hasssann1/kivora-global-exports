import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/PageHero";
import { Palette, Package, Tag, Layers, Printer, Boxes, CheckCircle2 } from "lucide-react";
import stitching from "@/assets/stitching.jpg";

export const Route = createFileRoute("/oem")({
  head: () => ({
    meta: [
      { title: "OEM & Private Label | KIVORA Custom Football Sourcing" },
      { name: "description", content: "Launch your own football brand with KIVORA's OEM and private-label sourcing programme — custom logos, colours, packaging and Pantone matching from our Sialkot partner network." },
    ],
  }),
  component: OEMPage,
});

const SERVICES = [
  { icon: Tag, t: "Custom Logo Printing", d: "Single or multi-colour logo printing coordinated with our partner facilities." },
  { icon: Palette, t: "Pantone Matching", d: "Exact colour reproduction to your brand guidelines with pre-production swatches." },
  { icon: Layers, t: "Material Options", d: "PU, TPU, PVC and rubber in multiple grades and finishes across our supplier network." },
  { icon: Package, t: "Packaging Customisation", d: "Retail boxes, gift packs, poly bags, hangtags and barcodes to your artwork." },
  { icon: Printer, t: "Panel & Colour Design", d: "Custom panel design, sublimation prints and multi-colour graphics." },
  { icon: Boxes, t: "OEM Coordination", d: "Full OEM sourcing programme with a single accountable export partner." },
];

const STEPS = [
  ["01", "Brief", "You share brand assets, specification and target retail price."],
  ["02", "Sourcing", "We match the brief to the right manufacturing partner in our network."],
  ["03", "Sampling", "Prototypes produced with your logo, colours and packaging for approval."],
  ["04", "Production", "Bulk order coordinated with our partner under KIVORA quality control."],
  ["05", "Delivery", "Consolidated container shipping and documentation to your port."],
];

function OEMPage() {
  return (
    <>
      <PageHero
        eyebrow="OEM & Private Label"
        title="Your brand,"
        accent="our sourcing network."
        description="Launch a football brand with an export partner that understands international retail. From artwork approval to Amazon-ready packaging, KIVORA handles sourcing, quality and shipping end-to-end."
        image={stitching}
      />

      <section className="container-x py-24">
        <SectionEyebrow>Services</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
          Fully customisable sourcing for <span className="text-gradient-gold">every brand.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-card p-8">
              <Icon className="h-7 w-7 text-gold" />
              <h3 className="mt-6 font-display text-xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl border border-white/10 bg-[color:var(--surface)] p-10 md:p-14">
          <SectionEyebrow>Workflow</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Five steps to launch.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {STEPS.map(([n, t, d]) => (
              <div key={n} className="relative rounded-2xl border border-white/10 bg-background/40 p-6">
                <div className="font-display text-2xl text-gold">{n}</div>
                <h3 className="mt-3 font-display text-lg">{t}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex h-12 items-center rounded-full bg-gradient-gold px-7 text-sm font-semibold text-primary-foreground">
              Start a private-label project
            </Link>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {["Low minimums for pilot runs", "Barcode & retail-ready packaging", "Amazon-friendly master cartons", "Full export documentation"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-gold" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
