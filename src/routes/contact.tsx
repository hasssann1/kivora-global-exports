import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KIVORA | Request an Export Quote" },
      { name: "description", content: "Get in touch with KIVORA SPORTS for football sourcing, private-label programmes and export quotations from Pakistan." },
      { property: "og:title", content: "Contact KIVORA | Request an Export Quote" },
      { property: "og:description", content: "Get in touch with KIVORA SPORTS for football sourcing, private-label programmes and export quotations from Pakistan." },
      { property: "og:url", content: "https://kivora-global-exports.lovable.app/contact" },
      { name: "twitter:title", content: "Contact KIVORA | Request an Export Quote" },
      { name: "twitter:description", content: "Get in touch with KIVORA SPORTS for football sourcing, private-label programmes and export quotations from Pakistan." },
    ],
    links: [{ rel: "canonical", href: "https://kivora-global-exports.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build" accent="something great." description="Our export team responds to serious inquiries within one business day." />

      <section className="container-x pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-white/10 bg-card p-8 md:p-10"
          >
            <h2 className="font-display text-2xl">Request a quotation</h2>
            <p className="mt-2 text-sm text-muted-foreground">Share your requirements and we'll respond with pricing, MOQ and lead time.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Country" name="country" />
              <Field label="Phone / WhatsApp" name="phone" />
              <Field label="Product interest" name="product" placeholder="e.g. Thermal-bonded match balls" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea rows={5} required className="w-full rounded-lg border border-white/10 bg-background/40 p-3 text-sm outline-none transition focus:border-gold/50" placeholder="Quantities, specifications, target price, timeline..." />
            </div>
            <button type="submit" className="mt-8 inline-flex h-12 items-center rounded-full bg-gradient-gold px-8 text-sm font-semibold text-primary-foreground">
              Send inquiry
            </button>
            {sent && (
              <div className="mt-4 rounded-lg border border-gold/30 bg-gold/5 p-4 text-sm text-gold">
                Thanks — your inquiry has been received. Our export team will respond within 24 hours.
              </div>
            )}
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-card p-8">
              <h3 className="font-display text-xl">Direct contact</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <Row icon={Mail}>export@kivorasports.com</Row>
                <Row icon={Phone}>+92 300 000 0000</Row>
                <Row icon={MessageCircle}>WhatsApp: +92 300 000 0000</Row>
                <Row icon={Clock}>Mon – Sat, 9:00 – 18:00 PKT</Row>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-8">
              <h3 className="font-display text-xl">Head Office</h3>
              <p className="mt-3 flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                KIVORA SPORTS (PVT) LTD<br />
                Gujranwala, Punjab, Pakistan
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-8">
              <h3 className="font-display text-xl">Sourcing hub</h3>
              <p className="mt-3 flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                Partner manufacturing network in Sialkot, Punjab, Pakistan — visited weekly by our sourcing and QA team.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="aspect-[16/10] w-full bg-[color:var(--surface)]">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=Gujranwala,Punjab,Pakistan&output=embed"
                  className="h-full w-full opacity-80"
                  loading="lazy"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-background/40 p-3 text-sm outline-none transition focus:border-gold/50"
      />
    </label>
  );
}

function Row({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-muted-foreground">
      <Icon className="h-4 w-4 text-gold" />
      <span>{children}</span>
    </li>
  );
}
