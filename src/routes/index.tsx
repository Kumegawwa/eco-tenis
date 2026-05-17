import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowUpRight, Award, Users, Trees, Sparkles, Shield, Clock, Heart, Trophy } from "lucide-react";
import hero from "@/assets/hero-tennis.jpg";
import courtAerial from "@/assets/court-aerial.jpg";
import coaching from "@/assets/coaching.jpg";
import covered from "@/assets/covered-court.jpg";
import racket from "@/assets/racket-detail.jpg";
import lifestyle from "@/assets/lifestyle.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eco Tênis Academia — Escola de Tênis Premium em Curitiba" },
      { name: "description", content: "Academia boutique de tênis em Santa Felicidade, Curitiba. Quadras de saibro, professores CBT/ITF, ambiente familiar. Agende sua aula experimental." },
      { property: "og:title", content: "Eco Tênis Academia — Tênis Premium em Curitiba" },
      { property: "og:description", content: "Mais de 15 anos formando atletas em quadras de saibro. Esporte para toda vida." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const differentials = [
  { icon: Award, title: "Professores CBT & ITF", text: "Equipe técnica certificada pela Confederação Brasileira de Tênis e pela International Tennis Federation." },
  { icon: Trees, title: "Seis quadras de saibro", text: "Saibro original, manutenção diária e o mesmo piso clássico dos torneios europeus." },
  { icon: Shield, title: "Quadras cobertas", text: "Treino garantido em qualquer estação, com infraestrutura para chuva, sol e inverno paranaense." },
  { icon: Users, title: "Poucos alunos por quadra", text: "Turmas reduzidas, atenção individualizada e progressão técnica acelerada." },
  { icon: Trophy, title: "Formação competitiva", text: "Caminho estruturado do iniciante ao circuito federado, com sparring e preparação física." },
  { icon: Heart, title: "Ambiente familiar", text: "Acolhimento humanizado para crianças, adultos e veteranos — uma comunidade, não uma franquia." },
  { icon: Sparkles, title: "Estrutura premium", text: "Vestiários, áreas de convivência e atendimento pensados para a experiência completa do sócio." },
  { icon: Clock, title: "15+ anos de tradição", text: "Uma escola consolidada como referência do tênis paranaense em Santa Felicidade." },
];

const modalities = [
  { name: "Tênis Infantil", desc: "Iniciação lúdica com metodologia progressiva para crianças a partir de 5 anos.", img: coaching },
  { name: "Tênis Adulto", desc: "Aulas em grupo para todos os níveis, do primeiro contato ao jogo competitivo.", img: courtAerial },
  { name: "Aula Particular", desc: "Acompanhamento individualizado, técnico e tático, no seu ritmo e horário.", img: racket },
  { name: "Treino Competitivo", desc: "Preparação para torneios regionais, estaduais e nacionais.", img: hero },
  { name: "Locação de Quadras", desc: "Saibro coberto e descoberto disponível para sócios e visitantes.", img: covered },
  { name: "Squash", desc: "Quadra oficial para um dos esportes mais completos do mundo.", img: courtAerial },
  { name: "Beach Tennis", desc: "Areia, sol e o esporte que está conquistando Curitiba inteira.", img: lifestyle },
  { name: "Condicionamento Físico", desc: "Preparação esportiva específica para tenistas de todas as idades.", img: coaching },
];

const coaches = [
  { name: "Reinaldo Tormes", role: "Head Coach · CBT", bio: "Mais de duas décadas formando jogadores de base e atletas competitivos no Paraná.", img: coach1 },
  { name: "Idalino Zanotto", role: "Mestre · ITF", bio: "Referência histórica do tênis paranaense, autoridade absoluta em fundamentos clássicos.", img: coach2 },
  { name: "Eduardo Borges dos Reis", role: "Performance · CBT", bio: "Preparação técnica e tática para jovens talentos e jogadores em busca de alto rendimento.", img: coach3 },
];

const testimonials = [
  { quote: "Meu filho começou aos 7 anos. Hoje, aos 12, joga federado. O cuidado da equipe é incomparável.", who: "Carolina M., mãe de aluno" },
  { quote: "Voltei a jogar depois de 20 anos. O ambiente do Eco me devolveu o prazer pelo esporte.", who: "Ricardo F., 54 anos" },
  { quote: "É o clube de tênis mais elegante de Curitiba — sem perder o calor humano.", who: "Luciana A., sócia há 8 anos" },
];

function HomePage() {
  return (
    <PageShell overlayHeader>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden">
        <img src={hero} alt="Quadra de saibro do Eco Tênis ao pôr do sol" className="absolute inset-0 h-full w-full object-cover scale-105" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

        <div className="container-prose relative z-10 pb-20 md:pb-28 text-bone">
          <div className="eyebrow opacity-80 animate-rise">Curitiba · Santa Felicidade · Desde 2009</div>
          <h1 className="mt-6 font-display font-light text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight max-w-5xl text-balance animate-rise delay-100">
            Esporte<br />
            <span className="font-serif-display italic font-normal">para toda</span> vida.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg opacity-90 leading-relaxed animate-rise delay-200">
            Uma academia boutique dedicada ao tênis, ao squash e ao beach tennis.
            Saibro original, professores CBT/ITF e uma comunidade que escolheu o
            esporte como modo de vida.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise delay-300">
            <Link
              to="/contato"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-bone text-ink text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Agendar aula experimental
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="https://wa.me/5541991319654"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-7 py-4 border border-bone/40 text-[12px] tracking-[0.22em] uppercase hover:bg-bone/10 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* hero footer ticker */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-bone/15 bg-ink/40 backdrop-blur-sm">
          <div className="container-prose py-4 flex flex-wrap items-center justify-between gap-3 text-bone/80 text-[11px] tracking-[0.22em] uppercase">
            <span>15+ anos de tradição</span>
            <span className="hidden md:inline opacity-40">·</span>
            <span>6 quadras de saibro</span>
            <span className="hidden md:inline opacity-40">·</span>
            <span>Professores CBT / ITF</span>
            <span className="hidden md:inline opacity-40">·</span>
            <span>Quadras cobertas</span>
          </div>
        </div>
      </section>

      {/* INTRO QUOTE */}
      <section className="py-28 md:py-40 bg-grain">
        <div className="container-prose grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-4">
            <div className="eyebrow text-accent">O Eco Tênis</div>
            <div className="hairline mt-4 w-24" />
          </div>
          <div className="md:col-span-8">
            <p className="font-display font-light text-3xl md:text-5xl leading-[1.15] tracking-tight text-balance">
              Há mais de quinze anos, somos o endereço de quem entende o tênis
              como uma escolha de vida — e não apenas como um esporte.
              <span className="text-accent"> Um clube boutique</span>, com
              metodologia séria e ambiente verdadeiramente familiar.
            </p>
            <Link to="/sobre" className="mt-10 inline-flex items-center gap-2 link-underline text-[12px] tracking-[0.22em] uppercase">
              Conheça nossa história <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-prose">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-6">
              <div className="eyebrow text-accent">Diferenciais</div>
              <h2 className="mt-4 font-display font-light text-4xl md:text-6xl tracking-tight text-balance">
                Excelência<br />silenciosa.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-muted-foreground leading-relaxed">
                Cada detalhe do Eco Tênis foi pensado para que o seu único
                trabalho seja jogar. Estrutura, metodologia e atendimento de
                padrão internacional, sem ostentação.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border/70">
            {differentials.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group p-8 lg:p-10 border-r border-b border-border/70 bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
              >
                <Icon className="h-7 w-7 stroke-[1.2] text-accent group-hover:text-bone transition-colors" />
                <h3 className="mt-8 font-display text-lg font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODALITIES */}
      <section className="py-24 md:py-32">
        <div className="container-prose">
          <div className="flex items-end justify-between mb-14 gap-8">
            <div>
              <div className="eyebrow text-accent">Modalidades</div>
              <h2 className="mt-4 font-display font-light text-4xl md:text-6xl tracking-tight">
                O jogo, em todas as suas formas.
              </h2>
            </div>
            <Link to="/modalidades" className="hidden md:inline-flex items-center gap-2 link-underline text-[12px] tracking-[0.22em] uppercase">
              Ver todas <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modalities.slice(0, 4).map((m) => (
              <article key={m.name} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img src={m.img} alt={m.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-bone">
                    <h3 className="font-display text-xl font-medium">{m.name}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modalities.slice(4).map((m) => (
              <article key={m.name} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img src={m.img} alt={m.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-bone">
                    <h3 className="font-display text-xl font-medium">{m.name}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section className="py-24 md:py-32 bg-ink text-bone relative overflow-hidden">
        <div className="container-prose">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
            <div className="md:col-span-7">
              <div className="eyebrow text-accent">Corpo Técnico</div>
              <h2 className="mt-4 font-display font-light text-4xl md:text-6xl tracking-tight text-balance">
                Mestres do <span className="font-serif-display italic">saibro</span>.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="opacity-80 leading-relaxed">
                Três gerações de professores certificados que carregam, juntos,
                mais de meio século dedicado ao tênis paranaense.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((c) => (
              <article key={c.name}>
                <div className="aspect-[4/5] overflow-hidden bg-muted/10">
                  <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="mt-6">
                  <div className="eyebrow opacity-60">{c.role}</div>
                  <h3 className="mt-2 font-display text-2xl">{c.name}</h3>
                  <p className="mt-3 text-sm opacity-75 leading-relaxed">{c.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURE EDITORIAL */}
      <section className="py-24 md:py-32">
        <div className="container-prose">
          <div className="mb-16">
            <div className="eyebrow text-accent">Estrutura</div>
            <h2 className="mt-4 font-display font-light text-4xl md:text-6xl tracking-tight max-w-3xl text-balance">
              Um clube pensado nos mínimos detalhes.
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden">
              <img src={courtAerial} alt="Quadra de saibro vista de cima" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4 aspect-[4/5] md:aspect-auto overflow-hidden">
              <img src={covered} alt="Quadra coberta de saibro" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4 aspect-square overflow-hidden">
              <img src={racket} alt="Detalhe de raquete e bola" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-12 md:col-span-8 aspect-[16/9] overflow-hidden">
              <img src={lifestyle} alt="Veterano sorrindo na quadra" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="mt-12 flex justify-end">
            <Link to="/estrutura" className="inline-flex items-center gap-2 link-underline text-[12px] tracking-[0.22em] uppercase">
              Visitar a estrutura <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-prose">
          <div className="eyebrow text-accent text-center">Quem joga aqui</div>
          <h2 className="mt-4 text-center font-display font-light text-3xl md:text-5xl tracking-tight max-w-3xl mx-auto text-balance">
            A comunidade que faz do Eco Tênis um endereço.
          </h2>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-background p-10 border border-border/70">
                <div className="text-accent text-5xl font-serif-display leading-none">“</div>
                <blockquote className="mt-4 font-serif-display text-xl italic leading-snug">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 eyebrow text-muted-foreground">{t.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE EMOTIONAL */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <img src={lifestyle} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="container-prose relative z-10">
          <div className="max-w-2xl text-bone">
            <div className="eyebrow opacity-80">Lifestyle</div>
            <p className="mt-6 font-display font-light text-3xl md:text-5xl leading-[1.15] tracking-tight text-balance">
              Há quem jogue tênis pelo placar. Aqui, joga-se pela
              <span className="font-serif-display italic"> vida inteira</span>.
            </p>
            <p className="mt-8 opacity-85 leading-relaxed max-w-lg">
              Crianças que crescem na quadra. Adultos que reencontram o esporte.
              Veteranos que continuam jogando aos 70. O Eco Tênis é o lugar
              onde gerações se cruzam — e ficam amigas.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24 md:py-32 text-center">
          <div className="eyebrow opacity-70">Comece agora</div>
          <h2 className="mt-6 font-display font-light text-4xl md:text-7xl tracking-tight text-balance max-w-4xl mx-auto">
            Sua primeira aula é uma <span className="font-serif-display italic">cortesia</span>.
          </h2>
          <p className="mt-8 max-w-xl mx-auto opacity-80 leading-relaxed">
            Venha conhecer o clube, sentir o saibro sob os pés e jogar com
            quem entende. Agende sua aula experimental gratuita.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="inline-flex items-center gap-3 px-8 py-5 bg-accent text-accent-foreground text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-bone hover:text-ink transition-colors"
            >
              Agendar agora <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/5541991319654"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-8 py-5 border border-bone/30 text-[12px] tracking-[0.22em] uppercase hover:bg-bone/10 transition-colors"
            >
              WhatsApp +55 41 99131-9654
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
