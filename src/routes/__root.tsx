import { Outlet, createRootRoute, Link, useLocation, ScrollRestoration, Scripts, HeadContent } from "@tanstack/react-router";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Instagram, MapPin, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import "../styles.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Monitora o scroll da página
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu ao trocar de rota
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // TRAVA DE SEGURANÇA MOBILE: Impede o scroll da página no fundo
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isHome = location.pathname === "/";

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        {/* Trava de zoom nativo para melhorar a experiência de botões no celular */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Eco Tênis Academia</title>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        
        {/* HEADER PREMIUM ADAPTATIVO */}
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isHome 
              ? isScrolled || mobileMenuOpen // Força o fundo escuro se o menu abrir no topo da Home
                ? 'bg-ink/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' 
                : 'bg-transparent py-6'
              : 'bg-ink/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl'
          }`}
        >
          <div className="container-prose flex items-center justify-between">
            <Link to="/" className="text-bone font-display text-2xl tracking-widest uppercase flex items-center gap-2 z-50">
              Eco<span className="font-serif-display italic text-accent lowercase">Tênis</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase text-bone/80">
              <Link to="/sobre" className="hover:text-accent transition-colors [&.active]:text-accent">A História</Link>
              <Link to="/estrutura" className="hover:text-accent transition-colors [&.active]:text-accent">Estrutura</Link>
              <Link to="/modalidades" className="hover:text-accent transition-colors [&.active]:text-accent">Modalidades</Link>
              <Link to="/professores" className="hover:text-accent transition-colors [&.active]:text-accent">Professores</Link>
              <Link to="/contato" className="hover:text-accent transition-colors [&.active]:text-accent">Contato</Link>
            </nav>

            <div className="hidden md:block">
              <a href="https://wa.me/5541991319654" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-accent/50 text-accent text-[10px] tracking-widest uppercase hover:bg-accent hover:text-bone transition-colors">
                Falar no WhatsApp
              </a>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-bone z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-ink z-40 flex flex-col items-center justify-center gap-8 text-bone text-sm tracking-widest uppercase animate-in fade-in duration-300 pt-16">
              <Link to="/" className="hover:text-accent transition-colors">Início</Link>
              <Link to="/sobre" className="hover:text-accent transition-colors">A História</Link>
              <Link to="/estrutura" className="hover:text-accent transition-colors">Estrutura</Link>
              <Link to="/modalidades" className="hover:text-accent transition-colors">Modalidades</Link>
              <Link to="/professores" className="hover:text-accent transition-colors">Professores</Link>
              <Link to="/contato" className="hover:text-accent transition-colors">Contato</Link>
              <a href="https://wa.me/5541991319654" target="_blank" rel="noopener noreferrer" className="mt-8 px-8 py-4 bg-accent text-bone text-xs hover:bg-bone hover:text-ink transition-colors">
                Falar no WhatsApp
              </a>
            </div>
          )}
        </header>

        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>

        {/* FOOTER PREMIUM */}
        <footer className="bg-ink text-bone/60 py-20 border-t border-bone/5">
          <div className="container-prose grid md:grid-cols-4 gap-12 md:gap-8">
            <div className="md:col-span-1">
              <Link to="/" className="text-bone font-display text-2xl tracking-widest uppercase flex items-center gap-2 mb-6">
                Eco<span className="font-serif-display italic text-accent lowercase">Tênis</span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                Esporte para toda vida. Academia boutique de tênis, saibro original e formação de excelência em Curitiba.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/ecotenisclube" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-bone font-medium text-sm tracking-widest uppercase mb-6">O Clube</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/sobre" className="hover:text-accent transition-colors">Nossa História</Link></li>
                <li><Link to="/estrutura" className="hover:text-accent transition-colors">Estrutura Premium</Link></li>
                <li><Link to="/professores" className="hover:text-accent transition-colors">Corpo Técnico</Link></li>
                <li><Link to="/modalidades" className="hover:text-accent transition-colors">Modalidades</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-bone font-medium text-sm tracking-widest uppercase mb-6">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-accent shrink-0" />
                  <span>Rua Brasílio Cuman, 1324<br/>Butiatuvinha, Curitiba - PR</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent shrink-0" />
                  <span>(41) 3272-9654<br/>(41) 99131-9654</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-bone font-medium text-sm tracking-widest uppercase mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li>Eco Gestão de Instalações de Esportes Ltda</li>
                <li>CNPJ: 37.406.621/0001-80</li>
                <li><Link to="/contato" className="hover:text-accent transition-colors">Fale com a Secretaria</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="container-prose mt-16 pt-8 border-t border-bone/10 flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col items-center justify-center gap-2 text-xs text-bone/60 text-center">
              <p>© {new Date().getFullYear()} Eco Tênis Academia. Todos os direitos reservados.</p>
              
              <div className="text-[11px] font-sans tracking-wider text-bone/40 flex items-center gap-1.5 mt-1 select-none">
                <span>Designed by</span>
                <a 
                  href="https://www.linkedin.com/in/lucas-kumegawa/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center text-bone transition-all duration-300"
                >
                  <span className="font-oleo text-[16px] text-accent tracking-normal normal-case ml-1 transition-all duration-300 group-hover:text-bone group-hover:scale-105 block origin-left">
                    Kumegawa
                  </span>
                </a>
              </div>
            </div>
          </div>
        </footer>

        <WhatsAppFab />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}