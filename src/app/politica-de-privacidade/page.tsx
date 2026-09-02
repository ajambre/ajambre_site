import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a AJAMBRE trata dados de contato, formulários, atendimento, CRM, campanhas, cookies e identificadores de navegação.",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage
      titulo="Política de Privacidade"
      resumo="Esta política explica quais dados a AJAMBRE pode coletar, por que os coleta, com quem eles podem ser compartilhados para viabilizar a operação e como você pode falar conosco a respeito."
      atualizadoEm="23 de agosto de 2026"
    >
      <h2>1. Quem é o responsável pelo tratamento</h2>
      <p>
        Esta política se aplica ao site <strong>{siteConfig.url}</strong> e às atividades de
        atendimento, marketing e prestação de serviços conduzidas pela <strong>AJAMBRE</strong>,
        inscrita no CNPJ <strong>{siteConfig.cnpj}</strong>.
      </p>
      <p>
        Para qualquer assunto relacionado a dados pessoais, o canal de contato é{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>2. Quais dados podem ser tratados</h2>

      <h3>2.1 Dados fornecidos por você</h3>
      <p>
        São os dados que você nos envia espontaneamente, ao entrar em contato ou ao contratar
        nossos serviços. Podem incluir:
      </p>
      <ul>
        <li>nome;</li>
        <li>e-mail;</li>
        <li>telefone ou WhatsApp;</li>
        <li>empresa, cargo ou área de atuação;</li>
        <li>informações sobre a necessidade, o projeto ou a operação que você descreve;</li>
        <li>o conteúdo das mensagens trocadas durante o atendimento.</li>
      </ul>

      <h3>2.2 Dados de navegação e mensuração</h3>
      <p>
        Quando aplicável à operação e conforme as ferramentas ativas no momento, podem ser
        tratados dados relacionados à sua navegação e à origem do seu contato:
      </p>
      <ul>
        <li>cookies e tecnologias semelhantes;</li>
        <li>pixels e tags de mensuração;</li>
        <li>ferramentas de analytics;</li>
        <li>parâmetros de campanha (UTMs) e identificadores de clique;</li>
        <li>identificadores de dispositivo ou de navegador;</li>
        <li>páginas acessadas, origem do acesso e eventos de interação;</li>
        <li>endereço IP e dados técnicos de conexão.</li>
      </ul>
      <p>
        Nem toda tecnologia listada está em uso permanentemente ou para todos os visitantes. O uso
        depende da configuração vigente do site e das campanhas em andamento.
      </p>

      <h3>2.3 Dados tratados na prestação de serviços</h3>
      <p>
        Na execução de contratos, a AJAMBRE pode tratar dados no contexto de campanhas,
        formulários, atendimento, CRM e automações — inclusive dados de leads gerados para
        clientes. Nesses casos, a AJAMBRE atua conforme as instruções e a finalidade definidas
        com o cliente contratante.
      </p>

      <h2>3. Para que os dados são usados</h2>
      <ul>
        <li>responder solicitações e mensagens enviadas por você;</li>
        <li>realizar atendimento comercial e dar seguimento a conversas iniciadas;</li>
        <li>organizar contatos e oportunidades em nossos sistemas de CRM;</li>
        <li>executar e administrar os serviços contratados;</li>
        <li>mensurar o desempenho de campanhas e entender a origem dos contatos;</li>
        <li>analisar e melhorar a operação, o site e os serviços prestados;</li>
        <li>cumprir obrigações legais e regulatórias aplicáveis;</li>
        <li>preservar a segurança das operações e prevenir fraudes e abusos;</li>
        <li>exercer direitos em processos administrativos, judiciais ou arbitrais.</li>
      </ul>

      <h2>4. Compartilhamento com terceiros</h2>
      <p>
        A AJAMBRE não vende dados pessoais. O compartilhamento acontece quando é necessário para
        que a operação funcione, com fornecedores e parceiros que atuam em nosso nome, tais como
        categorias de:
      </p>
      <ul>
        <li>hospedagem e infraestrutura;</li>
        <li>CRM e organização comercial;</li>
        <li>analytics e mensuração;</li>
        <li>plataformas de publicidade;</li>
        <li>automação e comunicação;</li>
        <li>atendimento e mensageria;</li>
        <li>serviços de inteligência artificial utilizados na arquitetura contratada.</li>
      </ul>
      <p>
        Essas categorias descrevem o tipo de fornecedor envolvido. Ferramentas específicas variam
        conforme o projeto e a configuração vigente, e por isso não são declaradas nominalmente
        aqui. O compartilhamento também pode ocorrer para cumprimento de obrigação legal ou
        atendimento a solicitação de autoridade competente.
      </p>

      <h2>5. Cookies e tecnologias de rastreamento</h2>
      <p>
        Cookies são pequenos arquivos gravados no seu navegador. Eles podem ser necessários ao
        funcionamento do site ou utilizados para medir audiência e desempenho de campanhas.
      </p>
      <p>
        Você pode gerenciar ou bloquear cookies nas configurações do seu navegador. Bloqueios
        podem afetar partes da experiência de navegação. Quando ferramentas de analytics e
        publicidade estiverem ativas neste site, o carregamento delas será condicionado ao
        consentimento, na forma indicada no próprio site.
      </p>

      <h2>6. Por quanto tempo os dados são mantidos</h2>
      <p>
        Os dados são mantidos pelo tempo necessário às finalidades descritas nesta política. Após
        esse período, podem ser eliminados ou anonimizados — exceto quando a manutenção for
        necessária para cumprimento de obrigação legal ou regulatória, para exercício regular de
        direitos ou por motivos legítimos de segurança.
      </p>

      <h2>7. Seus direitos</h2>
      <p>
        A legislação brasileira de proteção de dados assegura a você, entre outros, o direito de
        solicitar:
      </p>
      <ul>
        <li>confirmação da existência de tratamento;</li>
        <li>acesso aos dados;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
        <li>portabilidade, nos termos da regulamentação aplicável;</li>
        <li>informação sobre compartilhamento;</li>
        <li>revogação do consentimento, quando o tratamento se basear nele.</li>
      </ul>
      <p>
        As solicitações podem ser enviadas para{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Podemos precisar de
        informações adicionais para confirmar a sua identidade antes de atender ao pedido. Para
        pedidos de exclusão, consulte também a página{" "}
        <Link href="/exclusao-de-dados">Exclusão de Dados</Link>.
      </p>

      <h2>8. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados que tratamos,
        considerando a natureza da informação e os riscos envolvidos. Nenhum sistema é
        completamente imune a incidentes, e por isso não é possível garantir segurança absoluta.
      </p>

      <h2>9. Sites e serviços de terceiros</h2>
      <p>
        Este site pode conter links para ambientes de terceiros, inclusive para produtos da própria
        AJAMBRE hospedados em outros endereços. O tratamento de dados realizado nesses ambientes é
        regido pelas políticas correspondentes.
      </p>

      <h2>10. Atualizações desta política</h2>
      <p>
        Esta política pode ser atualizada a qualquer momento, para refletir mudanças nos serviços,
        nas ferramentas utilizadas ou na legislação aplicável. A data de última atualização é
        sempre indicada no topo desta página. Recomendamos a consulta periódica.
      </p>
    </LegalPage>
  );
}
