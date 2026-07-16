import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/PageHero";
import { Palette, Package, Tag, Layers, Printer, Boxes, CheckCircle2 } from "lucide-react";
import stitching from "@/assets/stitching.jpg";

export const Route = createFileRoute("/oem")({
  head: () => ({
    meta: [
      { title: "OEM & Private Label | KIVORA Custom Football Manufacturing" },
      { name: "description", content: "Launch your own football brand with KIVORA's OEM and private-label program: custom logo, colors, packaging and Pantone matching." },
    ],
  }),
  component: OEMPage,
});

const SERVICES = [
  { icon: Tag, t: "Custom Logo Printing", d: "Single or multi-color logo printing on panels or bladder." },
  { icon: Palette, t: "Pantone Matching", d: "Exact color reproduction to your brand guidelines." },
  { icon: Layers, t: "Material Options", d: "PU, TPU, PVC and rubber in multiple grades and finishes." },
  { icon: Package, t: "Packaging Customization", d: "Retail boxes, gift packs, poly bags, hangtags and barcodes." },
  { icon: Printer, t: "Panel & Color Design", d: "Custom panel design, sublimation and graphic prints." },
  { icon: Boxes, t: "OEM & ODM", d: "Full OEM production plus ODM support with our design team." },
];

const STEPS = [
  ["01", "Brief", "You share brand assets, spec and target retail price."],
  ["02", "Sampling", "We produce prototypes with your logo and packaging."],
  ["03", "Approval", "Sign-off on samples, colors and packaging."],
  ["04", "Production", "Bulk production under strict in-line QC."],
  ["05", "Delivery", "Consolidated container shipping to your port."],
];

function OEMPage() {
  return (
    <>
      <PageHero
        eyebrow="OEM & Private Label"
        title="Your brand,"
        accent="our production line."
        description="Launch a football brand with a manufacturer that understands the export market. From artwork to Amazon-ready packaging, we handle it all."
        image={stitching}
      />

      <section className="container-x py-24">
        <SectionEyebrow>Services</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
          Fully customizable production for <span className="text-gradient-gold">every brand.</span>
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
              Start a private label project
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