import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import courtAerial from "@/assets/court-aerial.jpg";
import covered from "@/assets/covered-court.jpg";
import racket from "@/assets/racket-detail.jpg";
import hero from "@/assets/hero-tennis.jpg";
import coaching from "@/assets/coaching.jpg";
import lifestyle from "@/assets/lifestyle.jpg";

export const Route = createFileRoute("/estrutura")({
  head: () => ({
    meta: [
      { title: "Estrutura — 6 Quadras de Saibro em Curitiba | Eco Tênis" },
      { name: "description", content: "Seis quadras de saibro, cobertas e descobertas, squash, beach tennis e áreas de convivência em Santa Felicidade, Curitiba." },
      { property: "og:title", content: "Estrutura — Eco Tênis Academia" },
      { property: "og:description", content: "Quadras de saibro, squash, beach tennis e infraestrutura premium." },
      { property: "og:url", content: "/estrutura" },
    ],
    links: [{ rel: "canonical", href: "/estrutura" }],
  }),
  component: StructurePage,
});

const facts = [
  ["06", "Quadras de saibro"],
  ["02", "Quadras cobertas"],
  ["01", "Quadra de squash"],
  ["01", "Arena beach tennis"],
];

const gallery = [
  { src: courtAerial, alt: "Quadra de saibro vista superior", span: "md:col-span-8" },
  { src: covered, alt: "Quadra coberta", span: "md:col-span-4" },
  { src: racket, alt: "Raquete e bolas", span: "md:col-span-4" },
  { src: hero, alt: "Jogador em ação na quadra de saibro", span: "md:col-span-8" },
  { src: coaching, alt: "Aula no Eco Tênis", span: "md:col-span-6" },
  { src: lifestyle, alt: "Sócio veterano do clube", span: "md:col-span-6" },
];

function StructurePage() {
  return (
    <PageShell overlayHeader>
      <PageHero
        eyebrow="Estrutura"
        title={<>O clube,<br /><span className="font-serif-display italic">em cada detalhe</span>.</>}
        subtitle="Saibro original, cobertura premium e áreas de convivência pensadas para a experiência completa do sócio."
        image={covered}
      />

      <section className="py-24 md:py-32">
        <div className="container-prose">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {facts.map(([n, l]) => (
              <div key={l} className="bg-background p-8 md:p-12 text-center">
                <div className="font-display font-light text-5xl md:text-7xl text-accent">{n}</div>
                <div className="mt-3 eyebrow text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-prose">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {gallery.map((g, i) => (
              <figure key={i} className={`col-span-12 ${g.span} aspect-[4/3] overflow-hidden group`}>
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
