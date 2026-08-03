import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/PageHero";
import { Target, Compass, ShieldCheck, Globe2, Handshake, Award, Truck, Users } from "lucide-react";
import manufacturing from "@/assets/manufacturing.jpg";
import stitching from "@/assets/stitching.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KIVORA | Pakistan-Based Football Equipment Exporter" },
      { name: "description", content: "KIVORA SPORTS (PVT) LTD is a Gujranwala-based export company connecting global buyers with trusted football manufacturing partners in Sialkot, Pakistan." },
      { property: "og:title", content: "About KIVORA | Pakistan-Based Football Equipment Exporter" },
      { property: "og:description", content: "KIVORA SPORTS (PVT) LTD is a Gujranwala-based export company connecting global buyers with trusted football manufacturing partners in Sialkot, Pakistan." },
      { property: "og:url", content: "https://kivora-global-exports.lovable.app/about" },
      { name: "twitter:title", content: "About KIVORA | Pakistan-Based Football Equipment Exporter" },
      { name: "twitter:description", content: "KIVORA SPORTS (PVT) LTD is a Gujranwala-based export company connecting global buyers with trusted football manufacturing partners in Sialkot, Pakistan." },
    ],
    links: [{ rel: "canonical", href: "https://kivora-global-exports.lovable.app/about" }],
  }),
  component: AboutPage,
});

const WHY = [
  { icon: Handshake, t: "Trusted Supplier Network", d: "A vetted network of certified manufacturing partners across Sialkot." },
  { icon: Globe2, t: "Export Expertise", d: "End-to-end handling of documentation, incoterms and international logistics." },
  { icon: ShieldCheck, t: "Strict Quality Control", d: "On-site inspection at partner facilities and pre-shipment QC on every order." },
  { icon: Award, t: "Competitive Pricing", d: "Direct-from-source pricing without middlemen or agency mark-ups." },
  { icon: Target, t: "OEM & Private Label", d: "Custom logo, packaging and specifications tailored to your brand." },
  { icon: Truck, t: "Reliable Shipping", d: "FOB, CIF and DDP shipments coordinated via Karachi Port worldwide." },
  { icon: Users, t: "Dedicated Support", d: "A single export account manager from inquiry through post-delivery." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KIVORA"
        title="Your export partner"
        accent="for Pakistani football gear."
        description="KIVORA SPORTS (PRIVATE) LIMITED is a Pakistan-based exporter of premium football equipment and training accessories. We connect international brands, distributors, clubs and retailers with carefully selected manufacturing partners in Sialkot."
        image={manufacturing}
      />

      <section className="container-x grid gap-16 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionEyebrow>Who We Are</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            An international export company <span className="text-gradient-gold">rooted in Pakistan.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Headquartered in Gujranwala, Punjab, KIVORA specialises in sourcing, quality assurance, private labeling and export logistics for football equipment and training accessories. We do not operate our own factory — instead, we collaborate with a network of trusted manufacturing partners in Sialkot, the heart of Pakistan's sports goods industry.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This model gives our customers the best of both worlds: direct access to world-class Pakistani craftsmanship, combined with the reliability, communication and quality control of a dedicated export partner.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img src={stitching} alt="Hand stitching at partner facility" className="h-[520px] w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-card p-10">
            <Target className="h-8 w-8 text-gold" />
            <h3 className="mt-6 font-display text-2xl">Our Mission</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To deliver world-class football equipment through reliable sourcing, quality assurance, and efficient global export services.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card p-10">
            <Compass className="h-8 w-8 text-gold" />
            <h3 className="mt-6 font-display text-2xl">Our Vision</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To become one of Pakistan's leading sports goods export companies, serving customers across every major football market.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionEyebrow>Why Choose Us</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
          A trade partner built for <span className="text-gradient-gold">international buyers.</span>
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-card p-8">
              <Icon className="h-7 w-7 text-gold" />
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
