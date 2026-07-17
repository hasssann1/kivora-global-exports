import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | KIVORA Football Export Questions" },
      { name: "description", content: "Answers to common questions about KIVORA's sourcing model, MOQs, sampling, lead times, incoterms and OEM services." },
    ],
  }),
  component: FAQPage,
});

const FAQS = [
  ["Does KIVORA own a factory?", "No. KIVORA SPORTS (PVT) LTD is a Pakistan-based export company. We source from a vetted network of manufacturing partners in Sialkot and manage supplier selection, quality control, private labeling, documentation and export logistics on behalf of our international customers."],
  ["What is your minimum order quantity?", "MOQs typically start at 300 units for stock designs and 500 units for fully custom private-label footballs. Training-gear and teamwear MOQs vary by item."],
  ["Do you provide samples?", "Yes. We offer free stock samples and paid prototypes with your artwork. Typical sampling lead time is 7–14 days."],
  ["What are your production lead times?", "Sampling in 7–14 days. Bulk orders typically ship within 30–45 days from artwork approval, depending on quantity and product mix."],
  ["What certifications do your partners support?", "FIFA Quality and FIFA Quality Pro certification are available on request through our partner network. We source from ISO 9001-aligned facilities and welcome SGS/Intertek/Bureau Veritas pre-shipment inspection."],
  ["Which incoterms do you support?", "FOB Karachi, CIF and DDP for major destinations. We manage full export documentation including commercial invoice, packing list, certificate of origin and Bill of Lading."],
  ["What payment terms do you offer?", "30% advance and 70% against BL copy for new customers. Established partners may qualify for LC or open-account terms."],
  ["Can you match a specific Pantone colour?", "Yes. Our sourcing team coordinates Pantone matching with the partner facility and shares pre-production printed swatches for your approval."],
  ["Do you offer Amazon-ready packaging?", "Yes — barcode labels, retail-ready boxes, poly bags and FBA-friendly master cartons are all supported."],
  ["Where is KIVORA based?", "Our head office is in Gujranwala, Punjab, Pakistan. Our sourcing and QA team operates on the ground in Sialkot's manufacturing cluster."],
];

function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQs" title="Frequently asked" accent="questions." description="Everything wholesalers, distributors and private-label brands ask before their first order with KIVORA." />
      <section className="container-x pb-24">
        <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-card">
          {FAQS.map(([q, a]) => (
            <details key={q} className="group p-6 open:bg-white/[0.02]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-lg">{q}</span>
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-white/15 text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
