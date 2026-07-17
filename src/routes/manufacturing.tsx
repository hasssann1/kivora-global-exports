import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/PageHero";
import { Search, ClipboardCheck, Handshake, Boxes, ShieldCheck, FileCheck2, Container, Users } from "lucide-react";
import manufacturing from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Sourcing & Manufacturing Partners | KIVORA SPORTS" },
      { name: "description", content: "How KIVORA sources football equipment from vetted manufacturing partners in Sialkot, Pakistan — supplier verification, quality inspection and export coordination." },
    ],
  }),
  component: SourcingPage,
});

const STAGES = [
  { icon: Search, t: "Supplier Discovery", d: "We identify manufacturing partners in Sialkot with proven capability for your product category." },
  { icon: ShieldCheck, t: "Supplier Verification", d: "Facility audit, compliance review and past-order references before any partner is approved." },
  { icon: Handshake, t: "Partner Onboarding", d: "Commercial terms, capacity commitments and dedicated production windows secured." },
  { icon: ClipboardCheck, t: "Spec & Sampling", d: "We translate your brief into technical specifications and coordinate prototypes with the partner." },
  { icon: Boxes, t: "Production Coordination", d: "Bulk orders scheduled, materials confirmed and milestones tracked on your behalf." },
  { icon: ShieldCheck, t: "Quality Inspection", d: "In-line and pre-shipment QC by KIVORA inspectors at the partner facility." },
  { icon: FileCheck2, t: "Export Documentation", d: "Invoice, packing list, certificate of origin, form-E and inspection reports prepared." },
  { icon: Container, t: "Freight & Shipping", d: "Container consolidation and dispatch via Karachi Port on FOB, CIF or DDP terms." },
];

function SourcingPage() {
  return (
    <>
      <PageHero
        eyebrow="Sourcing & Partners"
        title="A vetted network."
        accent="A single point of accountability."
        description="KIVORA does not own a factory. Instead, we manage a curated network of certified manufacturing partners in Sialkot and take full responsibility for sourcing, quality and export — so international buyers deal with one accountable trade partner."
        image={manufacturing}
      />

      <section className="container-x py-24">
        <div className="mb-14 max-w-2xl">
          <SectionEyebrow>How We Work</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Eight stages from brief to <span className="text-gradient-gold">delivered container.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our sourcing team lives between our Gujranwala head office and Sialkot's manufacturing cluster, giving us daily oversight of every partner facility we work with.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="container-x pb-16">
        <div className="rounded-3xl border border-white/10 bg-[color:var(--surface)] p-10 md:p-14">
          <SectionEyebrow>Our Partner Network</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Sialkot — the football capital of the world.
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
            Sialkot has produced footballs for over a century and today accounts for a significant share of the world's match-quality footballs. KIVORA partners exclusively with facilities that demonstrate consistent quality, ethical labour practices and the capacity to handle export-scale orders.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Users, t: "Curated Partner List", d: "Facilities audited for capability, compliance and consistency." },
              { icon: ShieldCheck, t: "On-Site Presence", d: "KIVORA staff on the production floor throughout your order." },
              { icon: FileCheck2, t: "Documented Standards", d: "Written specs, approved samples and signed QC checklists per order." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-background/40 p-6">
                <Icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-display text-lg">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-[color:var(--surface)] p-10 md:grid-cols-3 md:p-14">
          {[
            ["40+", "Countries served worldwide"],
            ["30–45 days", "Typical bulk order lead time"],
            ["100%", "Orders inspected before shipment"],
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
