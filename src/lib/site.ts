/**
 * Configuração central do site institucional da AJAMBRE.
 *
 * Regra: nada aqui pode ser inventado. Todo dado é confirmado ou fica `null`.
 * Quando uma informação pendente for confirmada, basta preenchê-la aqui —
 * os componentes já tratam o caso "ainda não confirmado".
 */

export const siteConfig = {
  name: "AJAMBRE",
  /** Assinatura presente no próprio logotipo da marca. */
  tagline: "Solução MarTechIA para Negócios",
  url: "https://ajambre.com.br",
  cnpj: "36.607.626/0001-08",
  email: "contato@ajambre.com.br",
  description:
    "A AJAMBRE conecta mídia paga, sites, tracking, CRM, automação e agentes de IA " +
    "em uma única operação — para que cada lead tenha origem conhecida, atendimento " +
    "rápido e acompanhamento até o fim.",
} as const;

/** Canal de contato padrão enquanto o WhatsApp oficial não for confirmado. */
export const contactHref = `mailto:${siteConfig.email}`;

export const nav = [
  { label: "O problema", href: "/#problema" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Ecossistema", href: "/#ecossistema" },
  { label: "Investimento", href: "/#investimento" },
] as const;

export const products = {
  leadbase: {
    name: "LeadBase",
    /** URL confirmada. */
    url: "https://leadbase.ajambre.com.br",
  },
  businessScanner: {
    name: "Business Scanner",
    /**
     * PENDENTE: a URL pública ainda não foi confirmada.
     * Mantida como `null` de propósito — nenhum domínio deve ser inventado
     * e nenhum href falso ("#") deve ser publicado.
     * Ao confirmar, troque por uma string e o CTA aparece automaticamente.
     */
    url: null as string | null,
  },
  atendimentoIa: {
    name: "Atendimento com IA",
    url: "/solucoes/atendimento-ia",
  },
} as const;

/** Valores comerciais confirmados. Sem periodicidade, sem desconto, sem parcelamento. */
export const pricing = {
  trafego: {
    label: "Gestão de tráfego completa",
    value: "R$ 2.500",
  },
  ia: {
    label: "Projetos de IA",
    value: "A partir de R$ 3.000",
  },
} as const;

/**
 * Tracking — somente o Google Tag Manager.
 *
 * GA4, Meta Pixel e Google Ads são configurados dentro do próprio GTM, e não
 * como scripts separados no código. Carregar cada um por fora duplicaria
 * pageview e conversão, e espalharia o controle de consentimento por vários
 * pontos. Com um container só, existe um único lugar para ligar e desligar.
 *
 * Nenhum script é carregado enquanto o ID não for definido e o consentimento
 * não for implementado.
 */
export const tracking = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || null,
} as const;

export const legalRoutes = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Exclusão de Dados", href: "/exclusao-de-dados" },
] as const;
