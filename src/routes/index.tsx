import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Gem,
  Cog,
  Globe2,
  Factory,
  Truck,
  Award,
  Boxes,
  CheckCircle2,
  Star,
  Sparkles,
} from "lucide-react";
import hero from "@/assets/hero-footballs.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import stitching from "@/assets/stitching.jpg";
import exportImg from "@/assets/export.jpg";
import productBall from "@/assets/product-ball.jpg";
import trainingGear from "@/assets/training-gear.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Football Exporter Pakistan | KIVORA SPORTS Sialkot Sourcing" },
      {
        name: "description",
        content:
          "KIVORA SPORTS exports premium footballs, goalkeeper gloves and training equipment from Sialkot, Pakistan — OEM private label, strict QC and worldwide shipping for wholesalers and clubs.",
      },
      { property: "og:title", content: "Football Exporter Pakistan | KIVORA SPORTS Sialkot Sourcing" },
      {
        property: "og:description",
        content:
          "Premium football equipment exporter from Pakistan: sourcing, quality control, private labeling and worldwide shipping.",
      },
      { property: "og:url", content: "https://kivora-global-exports.lovable.app/" },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bddbbbd4-f45a-46dc-9438-045134138e13/id-preview-bc40dc16--f8d01399-9c3b-4ec3-b470-2fd110d1145f.lovable.app-1784288483009.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bddbbbd4-f45a-46dc-9438-045134138e13/id-preview-bc40dc16--f8d01399-9c3b-4ec3-b470-2fd110d1145f.lovable.app-1784288483009.png",
      },
    ],
    links: [
      { rel: "canonical", href: "https://kivora-global-exports.lovable.app/" },
      { rel: "preload", as: "image", href: hero, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "KIVORA SPORTS (PRIVATE) LIMITED",
          url: "https://kivora-global-exports.lovable.app/",
          description:
            "Export and sourcing company for football equipment, based in Gujranwala, Pakistan with partner manufacturers in Sialkot.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Gujranwala",
            addressRegion: "Punjab",
            addressCountry: "PK",
          },
          email: "export@kivorasports.com",
          sameAs: ["https://kivora-global-exports.lovable.app/"],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <TrustBar />
      <Intro />
      <Categories />
      <Process />
      <Stats />
      <WhyUs />
      <ExportSection />
      <Testimonials />
      <FAQPreview />
      <CTASection />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Premium KIVORA match footballs"
          className="h-full w-full object-cover"
          width={1600}
          height={1200}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      <div className="container-x relative z-10 flex min-h-[92vh] flex-col justify-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            <Sparkles className="h-3.5 w-3.5" /> Premium Football Equipment Exporter
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]"
          >
            Sourced for <span className="text-gradient-gold">Performance.</span>
            <br />
            Exported to the <span className="text-gradient-gold">World.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            KIVORA SPORTS is a Pakistan-based exporter of premium footballs,
            goalkeeper gloves and training accessories — sourced from trusted
            manufacturing partners in Sialkot and shipped to wholesalers, clubs
            and private-label brands in 40+ countries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-gold px-7 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-15px_oklch(0.78_0.14_82/0.55)] transition hover:brightness-110"
            >
              Request Export Quote
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/products"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 text-sm font-semibold text-foreground backdrop-blur transition hover:border-gold/40 hover:bg-white/10"
            >
              Explore Catalog
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -right-20 top-1/2 z-0 hidden -translate-y-1/2 lg:block xl:right-0"
        >
          <div className="animate-float">
            <div className="relative h-[440px] w-[440px] xl:h-[560px] xl:w-[560px]">
              <div className="absolute inset-0 rounded-full bg-gold/25 blur-3xl" />
              <motion.img
                src={productBall}
                alt=""
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="relative h-full w-full object-contain mix-blend-lighten drop-shadow-[0_40px_120px_rgba(255,180,60,0.35)]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-white/10 pt-8 md:grid-cols-4"
        >
          {[
            ["40+", "Countries Served"],
            ["500+", "Global Clients"],
            ["1,200+", "Containers Shipped"],
            ["FIFA", "Quality Standards"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-3xl text-gradient-gold md:text-4xl">{v}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Premium Quality" },
    { icon: Gem, label: "Durable Materials" },
    { icon: Cog, label: "Precision Engineered" },
    { icon: Globe2, label: "Global Export" },
  ];
  return (
    <section className="border-y border-white/5 bg-[color:var(--surface)]/40">
      <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3">
            <Icon className="h-6 w-6 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
      <span className="h-px w-8 bg-gold" /> {children}
    </div>
  );
}

function Intro() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionEyebrow>Who We Are</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            A Pakistani exporter with a <span className="text-gradient-gold">global standard.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Headquartered in Gujranwala, KIVORA sources match, training and
            promotional footballs — plus a full range of training gear — from a
            curated network of manufacturing partners in Sialkot, the football
            capital of the world. We manage supplier selection, quality control,
            private labeling and worldwide export on behalf of our buyers.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Vetted Sialkot manufacturing partner network",
              "FIFA Quality & FIFA Quality Pro available on request",
              "Full OEM & private-label sourcing solutions",
              "Independent QC on every export order",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-gold" />
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-soft"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src={stitching}
              alt="Skilled artisan hand-stitching a KIVORA football"
              className="h-[560px] w-full object-cover"
              loading="lazy"
              width={1400}
              height={1000}
            />
          </div>
          <div className="absolute -bottom-8 -left-6 hidden w-64 rounded-xl glass p-6 shadow-2xl md:block">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Sourcing</div>
            <div className="mt-2 font-display text-2xl">Inspected at the source</div>
            <div className="mt-1 text-xs text-muted-foreground">KIVORA inspectors on-site at every partner facility.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CATEGORIES = [
  { title: "Match Footballs", desc: "Thermal-bonded and hybrid balls sourced for professional play.", img: hero },
  { title: "Training Footballs", desc: "Durable everyday balls for academy and club sessions.", img: productBall },
  { title: "Goalkeeper Gloves", desc: "Match, pro and junior lines with superior grip and protection.", img: trainingGear },
  { title: "Training Equipment", desc: "Cones, ladders, hurdles, poles and parachutes for speed and agility.", img: trainingGear },
  { title: "Team Essentials", desc: "Training bibs, captain armbands, ball bags and equipment bags.", img: stitching },
  { title: "OEM & Private Label", desc: "Your logo, colours and packaging — sourced end-to-end.", img: manufacturing },
];

function Categories() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionEyebrow>What We Produce</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              A complete football <span className="text-gradient-gold">portfolio.</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-soft"
          >
            View full catalog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card transition hover:border-gold/30 hover:shadow-[0_30px_80px_-30px_oklch(0.78_0.14_82/0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold opacity-70 transition group-hover:opacity-100">
                  Enquire <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Inquiry & Brief", d: "You share requirements, quantities and target specifications." },
  { n: "02", t: "Supplier Matching", d: "We assign the right manufacturing partner from our vetted Sialkot network." },
  { n: "03", t: "Sampling & Approval", d: "Prototypes produced with your artwork and signed off before bulk." },
  { n: "04", t: "Production Coordination", d: "KIVORA manages timelines, materials and communication with the partner." },
  { n: "05", t: "Quality Inspection", d: "In-line and pre-shipment QC by KIVORA inspectors at the facility." },
  { n: "06", t: "Export & Delivery", d: "Documentation, container loading and worldwide shipping to your port." },
];

function Process() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
      <div className="container-x relative">
        <div className="text-center">
          <SectionEyebrow>How We Work</SectionEyebrow>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
            From inquiry to <span className="text-gradient-gold">delivered container.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A transparent, six-stage sourcing and export workflow — with one
            accountable KIVORA team from your first inquiry to final delivery.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-8 transition hover:border-gold/40"
            >
              <div className="pointer-events-none absolute -right-6 -top-8 font-display text-[120px] font-bold leading-none text-white/[0.03]">
                {s.n}
              </div>
              <div className="relative">
                <div className="font-display text-xl text-gold">{s.n}</div>
                <h3 className="mt-4 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { icon: Globe2, v: "40+", l: "Countries Served" },
    { icon: Factory, v: "2M+", l: "Units / Year Capacity" },
    { icon: Award, v: "16+", l: "Years of Experience" },
    { icon: Star, v: "500+", l: "Satisfied Clients" },
    { icon: Truck, v: "1,200+", l: "Containers Exported" },
    { icon: ShieldCheck, v: "100%", l: "QC Inspected" },
  ];
  return (
    <section className="border-y border-white/5 bg-[color:var(--ink)]">
      <div className="container-x py-20">
        <div className="mb-12 text-center">
          <SectionEyebrow>By The Numbers</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Trusted at scale.</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, v, l }, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-center"
            >
              <Icon className="mx-auto h-6 w-6 text-gold" />
              <div className="mt-4 font-display text-3xl text-gradient-gold md:text-4xl">{v}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Award, t: "FIFA-grade sourcing", d: "Products can be certified to FIFA Quality and FIFA Quality Pro through our partner network on request." },
    { icon: Factory, t: "Trusted partner network", d: "Curated Sialkot manufacturers audited for quality, compliance and capacity." },
    { icon: Boxes, t: "OEM & private label", d: "Your logo, colours, panels and packaging — Pantone-matched and retail-ready." },
    { icon: Truck, t: "Global logistics", d: "FOB, CIF and DDP shipments via Karachi Port with reliable freight partners." },
  ];
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img src={manufacturing} alt="Kivora facility" className="h-[560px] w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-xl glass p-5 md:block">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">ISO Ready</div>
            <div className="mt-1 font-display text-lg">Audit-friendly facility</div>
          </div>
        </div>
        <div>
          <SectionEyebrow>Why Choose Kivora</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            A partner buyers <span className="text-gradient-gold">trust.</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {items.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-white/10 bg-card p-6">
                <Icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-display text-lg">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExportSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={exportImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>
      <div className="container-x relative py-28 md:py-40">
        <div className="max-w-2xl">
          <SectionEyebrow>Worldwide Export</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Shipping to <span className="text-gradient-gold">40+ countries.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From single-container orders to nationwide distribution, KIVORA
            partners with wholesalers, retailers, clubs and Amazon-scale brands
            across Europe, North America, the Middle East, Africa and Asia.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Europe", "North America", "Middle East", "Africa", "South America", "Asia-Pacific"].map((r) => (
              <span key={r} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                {r}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/export-process" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground">
              See our export process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "KIVORA has been an outstanding manufacturing partner. Quality is consistent shipment after shipment.",
      a: "Sports Distributor, Germany",
    },
    {
      q: "The private-label program is exactly what we needed to launch our brand on Amazon EU.",
      a: "E-commerce Brand, United Kingdom",
    },
    {
      q: "Reliable lead times, honest communication and premium footballs. Highly recommended.",
      a: "Football Academy, UAE",
    },
  ];
  return (
    <section className="container-x py-24 md:py-32">
      <div className="text-center">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          What buyers <span className="text-gradient-gold">say about us.</span>
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <motion.blockquote
            key={t.a}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-8"
          >
            <div className="mb-4 flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="font-display text-lg leading-relaxed">"{t.q}"</p>
            <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">— {t.a}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

function FAQPreview() {
  const faqs = [
    ["What is your minimum order quantity?", "MOQs start at 300 units for stock designs and 500 units for fully custom private-label footballs."],
    ["Do you provide samples?", "Yes — we produce free stock samples and paid custom prototypes matched to your artwork."],
    ["What are your lead times?", "Sampling in 7–14 days. Bulk production typically 30–45 days depending on order size and customization."],
    ["Which incoterms do you support?", "FOB Karachi, CIF and DDP to major destinations. We also handle documentation end-to-end."],
  ];
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <SectionEyebrow>FAQs</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Answers for <span className="text-gradient-gold">serious buyers.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Everything you need to know before starting a production run with KIVORA.
          </p>
          <Link to="/faqs" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-soft">
            All questions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-card">
          {faqs.map(([q, a]) => (
            <details key={q} className="group p-6 open:bg-white/[0.02]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-lg">{q}</span>
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-white/15 text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="container-x pb-24 pt-4 md:pb-32">
      <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-[color:var(--surface)] to-[color:var(--ink)] p-10 md:p-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <SectionEyebrow>Start A Project</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Let's build your next <span className="text-gradient-gold">football program.</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Share your requirements and our export team will respond with a detailed
              quotation within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link to="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-15px_oklch(0.78_0.14_82/0.55)]">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/products" className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold">
              Download Catalog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
