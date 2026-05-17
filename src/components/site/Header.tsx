import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/modalidades", label: "Modalidades" },
  { to: "/professores", label: "Professores" },
  { to: "/estrutura", label: "Estrutura" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = overlay && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent text-bone"
          : "bg-background/85 backdrop-blur-xl text-foreground border-b border-border/60"
      }`}
    >
      <div className="container-prose flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className={`h-9 w-9 rounded-full border ${transparent ? "border-bone/70" : "border-primary/70"} flex items-center justify-center`}>
              <span className="font-display font-semibold text-sm tracking-tight">E</span>
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold text-[15px] tracking-wide">ECO TÊNIS</div>
            <div className="eyebrow opacity-70 text-[10px]">Academia · Curitiba</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] tracking-wide font-medium link-underline"
              activeOptions={{ exact: true }}
              activeProps={{ className: "opacity-100" }}
              inactiveProps={{ className: "opacity-80 hover:opacity-100" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/5541991319654"
            target="_blank"
            rel="noopener"
            className="text-[13px] tracking-wide font-medium link-underline"
          >
            +55 41 99131-9654
          </a>
          <Link
            to="/contato"
            className="ml-3 inline-flex items-center px-5 py-2.5 text-[12px] tracking-[0.2em] uppercase font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Aula Experimental
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 -mr-2"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-ink text-bone animate-rise">
          <div className="container-prose flex items-center justify-between h-20">
            <span className="font-display font-semibold tracking-wide">ECO TÊNIS</span>
            <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="p-2 -mr-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container-prose mt-10 flex flex-col gap-6">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`font-display text-4xl font-light tracking-tight animate-rise delay-${(i + 1) * 100}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5541991319654"
              className="mt-10 inline-flex w-fit px-6 py-3 text-[12px] tracking-[0.25em] uppercase bg-accent text-accent-foreground"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
