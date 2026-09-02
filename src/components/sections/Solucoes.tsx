import Link from "next/link";

import { Section, SectionHeader } from "@/components/ui/Section";

type Solucao = {
  titulo: string;
  texto: string;
  itens: string[];
  /** Só as soluções com página própria têm destino — as demais ficam sem CTA. */
  href?: string;
  cta?: string;
};

const solucoes: Solucao[] = [
  {
    titulo: "Mídia paga",
    texto:
      "Aquisição estruturada em Meta Ads e Google Ads: estratégia, estrutura de campanha, mensuração e otimização conectadas ao processo comercial — não apenas campanhas no ar.",
    itens: ["Meta Ads", "Google Ads", "Estrutura de campanha", "Otimização"],
  },
  {
    titulo: "Sites e Landing Pages",
    texto:
      "Ambientes de conversão que nascem junto com a campanha e o tracking. A página não é uma peça isolada: é o ponto onde o anúncio vira contato identificado.",
    itens: ["Sites institucionais", "Landing pages", "Páginas de captura"],
  },
  {
    titulo: "Tracking e Mensuração",
    texto:
      "Entender de onde o contato veio, o que ele fez e o que virou conversão. Ferramentas e eventos definidos conforme a operação — quando aplicável ao caso.",
    itens: ["GTM", "GA4", "Meta Pixel", "UTMs", "Eventos"],
  },
  {
    titulo: "CRM e Automação",
    texto:
      "Oportunidades organizadas por etapa, com responsável e histórico. Automações que reduzem trabalho manual e evitam que o contato pare no meio do caminho.",
    itens: ["Pipeline", "Etapas", "Automação", "Integrações"],
  },
  {
    titulo: "Atendimento com IA",
    texto:
      "Agentes que recebem o contato, coletam informação, ajudam a qualificar e encaminham para a pessoa certa — com registro do que foi conversado.",
    itens: ["Atendimento inicial", "Qualificação", "SDR", "Agendamento", "Follow-up"],
    href: "/solucoes/atendimento-ia",
    cta: "Ver a página de Atendimento com IA",
  },
  {
    titulo: "Inteligência de Conteúdo",
    texto:
      "O Business Scanner como camada de leitura da operação de conteúdo: organizar o que foi produzido para que a análise deixe de depender de impressão.",
    itens: ["Visão da produção", "Acompanhamento", "Padrões", "Oportunidades"],
  },
  {
    titulo: "Inteligência Comercial",
    texto:
      "Usar o que marketing e operação produzem para decidir melhor: onde investir, o que ajustar no atendimento e qual etapa está segurando o resultado.",
    itens: ["Origem de leads", "Etapas", "Tempo de resposta", "Análise"],
  },
];

export function Solucoes() {
  return (
    <Section id="solucoes" labelledBy="solucoes-titulo">
      <SectionHeader
        id="solucoes-titulo"
        overline="O que fazemos"
        title="Sete frentes que só fazem sentido juntas."
        lead="Cada uma resolve um pedaço do caminho. A AJAMBRE trabalha para que elas não sejam sete contratos desconectados, e sim uma operação com começo, meio e continuidade."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {solucoes.map((solucao) => (
          <article
            key={solucao.titulo}
            className="flex flex-col rounded-lg border border-line bg-bg p-7 transition-shadow hover:shadow-card"
          >
            <h3 className="text-heading font-semibold">{solucao.titulo}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{solucao.texto}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {solucao.itens.map((item) => (
                <li
                  key={item}
                  className="rounded-sm bg-surface px-2.5 py-1 text-xs font-medium text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>

            {solucao.href ? (
              <Link
                href={solucao.href}
                className="mt-6 text-sm font-semibold text-brand underline underline-offset-4 hover:text-brand-strong"
              >
                {solucao.cta}
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
