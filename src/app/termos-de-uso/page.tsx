import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições de uso do site institucional da AJAMBRE: finalidade, conteúdo, propriedade intelectual, disponibilidade e links externos.",
  alternates: { canonical: "/termos-de-uso" },
  robots: { index: true, follow: true },
};

export default function TermosDeUsoPage() {
  return (
    <LegalPage
      titulo="Termos de Uso"
      resumo="Estas são as condições para uso do site da AJAMBRE. Ao navegar por aqui, você concorda com o que está descrito abaixo."
      atualizadoEm="23 de agosto de 2026"
    >
      <h2>1. Sobre estes termos</h2>
      <p>
        Estes Termos de Uso regem o acesso e a navegação no site{" "}
        <strong>{siteConfig.url}</strong>, mantido pela <strong>AJAMBRE</strong>, CNPJ{" "}
        <strong>{siteConfig.cnpj}</strong>. Se você não concordar com alguma condição, recomendamos
        não utilizar o site.
      </p>

      <h2>2. Finalidade do site</h2>
      <p>
        Este site tem finalidade <strong>institucional e comercial</strong>: apresentar a AJAMBRE,
        seus serviços, seus produtos e suas formas de contato. Ele não é uma plataforma de
        contratação automatizada e não substitui a proposta comercial, que é elaborada caso a caso.
      </p>

      <h2>3. Conteúdo e informações apresentadas</h2>
      <p>
        As informações publicadas aqui são de caráter geral e podem ser alteradas a qualquer
        momento, sem aviso prévio. Descrições de serviços, produtos, integrações e arquiteturas
        são apresentadas de forma conceitual: o que será efetivamente entregue depende do escopo
        acordado por escrito com cada cliente.
      </p>
      <p>
        Valores eventualmente divulgados no site referem-se apenas ao que está expressamente
        indicado e não incluem custos de terceiros — como investimento em mídia, APIs de
        inteligência artificial, hospedagem, infraestrutura e demais serviços externos, quando
        aplicáveis.
      </p>
      <p>
        Nada neste site deve ser interpretado como promessa, garantia ou previsão de resultado
        comercial, financeiro ou de desempenho.
      </p>

      <h2>4. Propriedade intelectual</h2>
      <p>
        A marca AJAMBRE, o logotipo, os nomes dos produtos, os textos, o layout, os elementos
        visuais e o código deste site são protegidos pela legislação aplicável e pertencem à
        AJAMBRE ou a seus licenciadores.
      </p>
      <p>
        Não é permitido copiar, reproduzir, distribuir, modificar ou explorar comercialmente esses
        materiais sem autorização prévia e por escrito. É permitido o compartilhamento de links
        para as páginas do site.
      </p>

      <h2>5. Uso adequado</h2>
      <p>Ao utilizar este site, você concorda em não:</p>
      <ul>
        <li>praticar atos que comprometam a segurança, a integridade ou o funcionamento do site;</li>
        <li>tentar obter acesso não autorizado a sistemas, dados ou áreas restritas;</li>
        <li>utilizar o site para finalidade ilícita ou que viole direitos de terceiros;</li>
        <li>
          realizar coleta automatizada de conteúdo que prejudique a operação normal do serviço.
        </li>
      </ul>

      <h2>6. Disponibilidade</h2>
      <p>
        Trabalhamos para manter o site disponível e funcionando corretamente, mas a operação pode
        ser interrompida por manutenção, atualização, falha técnica, indisponibilidade de
        fornecedores ou eventos fora do nosso controle. O site é oferecido no estado em que se
        encontra, sem garantia de disponibilidade ininterrupta.
      </p>

      <h2>7. Links externos</h2>
      <p>
        Este site pode direcionar para ambientes de terceiros e para produtos da AJAMBRE hospedados
        em outros endereços. Não temos controle sobre o conteúdo, as práticas e as políticas de
        ambientes que não administramos, e o acesso a eles é de responsabilidade do usuário.
      </p>

      <h2>8. Limitação de responsabilidade</h2>
      <p>
        Na medida permitida pela legislação aplicável, a AJAMBRE não se responsabiliza por danos
        decorrentes do uso ou da impossibilidade de uso deste site, nem por decisões tomadas
        exclusivamente com base no conteúdo institucional aqui publicado. Esta limitação não afasta
        as responsabilidades assumidas em contratos firmados com clientes.
      </p>

      <h2>9. Privacidade</h2>
      <p>
        O tratamento de dados pessoais relacionados a este site está descrito na{" "}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>. Pedidos de exclusão podem
        ser feitos pela página <Link href="/exclusao-de-dados">Exclusão de Dados</Link>.
      </p>

      <h2>10. Alterações</h2>
      <p>
        Estes termos podem ser atualizados a qualquer momento. A versão vigente é sempre a
        publicada nesta página, com a data de última atualização indicada no topo.
      </p>

      <h2>11. Legislação aplicável</h2>
      <p>
        Estes termos são regidos pela legislação brasileira. Eventuais questões serão tratadas
        conforme as regras de competência previstas em lei.
      </p>
    </LegalPage>
  );
}
