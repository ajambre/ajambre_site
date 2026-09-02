# TASKS — Site institucional AJAMBRE

Backlog da construção do site. Marcado `[x]` = feito nesta primeira rodada.
Itens `⛔` dependem de informação que **ainda não foi confirmada** — não avançar
inventando dado.

---

## ⛔ Informações pendentes de confirmação

Bloqueiam tarefas específicas. Nenhuma delas deve ser resolvida com suposição.

- [ ] **URL pública do Business Scanner** — não encontrada em lugar nenhum. Enquanto isso, o
      produto aparece no site **sem link**. Ao confirmar, preencher
      `products.businessScanner.url` em `src/lib/site.ts` (CTA e link do footer aparecem sozinhos)
- [ ] **Número oficial de WhatsApp** — todos os CTAs usam `mailto:contato@ajambre.com.br`
- [ ] **`NEXT_PUBLIC_GTM_ID`** — container do Google Tag Manager. **Único ID de tracking
      do projeto**: GA4, Meta Pixel e Google Ads são configurados dentro do GTM, não como
      scripts separados no código, para não duplicar pageview e conversão
- [ ] **Environment variables da Vercel** — nenhuma configurada
- [ ] **Credenciais do Supabase do site** — projeto existe, mas não está conectado
- [ ] **Referências visuais** — sites externos que servirão de norte para o refino da UI
- [ ] **Periodicidade do valor de R$ 2.500** — publicado sem "/mês", conforme instruído.
      Confirmar antes de acrescentar qualquer periodicidade
- [ ] **Nomenclatura definitiva** — "Business Scanner" (usado no site) vs "Business Intelligence"
- [ ] **Redes sociais oficiais** — ausentes do footer e do JSON-LD por não estarem confirmadas

---

## ✅ Ambiente — espaço em disco (resolvido)

- [x] Diagnosticado: `C:` com **0 byte livre**; `npm install` falhou com `nospc`
- [x] Liberado ~407 MB removendo o diretório `npm-cache`
- [x] Cache do Windows Update limpo em sessão com administrador
- [x] `npm install` concluído — 392 pacotes
- [x] Cache do npm (422 MB) limpo novamente para liberar espaço ao build
- [ ] Remover `D:\npm-cache-tmp` se ainda existir (cache temporário de uma tentativa
      anterior; o guard de caminho do ambiente impediu a remoção automática)
- [ ] ⚠️ `C:` continua perto do limite — monitorar antes de builds futuros

---

## Fundação

- [x] Confirmar diretório `C:\dev\ajambre-site` e ausência de projeto existente
- [x] Confirmar que **não** é o LeadBase nem o Business Scanner
- [x] `package.json` sem dependência supérflua
- [x] TypeScript `strict` + paths `@/*`
- [x] `next.config.mjs` (`reactStrictMode`, `poweredByHeader: false`)
- [x] Tailwind + PostCSS + design tokens em CSS variables
- [x] ESLint (`next/core-web-vitals`)
- [x] `.gitignore` cobrindo `.env.local`, `node_modules`, `.next`, `.vercel`
- [x] `.env.local.example` — **somente nomes**, nenhum valor real
- [x] Sora via `next/font/local` (4 pesos, self-host)
- [x] Layout global, header e footer
- [x] Página 404
- [x] `npm install` — 392 pacotes, exit 0
- [x] `npm run typecheck` — exit 0
- [x] `npm run lint` — sem warning nem erro
- [x] `npm run build` — 11 páginas, todas estáticas
- [x] Verificação HTTP no servidor de produção — 10 rotas em 200, inexistente em 404
- [x] Inicializar repositório Git — autorizado; `git init -b main`
- [x] Identidade **local**: `AJAMBRE` / `ajambre.se@gmail.com` (a global permanece intocada)
- [x] Commit inicial — 56 arquivos, sem secret, sem `node_modules`, sem `.next`
- [ ] ⛔ Conectar ao remote do GitHub já existente — **falta a URL do repositório**
- [ ] Push da branch `main` — requer autorização e o remote configurado
- [ ] Avaliar `.gitattributes` com `* text=auto eol=lf` — o repositório é escrito no Windows
      (Git avisa sobre conversão CRLF) e buildado no Linux pela Vercel. Não é bloqueante,
      mas evita diff ruidoso se outra máquina tiver `core.autocrlf` diferente

## Home

- [x] Hero — "Gerar lead é só o começo" + CTA `Falar com a AJAMBRE`
- [x] Cadeia da operação logo abaixo do hero
- [x] Seção Problema — 6 sintomas de fragmentação
- [x] Seção "ajambrar" — fluxo de 9 etapas (Atrair → Otimizar)
- [x] Seção Soluções — 7 pilares
- [x] Seção Ecossistema — LeadBase, Business Scanner, Agentes de IA
- [x] Seção Arquitetura integrada — fluxo + Business Scanner como camada paralela
- [x] Modelos de contratação — operação integrada vs projetos específicos
- [x] Investimento — R$ 2.500 e a partir de R$ 3.000
- [x] Como trabalhamos — 5 etapas
- [x] Para quem faz sentido
- [x] CTA final com as 9 perguntas de diagnóstico
- [ ] Revisar copy com o time comercial
- [ ] Refinar UI quando as referências visuais chegarem

## Atendimento com IA

- [x] Rota `/solucoes/atendimento-ia`
- [x] Hero — "O lead chegou. Quanto tempo até começar o atendimento?"
- [x] Problemas do atendimento
- [x] Fluxo — contato → follow-up
- [x] Tipos de agente — atendimento, qualificação, SDR, agendamento, follow-up
- [x] Integrações com ressalva de disponibilidade
- [x] Benefícios sem promessa absoluta
- [x] Seção "IA onde faz sentido. Pessoas onde fazem diferença."
- [x] Investimento a partir de R$ 3.000 + custos de terceiros
- [ ] Revisar com o time o limite de atuação de cada agente

## Produtos AJAMBRE

- [x] LeadBase apresentado como produto próprio, não ferramenta de terceiros
- [x] Business Scanner apresentado como camada de inteligência de conteúdo
- [x] Agentes de IA apresentados com encaminhamento para a página dedicada
- [x] Ecossistema completo comunicado na home

## LeadBase

- [x] Link para `https://leadbase.ajambre.com.br` com `target="_blank"` + `rel="noopener noreferrer"`
- [x] Presente no footer
- [ ] Avaliar material de apoio (print, demonstração) — depende de autorização
- [ ] ⛔ **Nunca** editar código, banco ou configuração do LeadBase a partir deste repositório

## Business Scanner

- [x] Apresentado na home, na arquitetura integrada e no footer
- [x] Sem `href` inventado e sem `#` como destino falso
- [ ] ⛔ Confirmar URL pública e preencher `products.businessScanner.url`
- [ ] Consolidar a nomenclatura ("Business Scanner" vs "Business Intelligence")
- [ ] ⛔ **Nunca** editar o repositório do produto a partir deste

## Tracking

- [x] Variável documentada em `.env.local.example` — **só `NEXT_PUBLIC_GTM_ID`**
- [x] Leitura sem efeito colateral em `src/lib/site.ts`
- [x] Nenhum script carregado, nenhum ID inventado
- [ ] ⛔ Obter o ID do container GTM
- [ ] Implementar o GTM no código, condicionado a consentimento — **é o único script de
      tracking que entra no site**
- [ ] Configurar GA4 **como tag dentro do GTM** (não como script no código)
- [ ] Configurar Meta Pixel **como tag dentro do GTM**
- [ ] Configurar conversões do Google Ads **como tag dentro do GTM**
- [ ] Capturar UTM, `gclid` e `fbclid` na chegada e persistir até a conversão
- [ ] `generate_lead` apenas em conversão real, garantido antes de redirect

## Cookie consent / LGPD

- [x] Política de Privacidade
- [x] Termos de Uso
- [x] Exclusão de Dados
- [x] CNPJ no footer
- [x] Links legais no footer
- [ ] **Banner de consentimento** — não implementado de propósito: como nenhum script de
      tracking carrega, não há o que consentir. Implementar **junto** com o tracking, controlando
      tecnicamente o carregamento. Banner que só some da tela é pior do que banner nenhum
- [ ] Consent Mode do Google, se aplicável
- [ ] Revisão jurídica dos três documentos legais

## Supabase

- [x] Nenhum projeto novo criado
- [x] Nenhuma migration ou tabela criada sem necessidade
- [ ] ⛔ Conectar o projeto existente quando houver formulário
- [ ] Processar submissões **server-side** (Route Handler ou Server Action)
- [ ] ⛔ `service_role` **jamais** no client
- [ ] ⛔ **Nunca** tocar no banco do LeadBase ou do Business Scanner

## Formulário e leads

- [ ] Formulário comercial na home
- [ ] Campos: nome, contato, interesse, origem, UTM, `gclid`, `fbclid`, campanha, timestamp
- [ ] Coletar apenas o que tem finalidade
- [ ] Validação client + server
- [ ] Proteção contra spam (honeypot ou equivalente)
- [ ] Página ou estado de agradecimento
- [ ] Disparar `generate_lead` na submissão bem-sucedida
- [ ] Captura de IP, se necessária, **server-side**

## Agentes de IA

- [x] Comunicação responsável — IA não substitui pessoas em casos sensíveis
- [x] Custos de terceiros comunicados (APIs, hospedagem, infraestrutura)
- [ ] Definir o escopo de atuação de cada agente com o time
- [ ] Avaliar caso de uso de IA no próprio site (atendimento inicial)

## SEO

- [x] `metadata` em todas as rotas
- [x] Canonical por rota
- [x] Open Graph + Twitter Card
- [x] `robots.ts`
- [x] `sitemap.ts` com as 5 rotas
- [x] JSON-LD `Organization` só com dado confirmado
- [x] Imagem OG 1200×630
- [x] Favicon a partir do símbolo da marca
- [ ] Verificar no Search Console após o deploy
- [ ] Enviar o sitemap
- [ ] Revisar títulos e descriptions com foco em busca

## Performance

- [x] Server Components por padrão — único client component é o header (menu mobile)
- [x] Fonte local self-hospedada, 4 pesos
- [x] `next/image` no logotipo
- [x] Zero biblioteca de animação ou de ícones
- [ ] Medir PageSpeed mobile após o deploy (meta: acima de 80 — **sem afirmar antes de medir**)
- [ ] Avaliar conversão do logotipo para SVG ou WebP
- [ ] Avaliar renomear `MARTECHIA PRETO.png` (espaço no nome). Hoje existe a cópia
      `ajambre-logo.png` com nome seguro; o original está preservado

## Acessibilidade

- [x] HTML semântico e hierarquia de headings
- [x] Skip link para o conteúdo
- [x] `alt` no logotipo
- [x] Foco visível com `:focus-visible`
- [x] `aria-expanded` / `aria-controls` no menu mobile, com Escape
- [x] Links externos anunciam "abre em nova aba"
- [x] `prefers-reduced-motion` respeitado
- [x] Contraste verificado por cálculo (marca 4,86:1; texto de apoio 6,9:1)
- [ ] Teste com leitor de tela
- [ ] Navegação completa por teclado em dispositivo real

## Responsividade

- [x] Layout fluido com `clamp()` na tipografia
- [x] Grids colapsando em 1 coluna no mobile
- [x] Menu mobile
- [ ] Testar em 320px, 375px, 768px, notebook, desktop e telas grandes
- [ ] Revisar hero, cards, preços, fluxos, footer e páginas legais em cada faixa

## Pré-lançamento

- [ ] `npm run typecheck`, `lint` e `build` sem erro
- [ ] Revisar `git diff` procurando secret, arquivo inesperado e mudança fora de escopo
- [ ] Conferir que nenhum arquivo do LeadBase ou do Business Scanner entrou no diff
- [ ] Revisão de copy pelo time comercial
- [ ] Revisão jurídica das páginas legais
- [ ] Testar todos os links, inclusive o do LeadBase
- [ ] Configurar env vars na Vercel
- [ ] Conferir domínio e certificado
- [ ] Testar OG em WhatsApp, LinkedIn e Facebook

## Pós-lançamento

- [ ] Search Console + envio do sitemap
- [ ] Medir PageSpeed real (mobile e desktop)
- [ ] Ativar tracking com consentimento
- [ ] Acompanhar as primeiras conversões e validar `generate_lead`
- [ ] Coletar prova social **real** (com autorização do cliente) para uma futura seção de cases
- [ ] Refinar a UI com base nas referências visuais
- [ ] Avaliar páginas dedicadas por serviço, se a demanda justificar
