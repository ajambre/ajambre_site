import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { contactHref, pricing } from "@/lib/site";

export function Investimento() {
  return (
    <Section id="investimento" tone="surface" labelledBy="investimento-titulo">
      <SectionHeader
        id="investimento-titulo"
        overline="Investimento"
        title="Os valores que já estão definidos."
        lead="Sem tabela de planos, sem letra miúda. Estes são os pontos de partida; o restante depende do escopo e é conversado antes de qualquer proposta."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <article className="flex flex-col rounded-lg border border-line bg-bg p-8">
          <h3 className="text-heading font-semibold">{pricing.trafego.label}</h3>
          <p className="mt-6 text-title font-bold text-brand">{pricing.trafego.value}</p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
            Estratégia, estrutura e gestão das campanhas em Meta Ads e Google Ads, com mensuração
            e otimização conectadas ao processo comercial. O investimento em mídia — o valor pago
            às plataformas — é definido à parte, conforme o objetivo da operação.
          </p>
          <ButtonLink href={contactHref} className="mt-7 w-full">
            Falar sobre gestão de tráfego
          </ButtonLink>
        </article>

        <article className="flex flex-col rounded-lg border border-line bg-bg p-8">
          <h3 className="text-heading font-semibold">{pricing.ia.label}</h3>
          <p className="mt-6 text-title font-bold text-brand">{pricing.ia.value}</p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
            Arquitetura e implementação de atendimento com IA. O valor parte deste ponto porque o
            escopo varia conforme a complexidade: canais envolvidos, integrações necessárias e o
            que precisa ser qualificado e registrado.
          </p>
          <ButtonLink href="/solucoes/atendimento-ia" variant="outline" className="mt-7 w-full">
            Ver como funciona
          </ButtonLink>
        </article>
      </div>

      <CustosExternos />
    </Section>
  );
}

/**
 * Custos de terceiros — comunicação obrigatória.
 * A arquitetura pode estar incluída no serviço; o consumo, não.
 * Nenhum valor é estimado aqui: os preços são de terceiros e variam.
 */
export function CustosExternos({ onDark = false }: { onDark?: boolean }) {
  return (
    <div
      className={`mt-10 rounded-lg border p-7 ${
        onDark ? "border-carbon-line bg-carbon-soft" : "border-line bg-bg"
      }`}
    >
      <h3 className={`text-sm font-semibold ${onDark ? "text-white" : "text-ink"}`}>
        Sobre custos de terceiros
      </h3>
      <p
        className={`mt-2.5 max-w-3xl text-sm leading-relaxed ${
          onDark ? "text-white/65" : "text-muted"
        }`}
      >
        A arquitetura e a implementação podem fazer parte da operação AJAMBRE. Já os custos de
        consumo — APIs de IA e modelos, hospedagem, VPS e infraestrutura, WhatsApp/API e demais
        serviços externos necessários ao funcionamento — são contratados ou suportados pelo
        cliente, conforme a estrutura utilizada. Esses valores variam com o uso e com o
        fornecedor, por isso não são estimados aqui.
      </p>
    </div>
  );
}
