import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/kivora-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/manufacturing", label: "Sourcing" },
  { to: "/oem", label: "OEM" },
  { to: "/quality", label: "Quality" },
  { to: "/export-process", label: "Export" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Kivora" className="h-9 w-9 md:h-10 md:w-10" />
          <div className="leading-none">
            <div className="text-lg font-semibold tracking-[0.25em] text-foreground md:text-xl">
              KIVORA
            </div>
            <div className="mt-1 text-[10px] tracking-[0.3em] text-gold/80">
              SPORTS
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:0312456789"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-gold"
          >
            <Phone className="h-4 w-4 text-gold" />
            0312456789
          </a>
          <Link
            to="/contact"
            className="inline-flex h-10 items-center rounded-full bg-gradient-gold px-5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.78_0.14_82/0.6)] transition hover:brightness-110"
          >
            Request a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                activeProps={{ className: "text-foreground bg-white/5" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:0312456789"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-gold" />
              0312456789
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-gradient-gold px-5 text-sm font-semibold text-primary-foreground"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
