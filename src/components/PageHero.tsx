import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      {image ? (
        <div className="absolute inset-0 -z-10">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
          <div className="absolute inset-0 bg-radial-glow" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 bg-radial-glow" />
      )}
      <div className="container-x flex min-h-[52vh] flex-col justify-end pb-16 pt-32 md:pb-24 md:pt-40">
        <nav className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <span className="text-gold">{eyebrow}</span>
        </nav>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
          {title} {accent && <span className="text-gradient-gold">{accent}</span>}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
      <span className="h-px w-8 bg-gold" /> {children}
    </div>
  );
}