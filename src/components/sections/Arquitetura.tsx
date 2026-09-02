import { Section, SectionHeader } from "@/components/ui/Section";

const fluxo = [
  { etapa: "Meta / Google", detalhe: "A campanha coloca a oferta na frente de quem tem chance de comprar." },
  { etapa: "Site / Landing Page", detalhe: "O contato encontra um ambiente feito para converter." },
  { etapa: "Tracking", detalhe: "Origem, campanha e comportamento registrados junto com o contato." },
  { etapa: "WhatsApp / Formulário", detalhe: "O lead entra pelo canal que ele escolheu usar." },
  { etapa: "Agente de IA", detalhe: "Primeiro atendimento, coleta de contexto e qualificação inicial." },
  { etapa: "LeadBase", detalhe: "Lead registrado com origem, etapa, responsável e histórico." },
  { etapa: "Equipe comercial", detalhe: "A pessoa assume a conversa já sabendo com quem está falando." },
  { etapa: "Dados", detalhe: "O que aconteceu em cada etapa, do clique ao desfecho." },
  { etapa: "Otimização", detalhe: "A decisão da próxima campanha nasce do que os dados mostraram." },
];

export function Arquitetura() {
  return (
    <Section tone="surface" labelledBy="arquitetura-titulo">
      <SectionHeader
        id="arquitetura-titulo"
        overline="Arquitetura integrada"
        title="Uma peça entrega para a próxima."
        lead="Este é o caminho que a AJAMBRE monta e mantém. Nem toda operação usa todas as etapas — o desenho depende do negócio —, mas nenhuma delas deveria existir desconectada das outras."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
        <ol className="relative">
          {fluxo.map((item, index) => (
            <li key={item.etapa} className="relative flex gap-5 pb-6 last:pb-0">
              {/* trilho vertical ligando as etapas */}
              {index < fluxo.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[15px] top-9 h-full w-px bg-line"
                />
              ) : null}

              <span
                aria-hidden="true"
                className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-bg text-xs font-semibold text-brand"
              >
                {index + 1}
              </span>

              <div className="flex-1 rounded border border-line bg-bg px-5 py-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide">{item.etapa}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.detalhe}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="flex flex-col gap-6">
          <div className="rounded-lg border border-dashed border-brand/40 bg-brand-soft p-6">
            <p className="text-overline font-semibold uppercase text-brand">Camada paralela</p>
            <h3 className="mt-3 text-heading font-semibold">Business Scanner</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              Enquanto o fluxo acima cuida da jornada do lead, a inteligência de conteúdo observa
              o que está sendo produzido e como isso se comporta — alimentando as decisões de
              campanha e de mensagem.
            </p>
          </div>

          <div className="rounded-lg border border-line bg-bg p-6">
            <p className="text-overline font-semibold uppercase text-muted">O ciclo</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Otimização não é o fim da linha: é o que redefine a etapa 1. A cada rodada, a
              campanha seguinte começa sabendo mais do que a anterior.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
