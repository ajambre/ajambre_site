import { Section, SectionHeader } from "@/components/ui/Section";

const sintomas = [
  {
    titulo: "A campanha entrega, o relatório não fecha",
    texto:
      "Os anúncios geram contatos, mas ninguém consegue dizer com segurança qual campanha, qual anúncio ou qual palavra virou cliente.",
  },
  {
    titulo: "O WhatsApp virou o CRM",
    texto:
      "Conversas decisivas ficam soltas no aparelho de alguém. Quando essa pessoa sai de férias — ou da empresa — o histórico vai junto.",
  },
  {
    titulo: "A resposta demora",
    texto:
      "O lead chega às 21h de um sábado e é atendido na segunda de manhã. Nesse intervalo, ele costuma falar com mais alguém.",
  },
  {
    titulo: "Cada informação em um lugar",
    texto:
      "Planilha, caixa de entrada, agenda, bloco de anotações e o painel da campanha. Nenhum conversa com o outro.",
  },
  {
    titulo: "O follow-up depende de memória",
    texto:
      "Quem não respondeu de primeira raramente recebe um segundo contato. Não por decisão — por falta de processo.",
  },
  {
    titulo: "Marketing e comercial em times paralelos",
    texto:
      "Um discute custo por lead, o outro discute agenda cheia. Os dois olham números que nunca se encontram.",
  },
];

export function Problema() {
  return (
    <Section id="problema" labelledBy="problema-titulo">
      <SectionHeader
        id="problema-titulo"
        overline="O diagnóstico"
        title="Na maioria das operações, o problema não é falta de lead."
        lead="É a distância entre quem gera o contato e quem atende. Entre o clique no anúncio e a conversa que decide a venda existe um vão — e é nele que a oportunidade se perde."
      />

      <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {sintomas.map((item) => (
          <li key={item.titulo} className="bg-bg p-7">
            <h3 className="text-base font-semibold">{item.titulo}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.texto}</p>
          </li>
        ))}
      </ul>

      <p className="mt-12 max-w-3xl border-l-2 border-brand pl-6 text-lead font-medium">
        O problema nem sempre é falta de lead. Quase sempre é falta de estrutura entre
        aquisição e atendimento.
      </p>
    </Section>
  );
}
