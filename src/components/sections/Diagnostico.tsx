"use client";

import { useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { buildWhatsappHref, mailtoHref, siteConfig } from "@/lib/site";

type ChaveEscolha = "negocio" | "objetivo" | "operacao" | "investimento";

const PASSOS_ESCOLHA: {
  chave: ChaveEscolha;
  pergunta: string;
  ajuda?: string;
  opcoes: string[];
}[] = [
  {
    chave: "negocio",
    pergunta: "Qual é o seu negócio?",
    opcoes: [
      "Serviço local (clínica, consultório, prestador)",
      "Comércio ou e-commerce",
      "B2B / venda consultiva",
      "Educação, curso ou infoproduto",
      "Outro",
    ],
  },
  {
    chave: "objetivo",
    pergunta: "Qual é o principal objetivo agora?",
    opcoes: [
      "Gerar mais oportunidades",
      "Responder mais rápido quem chega",
      "Organizar o comercial e o follow-up",
      "Entender de onde vêm os resultados",
      "Escalar o que já funciona",
    ],
  },
  {
    chave: "operacao",
    pergunta: "Como está a operação hoje?",
    ajuda: "Não existe resposta errada — isso define por onde começar.",
    opcoes: [
      "Ainda não anuncio",
      "Anuncio, mas não consigo medir",
      "Meço, mas o comercial não acompanha",
      "Tenho CRM, mas está desorganizado",
      "Está estruturado, quero evoluir",
    ],
  },
  {
    chave: "investimento",
    pergunta: "Qual faixa de investimento faz sentido para o momento?",
    ajuda:
      "Considerando mídia e serviço somados. Serve para entender o contexto — não é proposta nem tabela de preço.",
    opcoes: [
      "Até R$ 2.500",
      "De R$ 2.500 a R$ 5.000",
      "De R$ 5.000 a R$ 10.000",
      "Acima de R$ 10.000",
      "Ainda estou avaliando",
    ],
  },
];

const FRENTES = [
  "Mídia paga",
  "Sites e landing pages",
  "Tracking e mensuração",
  "CRM e automações",
  "Atendimento com IA",
  "Inteligência de conteúdo",
  "Inteligência comercial",
];

/** Passos de escolha + frentes de interesse + contato. */
const TOTAL_PASSOS = PASSOS_ESCOLHA.length + 2;
const PASSO_INTERESSES = PASSOS_ESCOLHA.length;
const PASSO_CONTATO = PASSOS_ESCOLHA.length + 1;

type Contato = { nome: string; empresa: string; whatsapp: string; email: string };

/**
 * Dispara a conversão antes de sair da página.
 *
 * A regra do projeto exige `generate_lead` garantido **antes** do redirect.
 * `dataLayer.push` é síncrono, mas o disparo das tags dentro do GTM não é —
 * daí o `eventCallback`, com teto de tempo. Sem o teto, quem recusou os cookies
 * (GTM nunca carregado, callback que nunca chega) ficaria preso na tela.
 */
function dispararConversao(seguir: () => void) {
  const janela = window as Window & { dataLayer?: Record<string, unknown>[] };

  if (!janela.dataLayer) {
    seguir();
    return;
  }

  let jaSeguiu = false;
  const umaVezSo = () => {
    if (jaSeguiu) return;
    jaSeguiu = true;
    seguir();
  };

  janela.dataLayer.push({
    event: "generate_lead",
    eventCallback: umaVezSo,
    eventTimeout: 1200,
  });

  window.setTimeout(umaVezSo, 1200);
}

export function Diagnostico() {
  const [passo, setPasso] = useState(0);
  const [escolhas, setEscolhas] = useState<Record<ChaveEscolha, string>>({
    negocio: "",
    objetivo: "",
    operacao: "",
    investimento: "",
  });
  const [interesses, setInteresses] = useState<string[]>([]);
  const [contato, setContato] = useState<Contato>({
    nome: "",
    empresa: "",
    whatsapp: "",
    email: "",
  });
  const [erros, setErros] = useState<Partial<Record<keyof Contato, string>>>({});
  const [destinoFinal, setDestinoFinal] = useState<string | null>(null);

  // Recebe o foco a cada troca de passo: sem isso, quem navega por teclado
  // continuaria no botão anterior enquanto a tela inteira mudou.
  const cabecalhoRef = useRef<HTMLParagraphElement>(null);

  function irPara(proximo: number) {
    setPasso(proximo);
    window.requestAnimationFrame(() => cabecalhoRef.current?.focus());
  }

  function escolher(chave: ChaveEscolha, valor: string, indice: number) {
    setEscolhas((atual) => ({ ...atual, [chave]: valor }));
    // Avanço automático é o que torna o quiz rápido. Só vale para escolha
    // única — múltipla escolha e contato exigem confirmação explícita.
    irPara(indice + 1);
  }

  function alternarInteresse(frente: string) {
    setInteresses((atual) =>
      atual.includes(frente) ? atual.filter((item) => item !== frente) : [...atual, frente],
    );
  }

  function montarMensagem() {
    const linhas = [
      "Olá! Vim pelo site da AJAMBRE e respondi o diagnóstico.",
      "",
      `*Nome:* ${contato.nome.trim()}`,
    ];

    if (contato.empresa.trim()) linhas.push(`*Empresa:* ${contato.empresa.trim()}`);

    linhas.push(
      `*WhatsApp:* ${contato.whatsapp.trim()}`,
      `*E-mail:* ${contato.email.trim()}`,
      "",
      `*Negócio:* ${escolhas.negocio}`,
      `*Objetivo:* ${escolhas.objetivo}`,
      `*Operação hoje:* ${escolhas.operacao}`,
      `*Investimento:* ${escolhas.investimento}`,
      `*Frentes de interesse:* ${interesses.length ? interesses.join(", ") : "Ainda avaliando"}`,
    );

    return linhas.join("\n");
  }

  function validarContato() {
    const novos: Partial<Record<keyof Contato, string>> = {};

    if (contato.nome.trim().length < 2) novos.nome = "Informe seu nome.";
    if (contato.whatsapp.replace(/\D/g, "").length < 10)
      novos.whatsapp = "Informe um WhatsApp com DDD.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contato.email.trim()))
      novos.email = "Informe um e-mail válido.";

    setErros(novos);
    return Object.keys(novos).length === 0;
  }

  function enviar(evento: React.FormEvent) {
    evento.preventDefault();
    if (!validarContato()) return;

    const mensagem = montarMensagem();
    // Sem número no build, o e-mail assume o papel do WhatsApp levando
    // exatamente o mesmo conteúdo — nada quebra por falta de env var.
    const destino =
      buildWhatsappHref(mensagem) ??
      `${mailtoHref}?subject=${encodeURIComponent(
        "Diagnóstico pelo site",
      )}&body=${encodeURIComponent(mensagem)}`;

    setDestinoFinal(destino);
    dispararConversao(() => {
      window.location.href = destino;
    });
  }

  if (destinoFinal) {
    return (
      <Section id="diagnostico" tone="surface" labelledBy="diagnostico-titulo">
        <div className="mx-auto max-w-xl rounded-lg border border-brand/30 bg-bg p-8 text-center shadow-glow sm:p-10">
          <h2 id="diagnostico-titulo" className="text-heading font-semibold">
            Respostas organizadas. Abrindo a conversa…
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Se nada abrir automaticamente, use o botão abaixo. Suas respostas já seguem escritas
            na mensagem.
          </p>
          <ButtonLink href={destinoFinal} size="lg" className="mt-7 w-full sm:w-auto">
            Continuar a conversa
          </ButtonLink>
        </div>
      </Section>
    );
  }

  const passoEscolha = passo < PASSO_INTERESSES ? PASSOS_ESCOLHA[passo] : null;

  return (
    <Section id="diagnostico" tone="surface" labelledBy="diagnostico-titulo">
      <SectionHeader
        id="diagnostico-titulo"
        eyebrow="Diagnóstico rápido"
        title="Seis perguntas para entender sua operação."
        lead="Leva cerca de um minuto. No fim, a conversa começa com o contexto já na mão — em vez de recomeçar do zero."
      />

      {/*
        `p-5` no mobile: em 375px o container já come 40px e as opções têm mais
        20px de padding cada lado. Com p-7 sobravam ~239px para o texto da
        opção mais longa, que quebrava em três linhas.
      */}
      <div className="mt-12 max-w-2xl rounded-lg border border-line bg-bg p-5 sm:p-7 lg:p-9">
        <div className="mb-8">
          <p
            ref={cabecalhoRef}
            tabIndex={-1}
            aria-live="polite"
            className="eyebrow text-muted outline-none"
          >
            Etapa {passo + 1} de {TOTAL_PASSOS}
          </p>
          <div
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={TOTAL_PASSOS}
            aria-valuenow={passo + 1}
            aria-label="Progresso do diagnóstico"
            className="mt-3 h-1 w-full overflow-hidden rounded-full bg-line"
          >
            <div
              className="h-full rounded-full bg-brand transition-[width] duration-300 ease-out"
              style={{ width: `${((passo + 1) / TOTAL_PASSOS) * 100}%` }}
            />
          </div>
        </div>

        {passoEscolha ? (
          <div>
            <h3 className="text-heading font-semibold">{passoEscolha.pergunta}</h3>
            {passoEscolha.ajuda ? (
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{passoEscolha.ajuda}</p>
            ) : null}

            <div className="mt-7 flex flex-col gap-2.5">
              {passoEscolha.opcoes.map((opcao) => {
                const ativo = escolhas[passoEscolha.chave] === opcao;

                return (
                  <button
                    key={opcao}
                    type="button"
                    onClick={() => escolher(passoEscolha.chave, opcao, passo)}
                    className={`rounded border px-5 py-3.5 text-left text-sm transition-[border-color,background-color,box-shadow] duration-200 ${
                      ativo
                        ? "border-brand bg-brand-soft font-medium text-brand-strong shadow-glow"
                        : "border-line hover:border-brand/40 hover:bg-surface"
                    }`}
                  >
                    {opcao}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        {passo === PASSO_INTERESSES ? (
          <fieldset>
            <legend className="text-heading font-semibold">Quais frentes te interessam?</legend>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              Pode marcar mais de uma — ou nenhuma, se ainda estiver avaliando.
            </p>

            <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {FRENTES.map((frente) => {
                const ativo = interesses.includes(frente);

                return (
                  <label key={frente} className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={ativo}
                      onChange={() => alternarInteresse(frente)}
                      className="peer sr-only"
                    />
                    <span
                      className={`flex items-center gap-3 rounded border px-4 py-3 text-sm transition-[border-color,background-color] duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-brand peer-focus-visible:ring-offset-2 ${
                        ativo
                          ? "border-brand bg-brand-soft font-medium text-brand-strong"
                          : "border-line hover:border-brand/40"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ${
                          ativo ? "border-brand bg-brand text-white" : "border-line"
                        }`}
                      >
                        {ativo ? (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path
                              d="M2 5.2l2.2 2.2L8 3.2"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : null}
                      </span>
                      {frente}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        {passo === PASSO_CONTATO ? (
          <form onSubmit={enviar} noValidate>
            <h3 className="text-heading font-semibold">Como falamos com você?</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              Ao concluir, suas respostas seguem organizadas na mensagem — você não precisa
              repetir nada.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Campo
                id="diag-nome"
                rotulo="Nome"
                valor={contato.nome}
                erro={erros.nome}
                autoComplete="name"
                aoMudar={(valor) => setContato((atual) => ({ ...atual, nome: valor }))}
              />
              <Campo
                id="diag-empresa"
                rotulo="Empresa"
                opcional
                valor={contato.empresa}
                autoComplete="organization"
                aoMudar={(valor) => setContato((atual) => ({ ...atual, empresa: valor }))}
              />
              <Campo
                id="diag-whatsapp"
                rotulo="WhatsApp"
                tipo="tel"
                inputMode="tel"
                placeholder="(DDD) 00000-0000"
                valor={contato.whatsapp}
                erro={erros.whatsapp}
                autoComplete="tel"
                aoMudar={(valor) => setContato((atual) => ({ ...atual, whatsapp: valor }))}
              />
              <Campo
                id="diag-email"
                rotulo="E-mail"
                tipo="email"
                inputMode="email"
                valor={contato.email}
                erro={erros.email}
                autoComplete="email"
                aoMudar={(valor) => setContato((atual) => ({ ...atual, email: valor }))}
              />
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted">
              Seus dados são usados para retomar este contato. Detalhes na{" "}
              <a
                href="/politica-de-privacidade"
                className="font-medium text-brand underline underline-offset-4 hover:text-brand-strong"
              >
                Política de Privacidade
              </a>
              .
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row-reverse">
              <button
                type="submit"
                /* Sem glow: é o mesmo desenho do ButtonLink primário usado no
                   resto do site. Glow aqui marca estado (opção escolhida, card
                   aberto), não faz parte do botão padrão. */
                className="inline-flex h-12 items-center justify-center rounded bg-brand px-7 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-brand-strong"
              >
                Concluir e conversar
              </button>
              <BotaoVoltar aoVoltar={() => irPara(passo - 1)} />
            </div>
          </form>
        ) : null}

        {passo !== PASSO_CONTATO ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row-reverse">
            <button
              type="button"
              onClick={() => irPara(passo + 1)}
              disabled={passoEscolha ? !escolhas[passoEscolha.chave] : false}
              className="inline-flex h-12 items-center justify-center rounded bg-brand px-7 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-40"
            >
              {passo === PASSO_INTERESSES ? "Ir para o contato" : "Continuar"}
            </button>
            {passo > 0 ? <BotaoVoltar aoVoltar={() => irPara(passo - 1)} /> : null}
          </div>
        ) : null}
      </div>

      <p className="mt-6 max-w-2xl text-sm text-muted">
        Prefere falar direto?{" "}
        <a
          href={mailtoHref}
          className="font-medium text-brand underline underline-offset-4 hover:text-brand-strong"
        >
          {siteConfig.email}
        </a>
      </p>
    </Section>
  );
}

function BotaoVoltar({ aoVoltar }: { aoVoltar: () => void }) {
  return (
    <button
      type="button"
      onClick={aoVoltar}
      className="inline-flex h-12 items-center justify-center rounded border border-ink/15 px-6 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-surface"
    >
      Voltar
    </button>
  );
}

function Campo({
  id,
  rotulo,
  valor,
  aoMudar,
  erro,
  tipo = "text",
  inputMode,
  placeholder,
  autoComplete,
  opcional = false,
}: {
  id: string;
  rotulo: string;
  valor: string;
  aoMudar: (valor: string) => void;
  erro?: string;
  tipo?: string;
  inputMode?: "text" | "tel" | "email";
  placeholder?: string;
  autoComplete?: string;
  opcional?: boolean;
}) {
  const idErro = `${id}-erro`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {rotulo}
        {opcional ? <span className="ml-1.5 text-xs text-muted">(opcional)</span> : null}
      </label>
      <input
        id={id}
        type={tipo}
        inputMode={inputMode}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={valor}
        onChange={(evento) => aoMudar(evento.target.value)}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? idErro : undefined}
        className={`mt-2 h-11 w-full rounded border bg-bg px-3.5 text-sm transition-colors placeholder:text-muted/60 ${
          erro ? "border-brand" : "border-line focus:border-brand/60"
        }`}
      />
      {erro ? (
        // `role="alert"` para o erro ser anunciado no momento em que aparece —
        // sem isso, quem usa leitor de tela só descobriria tabulando de volta.
        <p id={idErro} role="alert" className="mt-1.5 text-xs font-medium text-brand-strong">
          {erro}
        </p>
      ) : null}
    </div>
  );
}
