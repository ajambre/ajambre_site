import { RevealCard } from "@/components/ui/RevealCard";
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
        eyebrow="O que fazemos"
        title="Sete frentes que só fazem sentido juntas."
        lead="Cada uma resolve um pedaço do caminho. A AJAMBRE trabalha para que elas não sejam sete contratos desconectados, e sim uma operação com começo, meio e continuidade."
      />

      <p className="mt-6 text-sm text-muted">
        Toque em uma frente para ver o que ela resolve.
      </p>

      {/*
        `items-start` é o que impede o card aberto de esticar os vizinhos da
        mesma linha da grade: cada um cresce sozinho.
      */}
      <div className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {solucoes.map((solucao) => (
          <RevealCard
            key={solucao.titulo}
            titulo={solucao.titulo}
            texto={solucao.texto}
            itens={solucao.itens}
            href={solucao.href}
            cta={solucao.cta}
          />
        ))}
      </div>
    </Section>
  );
}
