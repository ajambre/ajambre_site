import { ButtonLink } from "@/components/ui/Button";
import { contactHref } from "@/lib/site";

/** A cadeia que a AJAMBRE conecta — resumida em uma linha, logo no início. */
const cadeia = [
  "Anúncio",
  "Página",
  "Tracking",
  "Lead",
  "Atendimento",
  "IA",
  "CRM",
  "Follow-up",
  "Dados",
];

export function Hero() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container py-20 sm:py-28 lg:py-32">
        <div className="max-w-4xl">
          <p className="overline">Marketing · Tecnologia · Dados · IA</p>

          <h1 className="mt-7 text-display font-bold">
            Gerar lead é só o começo.
          </h1>

          <p className="mt-7 max-w-2xl text-lead text-muted">
            O que decide o resultado é o que vem depois: quanto tempo até a primeira resposta,
            com qual contexto, com que acompanhamento — e se, no fim do mês, alguém consegue
            dizer o que virou cliente. A AJAMBRE conecta mídia, páginas, tracking, CRM,
            atendimento e IA em uma operação só.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={contactHref} size="lg">
              Falar com a AJAMBRE
            </ButtonLink>
            <ButtonLink href="/#como-funciona" variant="outline" size="lg">
              Entender como funciona
            </ButtonLink>
          </div>
        </div>

        {/* Cadeia da operação: o mesmo fio condutor do site inteiro */}
        <div className="mt-16 border-t border-line pt-8 lg:mt-20">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {cadeia.map((etapa, index) => (
              <li key={etapa} className="flex items-center gap-3">
                <span className="whitespace-nowrap rounded-sm border border-line bg-bg px-3 py-1.5 text-xs font-medium text-muted">
                  {etapa}
                </span>
                {index < cadeia.length - 1 ? (
                  <span aria-hidden="true" className="text-brand">
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
