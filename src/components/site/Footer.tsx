import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-prose py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-bone/60 flex items-center justify-center">
              <span className="font-display font-semibold">E</span>
            </div>
            <div>
              <div className="font-display text-lg tracking-wide">ECO TÊNIS ACADEMIA</div>
              <div className="eyebrow opacity-60">Curitiba — Paraná</div>
            </div>
          </div>
          <p className="mt-8 font-serif-display text-2xl leading-snug opacity-90 max-w-md">
            “Esporte para toda vida.”
          </p>
          <p className="mt-6 text-sm opacity-60 max-w-md">
            Mais de quinze anos formando atletas, famílias e amizades em torno
            do tênis, do squash e do beach tennis em Santa Felicidade.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow opacity-60 mb-5">Navegação</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/sobre" className="link-underline">Sobre</Link></li>
            <li><Link to="/modalidades" className="link-underline">Modalidades</Link></li>
            <li><Link to="/professores" className="link-underline">Professores</Link></li>
            <li><Link to="/estrutura" className="link-underline">Estrutura</Link></li>
            <li><Link to="/contato" className="link-underline">Contato</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow opacity-60 mb-5">Visite</div>
          <address className="not-italic space-y-4 text-sm opacity-90">
            <p className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
              Rua Brasílio Cuman, 1324<br />Butiatuvinha · Santa Felicidade<br />Curitiba — PR
            </p>
            <p className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
              <span>
                <a href="tel:+554132729654" className="link-underline block">(41) 3272-9654</a>
                <a href="https://wa.me/5541991319654" className="link-underline block">WhatsApp +55 41 99131-9654</a>
              </span>
            </p>
            <p className="flex gap-3"><Instagram className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
              <a href="https://instagram.com/ecotenisclube" target="_blank" rel="noopener" className="link-underline">@ecotenisclube</a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-60">
          <span>© {new Date().getFullYear()} Eco Tênis Academia. Todos os direitos reservados.</span>
          <span className="eyebrow">Curitiba · Paraná · Brasil</span>
        </div>
      </div>
    </footer>
  );
}
