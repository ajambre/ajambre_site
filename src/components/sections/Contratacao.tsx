import { Section, SectionHeader } from "@/components/ui/Section";

const modelos = [
  {
    titulo: "Operação integrada AJAMBRE",
    resumo:
      "Para empresas que querem estruturar marketing, aquisição, tecnologia, CRM e atendimento de forma conectada, com uma frente responsável pelo caminho inteiro.",
    itens: [
      "Gestão de mídia paga",
      "Site e landing pages",
      "Tracking e mensuração",
      "LeadBase CRM",
      "Agentes de IA e automações",
      "Business Scanner",
    ],
    nota: "A composição é definida por avaliação: nem todo contrato precisa — ou comporta — todos os itens ao mesmo tempo.",
  },
  {
    titulo: "Projetos específicos",
    resumo:
      "Para empresas que já têm parte da estrutura funcionando e precisam resolver um ponto determinado, sem trocar tudo de lugar.",
    itens: [
      "Projeto de IA",
      "Automação de atendimento",
      "Landing page",
      "Implantação de tracking",
      "Integração entre sistemas",
    ],
    nota: "Escopo, prazo e investimento são definidos caso a caso, a partir do que já existe na operação.",
  },
];

export function Contratacao() {
  return (
    <Section labelledBy="contratacao-titulo">
      <SectionHeader
        id="contratacao-titulo"
        overline="Modelos de contratação"
        title="Dois caminhos, dependendo de onde sua operação está."
        lead="Nem toda empresa precisa começar do zero. O que define o formato é o que já funciona hoje e o que está travando o resto."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {modelos.map((modelo) => (
          <article key={modelo.titulo} className="flex flex-col rounded-lg border border-line p-8">
            <h3 className="text-heading font-semibold">{modelo.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{modelo.resumo}</p>

            <ul className="mt-6 flex-1 space-y-2.5">
              {modelo.itens.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-line pt-5 text-xs leading-relaxed text-muted">
              {modelo.nota}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
