import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-footballs.jpg";
import thermalBonded from "@/assets/products/thermal-bonded.jpg";
import hybrid from "@/assets/products/hybrid.jpg";
import handStitched from "@/assets/products/hand-stitched.jpg";
import machineStitched from "@/assets/products/machine-stitched.jpg";
import trainingBall from "@/assets/products/training-ball.jpg";
import futsal from "@/assets/products/futsal.jpg";
import mini from "@/assets/products/mini.jpg";
import beach from "@/assets/products/beach.jpg";
import promotional from "@/assets/products/promotional.jpg";
import oemBall from "@/assets/products/oem-ball.jpg";
import gkPro from "@/assets/products/gk-pro.jpg";
import gkMatch from "@/assets/products/gk-match.jpg";
import gkTraining from "@/assets/products/gk-training.jpg";
import gkFingersave from "@/assets/products/gk-fingersave.jpg";
import gkJunior from "@/assets/products/gk-junior.jpg";
import cones from "@/assets/products/cones.jpg";
import ladder from "@/assets/products/ladder.jpg";
import hurdles from "@/assets/products/hurdles.jpg";
import poles from "@/assets/products/poles.jpg";
import resistance from "@/assets/products/resistance.jpg";
import bibs from "@/assets/products/bibs.jpg";
import armband from "@/assets/products/armband.jpg";
import bag from "@/assets/products/bag.jpg";
import pump from "@/assets/products/pump.jpg";
import net from "@/assets/products/net.jpg";

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
      { name: "Thermal Bonded Match Footballs", desc: "Zero water absorption, maximum shape retention.", img: thermalBonded },
      { name: "Hybrid Footballs", desc: "Fused and stitched construction for durability and touch.", img: hybrid },
      { name: "Hand-Stitched Footballs", desc: "Traditional craftsmanship for long-lasting play.", img: handStitched },
      { name: "Machine-Stitched Footballs", desc: "Consistent quality for training and regular play.", img: machineStitched },
      { name: "Training Footballs", desc: "Built for everyday academy and club sessions.", img: trainingBall },
      { name: "Futsal Balls", desc: "Low bounce, high control for indoor performance.", img: futsal },
      { name: "Mini Footballs", desc: "Perfect for skill training, promotions and kids.", img: mini },
      { name: "Beach Footballs", desc: "Soft-touch balls engineered for sand.", img: beach },
      { name: "Promotional Footballs", desc: "Cost-effective balls for events and branding.", img: promotional },
      { name: "Custom Printed / OEM", desc: "Your logo, panels, colors and packaging.", img: oemBall },
    ],
  },
  {
    title: "Goalkeeper Collection",
    items: [
      { name: "Professional Goalkeeper Gloves", desc: "Elite latex palms with wrap-around cuff.", img: gkPro },
      { name: "Match Goalkeeper Gloves", desc: "Balanced grip and durability for match play.", img: gkMatch },
      { name: "Training Goalkeeper Gloves", desc: "Robust build for daily training.", img: gkTraining },
      { name: "Finger Save Gloves", desc: "Integrated finger protection spines.", img: gkFingersave },
      { name: "Junior Goalkeeper Gloves", desc: "Sized for youth players.", img: gkJunior },
    ],
  },
  {
    title: "Training Equipment",
    items: [
      { name: "Training Cones & Marker Discs", desc: "High-visibility PE cones and flat discs.", img: cones },
      { name: "Agility Ladders", desc: "Adjustable rungs for footwork drills.", img: ladder },
      { name: "Speed Hurdles", desc: "Foldable and fixed hurdles in multiple heights.", img: hurdles },
      { name: "Slalom Poles", desc: "Spring-base poles for dribbling drills.", img: poles },
      { name: "Resistance Bands & Parachutes", desc: "Speed and strength development.", img: resistance },
    ],
  },
  {
    title: "Team Essentials & Accessories",
    items: [
      { name: "Training Bibs", desc: "Mesh bibs in team colors.", img: bibs },
      { name: "Captain Armbands", desc: "Elastic and Velcro closure options.", img: armband },
      { name: "Ball Carry Bags & Equipment Bags", desc: "Durable carry solutions.", img: bag },
      { name: "Ball Pumps & Pump Needles", desc: "Reliable inflation accessories.", img: pump },
      { name: "Football Nets", desc: "Match and training nets.", img: net },
    ],
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
        {GROUPS.map((g) => (
          <section key={g.title}>
            <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <SectionEyebrow>{g.title}</SectionEyebrow>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{g.title}</h2>
              </div>
              <Link to="/contact" className="text-sm font-medium text-gold hover:underline">
                Request quote →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {g.items.map((it) => (
                <Link
                  to="/contact"
                  key={it.name}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-card transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_60px_-30px_rgba(212,175,55,0.5)]"
                >
                  <div className="aspect-square overflow-hidden bg-black">
                    <img
                      src={it.img}
                      alt={`${it.name} with KIVORA branding`}
                      width={900}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3 p-5">
                    <div>
                      <h3 className="font-display text-base leading-tight">{it.name}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
                    </div>
                    <span className="mt-1 flex-none rounded-full border border-white/10 p-2 text-gold transition group-hover:border-gold/40 group-hover:bg-gold/10">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
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
    </>
  );
}