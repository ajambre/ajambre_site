"use client";

import Link from "next/link";
import { useId, useState } from "react";

export type RevealCardProps = {
  titulo: string;
  texto: string;
  itens: string[];
  href?: string;
  cta?: string;
};

/**
 * Card de solução com conteúdo revelável.
 *
 * **Por que disclosure e não flip card 3D.** O flip parece mais chamativo, mas
 * cobra caro: o verso continua no DOM o tempo todo (leitor de tela lê conteúdo
 * invisível e o Tab entra em links que ninguém está vendo), depende de
 * `transform: rotateY` com `backface-visibility` — que exige altura fixa e
 * quebra quando o texto transborda no mobile — e ainda obriga a inventar um
 * gesto que não existe em botão nativo.
 *
 * O disclosure resolve os mesmos objetivos com HTML que já é acessível: um
 * `<button>` real dentro do heading, `aria-expanded` comunicando o estado e
 * teclado funcionando sem nenhuma linha de JavaScript extra. Clique e toque
 * funcionam igual, e nada depende de hover.
 *
 * A animação usa a transição de `grid-template-rows` de `0fr` para `1fr`: é a
 * forma de animar altura automática sem medir nada em JavaScript. O
 * `visibility` acompanha para que, fechado, o conteúdo saia da ordem de
 * tabulação e da árvore de acessibilidade — e não apenas fique escondido.
 */
export function RevealCard({ titulo, texto, itens, href, cta }: RevealCardProps) {
  const [aberto, setAberto] = useState(false);
  const painelId = useId();

  return (
    <article
      /*
        Sem `overflow-hidden` aqui de propósito: o botão ocupa o card inteiro e
        o anel de foco é desenhado FORA da caixa dele — com recorte no article,
        quem navega por teclado não enxergava onde estava. O recorte necessário
        para a animação já acontece no wrapper interno do painel.
      */
      className={`rounded-lg border bg-bg transition-[border-color,box-shadow] duration-300 ${
        aberto
          ? "border-brand/35 shadow-glow"
          : "border-line hover:border-brand/25 hover:shadow-card"
      }`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={aberto}
          aria-controls={painelId}
          onClick={() => setAberto((valor) => !valor)}
          className="flex w-full items-center justify-between gap-4 p-7 text-left"
        >
          <span className="text-heading font-semibold">{titulo}</span>

          <span
            aria-hidden="true"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-300 ${
              aberto
                ? "rotate-180 border-brand bg-brand text-white"
                : "border-line text-brand"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3.5 5.25L7 8.75l3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={painelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          aberto ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden transition-[visibility] duration-300 ${
            aberto ? "visible" : "invisible"
          }`}
        >
          <div className="px-7 pb-7">
            <p className="text-sm leading-relaxed text-muted">{texto}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {itens.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>

            {href && cta ? (
              <Link
                href={href}
                className="mt-6 inline-block text-sm font-semibold text-brand underline underline-offset-4 hover:text-brand-strong"
              >
                {cta}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
