import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Sitemap. Toda rota pública do site está aqui — sem espaços acidentais
 * no caminho e sem barra final inconsistente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const rotas: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/solucoes/atendimento-ia", priority: 0.8, changeFrequency: "monthly" },
    { path: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" },
    { path: "/termos-de-uso", priority: 0.3, changeFrequency: "yearly" },
    { path: "/exclusao-de-dados", priority: 0.3, changeFrequency: "yearly" },
  ];

  return rotas.map((rota) => ({
    url: `${siteConfig.url}${rota.path}`,
    lastModified: now,
    changeFrequency: rota.changeFrequency,
    priority: rota.priority,
  }));
}
