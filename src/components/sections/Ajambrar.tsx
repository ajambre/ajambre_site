import { Section, SectionHeader } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";

const etapas = [
  {
    titulo: "Atrair",
    texto: "Campanhas em Meta e Google levando a mensagem certa a quem tem chance real de comprar.",
  },
  {
    titulo: "Capturar",
    texto: "Site, landing page ou formulário construídos para converter — não apenas para existir.",
  },
  {
    titulo: "Rastrear",
    texto: "Origem, campanha e anúncio registrados junto com o contato, e não em outro sistema.",
  },
  {
    titulo: "Responder",
    texto: "Primeiro atendimento sem fila de espera, inclusive fora do horário comercial.",
  },
  {
    titulo: "Qualificar",
    texto: "As perguntas certas para separar quem tem contexto de quem só passou por ali.",
  },
  {
    titulo: "Organizar",
    texto: "Cada lead com etapa, responsável e histórico visíveis em um lugar só.",
  },
  {
    titulo: "Acompanhar",
    texto: "Follow-up que existe por processo, não porque alguém lembrou.",
  },
  {
    titulo: "Analisar",
    texto: "O que a operação produziu de ponta a ponta — do clique ao fechamento.",
  },
  {
    titulo: "Otimizar",
    texto: "Decisão de investimento baseada no que aconteceu depois do lead, não antes.",
  },
];

export function Ajambrar() {
  return (
    <Section id="como-funciona" tone="surface" labelledBy="ajambrar-titulo">
      <SectionHeader
        id="ajambrar-titulo"
        eyebrow="O método"
        title="Ajambrar é fazer as partes se encaixarem."
        lead="Ajambrar, aqui, não é improviso: é encaixe. Cada etapa entrega algo para a próxima e devolve informação para a anterior. É isso que transforma peças soltas em operação."
      />

      <Timeline items={etapas} />

      {/*
        Fechamento do ciclo: a timeline termina em "Otimizar", e esta nota
        explica que o fluxo volta ao início. Fica dentro de um painel suave
        para encerrar a seção sem precisar de mais um traço separador.
      */}
      <div className="mt-12 max-w-2xl rounded-lg bg-brand-soft px-7 py-6">
        <p className="text-sm leading-relaxed text-brand-strong">
          <strong className="font-semibold">O ciclo não termina em otimizar.</strong> O que a
          análise mostra muda a campanha seguinte, a página seguinte e a conversa seguinte. É por
          isso que aquisição e atendimento precisam ser tratados como o mesmo sistema.
        </p>
      </div>
    </Section>
  );
}
