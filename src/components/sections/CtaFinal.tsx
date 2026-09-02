import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { contactHref, siteConfig } from "@/lib/site";

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
          <p className="overline text-white/70 before:bg-white/40">Diagnóstico</p>
          <h2 id="cta-titulo" className="mt-6 text-title font-bold">
            Sua operação consegue responder isso hoje?
          </h2>
          <p className="mt-6 max-w-lg text-lead text-white/70">
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
            Contato por e-mail:{" "}
            <a
              href={contactHref}
              className="font-medium text-white underline underline-offset-4 hover:text-brand"
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
              <span aria-hidden="true" className="mt-0.5 font-semibold text-brand">
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
