import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-footballs.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import exportImg from "@/assets/export.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal | KIVORA Insights on Football Manufacturing" },
      { name: "description", content: "Insights on football manufacturing, private-label branding and global export from KIVORA SPORTS." },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  { t: "Thermal Bonded vs Hand Stitched: Which Football Suits Your Brand?", d: "A buyer's guide to construction methods, price points and use cases.", img: hero, tag: "Buyer Guide", date: "Mar 2026" },
  { t: "Inside a Sialkot Football Factory: How Quality Is Really Built", d: "A behind-the-scenes look at the twelve stages of premium production.", img: manufacturing, tag: "Manufacturing", date: "Feb 2026" },
  { t: "Launching a Private-Label Football Brand on Amazon EU", d: "MOQs, packaging, compliance and the path from prototype to listing.", img: exportImg, tag: "Private Label", date: "Jan 2026" },
];

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Journal" title="Insights for" accent="serious buyers." description="Perspectives on football manufacturing, quality control, private-label branding and global export." />
      <section className="container-x pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.t} className="group overflow-hidden rounded-2xl border border-white/10 bg-card transition hover:border-gold/30">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.t} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold">
                  <span>{p.tag}</span><span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl leading-snug">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Read <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}