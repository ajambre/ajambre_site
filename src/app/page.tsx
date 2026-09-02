import { Ajambrar } from "@/components/sections/Ajambrar";
import { Arquitetura } from "@/components/sections/Arquitetura";
import { Contratacao } from "@/components/sections/Contratacao";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Ecossistema } from "@/components/sections/Ecossistema";
import { Hero } from "@/components/sections/Hero";
import { Investimento } from "@/components/sections/Investimento";
import { Problema } from "@/components/sections/Problema";
import { Processo } from "@/components/sections/Processo";
import { Solucoes } from "@/components/sections/Solucoes";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problema />
      <Ajambrar />
      <Solucoes />
      <Ecossistema />
      <Arquitetura />
      <Contratacao />
      <Investimento />
      <Processo />
      <CtaFinal />
    </>
  );
}
