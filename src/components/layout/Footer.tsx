import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { legalRoutes, products, siteConfig } from "@/lib/site";

const solucoes = [
  { label: "Mídia paga", href: "/#solucoes" },
  { label: "Sites e Landing Pages", href: "/#solucoes" },
  { label: "Tracking e mensuração", href: "/#solucoes" },
  { label: "CRM e automação", href: "/#solucoes" },
  { label: "Atendimento com IA", href: "/solucoes/atendimento-ia" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-carbon text-white">
      <div className="container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo invert />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Aquisição, atendimento, CRM e dados conectados como uma operação só.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-white underline underline-offset-4 hover:text-brand"
            >
              {siteConfig.email}
            </a>
          </div>

          <FooterColumn title="Soluções">
            {solucoes.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Ecossistema">
            <FooterLink href={products.leadbase.url} external>
              {products.leadbase.name}
            </FooterLink>

            {/*
              O Business Scanner só vira link quando a URL pública for confirmada.
              Até lá aparece como item do ecossistema, sem href inventado.
            */}
            {products.businessScanner.url ? (
              <FooterLink href={products.businessScanner.url} external>
                {products.businessScanner.name}
              </FooterLink>
            ) : (
              <li className="text-sm text-white/40">{products.businessScanner.name}</li>
            )}

            <FooterLink href={products.atendimentoIa.url}>Agentes de IA</FooterLink>
          </FooterColumn>

          <FooterColumn title="Legal">
            {legalRoutes.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-carbon-line pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>CNPJ: {siteConfig.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-overline font-semibold uppercase text-white/40">{title}</h2>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className = "text-sm text-white/70 transition-colors hover:text-white";

  return (
    <li>
      {external ? (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
          {children}
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </li>
  );
}
