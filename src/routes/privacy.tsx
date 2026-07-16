import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | KIVORA SPORTS" },
      { name: "description", content: "How KIVORA SPORTS collects, uses and protects information shared through this website and export inquiries." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy" accent="Policy." />
      <section className="container-x pb-24">
        <article className="prose-invert mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>KIVORA SPORTS (PRIVATE) LIMITED ("Kivora", "we") respects your privacy. This policy explains how we collect, use and protect the information you share through this website and during export inquiries.</p>
          <H>Information we collect</H>
          <p>We collect the information you provide in inquiry and contact forms, including your name, company, email, phone number, country and message.</p>
          <H>How we use it</H>
          <p>To respond to your inquiry, share quotations and samples, manage business relationships, and comply with legal or export obligations.</p>
          <H>Sharing</H>
          <p>We do not sell your data. We may share it with logistics, freight, banking or inspection partners strictly to fulfil your order.</p>
          <H>Retention</H>
          <p>Inquiry data is retained for the duration required for our commercial and legal purposes.</p>
          <H>Your rights</H>
          <p>You may request access, correction or deletion of your data by emailing <a className="text-gold" href="mailto:export@kivorasports.com">export@kivorasports.com</a>.</p>
          <H>Contact</H>
          <p>For privacy questions, contact export@kivorasports.com.</p>
        </article>
      </section>
    </>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-xl text-foreground">{children}</h2>;
}