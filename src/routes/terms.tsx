import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | KIVORA SPORTS" },
      { name: "description", content: "The terms and conditions governing use of the KIVORA SPORTS website and inquiries." },
      { property: "og:title", content: "Terms & Conditions | KIVORA SPORTS" },
      { property: "og:description", content: "The terms and conditions governing use of the KIVORA SPORTS website and inquiries." },
      { property: "og:url", content: "https://kivora-global-exports.lovable.app/terms" },
      { name: "twitter:title", content: "Terms & Conditions | KIVORA SPORTS" },
      { name: "twitter:description", content: "The terms and conditions governing use of the KIVORA SPORTS website and inquiries." },
    ],
    links: [{ rel: "canonical", href: "https://kivora-global-exports.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms &" accent="Conditions." />
      <section className="container-x pb-24">
        <article className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>By using kivorasports.com you agree to the following terms. This website provides information about KIVORA SPORTS (PRIVATE) LIMITED and its products; it is not an e-commerce store.</p>
          <H>Use of content</H>
          <p>All content, images and trademarks are the property of Kivora and may not be reproduced without written permission.</p>
          <H>Product information</H>
          <p>Specifications, imagery and lead times are indicative and may change based on order specifics. Final terms are confirmed in each quotation and pro-forma invoice.</p>
          <H>Quotations & orders</H>
          <p>Quotations are valid for 30 days unless otherwise stated. Orders are governed by the terms of the accepted pro-forma invoice and any signed supply agreement.</p>
          <H>Liability</H>
          <p>Kivora is not liable for indirect or consequential losses arising from use of this website.</p>
          <H>Governing law</H>
          <p>These terms are governed by the laws of the Islamic Republic of Pakistan.</p>
        </article>
      </section>
    </>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-xl text-foreground">{children}</h2>;
}