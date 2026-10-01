export type TimelineItem = {
  titulo: string;
  texto: string;
};

/**
 * Linha do tempo do processo.
 *
 * Decisões que valem registro:
 *
 * - **Sem JavaScript.** Os microefeitos são `transition` de CSS disparadas por
 *   hover e focus-within. Isso mantém a seção como Server Component e não
 *   adiciona nada ao bundle. O `prefers-reduced-motion` global já neutraliza as
 *   transições para quem pediu menos movimento.
 *
 * - **Alternância por posição, não por alinhamento.** No desktop os blocos
 *   alternam de lado, mas o texto permanece alinhado à esquerda nos dois lados.
 *   Texto justificado à direita em parágrafos de duas ou três linhas custa
 *   legibilidade e o ganho estético não compensa.
 *
 * - **O trilho é decorativo.** Vai com `aria-hidden`: quem usa leitor de tela
 *   recebe uma lista ordenada, que já comunica sequência melhor do que uma
 *   descrição de linha vertical.
 */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative mt-14">
      {/* Trilho: desvanece nas pontas para não terminar em corte seco. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-5 w-px -translate-x-1/2 bg-gradient-to-b from-brand/0 via-brand/25 to-brand/0 lg:left-1/2"
      />

      {items.map((item, index) => {
        const naEsquerda = index % 2 === 0;

        return (
          <li
            key={item.titulo}
            /*
              `pl-12` no mobile em vez de `pl-14`: em telas de 320px o container
              já consome 40px de padding lateral, e cada 8px devolvidos ao card
              contam para o texto não ficar em coluna estreita demais.
            */
            className="group relative pb-8 pl-12 last:pb-0 sm:pl-14 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:pb-10 lg:pl-0"
          >
            {/* Nó numerado, ancorado no trilho. */}
            <span
              aria-hidden="true"
              className="absolute left-5 top-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-brand/25 bg-bg text-xs font-semibold text-brand shadow-node transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110 lg:left-1/2"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div
              className={
                naEsquerda ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-2 lg:row-start-1"
              }
            >
              <div className="rounded-lg border border-line bg-bg p-5 transition-[border-color,box-shadow,transform] duration-300 group-hover:-translate-y-0.5 group-hover:border-brand/30 group-hover:shadow-glow sm:p-6">
                <h3 className="text-heading font-semibold">{item.titulo}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.texto}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
