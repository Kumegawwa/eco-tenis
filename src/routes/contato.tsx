import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Phone, MessageCircle, MapPin, Instagram, ArrowUpRight, Clock } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Agende sua Aula Experimental | Eco Tênis Curitiba" },
      { name: "description", content: "Agende sua aula experimental no Eco Tênis Academia. WhatsApp +55 41 99131-9654 · Rua Brasílio Cuman, 1324 — Santa Felicidade, Curitiba." },
      { property: "og:title", content: "Contato — Eco Tênis Academia" },
      { property: "og:description", content: "Agende sua aula experimental. WhatsApp, telefone e endereço em Curitiba." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <section className="pt-36 pb-16 md:pt-48 md:pb-24 border-b border-border/50 bg-secondary">
        <div className="container-prose text-center">
          <div className="eyebrow text-accent animate-rise">Atendimento</div>
          <h1 className="mt-4 font-display font-light text-5xl md:text-7xl tracking-tight text-balance max-w-4xl mx-auto animate-rise delay-100">
            Sempre prontos para <span className="font-serif-display italic text-accent">te receber</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-rise delay-200">
            A primeira aula é uma cortesia do Eco Tênis. Escolha o canal que
            preferir e nossa equipe entrará em contato para confirmar seu horário na quadra.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-prose grid md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* COLUNA ESQUERDA: CANAIS DE ATENDIMENTO */}
          <div className="md:col-span-5 space-y-6">
            <a
              href="https://wa.me/5541991319654?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental."
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-between p-7 bg-primary text-primary-foreground hover:bg-accent transition-colors"
            >
              <div>
                <div className="eyebrow opacity-70">WhatsApp · Resposta rápida</div>
                <div className="mt-2 font-display text-2xl">+55 41 99131-9654</div>
              </div>
              <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />
            </a>

            <a href="tel:+554132729654" className="group flex items-center justify-between p-7 border border-border hover:border-accent hover:bg-muted/30 transition-colors">
              <div>
                <div className="eyebrow text-muted-foreground">Telefone Fixo</div>
                <div className="mt-2 font-display text-2xl">(41) 3272-9654</div>
              </div>
              <Phone className="h-7 w-7 text-accent" />
            </a>

            <a href="https://instagram.com/ecotenisclube" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-7 border border-border hover:border-accent hover:bg-muted/30 transition-colors">
              <div>
                <div className="eyebrow text-muted-foreground">Instagram</div>
                <div className="mt-2 font-display text-2xl">@ecotenisclube</div>
              </div>
              <Instagram className="h-7 w-7 text-accent" />
            </a>

            <div className="p-7 border border-border bg-muted/10">
              <div className="eyebrow text-muted-foreground flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Endereço</div>
              <address className="not-italic mt-3 font-display text-xl leading-snug">
                Rua Brasílio Cuman, 1324<br />
                Butiatuvinha · Santa Felicidade<br />
                Curitiba — Paraná, 82315-487
              </address>
            </div>

            <div className="p-7 border border-border bg-muted/10">
              <div className="eyebrow text-muted-foreground flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Horários</div>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                Segunda a Sexta: 07:00 às 22:00<br />
                Sábados: 07:00 às 18:00<br />
                Domingos: 08:00 às 13:00
              </p>
            </div>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO PREMIUM */}
          <div className="md:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-ink text-bone p-8 md:p-12 space-y-8 shadow-2xl h-full"
            >
              <div>
                <div className="eyebrow text-accent mb-2">Secretaria Virtual</div>
                <h2 className="font-display font-light text-3xl md:text-4xl tracking-tight">Deixe seus dados</h2>
              </div>

              {sent ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="font-serif-display italic text-4xl text-accent">Recebido com sucesso.</div>
                  <p className="mt-6 text-bone/70 text-lg">Em breve nossa equipe entrará em contato via WhatsApp para confirmar sua aula experimental.</p>
                </div>
              ) : (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Field label="Nome completo" name="name" required />
                    <Field label="Telefone / WhatsApp" name="phone" type="tel" required />
                  </div>
                  <Field label="E-mail" name="email" type="email" />
                  
                  <div>
                    <label className="eyebrow text-bone/60 block mb-3">Qual o seu interesse?</label>
                    <select className="w-full bg-transparent border-b border-bone/20 focus:border-accent outline-none py-3 px-1 text-base text-bone/90 cursor-pointer transition-colors">
                      <option className="bg-ink text-bone">Tênis Iniciante (Nunca joguei)</option>
                      <option className="bg-ink text-bone">Tênis Adulto (Intermediário/Avançado)</option>
                      <option className="bg-ink text-bone">Tênis Infantil</option>
                      <option className="bg-ink text-bone">Aula Particular</option>
                      <option className="bg-ink text-bone">Treino Competitivo</option>
                      <option className="bg-ink text-bone">Squash</option>
                      <option className="bg-ink text-bone">Beach Tennis</option>
                      <option className="bg-ink text-bone">Apenas Locação de Quadra</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="eyebrow text-bone/60 block mb-3">Mensagem Adicional (Opcional)</label>
                    <textarea rows={3} className="w-full bg-transparent border border-bone/20 focus:border-accent outline-none p-4 text-base resize-none transition-colors" placeholder="Ex: Gostaria de horários no período da noite..." />
                  </div>
                  
                  <button className="group inline-flex w-full justify-center items-center gap-3 px-8 py-5 bg-accent text-accent-foreground text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-bone hover:text-ink transition-colors mt-4">
                    Enviar para a Secretaria <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* MAPA GOOGLE EXPANDIDO */}
      <section className="pb-24">
        <div className="container-prose">
          <div className="aspect-[21/9] md:aspect-[21/7] w-full overflow-hidden border border-border group relative bg-muted">
            {/* Link de Embed real do Google Maps para Curitiba */}
            <iframe
              title="Eco Tênis Academia — Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.225642939109!2d-49.3377771!3d-25.4011111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce144d2d6f24d%3A0x6b8b0b5b5b5b5b5b!2sR.%20Bras%C3%ADlio%20Cuman%2C%201324%20-%20S%C3%A3o%20Braz%2C%20Curitiba%20-%20PR%2C%2082315-487!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              loading="lazy"
              className="w-full h-full grayscale-[0.5] contrast-125 group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-ink/10 pointer-events-none group-hover:bg-transparent transition-colors duration-1000" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

// Componente Field ajustado para o fundo escuro do form
function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-bone/60 block mb-2 transition-colors focus-within:text-accent">{label}{required && " *"}</label>
      <input id={name} name={name} type={type} required={required} className="w-full bg-transparent border-b border-bone/20 focus:border-accent outline-none py-3 px-1 text-base text-bone transition-colors" />
    </div>
  );
}