import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowUpRight, History, Target, Users } from "lucide-react";
import lifestyle from "@/assets/lifestyle.jpg";
import courtAerial from "@/assets/court-aerial.jpg";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
});

function SobrePage() {
  return (
    <PageShell>
      <div className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-border/50">
        <div className="container-prose">
          <div className="eyebrow text-accent animate-rise">Nossa História</div>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl lg:text-7xl tracking-tight text-balance animate-rise delay-100">
            Mais de uma década de <span className="font-serif-display italic text-accent">tradição</span> no saibro paranaense.
          </h1>
        </div>
      </div>

      <section className="py-20 md:py-32">
        <div className="container-prose">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="md:col-span-5 prose prose-stone dark:prose-invert">
              <p className="lead text-xl md:text-2xl font-light leading-relaxed text-foreground">
                O Eco Tênis não é uma franquia massificada. Somos uma escola artesanal e um clube forjado por quem vive o tênis diariamente.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Nossas raízes no bairro de Santa Felicidade e São Braz retrocedem a 15 de abril de 2009. Ao longo de mais de quinze anos de atuação ininterrupta, acompanhamos gerações de atletas evoluírem em nossas quadras. Em 2020, o clube passou por uma reestruturação societária e metodológica vigorosa sob a liderança de Eduardo Borges e Idalino Zanotto, elevando nossas instalações a um padrão de excelência internacional.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Ao contrário dos clubes tradicionais, que impõem taxas abusivas de joia e manutenção, nós operamos sob uma filosofia de liberdade burocrática: aqui, você investe exclusivamente no esporte e no ensino de excelência.
              </p>
            </div>
            <div className="md:col-span-7 relative">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={lifestyle} alt="Ambiente familiar no Eco Tênis" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square overflow-hidden bg-ink border-8 border-background hidden md:block">
                <img src={courtAerial} alt="Nossas quadras de saibro" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary">
        <div className="container-prose">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <History className="h-8 w-8 text-accent mb-6" />
              <h3 className="font-display text-2xl font-medium mb-4">Tradição Consolidada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Operando desde 2009, somos um dos endereços mais tradicionais e respeitados na formação de tenistas em Curitiba, sediando etapas oficiais como o FPT Series 250 e 500.
              </p>
            </div>
            <div>
              <Target className="h-8 w-8 text-accent mb-6" />
              <h3 className="font-display text-2xl font-medium mb-4">Esporte para toda vida</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nosso slogan oficial não é apenas marketing. É um compromisso metodológico. Acolhemos desde a iniciação infantil (a partir dos 5 anos) até a prática veterana acima dos 80 anos.
              </p>
            </div>
            <div>
              <Users className="h-8 w-8 text-accent mb-6" />
              <h3 className="font-display text-2xl font-medium mb-4">Comunidade Boutique</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos um número reduzido de alunos por quadra para garantir correção individualizada, proximidade com a equipe técnica e um ambiente verdadeiramente familiar e seguro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ink text-bone text-center">
        <div className="container-prose max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-light mb-8">Faça parte da nossa história.</h2>
          <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-bone hover:text-ink transition-colors">
            Conhecer a Estrutura <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}