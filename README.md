# AJAMBRE — Site Institucional

Site institucional da **AJAMBRE**, em `https://www.ajambre.com.br`.

> O **www é o domínio canônico**. O apex `ajambre.com.br` responde 308 para ele — é assim
> que a Vercel está configurada, e o código segue essa configuração.

Este repositório contém **apenas o site institucional**. LeadBase e Business Scanner são
produtos independentes, com repositórios próprios — ver [Projetos relacionados](#projetos-relacionados).

---

## Objetivo

Comunicar, em poucos segundos, que a AJAMBRE não vende só tráfego pago: ela conecta
aquisição, tecnologia, atendimento, CRM, dados e inteligência em uma operação só.

O site precisa deixar claro:

1. o que é a AJAMBRE;
2. o que ela resolve;
3. como ela atua;
4. que existe um ecossistema tecnológico próprio por trás;
5. como falar com a empresa.

## Posicionamento

A AJAMBRE atua na interseção entre marketing, mídia paga, tecnologia, dados, tracking, CRM,
automações, inteligência artificial, atendimento, qualificação, inteligência comercial e
inteligência de conteúdo.

O conceito que organiza a comunicação é **"ajambrar" o negócio**: fazer as partes da operação
se encaixarem, em vez de tratá-las como contratos desconectados.

```text
AQUISIÇÃO → SITE/LP → TRACKING → LEAD → ATENDIMENTO → IA → QUALIFICAÇÃO
→ CRM → FOLLOW-UP → CONVERSÃO → DADOS → INTELIGÊNCIA → OTIMIZAÇÃO
```

A mensagem central é **gerar lead é apenas o começo**. O que decide o resultado é o que
acontece depois: tempo de resposta, contexto, acompanhamento e leitura de dados.

### Regras de linguagem

**Nunca** usar: "garantimos resultado", "garantimos vendas", "nunca mais perca leads",
"vendas automáticas", "a IA vende por você", "aumente seu faturamento em X%".

**Preferir:** reduzir perda de oportunidades, melhorar acompanhamento, aumentar clareza,
organizar processo, melhorar tempo de resposta, criar estrutura, medir, analisar, otimizar.

Não inventar clientes, cases, depoimentos, métricas, ROI ou números.

---

## Projetos relacionados

Três projetos **conceitualmente diferentes**, com repositórios separados:

### AJAMBRE Site — este repositório

`https://ajambre.com.br` · `C:\dev\ajambre-site`

Site institucional. **É o único projeto que este repositório pode alterar.**

### LeadBase — produto independente

`https://leadbase.ajambre.com.br`

CRM da AJAMBRE para organização e acompanhamento de leads: gestão de leads, pipeline,
campanhas, workspaces, tracking, integração com Meta Lead Ads, WhatsApp e acompanhamento
da jornada do lead.

Tem repositório, banco, autenticação, RLS, webhooks e deploy **próprios**.
Este site apenas **apresenta e encaminha** para ele.

> 🚫 **Nunca** editar a partir deste repositório: repositório `leadbase-crm`, banco,
> migrations, configurações, Auth, RLS, webhooks, secrets, deploy ou integrações.

### Business Scanner — produto independente

Também identificado como **Business Intelligence**. Ambos os nomes referem-se ao mesmo
produto até a nomenclatura ser consolidada. O site usa **Business Scanner**, o nome
comercial desejado.

Camada de inteligência de conteúdo: visão geral da produção, acompanhamento, leitura de
desempenho, identificação de padrões e apoio ao planejamento.

> ⚠️ **URL pública ainda não confirmada.** Não inventar domínio ou subdomínio.
> Ao confirmar, preencher `products.businessScanner.url` em [`src/lib/site.ts`](src/lib/site.ts) —
> o CTA da home e o link do footer passam a aparecer automaticamente.

> 🚫 **Nunca** editar a partir deste repositório: repositório, banco, APIs, configurações,
> deploy, autenticação, integrações ou código interno.

---

## Stack

| Camada | Escolha |
|---|---|
| Framework | Next.js 14 — **App Router** |
| Linguagem | TypeScript 5.5, `strict: true` |
| UI | React 18 — Server Components por padrão |
| Estilo | Tailwind CSS 3.4 + CSS variables |
| Fonte | Sora, self-hospedada via `next/font/local` |
| Lint | ESLint 8 + `eslint-config-next` |
| Deploy | Vercel |

Sem biblioteca de animação, de ícones ou de componentes. Animações usam CSS e respeitam
`prefers-reduced-motion`. Ícones são SVG inline.

---

## Estrutura

```text
src/
  app/
    layout.tsx                      layout global, metadata, JSON-LD
    page.tsx                        home
    globals.css                     design tokens (CSS variables)
    icon.png                        favicon
    not-found.tsx                   404
    robots.ts
    sitemap.ts
    solucoes/atendimento-ia/page.tsx
    politica-de-privacidade/page.tsx
    termos-de-uso/page.tsx
    exclusao-de-dados/page.tsx
  components/
    layout/                         Header, Footer, Logo, LegalPage
    sections/                       seções da home
    ui/                             Button, Section, SectionHeader
  lib/
    site.ts                         configuração central (dados confirmados)
    fonts.ts                        carregamento da Sora
public/
  fonts/static/                     Sora (8 pesos; 4 carregados)
  images/                           logotipo, símbolo, imagem OG
```

### Rotas

```text
/
/solucoes/atendimento-ia
/politica-de-privacidade
/termos-de-uso
/exclusao-de-dados
```

Novas páginas podem ser adicionadas depois. Nesta fase o site é **predominantemente
one page**: a home é o principal ambiente comercial, e não há uma página por serviço.

---

## Comandos

```powershell
npm install        # instala dependências
npm run dev        # desenvolvimento em http://localhost:3000
npm run build      # build de produção
npm run start      # serve o build localmente
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

> **Ambiente Windows / PowerShell.** Não encadear comandos com `&&` — o operador não existe
> no PowerShell 5.1. Rode um comando por vez, ou use `;` / `if ($?) { ... }`.

### Antes de qualquer commit

```powershell
npm run typecheck
npm run lint
npm run build
git diff --check
git status --short
```

### Estado das validações

Todas passaram:

| Comando | Resultado |
|---|---|
| `npm install` | ✅ 392 pacotes |
| `npm run typecheck` | ✅ exit 0 |
| `npm run lint` | ✅ sem warning nem erro |
| `npm run build` | ✅ 11 páginas, todas estáticas, 96,2 kB First Load JS |

### ⚠️ Atenção: espaço em disco

A unidade `C:` vive perto do limite (100 GB, ~99 GB ocupados). O `npm install` e o `build`
já falharam por falta de espaço uma vez. Se voltar a acontecer:

```powershell
npm cache clean --force
```

E, num PowerShell **como Administrador**, o cache do Windows Update:

```powershell
Stop-Service wuauserv -Force
Remove-Item "C:\Windows\SoftwareDistribution\Download\*" -Recurse -Force -ErrorAction SilentlyContinue
Start-Service wuauserv
```

---

## Environment variables

Copie `.env.local.example` para `.env.local` e preencha. **Nunca** faça commit de `.env.local`,
e **nunca** escreva valores reais no arquivo de exemplo.

| Variável | Estado |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | opcional (o código usa `https://www.ajambre.com.br`) |
| `NEXT_PUBLIC_GTM_ID` | ⏳ pendente — **único ID de tracking do projeto** |
| `NEXT_PUBLIC_WHATSAPP` | ⏳ pendente — número oficial não confirmado |
| `NEXT_PUBLIC_SUPABASE_URL` | ⏳ pendente |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ⏳ pendente |
| `SUPABASE_SERVICE_ROLE_KEY` | ⏳ pendente — **somente server-side** |

Regra absoluta: **`service_role` nunca no client.** Nada de secret com prefixo `NEXT_PUBLIC_`.

---

## Design system

Os tokens vivem em [`src/app/globals.css`](src/app/globals.css) como CSS variables e são
apenas referenciados em [`tailwind.config.ts`](tailwind.config.ts). Para ajustar a identidade
visual, mexa **nos tokens** — não espalhe valores arbitrários pelos componentes.

As cores foram **extraídas do próprio logotipo** por amostragem de pixels:

| Token | Valor | Contraste |
|---|---|---|
| `--color-brand` | `#D13A0A` | 4,86:1 sobre branco → AA |
| `--color-ink` | `#111111` | — |
| `--color-muted` | `#5A5A5A` | 6,9:1 sobre branco → AA |
| `--color-carbon` | `#14110F` | faixas escuras |

Direção visual: clean, moderna, editorial, orientada a sistemas e fluxos. Muito espaço em
branco, tipografia forte, hierarquia clara.

**Evitar:** visual SaaS roxo genérico, excesso de gradiente, neon, robôs, cérebros
artificiais, circuitos, fotos corporativas genéricas, glassmorphism e efeitos que
prejudiquem a leitura.

> Referências visuais externas ainda serão fornecidas. A base atual é propositalmente
> sóbria para ser refinada depois sem reescrever componentes.

---

## SEO

- `metadata` por rota: title, description, canonical, Open Graph e Twitter Card
- `metadataBase`: `https://www.ajambre.com.br` — o canonical precisa apontar para o destino
  final, não para o apex, que redireciona
- [`robots.ts`](src/app/robots.ts) e [`sitemap.ts`](src/app/sitemap.ts) com as 5 rotas
- Imagem Open Graph: `public/images/og-ajambre.png` (1200×630)
- JSON-LD `Organization` no layout — **somente dados confirmados**: nome, URL, logo, e-mail,
  CNPJ (`taxID`) e slogan

Endereço, telefone, redes sociais, avaliações, fundadores e número de funcionários foram
**deliberadamente omitidos** por não estarem confirmados.

---

## Tracking

Nenhum script de tracking está instalado e **nenhum ID foi inventado**. O que existe é apenas
a preparação: o nome da variável em `.env.local.example`, lido por `tracking` em
[`src/lib/site.ts`](src/lib/site.ts) sem qualquer efeito colateral.

**Só existe um ID no projeto: o do GTM.** GA4, Meta Pixel e Google Ads são configurados como
tags **dentro do container**, não como scripts separados no código. O motivo é prático:
carregar o GA4 por fora e também via GTM duplica pageview e conversão, e espalha o controle
de consentimento por vários pontos do código. Com um container só, existe um único lugar
para ligar, desligar e auditar.

Quando o tracking for ativado:

- o carregamento **deve** ser condicionado ao consentimento — nada de banner que apenas some
  da tela enquanto os scripts continuam rodando;
- `generate_lead` só dispara em **conversão real**, nunca no clique de um botão qualquer;
- o evento precisa ser garantido **antes** de qualquer redirect;
- captura de IP, se necessária, é **server-side** — nunca via serviço externo no client.

---

## Supabase

Já existe um projeto Supabase relacionado ao site. **Não criar outro.** Não criar migration
ou tabela sem necessidade real.

Quando houver formulário comercial, processar **server-side** (Route Handler ou Server Action)
e considerar desde o início: nome, contato, interesse, origem, UTM, `gclid`, `fbclid`,
campanha e timestamp — coletando apenas o que tiver finalidade.

---

## Git

O repositório **ainda não foi inicializado** neste diretório. A identidade global da máquina
foi apenas lida, nunca alterada.

- Nunca usar `git config --global`
- Nunca fazer commit, push ou deploy sem autorização explícita
- Antes de alterações relevantes, revisar `.gitignore`

O `.gitignore` cobre `.env.local`, `.env*.local`, `node_modules`, `.next`, `.vercel` e
artefatos temporários. **Os assets de marca em `public/` são versionados** — não ignorar.

---

## Segurança

Nunca registrar, commitar ou logar: tokens, senhas, App Secret, Page Access Token,
`service_role`, chaves de API privadas, cookies de sessão ou qualquer secret.
Nunca copiar credenciais de outros projetos.

---

## Vercel

Existe projeto Vercel com domínio conectado. **Não alterar** projeto, domínio, aliases,
integração Git, environments, deploy ou DNS sem autorização. As environment variables ainda
precisam ser tratadas.

---

## Documentos

| Arquivo | Conteúdo |
|---|---|
| `README.md` | este arquivo |
| `REVIEW.md` | diagnóstico do estado encontrado, riscos e pendências |
| `TASKS.md` | backlog com checkboxes |
| `CLAUDE.md` | regras obrigatórias para o Claude Code |
| `AGENTS.md` | regras para qualquer agente de IA |
