import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Trophy, Target, Users, CalendarClock, Zap, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/modalidades")({
  component: ModalidadesPage,
});

const services = [
  {
    category: "Ensino e Formação",
    icon: Target,
    items: [
      {
        title: "Tênis Infantil (Iniciação)",
        desc: "Metodologia lúdica e progressiva para crianças a partir de 5 anos, focada no desenvolvimento da coordenação motora, agilidade e disciplina esportiva em um ambiente seguro.",
      },
      {
        title: "Aulas para Adultos",
        desc: "Turmas em grupo niveladas. Atendemos desde o adulto iniciante (primeiro contato com a raquete) até o nível avançado, com foco intenso na correção biomecânica de golpes e tática.",
      },
      {
        title: "Aula Particular",
        desc: "Atenção técnica e tática 100% exclusiva do professor. A modalidade ideal para quem demanda flexibilidade de horários e busca uma evolução técnica extremamente acelerada.",
      }
    ]
  },
  {
    category: "Performance e Eventos",
    icon: Trophy,
    items: [
      {
        title: "Treino Competitivo",
        desc: "O mais alto escalão de rendimento do clube. Preparação tática, técnica, física e psicológica rigorosa para atletas que disputam o circuito oficial estadual e nacional.",
      },
      {
        title: "Torneios e Circuitos",
        desc: "Sediamos as etapas oficiais do FPT Series 250 e 500, além do nosso aclamado Circuito Interno de Duplas que movimenta toda a comunidade do Eco Tênis.",
      },
      {
        title: "Clínicas Intensivas",
        desc: "Módulos de curta duração focados em fundamentos altamente específicos, como biomecânica do saque ou táticas avançadas para jogos de duplas.",
      }
    ]
  },
  {
    category: "Locação e Outros Esportes",
    icon: CalendarClock,
    items: [
      {
        title: "Locação de Quadras",
        desc: "Aluguel avulso ou pacotes para mensalistas. Disponibilidade de quadras descobertas e cobertas, com iluminação de LED noturna padrão torneio.",
      },
      {
        title: "Squash",
        desc: "Locação de quadra oficial fechada para a prática de Squash. Excelente para ganho de reflexo e condicionamento cardiovascular intenso.",
      },
      {
        title: "Beach Tennis",
        desc: "Modalidade disponível em nossa arena de areia. Aulas e locações voltadas para o esporte que une intensidade física e descontração social.",
      }
    ]
  }
];

function ModalidadesPage() {
  return (
    <PageShell>
      <div className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-border/50 bg-secondary">
        <div className="container-prose">
          <div className="eyebrow text-accent animate-rise">O nosso portfólio</div>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl lg:text-7xl tracking-tight text-balance animate-rise delay-100">
            Muito além do <span className="font-serif-display italic text-accent">lazer</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-rise delay-200">
            Nossa arquitetura de serviços atende a três frentes distintas: a formação técnica irrepreensível, a alta performance competitiva e a flexibilidade para quem busca apenas bater uma bola com os amigos após o trabalho.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-32">
        <div className="container-prose space-y-24">
          {services.map((section, idx) => (
            <div key={idx} className="grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <div className="sticky top-32">
                  <section.icon className="h-10 w-10 text-accent mb-6" />
                  <h2 className="font-display text-3xl md:text-4xl">{section.category}</h2>
                  <div className="hairline mt-6 w-12" />
                </div>
              </div>
              <div className="md:col-span-8 space-y-12">
                {section.items.map((item, i) => (
                  <div key={i} className="group p-8 border border-border/50 bg-background hover:border-accent/50 transition-colors">
                    <h3 className="font-display text-2xl font-medium flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {item.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed pl-0 group-hover:pl-8 transition-all">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* FINAL CTA FIXO DA PÁGINA */}
      <section className="bg-ink text-bone py-24 text-center">
        <div className="container-prose max-w-2xl">
          <Zap className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-light mb-6">Pronto para entrar em quadra?</h2>
          <p className="text-bone/70 mb-10 leading-relaxed">
            Nossa secretaria está pronta para agendar a sua aula experimental ou reservar a sua quadra para hoje mesmo.
          </p>
          <a
            href="https://wa.me/5541991319654"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-bone hover:text-ink transition-colors"
          >
            Falar com a Secretaria
          </a>
        </div>
      </section>
    </PageShell>
  );
}