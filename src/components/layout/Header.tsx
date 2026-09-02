"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { contactHref, nav } from "@/lib/site";

/**
 * Header global.
 *
 * É o único Client Component do layout — existe apenas por causa do menu
 * mobile (estado aberto/fechado, Escape e trava de scroll). Todo o resto
 * do site permanece Server Component.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Logo priority />

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/solucoes/atendimento-ia"
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            Atendimento com IA
          </Link>
          <ButtonLink href={contactHref}>Falar com a AJAMBRE</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded lg:hidden"
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M5 5l12 12" />
                <path d="M17 5L5 17" />
              </>
            ) : (
              <>
                <path d="M3 6.5h16" />
                <path d="M3 15.5h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div id="menu-mobile" className="border-t border-line bg-bg lg:hidden">
          <nav aria-label="Navegação principal (mobile)" className="container flex flex-col py-4">
            {[...nav, { label: "Atendimento com IA", href: "/solucoes/atendimento-ia" }].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 text-base font-medium text-ink last:border-0"
                >
                  {item.label}
                </Link>
              ),
            )}

            <ButtonLink href={contactHref} size="lg" className="mt-4 w-full">
              Falar com a AJAMBRE
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
