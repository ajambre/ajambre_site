import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { contactHref, products } from "@/lib/site";

export function Ecossistema() {
  return (
    <Section id="ecossistema" tone="dark" labelledBy="ecossistema-titulo">
      <SectionHeader
        id="ecossistema-titulo"
        onDark
        overline="Tecnologia AJAMBRE"
        title="O ecossistema que sustenta a operação."
        lead="Não são ferramentas avulsas contratadas de terceiros. São produtos e arquiteturas da própria AJAMBRE, pensados para funcionarem conectados ao que a operação já faz."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <Produto
          nome={products.leadbase.name}
          chamada="Organize a jornada do lead."
          texto="O contato não deveria desaparecer depois de preencher um formulário ou mandar uma mensagem. O LeadBase é o CRM da AJAMBRE para registrar origem, campanha, contatos, etapas e acompanhamento — de forma que a operação enxergue o lead do primeiro clique ao desfecho."
          itens={["Origem e campanhas", "Contatos e leads", "Etapas e pipeline", "Acompanhamento"]}
          cta={{ label: `Conhecer ${products.leadbase.name}`, href: products.leadbase.url, external: true }}
        />

        <Produto
          nome={products.businessScanner.name}
          chamada="Entenda melhor sua operação de conteúdo."
          texto="A camada de inteligência de conteúdo do ecossistema. Ajuda a transformar o que é produzido em informação estruturada, para que o acompanhamento e o planejamento deixem de depender de impressão pessoal."
          itens={["Visão geral da produção", "Acompanhamento", "Leitura de desempenho", "Apoio ao planejamento"]}
          /*
            Sem URL pública confirmada: nenhum href é inventado e nenhum "#"
            é usado como destino falso. Preenchendo products.businessScanner.url
            em src/lib/site.ts, o CTA passa a aparecer automaticamente.
          */
          cta={
            products.businessScanner.url
              ? {
                  label: `Conhecer ${products.businessScanner.name}`,
                  href: products.businessScanner.url,
                  external: true,
                }
              : null
          }
          nota="Apresentamos o Business Scanner na conversa comercial, aplicado ao seu contexto."
        />

        <Produto
          nome="Agentes de IA"
          chamada="Atendimento e qualificação conectados à operação."
          texto="Arquiteturas de atendimento que recebem o contato, coletam informação, ajudam a qualificar e encaminham para quem precisa decidir — registrando o caminho no CRM em vez de deixá-lo em uma conversa solta."
          itens={["Atendimento inicial", "Qualificação", "SDR", "Agendamento", "Follow-up"]}
          cta={{ label: "Conhecer atendimento com IA", href: products.atendimentoIa.url }}
        />
      </div>

      <div className="mt-12 flex flex-col gap-5 rounded-lg border border-carbon-line bg-carbon-soft p-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-white/70">
          Uma operação completa pode reunir mídia paga, site e landing pages, tracking, LeadBase,
          Meta Lead Ads, WhatsApp, agentes de IA, Business Scanner e inteligência comercial — na
          combinação que o negócio realmente precisa.
        </p>
        <ButtonLink href={contactHref} variant="onDark" className="shrink-0">
          Falar com a AJAMBRE
        </ButtonLink>
      </div>
    </Section>
  );
}

function Produto({
  nome,
  chamada,
  texto,
  itens,
  cta,
  nota,
}: {
  nome: string;
  chamada: string;
  texto: string;
  itens: string[];
  cta: { label: string; href: string; external?: boolean } | null;
  nota?: string;
}) {
  return (
    <article className="flex flex-col rounded-lg border border-carbon-line bg-carbon-soft p-8">
      <h3 className="text-overline font-semibold uppercase text-brand">{nome}</h3>
      <p className="mt-4 text-heading font-semibold text-white">{chamada}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{texto}</p>

      <ul className="mt-6 flex-1 space-y-2">
        {itens.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
            <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
            {item}
          </li>
        ))}
      </ul>

      {cta ? (
        <ButtonLink
          href={cta.href}
          external={cta.external}
          variant="onDark"
          className="mt-7 w-full"
        >
          {cta.label}
        </ButtonLink>
      ) : (
        <p className="mt-7 border-t border-carbon-line pt-5 text-xs leading-relaxed text-white/45">
          {nota}
        </p>
      )}
    </article>
  );
}
