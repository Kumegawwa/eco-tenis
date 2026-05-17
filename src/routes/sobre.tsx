import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import courtAerial from "@/assets/court-aerial.jpg";
import racket from "@/assets/racket-detail.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Eco Tênis Academia | Tradição em Curitiba" },
      { name: "description", content: "Mais de 15 anos de tradição no tênis paranaense. Conheça a história, a filosofia e a metodologia do Eco Tênis Academia em Santa Felicidade." },
      { property: "og:title", content: "Sobre o Eco Tênis Academia" },
      { property: "og:description", content: "História, metodologia e filosofia de um clube boutique de tênis em Curitiba." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

const pillars = [
  { n: "01", t: "Tradição", d: "Mais de quinze anos consolidando uma das mais respeitadas escolas de tênis do Paraná." },
  { n: "02", t: "Metodologia", d: "Programa progressivo CBT/ITF, do mini-tênis ao alto rendimento, com avaliações periódicas." },
  { n: "03", t: "Comunidade", d: "Um clube familiar onde sócios se tornam amigos e jogadores se tornam companheiros de quadra." },
];

function SobrePage() {
  return (
    <PageShell overlayHeader>
      <PageHero
        eyebrow="Sobre · Desde 2009"
        title={<>Uma escola que entende o tênis<br /><span className="font-serif-display italic">como um modo de vida</span>.</>}
        subtitle="Quinze anos formando atletas, famílias e amizades em Santa Felicidade."
        image={courtAerial}
      />

      <section className="py-24 md:py-32">
        <div className="container-prose grid md:grid-cols-12 gap-14">
          <div className="md:col-span-5">
            <div className="eyebrow text-accent">Nossa história</div>
            <div className="hairline mt-4 w-24" />
          </div>
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
            <p>
              O Eco Tênis Academia nasceu da convicção de que o tênis é um
              esporte para a vida inteira. Em Santa Felicidade, Curitiba,
              construímos ao longo de mais de quinze anos um clube boutique
              dedicado ao saibro, à técnica clássica e ao acolhimento.
            </p>
            <p>
              Aqui, professores certificados pela CBT e pela ITF conduzem
              cada aluno com a atenção que somente turmas reduzidas permitem.
              Crianças que começam aos cinco anos crescem dentro do clube;
              executivos encontram no esporte uma rotina de equilíbrio;
              veteranos seguem jogando — e ensinando — após décadas de quadra.
            </p>
            <p>
              É essa continuidade entre gerações que define o Eco Tênis. Um
              lugar onde a excelência técnica convive com o sentimento raro
              de pertencimento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-prose">
          <div className="eyebrow text-accent">Pilares</div>
          <h2 className="mt-4 font-display font-light text-4xl md:text-6xl tracking-tight max-w-3xl text-balance">
            Três compromissos inegociáveis.
          </h2>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
            {pillars.map((p) => (
              <div key={p.n} className="bg-background p-10 md:p-12">
                <div className="font-serif-display text-5xl text-accent">{p.n}</div>
                <h3 className="mt-6 font-display text-2xl">{p.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <img src={racket} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="container-prose relative z-10 text-center">
          <p className="font-serif-display italic text-3xl md:text-5xl max-w-3xl mx-auto leading-snug">
            “Esporte para toda vida — não é um slogan. É a forma como cuidamos
            de cada aluno, todos os dias, há mais de quinze anos.”
          </p>
          <Link to="/contato" className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-[12px] tracking-[0.22em] uppercase hover:bg-accent transition-colors">
            Agendar aula experimental
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
