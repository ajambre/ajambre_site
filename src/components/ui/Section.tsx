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
  overline,
  title,
  lead,
  id,
  align = "left",
  onDark = false,
  className = "",
}: {
  overline?: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "";

  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignment} ${className}`}>
      {overline ? (
        <p className={`overline ${onDark ? "text-white/70 before:bg-white/40" : ""}`}>{overline}</p>
      ) : null}

      <h2 id={id} className="text-title font-bold">
        {title}
      </h2>

      {lead ? (
        <p className={`text-lead ${onDark ? "text-white/75" : "text-muted"}`}>{lead}</p>
      ) : null}
    </div>
  );
}
