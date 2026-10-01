import type { ReactNode } from "react";

type Tone = "default" | "surface" | "dark";

const tones: Record<Tone, string> = {
  default: "bg-bg text-ink",
  surface: "bg-surface text-ink",
  dark: "bg-carbon text-white",
};

export function Section({
  id,
  tone = "default",
  children,
  className = "",
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tones[tone]} py-20 sm:py-28 ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

/**
 * Cabeçalho padrão de seção: rótulo, título e linha de apoio.
 * Centraliza a hierarquia tipográfica em um lugar só.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
  align = "left",
  onDark = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        // Espaço maior abaixo do rótulo compensa a ausência do antigo filete:
        // é o respiro que separa, não mais um traço.
        <p className={`eyebrow mb-5 ${onDark ? "text-brand-light" : ""}`}>{eyebrow}</p>
      ) : null}

      <h2 id={id} className="text-title font-bold">
        {title}
      </h2>

      {lead ? (
        <p className={`mt-5 text-lead ${onDark ? "text-white/75" : "text-muted"}`}>{lead}</p>
      ) : null}
    </div>
  );
}
