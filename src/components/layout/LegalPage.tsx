import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";

/**
 * Casca das páginas legais: mesma hierarquia, mesma largura de leitura,
 * mesma data de atualização visível.
 */
export function LegalPage({
  titulo,
  resumo,
  atualizadoEm,
  children,
}: {
  titulo: string;
  resumo: string;
  atualizadoEm: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="border-b border-line bg-surface">
        <div className="container py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="overline">{siteConfig.name}</p>
            <h1 className="mt-6 text-title font-bold">{titulo}</h1>
            <p className="mt-5 text-lead text-muted">{resumo}</p>
            <p className="mt-6 text-sm text-muted">
              Última atualização: <strong className="font-semibold text-ink">{atualizadoEm}</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16 sm:py-20">
        <article className="prose-ajambre">{children}</article>

        <div className="mt-16 max-w-prose rounded-lg border border-line bg-surface p-6">
          <h2 className="text-base font-semibold text-ink">Contato</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Dúvidas, solicitações ou pedidos relacionados a este documento podem ser enviados para{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-brand underline underline-offset-4 hover:text-brand-strong"
            >
              {siteConfig.email}
            </a>
            .
          </p>
          <p className="mt-3 text-sm text-muted">
            {siteConfig.name} — CNPJ {siteConfig.cnpj}
          </p>
        </div>
      </div>
    </>
  );
}
