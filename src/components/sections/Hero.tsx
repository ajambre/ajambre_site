import { ButtonLink } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/site";

/**
 * Diagrama da operação, logo abaixo da dobra.
 *
 * É o mesmo fio condutor do site inteiro, agora nomeando os pontos concretos
 * por onde o lead passa — inclusive o LeadBase, que é produto da casa.
 */
const fluxo = [
  "Anúncio",
  "Landing Page",
  "WhatsApp / Formulário",
  "IA",
  "LeadBase",
  "Follow-up",
  "Dados",
];

/** O que a operação entrega, em quatro linhas curtas. */
const entregas = [
  "Campanhas conectadas ao atendimento",
  "Leads organizados no CRM",
  "IA para qualificação e follow-up",
  "Dados para decidir o próximo passo",
];

export function Hero() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container py-20 sm:py-28 lg:py-32">
        <div className="max-w-4xl">
          <p className="eyebrow">Marketing · Tecnologia · Dados · IA</p>

          <h1 className="mt-7 text-display font-bold">
            Marketing, CRM e IA conectados para gerar oportunidades melhores.
          </h1>

          <p className="mt-7 max-w-2xl text-lead text-muted">
            A AJAMBRE estrutura aquisição, atendimento, qualificação e acompanhamento comercial
            para empresas que não querem perder leads no caminho.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {/*
              O diagnóstico é a ação principal: qualifica antes da conversa e
              entrega contexto para os dois lados. O caminho direto por WhatsApp
              continua disponível no header e no CTA final.
            */}
            <ButtonLink href="/#diagnostico" size="lg">
              Fazer diagnóstico
            </ButtonLink>
            <ButtonLink href="/#solucoes" variant="outline" size="lg">
              Conhecer soluções
            </ButtonLink>
          </div>

          {/*
            O texto de apoio promete o canal do desfecho, então ele acompanha a
            configuração real: sem número no build, o diagnóstico encaminha por
            e-mail e a frase precisa dizer isso.
          */}
          <p className="mt-4 text-sm text-muted">
            Diagnóstico rápido. Ao final, você fala com a AJAMBRE{" "}
            {whatsappHref ? "pelo WhatsApp" : "por e-mail"} com contexto.
          </p>

          <ul className="mt-10 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {entregas.map((entrega) => (
              <li key={entrega} className="flex items-start gap-2.5 text-sm text-ink">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                />
                {entrega}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 lg:mt-20">
          <p className="eyebrow mb-5 text-muted">O caminho do lead</p>

          <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-3">
            {fluxo.map((etapa, index) => (
              <li key={etapa} className="flex items-center gap-2.5">
                <span className="whitespace-nowrap rounded border border-line bg-bg px-3.5 py-2 text-xs font-medium text-ink">
                  {etapa}
                </span>
                {index < fluxo.length - 1 ? (
                  <span aria-hidden="true" className="text-sm text-brand/50">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
