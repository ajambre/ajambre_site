"use client";

import Script from "next/script";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { tracking } from "@/lib/site";

type Decision = "granted" | "denied";

const STORAGE_KEY = "ajambre-consent";

/** Permite reabrir a escolha a partir do rodapé, em qualquer página. */
export const OPEN_CONSENT_EVENT = "ajambre:abrir-consentimento";

function readStoredDecision(): Decision | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    // Navegador com storage bloqueado: trata como "ainda não decidiu".
    return null;
  }
}

/**
 * Consentimento de cookies e carregamento do GTM.
 *
 * A regra do projeto é explícita: o banner precisa controlar **tecnicamente** o
 * carregamento, não apenas sumir da tela. Por isso o container do GTM só é
 * injetado depois do aceite — antes disso nenhuma requisição sai para o
 * googletagmanager.com, e nenhum cookie de medição é criado.
 *
 * O Consent Mode é declarado no mesmo script, na ordem correta: `default`
 * negado primeiro, `update` concedido depois, e só então o GTM. Assim as tags
 * configuradas no container já encontram um estado de consentimento explícito.
 *
 * Se `NEXT_PUBLIC_GTM_ID` não estiver definido no build, o componente não
 * renderiza nada: sem script para carregar, não há o que consentir — e um
 * banner nesse cenário seria só ruído.
 */
export function ConsentGate() {
  const [decision, setDecision] = useState<Decision | null>(null);
  const [asking, setAsking] = useState(false);

  useEffect(() => {
    const stored = readStoredDecision();
    setDecision(stored);
    setAsking(stored === null);
  }, []);

  useEffect(() => {
    const reopen = () => setAsking(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const decide = useCallback((value: Decision) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Sem storage a escolha vale só para esta navegação — melhor do que falhar.
    }
    setDecision(value);
    setAsking(false);
  }, []);

  if (!tracking.gtmId) return null;

  return (
    <>
      {decision === "granted" ? (
        <Script id="gtm-consent" strategy="afterInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied'});
gtag('consent','update',{'ad_storage':'granted','ad_user_data':'granted','ad_personalization':'granted','analytics_storage':'granted'});
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${tracking.gtmId}');
          `}
        </Script>
      ) : null}

      {asking ? (
        <div
          role="region"
          aria-label="Aviso de cookies"
          className="fixed inset-x-0 bottom-0 z-[70] border-t border-line bg-bg p-4 shadow-lift sm:p-5"
        >
          <div className="container flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              Usamos cookies de medição para entender como o site é utilizado e melhorar a
              experiência. <strong className="font-semibold text-ink">Nada é carregado sem a
              sua escolha</strong> — se você recusar, nenhum script de medição é executado.
              Detalhes na{" "}
              <Link
                href="/politica-de-privacidade"
                className="font-medium text-brand underline underline-offset-4 hover:text-brand-strong"
              >
                Política de Privacidade
              </Link>
              .
            </p>

            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="inline-flex h-11 items-center justify-center rounded border border-ink/15 px-5 text-sm font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="inline-flex h-11 items-center justify-center rounded bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

/**
 * Botão do rodapé para rever a decisão. Fica fora do `ConsentGate` porque o
 * rodapé é Server Component — este é o único pedaço que precisa ser client.
 */
export function ConsentPreferencesButton({ className = "" }: { className?: string }) {
  if (!tracking.gtmId) return null;

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className={className}
    >
      Preferências de cookies
    </button>
  );
}
