import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { contactHref, mailtoHref, siteConfig, whatsappHref } from "@/lib/site";

const perguntas = [
  "De onde veio esse lead?",
  "Qual anúncio gerou o contato?",
  "Quem respondeu — e quando?",
  "Quanto tempo levou até o primeiro atendimento?",
  "Como ele foi qualificado?",
  "Em que etapa ele está agora?",
  "Houve acompanhamento depois da primeira conversa?",
  "O que está funcionando na operação?",
  "O que precisa mudar no próximo mês?",
];

export function CtaFinal() {
  return (
    <Section id="contato" tone="dark" labelledBy="cta-titulo">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          {/* Mesmo ritmo do SectionHeader: mb-5 no rótulo, mt-5 na linha de
              apoio. Antes somavam mb-6 + mt-6 e abriam 48px, destoando do resto. */}
          <p className="eyebrow mb-5 text-brand-light">Diagnóstico</p>
          <h2 id="cta-titulo" className="text-title font-bold">
            Sua operação consegue responder isso hoje?
          </h2>
          <p className="mt-5 max-w-lg text-lead text-white/70">
            Gerar lead é apenas o começo. Vamos olhar o caminho inteiro e identificar onde sua
            operação está perdendo oportunidade — antes de falar em campanha, ferramenta ou
            proposta.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={contactHref} size="lg">
              Falar com a AJAMBRE
            </ButtonLink>
            <ButtonLink href="/solucoes/atendimento-ia" variant="onDark" size="lg">
              Ver atendimento com IA
            </ButtonLink>
          </div>

          <p className="mt-6 text-sm text-white/50">
            {whatsappHref ? "Prefere e-mail? " : "Contato por e-mail: "}
            <a
              href={mailtoHref}
              className="font-medium text-white underline underline-offset-4 hover:text-brand-light"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-lg border border-carbon-line bg-carbon-line sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {perguntas.map((pergunta) => (
            <li
              key={pergunta}
              className="flex items-start gap-3 bg-carbon-soft px-5 py-4 text-sm text-white/80"
            >
              <span aria-hidden="true" className="mt-0.5 font-semibold text-brand-light">
                ?
              </span>
              {pergunta}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
