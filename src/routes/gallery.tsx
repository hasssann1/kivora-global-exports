import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import hero from "@/assets/hero-footballs.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import stitching from "@/assets/stitching.jpg";
import exportImg from "@/assets/export.jpg";
import productBall from "@/assets/product-ball.jpg";
import trainingGear from "@/assets/training-gear.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | KIVORA Facility, Products & Export" },
      { name: "description", content: "A visual tour of KIVORA's facility, craftsmanship, products and worldwide export operations." },
    ],
  }),
  component: GalleryPage,
});

const IMGS = [
  { src: hero, alt: "Match footballs", cls: "row-span-2" },
  { src: manufacturing, alt: "Manufacturing floor" },
  { src: stitching, alt: "Hand stitching" },
  { src: exportImg, alt: "Export containers", cls: "col-span-2" },
  { src: productBall, alt: "Signature ball" },
  { src: trainingGear, alt: "Training gear" },
];

function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Inside" accent="Kivora." description="A visual tour of our facility, craftsmanship and export operations." />
      <section className="container-x pb-24">
        <div className="grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-3">
          {IMGS.map((i, idx) => (
            <div key={idx} className={`group relative overflow-hidden rounded-2xl border border-white/10 ${i.cls ?? ""}`}>
              <img src={i.src} alt={i.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-4 text-sm text-foreground opacity-0 transition group-hover:opacity-100">
                {i.alt}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}