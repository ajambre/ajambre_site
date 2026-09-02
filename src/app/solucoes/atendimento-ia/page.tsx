import type { Metadata } from "next";

import { CustosExternos } from "@/components/sections/Investimento";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { contactHref, pricing, siteConfig } from "@/lib/site";

const titulo = "Atendimento com IA";
const descricao =
  "Agentes de IA que recebem o contato, coletam informação, ajudam a qualificar e encaminham " +
  "para a pessoa certa — com registro no CRM. Projetos de IA a partir de R$ 3.000.";

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  alternates: { canonical: "/solucoes/atendimento-ia" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${siteConfig.url}/solucoes/atendimento-ia`,
    siteName: siteConfig.name,
    title: `${titulo} | AJAMBRE`,
    description: descricao,
    images: [{ url: "/images/og-ajambre.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${titulo} | AJAMBRE`,
    description: descricao,
    images: ["/images/og-ajambre.png"],
  },
};

const problemas = [
  {
    titulo: "O lead chega fora do horário",
    texto: "Sábado à noite, feriado, madrugada. O contato existe, mas não há ninguém para receber.",
  },
  {
    titulo: "A primeira resposta demora",
    texto: "Quando alguém consegue responder, a pessoa já conversou com dois concorrentes.",
  },
  {
    titulo: "Contatos são esquecidos",
    texto: "Mensagem lida na correria, sem resposta depois. Ninguém percebe que ficou para trás.",
  },
  {
    titulo: "As conversas ficam espalhadas",
    texto: "Cada atendente com um pedaço da história, em aparelhos e caixas de entrada diferentes.",
  },
  {
    titulo: "Não existe follow-up",
    texto: "Quem não respondeu de primeira dificilmente é procurado de novo.",
  },
  {
    titulo: "Falta contexto na hora certa",
    texto:
      "A conversa começa do zero: de onde veio, o que procura e o que já foi dito se perdem no caminho.",
  },
];

const fluxo = [
  { etapa: "Contato", texto: "A pessoa chama pelo WhatsApp, formulário ou anúncio." },
  { etapa: "Atendimento inicial", texto: "O agente responde na hora e abre a conversa." },
  { etapa: "Coleta de informações", texto: "As perguntas necessárias para entender o caso." },
  { etapa: "Qualificação", texto: "Contexto e intenção ajudam a separar prioridade de curiosidade." },
  { etapa: "Organização", texto: "O que foi conversado vira registro, não memória." },
  { etapa: "CRM", texto: "O lead entra com origem, etapa e histórico." },
  { etapa: "Encaminhamento humano", texto: "A pessoa certa assume, já sabendo o que aconteceu." },
  { etapa: "Follow-up", texto: "O acompanhamento continua quando a conversa esfria." },
];

const agentes = [
  {
    nome: "Atendimento",
    texto:
      "Recebe o contato, responde de imediato e conduz o início da conversa com a linguagem do negócio.",
  },
  {
    nome: "Qualificação",
    texto:
      "Coleta as informações que importam e ajuda a determinar contexto e intenção antes de ocupar a equipe.",
  },
  {
    nome: "SDR",
    texto:
      "Apoia o pré-atendimento: organiza o que foi levantado e encaminha para o time comercial. Apoio ao processo — não decisão comercial autônoma.",
  },
  {
    nome: "Agendamento",
    texto:
      "Auxilia na marcação de consulta, reunião, avaliação ou atendimento, conforme as integrações disponíveis.",
  },
  {
    nome: "Follow-up",
    texto:
      "Retoma conversas paradas quando isso for tecnicamente possível e comercialmente adequado.",
  },
];

const beneficios = [
  "Primeiro atendimento mais rápido",
  "Menos oportunidades esquecidas",
  "Melhor organização dos contatos",
  "Contexto pronto para a equipe",
  "Histórico do que foi conversado",
  "Padronização do início do atendimento",
  "Acompanhamento com processo",
  "Dados sobre o que acontece na entrada",
];

const integracoes = [
  "WhatsApp",
  "Formulários do site",
  "CRM",
  "LeadBase",
  "Campanhas",
  "Meta Lead Ads",
  "Calendários",
];

export default function AtendimentoIaPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line bg-surface">
        <div className="container py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="overline">Atendimento com IA</p>
            <h1 className="mt-7 text-display font-bold">
              O lead chegou. Quanto tempo até começar o atendimento?
            </h1>
            <p className="mt-7 text-lead text-muted">
              Entre a mensagem que entra e a primeira resposta existe uma janela que decide muita
              coisa. A AJAMBRE monta arquiteturas de atendimento com IA para que essa janela seja
              curta, o contexto seja registrado e a conversa chegue organizada em quem vai decidir.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contactHref} size="lg">
                Conversar sobre uma estrutura de IA
              </ButtonLink>
              <ButtonLink href="#como-atua" variant="outline" size="lg">
                Ver como funciona
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <Section labelledBy="problemas-ia">
        <SectionHeader
          id="problemas-ia"
          overline="O que costuma acontecer"
          title="O problema raramente é o time. É o intervalo."
          lead="Nenhuma equipe consegue estar disponível o tempo todo, lembrar de tudo e registrar cada conversa manualmente. É exatamente esse intervalo que a IA cobre."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {problemas.map((item) => (
            <li key={item.titulo} className="bg-bg p-7">
              <h3 className="text-base font-semibold">{item.titulo}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.texto}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* COMO ATUA */}
      <Section id="como-atua" tone="surface" labelledBy="como-atua-titulo">
        <SectionHeader
          id="como-atua-titulo"
          overline="Como a IA atua"
          title="Do primeiro contato ao encaminhamento."
          lead="O agente não substitui a conversa comercial: ele faz com que ela comece mais cedo, com informação e sem depender de quem está online naquele momento."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {fluxo.map((item, index) => (
            <li key={item.etapa} className="bg-bg p-6">
              <span className="text-overline font-semibold text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3.5 text-base font-semibold">{item.etapa}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.texto}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* TIPOS DE AGENTES */}
      <Section labelledBy="agentes-titulo">
        <SectionHeader
          id="agentes-titulo"
          overline="Tipos de agente"
          title="A arquitetura depende do que o negócio precisa."
          lead="Não existe um agente único que sirva para tudo. O desenho começa pela pergunta: o que precisa acontecer entre o contato chegar e alguém assumir a conversa?"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agentes.map((agente) => (
            <article key={agente.nome} className="rounded-lg border border-line p-7">
              <h3 className="text-heading font-semibold">{agente.nome}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{agente.texto}</p>
            </article>
          ))}

          <article className="rounded-lg border border-dashed border-line bg-surface p-7">
            <h3 className="text-heading font-semibold">Integrações</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Conforme a estrutura de cada operação e o que estiver disponível no caso:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {integracoes.map((item) => (
                <li key={item} className="rounded-sm bg-bg px-2.5 py-1 text-xs font-medium text-muted">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              A disponibilidade de cada integração é avaliada projeto a projeto — não há
              integração universal.
            </p>
          </article>
        </div>
      </Section>

      {/* BENEFÍCIOS + IA E HUMANO */}
      <Section tone="dark" labelledBy="beneficios-titulo">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              id="beneficios-titulo"
              onDark
              overline="O que muda na prática"
              title="Menos coisa dependendo de memória."
              lead="O ganho não está em responder por responder: está em transformar a entrada da operação em algo previsível e registrado."
            />

            <ul className="mt-10 grid gap-2.5 sm:grid-cols-2">
              {beneficios.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-carbon-line bg-carbon-soft p-8">
            <p className="text-overline font-semibold uppercase text-brand">IA e pessoas</p>
            <h2 className="mt-4 text-heading font-semibold">
              IA onde faz sentido. Pessoas onde fazem diferença.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                A IA apoia a operação no que é repetitivo e sensível ao tempo: receber, organizar,
                coletar informação, direcionar e acompanhar. Isso libera a equipe para o que
                realmente exige julgamento.
              </p>
              <p>
                Ela não é apresentada aqui como substituta universal do atendimento humano. Casos
                sensíveis, situações complexas, negociações, decisões profissionais e exceções
                devem poder ser direcionados para uma pessoa — e a arquitetura é desenhada
                prevendo essa passagem.
              </p>
              <p>
                Onde a IA age e onde ela para de agir é uma decisão do projeto, tomada junto com o
                cliente e não imposta pela ferramenta.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* INVESTIMENTO */}
      <Section tone="surface" labelledBy="investimento-ia">
        <SectionHeader
          id="investimento-ia"
          overline="Investimento"
          title="Projetos de IA a partir de R$ 3.000."
          lead="O valor parte deste ponto porque o escopo varia: canais atendidos, integrações necessárias, o que precisa ser qualificado e o que precisa ser registrado."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <article className="rounded-lg border border-line bg-bg p-8">
            <h3 className="text-heading font-semibold">{pricing.ia.label}</h3>
            <p className="mt-6 text-title font-bold text-brand">{pricing.ia.value}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Arquitetura e implementação do atendimento com IA, definidas a partir do diagnóstico
              da operação.
            </p>
            <ButtonLink href={contactHref} className="mt-7 w-full">
              Conversar sobre um projeto
            </ButtonLink>
          </article>

          <div className="rounded-lg border border-line bg-bg p-8">
            <h3 className="text-heading font-semibold">Dentro de uma operação integrada</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Nos contratos completos da AJAMBRE, a arquitetura de IA pode fazer parte da solução
              entregue — atendimento inicial, qualificação, SDR, organização, agendamento e
              automações, conforme o projeto. Nesse caso, a implementação é tratada dentro do
              escopo da operação.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Isso não significa uso ilimitado de IA: o consumo continua sendo um custo variável,
              tratado à parte.
            </p>
          </div>
        </div>

        <CustosExternos />
      </Section>

      {/* CTA */}
      <Section tone="dark" labelledBy="cta-ia">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="cta-ia" className="text-title font-bold">
              Vamos olhar a entrada da sua operação.
            </h2>
            <p className="mt-5 text-lead text-white/70">
              O ponto de partida é entender por onde os contatos chegam hoje, quanto tempo levam
              para serem atendidos e o que se perde no caminho. A partir disso fica claro o que a
              IA deve — e o que ela não deve — assumir.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ButtonLink href={contactHref} size="lg">
              Falar com a AJAMBRE
            </ButtonLink>
            <ButtonLink href="/#ecossistema" variant="onDark" size="lg">
              Ver o ecossistema
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
