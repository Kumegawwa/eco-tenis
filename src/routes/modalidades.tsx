import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-tennis.jpg";
import coaching from "@/assets/coaching.jpg";
import courtAerial from "@/assets/court-aerial.jpg";
import racket from "@/assets/racket-detail.jpg";
import covered from "@/assets/covered-court.jpg";
import lifestyle from "@/assets/lifestyle.jpg";

export const Route = createFileRoute("/modalidades")({
  head: () => ({
    meta: [
      { title: "Modalidades — Tênis, Squash e Beach Tennis em Curitiba" },
      { name: "description", content: "Tênis infantil e adulto, aulas particulares, treino competitivo, squash, beach tennis e locação de quadras de saibro no Eco Tênis Academia." },
      { property: "og:title", content: "Modalidades — Eco Tênis Academia" },
      { property: "og:description", content: "Programa completo para todas as idades e níveis em Santa Felicidade, Curitiba." },
      { property: "og:url", content: "/modalidades" },
    ],
    links: [{ rel: "canonical", href: "/modalidades" }],
  }),
  component: ModalitiesPage,
});

const items = [
  { name: "Tênis Infantil", age: "5 — 13 anos", img: coaching, desc: "Iniciação esportiva com metodologia progressiva, coordenação motora e formação de valores através do tênis.", benefits: ["Disciplina e foco", "Coordenação motora", "Socialização"] },
  { name: "Tênis Adulto", age: "Todos os níveis", img: courtAerial, desc: "Aulas em grupo organizadas por nível técnico, do primeiro contato com a raquete ao jogo de fundo competitivo.", benefits: ["Qualidade de vida", "Networking saudável", "Performance esportiva"] },
  { name: "Aula Particular", age: "Sob agendamento", img: racket, desc: "Acompanhamento individual, totalmente personalizado, com análise técnica detalhada e progressão acelerada.", benefits: ["Atenção exclusiva", "Horário flexível", "Resultado rápido"] },
  { name: "Treino Competitivo", age: "Federados", img: hero, desc: "Preparação completa para o circuito federado, com sparring de alto nível e preparação física integrada.", benefits: ["Ranking estadual", "Sparring qualificado", "Preparação tática"] },
  { name: "Locação de Quadras", age: "Sócios e visitantes", img: covered, desc: "Quadras de saibro cobertas e descobertas, com manutenção diária, disponíveis para reserva individual.", benefits: ["Saibro original", "Disponibilidade ampla", "Iluminação noturna"] },
  { name: "Squash", age: "Adulto", img: courtAerial, desc: "Quadra oficial de squash — um dos esportes mais completos do mundo, com aulas e jogos avulsos.", benefits: ["Condicionamento", "Agilidade", "Concentração"] },
  { name: "Beach Tennis", age: "Todas as idades", img: lifestyle, desc: "A modalidade que conquistou Curitiba. Aulas em areia profissional para iniciantes e competitivos.", benefits: ["Diversão garantida", "Baixo impacto", "Convívio social"] },
  { name: "Condicionamento Físico", age: "Atletas e amadores", img: coaching, desc: "Preparação esportiva específica para tenistas: força, mobilidade, resistência e prevenção de lesões.", benefits: ["Programa individual", "Foco esportivo", "Prevenção"] },
];

function ModalitiesPage() {
  return (
    <PageShell overlayHeader>
      <PageHero
        eyebrow="Modalidades"
        title={<>Um programa completo<br /><span className="font-serif-display italic">para cada jogador</span>.</>}
        subtitle="Do mini-tênis infantil ao treino federado, do squash ao beach tennis — todas as modalidades em um único endereço."
        image={hero}
      />

      <section className="py-24 md:py-32">
        <div className="container-prose space-y-24">
          {items.map((m, i) => (
            <article key={m.name} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="md:col-span-7">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="eyebrow text-accent">{m.age}</div>
                <h2 className="mt-4 font-display font-light text-4xl md:text-5xl tracking-tight">{m.name}</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">{m.desc}</p>
                <ul className="mt-8 space-y-2 border-t border-border pt-6">
                  {m.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <span className="h-px w-6 bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/contato" className="mt-10 inline-flex items-center gap-2 link-underline text-[12px] tracking-[0.22em] uppercase">
                  Agendar experiência <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
