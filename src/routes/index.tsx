import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowUpRight, Award, Users, Trees, Sparkles, Shield, Clock, Heart, Trophy, MapPin, Instagram } from "lucide-react";
import hero from "@/assets/hero-tennis.jpg";
import courtAerial from "@/assets/court-aerial.jpg";
import coaching from "@/assets/coaching.jpg";
import covered from "@/assets/covered-court.jpg";
import racket from "@/assets/racket-detail.jpg";
import lifestyle from "@/assets/lifestyle.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

// Importando os componentes UI
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
  { quote: "Meu filho começou aos 7 anos. Hoje, aos 12, joga federado. O cuidado da equipe técnica é incomparável e o ambiente é super seguro.", who: "Carolina M.", time: "Mãe de aluno há 5 anos", img: "https://i.pravatar.cc/150?u=carolina" },
  { quote: "Voltei a jogar depois de 20 anos. As quadras de saibro são perfeitas para os joelhos e o ambiente do Eco me devolveu o prazer pelo esporte.", who: "Ricardo F.", time: "Sócio há 2 anos, 54 anos", img: "https://i.pravatar.cc/150?u=ricardo" },
  { quote: "É o clube de tênis mais elegante e bem estruturado de Curitiba — mas sem perder o calor humano e a facilidade de acesso.", who: "Luciana A.", time: "Sócia há 8 anos", img: "https://i.pravatar.cc/150?u=luciana" },
];

const faqs = [
  { q: "Preciso ter raquete própria para a aula experimental?", a: "Não! Nós emprestamos todo o material necessário (raquete e bolas) para as suas primeiras aulas. Venha apenas com roupas leves e tênis esportivo." },
  { q: "Qual a idade mínima para o tênis infantil?", a: "Aceitamos crianças a partir de 5 anos de idade na nossa metodologia de iniciação lúdica, focada no desenvolvimento da coordenação motora." },
  { q: "Vocês aceitam alunos totalmente iniciantes?", a: "Com certeza. Temos turmas exclusivas para adultos iniciantes (que nunca pegaram numa raquete) até o nível de alto rendimento competitivo." },
  { q: "Como funciona a locação de quadras?", a: "Você pode realizar locações avulsas ou fechar pacotes mensais como mensalista. Temos quadras cobertas para garantir seu jogo mesmo em dias de chuva no Paraná." },
];

function HomePage() {
  return (
    <PageShell overlayHeader>
      {/* HERO AJUSTADO PARA MOBILE */}
      <section className="relative min-h-[100svh] flex flex-col justify-end pb-32 pt-32 md:pb-36 overflow-hidden bg-ink">
        <img src={hero} alt="Quadra de saibro do Eco Tênis ao pôr do sol" className="absolute inset-0 h-full w-full object-cover scale-105" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

        <div className="container-prose relative z-10 text-bone mt-auto w-full">
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
          
          {/* BOTÕES DE AÇÃO: Flex Column no Celular, Row no Desktop */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-rise delay-300 w-full sm:w-auto">
            <Dialog>
              <DialogTrigger asChild>
                <button className="group cursor-pointer inline-flex justify-center items-center gap-3 px-7 py-4 bg-bone text-ink text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors w-full sm:w-auto text-center">
                  Agendar aula experimental
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-background border-border text-foreground">
                <DialogHeader>
                  <div className="eyebrow text-accent mb-2">Primeiro Passo</div>
                  <DialogTitle className="font-display text-2xl font-medium">Agende sua Aula Experimental</DialogTitle>
                </DialogHeader>
                <form className="space-y-4 mt-4" onSubmit={(e) => { e.preventDefault(); window.open('https://wa.me/5541991319654', '_blank'); }}>
                  <div>
                    <label className="block text-sm font-medium mb-1">Nome completo</label>
                    <input type="text" required className="w-full border border-border p-3 bg-transparent outline-none focus:border-accent" placeholder="Como podemos te chamar?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">WhatsApp</label>
                    <input type="tel" required className="w-full border border-border p-3 bg-transparent outline-none focus:border-accent" placeholder="(41) 99999-9999" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Nível de Experiência</label>
                    <select className="w-full border border-border p-3 bg-background outline-none focus:border-accent text-foreground">
                      <option>Nunca joguei (Iniciante)</option>
                      <option>Já bati bola (Intermediário)</option>
                      <option>Jogo torneios (Avançado)</option>
                      <option>Apenas Locação</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full cursor-pointer bg-accent text-bone py-4 mt-2 font-medium tracking-widest uppercase text-xs hover:bg-ink transition-colors">
                    Enviar para a Secretaria
                  </button>
                </form>
              </DialogContent>
            </Dialog>

            <a
              href="https://wa.me/5541991319654"
              target="_blank"
              rel="noopener"
              className="inline-flex justify-center items-center gap-3 px-7 py-4 border border-bone/40 text-[12px] tracking-[0.22em] uppercase hover:bg-bone/10 transition-colors w-full sm:w-auto text-center"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* BOTTOM BAR BADGES: Flex Wrap e proteção de quebra */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-bone/15 bg-ink/40 backdrop-blur-sm">
          <div className="container-prose py-4 flex flex-wrap items-center justify-center md:justify-between gap-x-3 gap-y-2 md:gap-x-4 text-bone/80 text-[10px] md:text-[11px] tracking-[0.22em] uppercase leading-relaxed text-center">
            <span className="whitespace-nowrap">15+ anos de tradição</span>
            <span className="hidden md:inline opacity-40">·</span>
            <span className="whitespace-nowrap">6 quadras de saibro</span>
            <span className="hidden md:inline opacity-40">·</span>
            <span className="whitespace-nowrap">Professores CBT / ITF</span>
            <span className="hidden md:inline opacity-40">·</span>
            <span className="whitespace-nowrap">Quadras cobertas</span>
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
              <div key={title} className="group p-8 lg:p-10 border-r border-b border-border/70 bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-500">
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
            {modalities.map((m, idx) => (
              <article key={m.name} className={`group cursor-pointer ${idx >= 4 ? 'mt-0 md:mt-10' : ''}`}>
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

      {/* ESTRUTURA TANGIBILIZADA */}
      <section className="py-24 md:py-32">
        <div className="container-prose">
          <div className="mb-16">
            <div className="eyebrow text-accent">Estrutura Premium</div>
            <h2 className="mt-4 font-display font-light text-4xl md:text-6xl tracking-tight max-w-3xl text-balance">
              Um clube pensado nos mínimos detalhes.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-[4/3] overflow-hidden group">
              <img src={courtAerial} alt="Quadras" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-bone">
                <h3 className="font-display text-2xl font-medium">6 Quadras de Saibro</h3>
                <p className="text-sm opacity-80 mt-1">Manutenção diária impecável para preservar suas articulações.</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden group">
              <img src={covered} alt="Quadra Coberta" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-bone">
                <h3 className="font-display text-2xl font-medium">Cobertura Premium</h3>
                <p className="text-sm opacity-80 mt-1">Seu treino garantido com chuva ou sol.</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden group">
              <img src={coaching} alt="Vestiários e Fitness" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-bone">
                <h3 className="font-display text-2xl font-medium">Vestiários e Fitness</h3>
                <p className="text-sm opacity-80 mt-1">Estrutura e conforto total para o pós-jogo executivo.</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden group">
              <img src={lifestyle} alt="Área de Convivência" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-bone">
                <h3 className="font-display text-2xl font-medium">Lanchonete e Convivência</h3>
                <p className="text-sm opacity-80 mt-1">Café e um ambiente seguro para os pais aguardarem.</p>
              </div>
            </div>
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
              <figure key={i} className="bg-background p-8 border border-border/70 flex flex-col justify-between">
                <div>
                  <div className="text-accent text-5xl font-serif-display leading-none">“</div>
                  <blockquote className="mt-4 font-serif-display text-xl italic leading-snug">
                    {t.quote}
                  </blockquote>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-border">
                    <AvatarImage src={t.img} alt={t.who} />
                    <AvatarFallback>{t.who.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{t.who}</div>
                    <div className="text-xs text-muted-foreground">{t.time}</div>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-prose max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="eyebrow text-accent">Tire suas dúvidas</div>
            <h2 className="mt-4 font-display font-light text-3xl md:text-5xl tracking-tight">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border border-border px-6 bg-background data-[state=open]:border-accent transition-colors">
                <AccordionTrigger className="font-display text-lg font-medium hover:no-underline text-left py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* MAPEAMENTO GOOGLE MAPS */}
      <section className="py-24 md:py-32 bg-ink text-bone">
        <div className="container-prose">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow text-accent">Localização Estratégica</div>
              <h2 className="mt-4 font-display font-light text-4xl md:text-6xl tracking-tight text-balance">
                O seu clube em <span className="font-serif-display italic">Santa Felicidade</span>.
              </h2>
              <p className="mt-6 opacity-80 leading-relaxed text-lg">
                Fácil acesso, amplo estacionamento e a tranquilidade que você precisa para focar apenas no seu jogo.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Eco Tênis Academia</h4>
                    <p className="opacity-70 mt-1">Rua Brasílio Cuman, 1324<br/>Butiatuvinha / Santa Felicidade<br/>Curitiba - PR, 82315-487</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <a 
                  href="https://maps.google.com/?q=Rua+Brasílio+Cuman,+1324+-+Butiatuvinha,+Curitiba" 
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-bone text-ink text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Traçar Rota no Mapa <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="aspect-square md:aspect-[4/3] bg-muted/20 border border-bone/10 relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.1032338578495!2d-49.336111!3d-25.401111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce30000000001%3A0x1234567890abcdef!2sRua+Bras%C3%ADlio+Cuman%2C+1324+-+Butiatuvinha%2C+Curitiba+-+PR%2C+82315-487!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FEED DO INSTAGRAM MOCK */}
      <section className="py-16 border-b border-border/50">
        <div className="container-prose text-center mb-10">
          <Instagram className="h-8 w-8 mx-auto text-muted-foreground mb-4" />
          <h2 className="font-display text-2xl font-medium">@ecotenisclube</h2>
          <p className="text-muted-foreground text-sm mt-2">Acompanhe nosso dia a dia, torneios e bastidores na nossa rede.</p>
        </div>
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee gap-4 px-4 min-w-full">
            {[hero, courtAerial, coaching, covered, racket, lifestyle].map((img, i) => (
              <img key={`feed-${i}`} src={img} alt="Instagram Post" className="w-64 h-64 object-cover flex-shrink-0 border border-border/30 hover:opacity-80 transition-opacity cursor-pointer" />
            ))}
            {[hero, courtAerial, coaching, covered, racket, lifestyle].map((img, i) => (
              <img key={`feed-dup-${i}`} src={img} alt="Instagram Post" className="w-64 h-64 object-cover flex-shrink-0 border border-border/30 hover:opacity-80 transition-opacity cursor-pointer" />
            ))}
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
            <Dialog>
              <DialogTrigger asChild>
                <button className="inline-flex cursor-pointer items-center gap-3 px-8 py-5 bg-accent text-accent-foreground text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-bone hover:text-ink transition-colors">
                  Agendar agora <ArrowUpRight className="h-4 w-4" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-background border-border text-foreground">
                <DialogHeader>
                  <div className="eyebrow text-accent mb-2">Quase lá</div>
                  <DialogTitle className="font-display text-2xl font-medium">Garanta sua vaga na quadra</DialogTitle>
                </DialogHeader>
                <form className="space-y-4 mt-4" onSubmit={(e) => { e.preventDefault(); window.open('https://wa.me/5541991319654', '_blank'); }}>
                  <div>
                    <label className="block text-sm font-medium mb-1">Seu Nome</label>
                    <input type="text" required className="w-full border border-border p-3 bg-transparent outline-none focus:border-accent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">WhatsApp</label>
                    <input type="tel" required className="w-full border border-border p-3 bg-transparent outline-none focus:border-accent" />
                  </div>
                  <button type="submit" className="w-full cursor-pointer bg-accent text-bone py-4 mt-2 font-medium tracking-widest uppercase text-xs hover:bg-ink transition-colors">
                    Agendar pelo WhatsApp
                  </button>
                </form>
              </DialogContent>
            </Dialog>

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