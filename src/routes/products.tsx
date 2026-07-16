import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-footballs.jpg";
import productBall from "@/assets/product-ball.jpg";
import trainingGear from "@/assets/training-gear.jpg";
import stitching from "@/assets/stitching.jpg";
import manufacturing from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | KIVORA Footballs & Training Equipment" },
      { name: "description", content: "Explore KIVORA's full range: match, training, professional, promotional, futsal and mini footballs plus goalkeeper gloves and training accessories." },
    ],
  }),
  component: ProductsPage,
});

const GROUPS = [
  {
    title: "Football Collection",
    items: [
      { name: "Thermal Bonded Match Footballs", desc: "Zero water absorption, maximum shape retention." },
      { name: "Hybrid Footballs", desc: "Fused and stitched construction for durability and touch." },
      { name: "Hand-Stitched Footballs", desc: "Traditional craftsmanship for long-lasting play." },
      { name: "Machine-Stitched Footballs", desc: "Consistent quality for training and regular play." },
      { name: "Training Footballs", desc: "Built for everyday academy and club sessions." },
      { name: "Futsal Balls", desc: "Low bounce, high control for indoor performance." },
      { name: "Mini Footballs", desc: "Perfect for skill training, promotions and kids." },
      { name: "Beach Footballs", desc: "Soft-touch balls engineered for sand." },
      { name: "Promotional Footballs", desc: "Cost-effective balls for events and branding." },
      { name: "Custom Printed / OEM", desc: "Your logo, panels, colors and packaging." },
    ],
    img: hero,
  },
  {
    title: "Goalkeeper Collection",
    items: [
      { name: "Professional Goalkeeper Gloves", desc: "Elite latex palms with wrap-around cuff." },
      { name: "Match Goalkeeper Gloves", desc: "Balanced grip and durability for match play." },
      { name: "Training Goalkeeper Gloves", desc: "Robust build for daily training." },
      { name: "Finger Save Gloves", desc: "Integrated finger protection spines." },
      { name: "Junior Goalkeeper Gloves", desc: "Sized for youth players." },
    ],
    img: trainingGear,
  },
  {
    title: "Training Equipment",
    items: [
      { name: "Training Cones & Marker Discs", desc: "High-visibility PE cones and flat discs." },
      { name: "Agility Ladders", desc: "Adjustable rungs for footwork drills." },
      { name: "Speed Hurdles", desc: "Foldable and fixed hurdles in multiple heights." },
      { name: "Slalom Poles", desc: "Spring-base poles for dribbling drills." },
      { name: "Resistance Bands & Parachutes", desc: "Speed and strength development." },
    ],
    img: manufacturing,
  },
  {
    title: "Team Essentials & Accessories",
    items: [
      { name: "Training Bibs", desc: "Mesh bibs in team colors." },
      { name: "Captain Armbands", desc: "Elastic and Velcro closure options." },
      { name: "Ball Carry Bags & Equipment Bags", desc: "Durable carry solutions." },
      { name: "Ball Pumps & Pump Needles", desc: "Reliable inflation accessories." },
      { name: "Football Nets", desc: "Match and training nets." },
    ],
    img: stitching,
  },
];

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A complete catalog"
        accent="engineered for export."
        description="Every product available with custom branding, packaging and specification. MOQs and lead times available on request."
        image={hero}
      />

      <div className="container-x space-y-24 py-20">
        {GROUPS.map((g, i) => (
          <section key={g.title}>
            <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <SectionEyebrow>{g.title}</SectionEyebrow>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{g.title}</h2>
                <div className="mt-8 grid gap-3">
                  {g.items.map((it) => (
                    <div key={it.name} className="group flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-card p-5 transition hover:border-gold/40">
                      <div>
                        <h3 className="font-display text-lg">{it.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                      </div>
                      <Link to="/contact" className="mt-1 flex-none rounded-full border border-white/10 p-2 text-gold transition group-hover:border-gold/40 group-hover:bg-gold/10">
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src={g.img} alt={g.title} className="h-[540px] w-full object-cover" loading="lazy" />
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="container-x pb-24">
        <div className="rounded-3xl border border-gold/20 bg-[color:var(--surface)] p-10 text-center md:p-16">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Need a custom spec? <span className="text-gradient-gold">We build to order.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Send us your target sizes, panels, materials, print artwork and MOQ. Our team will respond with a detailed quote and sampling timeline.
          </p>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center rounded-full bg-gradient-gold px-8 text-sm font-semibold text-primary-foreground">
            Request Quotation
          </Link>
        </div>
      </section>

      <div className="hidden">{productBall && ""}</div>
    </>
  );
}