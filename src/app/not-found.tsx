import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col justify-center py-20">
      <div className="max-w-xl">
        <p className="overline">Erro 404</p>
        <h1 className="mt-6 text-title font-bold">Esta página não existe.</h1>
        <p className="mt-5 text-lead text-muted">
          O endereço pode ter mudado ou o link pode estar incorreto. Você pode voltar para a
          página inicial ou falar diretamente com a gente.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Voltar para a home
          </ButtonLink>
          <ButtonLink href="/solucoes/atendimento-ia" variant="outline" size="lg">
            Ver atendimento com IA
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
