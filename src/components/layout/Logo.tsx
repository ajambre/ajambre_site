import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

/**
 * Logotipo da AJAMBRE.
 *
 * Usa o arquivo de marca já existente em /public/images, sem qualquer
 * alteração de desenho, cor ou proporção. A variante `invert` apenas
 * aplica um filtro CSS para uso sobre fundo escuro — o arquivo original
 * permanece intacto.
 */
export function Logo({
  className = "",
  invert = false,
  priority = false,
}: {
  className?: string;
  invert?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label={`${siteConfig.name} — página inicial`}
    >
      <Image
        src="/images/ajambre-logo.png"
        alt={`${siteConfig.name} — ${siteConfig.tagline}`}
        width={671}
        height={236}
        priority={priority}
        className={`h-9 w-auto sm:h-10 ${invert ? "brightness-0 invert" : ""} ${className}`}
      />
    </Link>
  );
}
