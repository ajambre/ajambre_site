import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Exclusão de Dados",
  description:
    "Como solicitar a exclusão dos seus dados pessoais tratados pela AJAMBRE, quais informações enviar e como o pedido é processado.",
  alternates: { canonical: "/exclusao-de-dados" },
  robots: { index: true, follow: true },
};

export default function ExclusaoDeDadosPage() {
  return (
    <LegalPage
      titulo="Exclusão de Dados"
      resumo="Você pode solicitar a exclusão dos seus dados pessoais tratados pela AJAMBRE. Esta página explica como pedir, o que informar e como o pedido é processado."
      atualizadoEm="23 de agosto de 2026"
    >
      <h2>1. Como solicitar</h2>
      <p>
        Envie um e-mail para <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> com o
        assunto <strong>&ldquo;Exclusão de dados&rdquo;</strong>, informando de forma clara que
        deseja a exclusão dos seus dados pessoais.
      </p>

      <h2>2. O que informar no pedido</h2>
      <p>
        Para que possamos localizar seus registros com segurança, informe, sempre que possível:
      </p>
      <ul>
        <li>nome completo;</li>
        <li>e-mail utilizado no contato ou cadastro;</li>
        <li>telefone ou WhatsApp utilizado no contato;</li>
        <li>
          origem do cadastro — por exemplo: formulário do site, anúncio, conversa por WhatsApp ou
          indicação;
        </li>
        <li>descrição do que você deseja excluir, se o pedido for parcial.</li>
      </ul>
      <p>
        Quanto mais precisas forem essas informações, maior a chance de localizarmos exatamente os
        registros corretos — e menor o risco de excluir dados de outra pessoa por engano.
      </p>

      <h2>3. Confirmação de identidade</h2>
      <p>
        Podemos precisar confirmar a sua identidade antes de processar o pedido. Isso protege você:
        impede que terceiros solicitem a exclusão de dados em seu nome. Se for necessário,
        entraremos em contato pelo próprio canal utilizado na solicitação.
      </p>

      <h2>4. Prazo e processamento</h2>
      <p>
        Os pedidos são analisados e processados dentro de um prazo razoável, conforme a
        complexidade da solicitação e a legislação aplicável. A exclusão não é necessariamente
        instantânea: depende da verificação de identidade, da localização dos registros e dos
        sistemas envolvidos.
      </p>
      <p>Manteremos você informado sobre o andamento pelo canal de contato utilizado.</p>

      <h2>5. Situações em que dados podem ser preservados</h2>
      <p>
        Nem todo dado pode ser eliminado imediatamente. Alguns registros podem precisar ser
        preservados, mesmo após um pedido de exclusão, quando isso for necessário para:
      </p>
      <ul>
        <li>cumprimento de obrigação legal ou regulatória;</li>
        <li>exercício regular de direitos em processo judicial, administrativo ou arbitral;</li>
        <li>prevenção a fraudes e preservação da segurança das operações;</li>
        <li>manutenção de registros contábeis e fiscais, quando exigidos.</li>
      </ul>
      <p>
        Nesses casos, os dados preservados ficam restritos à finalidade que justificou a
        manutenção, e são eliminados quando essa necessidade deixar de existir.
      </p>

      <h2>6. Dados tratados a pedido de clientes</h2>
      <p>
        Em alguns casos, a AJAMBRE trata dados dentro de operações conduzidas para empresas
        clientes. Quando o pedido envolver esse tipo de registro, podemos precisar encaminhar a
        solicitação à empresa responsável pela operação, informando você a respeito.
      </p>

      <h2>7. Outros direitos</h2>
      <p>
        Além da exclusão, você pode solicitar acesso, correção, portabilidade e informações sobre o
        compartilhamento dos seus dados. Esses direitos e as respectivas condições estão descritos
        na <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>
    </LegalPage>
  );
}
