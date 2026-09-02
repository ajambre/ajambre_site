import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded font-semibold transition-colors " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-strong",
  outline: "border border-ink/15 bg-bg text-ink hover:border-ink/40 hover:bg-surface",
  ghost: "text-ink hover:text-brand",
  onDark: "border border-white/25 text-white hover:border-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[0.9375rem]",
};

export type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Abre em nova aba e anuncia isso para leitores de tela. */
  external?: boolean;
};

/**
 * CTA do site. Sempre um link — não existe formulário nesta fase, portanto
 * nenhum botão dispara conversão. Quando houver formulário real, o evento
 * `generate_lead` deve ser disparado na submissão bem-sucedida, nunca no clique.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    );
  }

  // mailto:, tel: e âncoras puras não devem passar pelo router do Next.
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
