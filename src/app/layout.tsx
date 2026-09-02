import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { sora } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AJAMBRE — Marketing, CRM, automação e IA em uma operação só",
    template: "%s | AJAMBRE",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "AJAMBRE — Marketing, CRM, automação e IA em uma operação só",
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-ajambre.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AJAMBRE — Marketing, CRM, automação e IA em uma operação só",
    description: siteConfig.description,
    images: ["/images/og-ajambre.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

/**
 * Dados estruturados da organização.
 * Somente informações confirmadas: nome, site, logo, e-mail, CNPJ e assinatura
 * da marca. Endereço, telefone, redes sociais, avaliações, fundadores e número
 * de funcionários foram deliberadamente omitidos — não foram confirmados.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/ajambre-logo.png`,
  email: siteConfig.email,
  taxID: siteConfig.cnpj,
  slogan: siteConfig.tagline,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={sora.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>

        <Header />

        <main id="conteudo" className="flex-1">
          {children}
        </main>

        <Footer />

        <script
          type="application/ld+json"
          // JSON-LD estático, sem dado vindo de usuário.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
