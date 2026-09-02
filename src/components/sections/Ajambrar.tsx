import { Section, SectionHeader } from "@/components/ui/Section";

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
        overline="O método"
        title="Ajambrar é fazer as partes se encaixarem."
        lead="Ajambrar, aqui, não é improviso: é encaixe. Cada etapa entrega algo para a próxima e devolve informação para a anterior. É isso que transforma peças soltas em operação."
      />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {etapas.map((etapa, index) => (
          <li key={etapa.titulo} className="group bg-bg p-7">
            <span className="text-overline font-semibold text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-heading font-semibold">{etapa.titulo}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{etapa.texto}</p>
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
        <strong className="font-semibold text-ink">O ciclo não termina em otimizar.</strong> O que
        a análise mostra muda a campanha seguinte, a página seguinte e a conversa seguinte. É por
        isso que aquisição e atendimento precisam ser tratados como o mesmo sistema.
      </p>
    </Section>
  );
}
