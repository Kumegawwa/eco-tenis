import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Award, Medal, ShieldCheck } from "lucide-react";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

export const Route = createFileRoute("/professores")({
  component: ProfessoresPage,
});

function ProfessoresPage() {
  return (
    <PageShell>
      <div className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-border/50 bg-grain">
        <div className="container-prose">
          <div className="eyebrow text-accent animate-rise">Corpo Técnico</div>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl lg:text-7xl tracking-tight text-balance animate-rise delay-100">
            A excelência forjada <br className="hidden md:block" />
            <span className="font-serif-display italic text-accent">dentro da quadra</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-rise delay-200">
            A credibilidade do ensino esportivo é indissociável da reputação de seus professores. Diferente de academias que empregam monitores inexperientes, o Eco Tênis conta com três gerações de técnicos certificados (CBT e ITF).
          </p>
        </div>
      </div>

      <section className="py-20 md:py-32 space-y-24 md:space-y-40">
        <div className="container-prose">
          {/* REINALDO TORMES */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Award className="h-5 w-5" />
                <span className="text-xs uppercase tracking-widest font-medium">Head Coach · Metodologia</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Reinaldo Tormes</h2>
              <div className="prose prose-stone dark:prose-invert text-muted-foreground leading-relaxed">
                <p>
                  Identificado como o pilar da excelência metodológica do clube, o Professor Reinaldo é instrutor certificado diretamente pela <strong>Confederação Brasileira de Tênis (CBT)</strong> e pela <strong>International Tennis Federation (ITF)</strong>.
                </p>
                <p>
                  Com experiência na docência do tênis desde 1995 e atuação no segmento competitivo de alto rendimento desde 2002, Tormes foi membro do quadro técnico oficial da <strong>Federação Paranaense de Tênis (FPT)</strong> na prestigiosa Copa das Federações (2014, 2015, 2016 e 2018).
                </p>
                <p>
                  Suas especialidades englobam a correção biomecânica impecável e o desenvolvimento tático, orientando desde crianças na iniciação lúdica até promessas do circuito nacional em torneios como o Bananinha Bowl.
                </p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={coach1} alt="Professor Reinaldo Tormes" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-prose">
          {/* IDALINO ZANOTTO */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={coach2} alt="Mestre Idalino Zanotto" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Medal className="h-5 w-5" />
                <span className="text-xs uppercase tracking-widest font-medium">Sócio Administrador · Mestre ITF</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Idalino Zanotto</h2>
              <div className="prose prose-stone dark:prose-invert text-muted-foreground leading-relaxed">
                <p>
                  Zanotto é uma verdadeira instituição e a personificação empírica do nosso slogan "Esporte para toda vida". Além de sócio do clube desde sua reestruturação, ele é uma lenda viva no circuito de tênis veterano (Senior).
                </p>
                <p>
                  Seus registros competitivos sob as bandeiras da CBT e ITF impressionam. Ele compete ativamente e conquista títulos expressivos nas exigentes categorias <strong>75+ e 80+ (masculino simples e duplas)</strong> em torneios como o ITF Seniors Circuit e o Brasileirão Closed.
                </p>
                <p>
                  Sua presença na quadra inspira todos os alunos e comprova de forma inquestionável a segurança e os benefícios do tênis praticado no saibro ao longo da vida.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-prose">
          {/* EDUARDO BORGES */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="flex items-center gap-3 text-accent mb-4">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-xs uppercase tracking-widest font-medium">Gestão · Professor CBT</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Eduardo Borges dos Reis</h2>
              <div className="prose prose-stone dark:prose-invert text-muted-foreground leading-relaxed">
                <p>
                  Parceiro societário do Eco Tênis, Eduardo atua na espinha dorsal estratégica e administrativa da academia, mas com um diferencial raro no mercado: ele também possui registro oficial ativo como treinador no sistema Tênis Integrado da FPT/CBT.
                </p>
                <p>
                  Esta dupla função assegura aos nossos associados que o clube não é gerido por burocratas, mas sim gerido <strong>por tenistas, para tenistas</strong>. Ele compreende visceralmente as necessidades técnicas da quadra, o ritmo dos treinamentos de performance e as demandas dos atletas.
                </p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={coach3} alt="Professor Eduardo Borges dos Reis" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}