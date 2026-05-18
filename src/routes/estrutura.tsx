import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Map, Droplets, Sun, Dumbbell, Coffee, Car } from "lucide-react";
import courtAerial from "@/assets/court-aerial.jpg";
import covered from "@/assets/covered-court.jpg";
import coaching from "@/assets/coaching.jpg";
import lifestyle from "@/assets/lifestyle.jpg";

export const Route = createFileRoute("/estrutura")({
  component: EstruturaPage,
});

const facilities = [
  {
    icon: Droplets,
    title: "6 Quadras de Saibro",
    description: "O piso clássico do tênis. Nosso saibro recebe manutenção rigorosa e hidratação diária. É o diferencial absoluto para a preservação das suas articulações, garantindo um jogo tático e confortável em qualquer idade."
  },
  {
    icon: Sun,
    title: "Quadras Cobertas e Descobertas",
    description: "Em Curitiba, o clima não pode ditar o seu ritmo. Nossa estrutura coberta garante que o seu plano de aulas ou sua locação mensal jamais sejam interrompidos por chuvas ou intempéries."
  },
  {
    icon: Map,
    title: "Quadra Oficial de Squash",
    description: "Um dos esportes mais completos e intensos do mundo. Excelente para o público executivo que busca queima calórica rápida e treinos de explosão em uma quadra com piso de borracha de alta performance."
  },
  {
    icon: Sun,
    title: "Arena de Beach Tennis",
    description: "Areia, sol e o esporte que conquistou o Brasil. Um espaço vibrante focado no convívio social, agilidade e descontração para o público jovem e familiar."
  },
  {
    icon: Dumbbell,
    title: "Condicionamento Físico e Vestiários",
    description: "Sala de fitness focada na preparação física de tenistas (fortalecimento de core e prevenção de lesões), além de vestiários premium completos para o seu conforto no pós-jogo."
  },
  {
    icon: Coffee,
    title: "Conveniência e Estacionamento",
    description: "Amplo estacionamento seguro e uma Lanchonete/Café acolhedora. O ambiente perfeito para a resenha após a partida ou para os pais aguardarem seus filhos com conforto e Wi-Fi."
  }
];

function EstruturaPage() {
  return (
    <PageShell>
      <div className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-border/50 bg-grain">
        <div className="container-prose">
          <div className="eyebrow text-accent animate-rise">Nossa Casa</div>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl lg:text-7xl tracking-tight text-balance animate-rise delay-100">
            A infraestrutura que o seu <br className="hidden md:block" />
            <span className="font-serif-display italic text-accent">jogo exige</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-rise delay-200">
            O Eco Tênis foi projetado para que a sua única preocupação seja o impacto da raquete na bola. Do pó de tijolo tradicional aos vestiários executivos, cada metro quadrado respira o esporte.
          </p>
        </div>
      </div>

      {/* GALERIA TANGÍVEL */}
      <section className="py-20 md:py-32 border-b border-border/50">
        <div className="container-prose grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="relative aspect-[4/3] overflow-hidden group">
            <img src={courtAerial} alt="Quadras de Saibro" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-bone font-display text-2xl font-medium">As Quadras de Saibro</h3>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden group">
            <img src={covered} alt="Quadras Cobertas" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-bone font-display text-2xl font-medium">Cobertura Premium</h3>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden group">
            <img src={coaching} alt="Vestiários e Fitness" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-bone font-display text-2xl font-medium">Vestiários e Fitness</h3>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden group">
            <img src={lifestyle} alt="Área de Convivência" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-bone font-display text-2xl font-medium">Convivência e Conveniência</h3>
          </div>
        </div>
      </section>

      {/* DETALHAMENTO */}
      <section className="py-20 md:py-32">
        <div className="container-prose">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {facilities.map((f, i) => (
              <div key={i} className="group">
                <f.icon className="h-8 w-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-2xl font-medium mb-4">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}