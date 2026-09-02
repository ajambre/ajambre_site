import localFont from "next/font/local";

/**
 * Sora — fonte da marca AJAMBRE, já presente em `public/fonts/static`.
 * Self-hospedada via next/font/local: sem requisição a Google Fonts,
 * sem layout shift e sem custo de terceiros.
 *
 * Apenas 4 dos 8 pesos disponíveis são carregados, de propósito:
 * cada arquivo TTF pesa ~57 KB e carregar os 8 seria desperdício.
 */
export const sora = localFont({
  src: [
    { path: "../../public/fonts/static/Sora-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/static/Sora-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/static/Sora-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/static/Sora-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-sora",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
});
