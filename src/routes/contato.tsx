import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Phone, MessageCircle, MapPin, Instagram, ArrowUpRight } from "lucide-react";

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
      <section className="pt-36 pb-16 md:pt-44">
        <div className="container-prose">
          <div className="eyebrow text-accent">Contato</div>
          <h1 className="mt-4 font-display font-light text-5xl md:text-7xl tracking-tight text-balance max-w-4xl">
            Agende sua <span className="font-serif-display italic">aula experimental</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            A primeira aula é uma cortesia do Eco Tênis. Escolha o canal que
            preferir e nossa equipe entrará em contato em até algumas horas.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-prose grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <a
              href="https://wa.me/5541991319654?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental."
              target="_blank" rel="noopener"
              className="group flex items-center justify-between p-7 bg-primary text-primary-foreground hover:bg-accent transition-colors"
            >
              <div>
                <div className="eyebrow opacity-70">WhatsApp · Resposta rápida</div>
                <div className="mt-2 font-display text-2xl">+55 41 99131-9654</div>
              </div>
              <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />
            </a>

            <a href="tel:+554132729654" className="group flex items-center justify-between p-7 border border-border hover:border-accent transition-colors">
              <div>
                <div className="eyebrow text-muted-foreground">Telefone fixo</div>
                <div className="mt-2 font-display text-2xl">(41) 3272-9654</div>
              </div>
              <Phone className="h-7 w-7 text-accent" />
            </a>

            <a href="https://instagram.com/ecotenisclube" target="_blank" rel="noopener" className="group flex items-center justify-between p-7 border border-border hover:border-accent transition-colors">
              <div>
                <div className="eyebrow text-muted-foreground">Instagram</div>
                <div className="mt-2 font-display text-2xl">@ecotenisclube</div>
              </div>
              <Instagram className="h-7 w-7 text-accent" />
            </a>

            <div className="p-7 border border-border">
              <div className="eyebrow text-muted-foreground flex items-center gap-2"><MapPin className="h-4 w-4" /> Endereço</div>
              <address className="not-italic mt-3 font-display text-xl leading-snug">
                Rua Brasílio Cuman, 1324<br />
                Butiatuvinha · Santa Felicidade<br />
                Curitiba — Paraná
              </address>
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-secondary p-8 md:p-12 space-y-6"
            >
              <div className="eyebrow text-accent">Formulário</div>
              <h2 className="font-display font-light text-3xl md:text-4xl tracking-tight">Deixe seus dados</h2>

              {sent ? (
                <div className="py-12 text-center">
                  <div className="font-serif-display italic text-3xl">Recebido com cuidado.</div>
                  <p className="mt-4 text-muted-foreground">Em breve entraremos em contato para confirmar sua aula experimental.</p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Nome completo" name="name" required />
                    <Field label="Telefone / WhatsApp" name="phone" type="tel" required />
                  </div>
                  <Field label="E-mail" name="email" type="email" />
                  <div>
                    <label className="eyebrow text-muted-foreground block mb-2">Interesse</label>
                    <select className="w-full bg-background border-b border-border focus:border-accent outline-none py-3 px-1 text-base">
                      <option>Tênis infantil</option>
                      <option>Tênis adulto</option>
                      <option>Aula particular</option>
                      <option>Treino competitivo</option>
                      <option>Squash</option>
                      <option>Beach tennis</option>
                      <option>Locação de quadra</option>
                    </select>
                  </div>
                  <div>
                    <label className="eyebrow text-muted-foreground block mb-2">Mensagem</label>
                    <textarea rows={4} className="w-full bg-background border border-border focus:border-accent outline-none p-3 text-base resize-none" />
                  </div>
                  <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-[12px] tracking-[0.22em] uppercase hover:bg-accent transition-colors">
                    Enviar mensagem <ArrowUpRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-prose">
          <div className="eyebrow text-accent mb-6">Localização</div>
          <div className="aspect-[16/9] w-full overflow-hidden border border-border">
            <iframe
              title="Eco Tênis Academia — Mapa"
              src="https://www.google.com/maps?q=Rua+Bras%C3%ADlio+Cuman+1324+Curitiba&output=embed"
              loading="lazy"
              className="w-full h-full grayscale-[0.4]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-muted-foreground block mb-2">{label}{required && " *"}</label>
      <input id={name} name={name} type={type} required={required} className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 px-1 text-base" />
    </div>
  );
}
