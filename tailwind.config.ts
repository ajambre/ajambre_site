import type { Config } from "tailwindcss";

/**
 * Design tokens da AJAMBRE.
 *
 * As cores vivem em CSS variables (src/app/globals.css) e sao apenas
 * referenciadas aqui. Isso permite refinar a identidade visual depois
 * (referencias visuais ainda serao fornecidas) sem tocar em componentes.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        brand: {
          DEFAULT: "rgb(var(--color-brand) / <alpha-value>)",
          strong: "rgb(var(--color-brand-strong) / <alpha-value>)",
          soft: "rgb(var(--color-brand-soft) / <alpha-value>)",
        },
        carbon: {
          DEFAULT: "rgb(var(--color-carbon) / <alpha-value>)",
          soft: "rgb(var(--color-carbon-soft) / <alpha-value>)",
          line: "rgb(var(--color-carbon-line) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // escala editorial — display usa clamp para escalar sem breakpoints
        display: ["clamp(2.5rem, 6.2vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        title: ["clamp(1.875rem, 3.6vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        heading: ["clamp(1.375rem, 2.2vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        lead: ["clamp(1.0625rem, 1.5vw, 1.25rem)", { lineHeight: "1.6" }],
        overline: ["0.75rem", { lineHeight: "1", letterSpacing: "0.16em" }],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        card: "0 1px 2px rgb(17 17 17 / 0.04), 0 8px 24px -12px rgb(17 17 17 / 0.10)",
        lift: "0 2px 4px rgb(17 17 17 / 0.05), 0 16px 40px -16px rgb(17 17 17 / 0.16)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
