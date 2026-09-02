import { Section, SectionHeader } from "@/components/ui/Section";

const passos = [
  {
    titulo: "Diagnóstico",
    texto:
      "Entender como a aquisição, o atendimento e a operação funcionam hoje — inclusive o que já dá certo e não deve ser mexido.",
  },
  {
    titulo: "Arquitetura",
    texto:
      "Definir o que precisa ser conectado, em que ordem, e o que fica para depois. É aqui que o desenho da operação aparece.",
  },
  {
    titulo: "Implementação",
    texto:
      "Campanhas, tracking, páginas, CRM, IA e automações conforme o escopo acordado — colocando as peças no lugar.",
  },
  {
    titulo: "Operação",
    texto:
      "Acompanhamento do que está rodando: o que entra, quanto tempo leva para ser atendido e onde os leads estão parando.",
  },
  {
    titulo: "Evolução",
    texto:
      "Ajustes baseados no que os dados mostraram. A operação do terceiro mês não deveria ser igual à do primeiro.",
  },
];

const publicos = [
  "Negócios locais",
  "Clínicas e consultórios",
  "Prestadores de serviço",
  "Operações de geração de leads",
  "Vendas consultivas",
  "Empresas com alto volume de contatos",
  "Operações que atendem por WhatsApp",
];

export function Processo() {
  return (
    <Section labelledBy="processo-titulo">
      <SectionHeader
        id="processo-titulo"
        overline="Como trabalhamos"
        title="Cinco etapas, sempre nesta ordem."
        lead="Implementar antes de entender costuma sair caro. Por isso o diagnóstico vem primeiro — e a evolução nunca é tratada como fase final."
      />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {passos.map((passo, index) => (
          <li key={passo.titulo} className="bg-bg p-7">
            <span className="text-overline font-semibold text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-base font-semibold">{passo.titulo}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{passo.texto}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 border-t border-line pt-12">
        <h3 className="text-heading font-semibold">Para quem isso costuma fazer mais sentido</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          São os contextos em que a desconexão entre marketing e atendimento aparece mais rápido.
          Não é uma lista fechada: o que importa é a operação depender de leads e de conversas
          para vender.
        </p>

        <ul className="mt-7 flex flex-wrap gap-2.5">
          {publicos.map((publico) => (
            <li
              key={publico}
              className="rounded-sm border border-line px-3.5 py-2 text-sm text-muted"
            >
              {publico}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
