import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";
import coaching from "@/assets/coaching.jpg";

export const Route = createFileRoute("/professores")({
  head: () => ({
    meta: [
      { title: "Professores — Equipe Técnica Eco Tênis Curitiba" },
      { name: "description", content: "Conheça Reinaldo Tormes, Idalino Zanotto e Eduardo Borges dos Reis — professores certificados CBT e ITF do Eco Tênis Academia." },
      { property: "og:title", content: "Professores — Eco Tênis Academia" },
      { property: "og:description", content: "Equipe técnica certificada CBT/ITF com décadas de experiência no tênis paranaense." },
      { property: "og:url", content: "/professores" },
    ],
    links: [{ rel: "canonical", href: "/professores" }],
  }),
  component: TeachersPage,
});

const coaches = [
  {
    name: "Reinaldo Tormes",
    role: "Head Coach",
    cert: "Certificação CBT",
    img: coach1,
    bio: "Mais de duas décadas dedicadas à formação de tenistas no Paraná. Reinaldo é a referência metodológica do Eco Tênis, responsável pelo programa de base e pela formação dos atletas competitivos da casa.",
    stats: [["20+", "anos de quadra"], ["100+", "alunos formados"], ["CBT", "certificado"]],
  },
  {
    name: "Idalino Zanotto",
    role: "Mestre · Fundamentos",
    cert: "Certificação ITF",
    img: coach2,
    bio: "Nome histórico do tênis paranaense, Idalino é autoridade absoluta em fundamentos clássicos. Sua aula é procurada por jogadores de todos os níveis que buscam excelência técnica e refinamento de jogo.",
    stats: [["30+", "anos de tênis"], ["ITF", "certificado"], ["∞", "fundamentos"]],
  },
  {
    name: "Eduardo Borges dos Reis",
    role: "Performance & Competição",
    cert: "Certificação CBT",
    img: coach3,
    bio: "Especialista em alto rendimento, Eduardo conduz os atletas que disputam o circuito federado. Trabalha técnica, tática e preparação física de forma integrada, com foco em resultado e longevidade esportiva.",
    stats: [["10+", "anos de coaching"], ["CBT", "certificado"], ["#1", "em performance"]],
  },
];

function TeachersPage() {
  return (
    <PageShell overlayHeader>
      <PageHero
        eyebrow="Corpo Técnico"
        title={<>Três mestres,<br /><span className="font-serif-display italic">uma só escola</span>.</>}
        subtitle="Mais de meio século somado de dedicação ao tênis, à formação de atletas e ao refinamento técnico no saibro."
        image={coaching}
      />

      <section className="py-24 md:py-32">
        <div className="container-prose space-y-32">
          {coaches.map((c, i) => (
            <article key={c.name} className={`grid md:grid-cols-12 gap-12 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="md:col-span-5">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="eyebrow text-accent">{c.cert}</div>
                <h2 className="mt-4 font-display font-light text-5xl md:text-6xl tracking-tight">{c.name}</h2>
                <div className="mt-3 font-serif-display italic text-xl text-muted-foreground">{c.role}</div>
                <p className="mt-8 text-lg leading-relaxed">{c.bio}</p>
                <div className="mt-10 grid grid-cols-3 border-t border-border pt-8">
                  {c.stats.map(([n, l]) => (
                    <div key={l}>
                      <div className="font-display text-3xl md:text-4xl font-light text-accent">{n}</div>
                      <div className="mt-1 eyebrow text-muted-foreground">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
