import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/PageHero";
import { Target, Compass, Heart, Users } from "lucide-react";
import manufacturing from "@/assets/manufacturing.jpg";
import stitching from "@/assets/stitching.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KIVORA | Premium Football Manufacturer in Sialkot" },
      { name: "description", content: "KIVORA SPORTS is a premium football manufacturer and global exporter based in Sialkot, Pakistan. Learn about our story, mission and values." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Crafted in Sialkot."
        accent="Trusted worldwide."
        description="KIVORA SPORTS (PRIVATE) LIMITED has been engineering premium footballs and training equipment for over a decade — bringing Pakistani craftsmanship to elite buyers across the globe."
        image={manufacturing}
      />

      <section className="container-x grid gap-16 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionEyebrow>Our Story</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            A legacy of <span className="text-gradient-gold">craftsmanship.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Sialkot has stitched the world's footballs for a century. KIVORA
            builds on that heritage with modern engineering — thermal bonding,
            hybrid construction, precision printing and rigorous QC — so our
            partners receive products that perform at the highest level.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today we serve distributors, national federations, academies and
            private-label brands with a portfolio spanning match balls,
            training gear and goalkeeper equipment.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img src={stitching} alt="Hand stitching" className="h-[520px] w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Target, t: "Mission", d: "Deliver premium sports equipment that helps players perform at their best." },
            { icon: Compass, t: "Vision", d: "Be the most trusted football manufacturing partner for global brands." },
            { icon: Heart, t: "Values", d: "Integrity, craftsmanship, precision and long-term partnerships." },
            { icon: Users, t: "Our People", d: "A team of 200+ skilled artisans, engineers and export specialists." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-card p-8">
              <Icon className="h-8 w-8 text-gold" />
              <h3 className="mt-6 font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Ready to work with us?</h2>
        <Link to="/contact" className="mt-6 inline-flex h-12 items-center rounded-full bg-gradient-gold px-8 text-sm font-semibold text-primary-foreground">
          Start a conversation
        </Link>
      </section>
    </>
  );
}