import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/kivora-logo.png";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[color:var(--ink)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Kivora" className="h-10 w-10" />
              <div>
                <div className="text-lg font-semibold tracking-[0.25em]">KIVORA</div>
                <div className="text-[10px] tracking-[0.3em] text-gold/80">SPORTS</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              KIVORA SPORTS (PRIVATE) LIMITED manufactures FIFA-quality footballs and training accessories in Sialkot, Pakistan, exporting to distributors and brands in 40+ countries.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:border-gold/50 hover:text-gold"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold/80">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                ["/about", "About Us"],
                ["/products", "Products"],
                ["/manufacturing", "Manufacturing"],
                ["/oem", "OEM & Private Label"],
                ["/quality", "Quality Control"],
              ].map(([to, l]) => (
                <li key={to}>
                  <Link to={to} className="transition hover:text-foreground">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold/80">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                ["/export-process", "Export Process"],
                ["/gallery", "Gallery"],
                ["/faqs", "FAQs"],
                ["/blog", "Journal"],
                ["/privacy", "Privacy Policy"],
                ["/terms", "Terms & Conditions"],
              ].map(([to, l]) => (
                <li key={to}>
                  <Link to={to} className="transition hover:text-foreground">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold/80">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Sialkot Industrial Estate, Punjab, Pakistan</li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-gold" /> +92 300 000 0000</li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold" /> export@kivorasports.com</li>
              <li className="flex items-start gap-3"><Globe className="mt-0.5 h-4 w-4 text-gold" /> kivorasports.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} KIVORA SPORTS (PRIVATE) LIMITED. All rights reserved.</div>
          <div className="tracking-[0.2em] uppercase text-gold/70">Engineered in Sialkot · Exported Worldwide</div>
        </div>
      </div>
    </footer>
  );
}