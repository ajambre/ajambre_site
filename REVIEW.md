# REVIEW — Diagnóstico do estado encontrado

> Diagnóstico da **primeira rodada** de construção do site institucional da AJAMBRE.
> Data: **23/08/2026** · Diretório: `C:\dev\ajambre-site`

---

## 1. Resumo executivo

O diretório `C:\dev\ajambre-site` existia, mas **não continha um projeto Next.js**.
Havia apenas `public/`, com os assets de marca (logotipo e fonte).

Não foi encontrado: `package.json`, lockfile, `app/`, `pages/`, `src/`, `components/`, `lib/`,
`styles/`, configuração de Tailwind/TypeScript/ESLint/Next, `.gitignore`, `.env.example`
nem repositório Git.

A base técnica foi criada do zero **sem destruir nada** e **sem executar `create-next-app`** —
que exigiria mexer em `public/`. Todos os arquivos de configuração foram escritos manualmente.

> ⚠️ **Bloqueio ambiental:** a unidade `C:` estava com **0 byte livre**. Isso impediu
> `npm install`, `typecheck`, `lint` e `build`. Ver a seção 9.

---

## 2. Estado encontrado (antes da rodada)

```text
C:\dev\ajambre-site\
└── public\
    ├── fonts\static\   Sora-{Thin,ExtraLight,Light,Regular,Medium,SemiBold,Bold,ExtraBold}.ttf
    └── images\
        ├── MARTECHIA PRETO.png         logotipo horizontal + assinatura
        ├── simbolo-ajambre.png         símbolo
        └── simbolo-ajambre-perfil.png  símbolo (perfil)
```

### 2.1 Framework e versões

| Item | Encontrado | Definido nesta rodada |
|---|---|---|
| Framework | — (inexistente) | Next.js `^14.2.35` — App Router |
| React | — | `18.3.1` |
| TypeScript | — | `5.5.3`, `strict: true` |
| Tailwind | — | `3.4.6` |
| ESLint | — | `8.57.0` + `eslint-config-next` |
| Estrutura | — | `src/app`, `src/components`, `src/lib` |
| Node local | `v24.15.0` | — |
| npm local | `11.12.1` | — |

A stack **espelha a convenção já usada em outro projeto AJAMBRE**
(`ajambre-content-intelligence`: Next 14 + React 18 + Tailwind 3 + TS 5.5 com `src/`),
para reduzir divergência entre repositórios da empresa. Nenhuma dependência
além do essencial foi adicionada — sem biblioteca de animação, de ícones ou de UI.

### 2.2 Assets

**Fonte — Sora.** 8 pesos estáticos em `public/fonts/static/`, carregados via
`next/font/local` (self-host, sem Google Fonts, sem requisição externa).
Apenas **400, 500, 600 e 700** são carregados: cada TTF pesa ~57 KB e carregar
os 8 seria desperdício de banda.

**Logo.** Os três arquivos originais foram **preservados sem qualquer alteração**:

| Arquivo | Dimensão | Uso |
|---|---|---|
| `MARTECHIA PRETO.png` | 671×236 | original — mantido intacto |
| `ajambre-logo.png` | 671×236 | **cópia byte a byte** criada nesta rodada |
| `simbolo-ajambre-perfil.png` | 419×419 | origem do favicon |
| `simbolo-ajambre.png` | — | não utilizado ainda |

> Por que a cópia: o nome `MARTECHIA PRETO.png` tem **espaço e caixa alta**. Em URL isso
> exige encoding, e o otimizador de imagens do Next re-codifica o parâmetro `url`, o que pode
> quebrar o caminho em produção. Em vez de renomear o original (não autorizado), foi criada
> uma cópia idêntica com nome seguro. **O original continua no repositório, intocado.**

O logotipo traz a assinatura oficial da marca: **"Solução MarTechIA para Negócios"** —
usada como `slogan` no JSON-LD e no `alt` do logotipo.

**Cores — extraídas do próprio arquivo, por amostragem de pixels. Nada foi escolhido "no olho":**

| Token | Hex | Origem |
|---|---|---|
| Laranja AJAMBRE | `#D13A0A` | cor dominante do logotipo (6.302 amostras) |
| Cinza do símbolo | `#D9D9D9` | seta do símbolo |
| Preto | `#000000` | contorno do logotipo |

Contraste de `#D13A0A` sobre branco = **4,86:1** → passa WCAG AA para texto normal,
tanto como cor de texto quanto como fundo com texto branco. O cinza de apoio
(`#5A5A5A`) tem **6,9:1** sobre branco.

**Assets gerados nesta rodada**, ambos derivados apenas dos arquivos existentes:

- `src/app/icon.png` — favicon 256×256, redimensionado de `simbolo-ajambre-perfil.png`;
- `public/images/og-ajambre.png` — Open Graph 1200×630 (logotipo + uma linha em Sora + barra da marca).

### 2.3 Git

**Não há repositório Git inicializado** neste diretório.

```text
git rev-parse --is-inside-work-tree  →  fatal: not a git repository
git remote -v                        →  fatal: not a git repository
git branch --show-current            →  fatal: not a git repository
git status --short                   →  fatal: not a git repository
git config --local user.name/email   →  indisponível (sem repositório)
```

Identidade **global** encontrada — **apenas lida, jamais alterada**:

```text
user.name  = rafad
user.email = rafadeosantos@gmail.com
```

> `git init` **não foi executado**. Inicializar o repositório e conectá-lo ao remote
> depende do repositório GitHub que já existe para o projeto — é decisão humana.
>
> Consequência direta: `git diff --check` e `git status --short` **não puderam rodar**.
> Isso está reportado como indisponível, sem simulação de resultado.

### 2.4 Vercel

Informado que já existem projeto e domínio conectados. **Nenhum vínculo local encontrado**
(`.vercel/` ausente). Nada foi criado, alterado ou consultado por CLI/API.

### 2.5 Supabase

Informado que existe projeto relacionado ao site. **Nenhum client, credencial, migration ou
tabela foi criada** — não há funcionalidade que justifique banco nesta fase (o site é
institucional e estático). Apenas os **nomes** das variáveis constam em `.env.local.example`.

---

## 3. Conteúdo e posicionamento

Todo o texto foi escrito nesta rodada, orientado por:

- posicionamento amplo — **não** "agência de tráfego pago";
- conceito de **ajambrar a operação**: conectar aquisição → atendimento → comercial → dados;
- mensagem central: **gerar lead é só o começo**;
- ausência total de promessa absoluta (sem "garantimos", "nunca mais perca leads",
  "vendas automáticas", "aumente X%").

Valores publicados — **somente os confirmados**:

| Valor | Onde aparece |
|---|---|
| **R$ 2.500** — Gestão de tráfego completa | Home, seção Investimento |
| **A partir de R$ 3.000** — Projetos de IA | Home (Investimento) e `/solucoes/atendimento-ia` |

Sem periodicidade, sem "/mês", sem desconto, sem parcelamento, sem setup, sem fidelidade.

---

## 4. SEO

| Item | Estado |
|---|---|
| `metadata` por rota | ✅ title, description, canonical, OG, Twitter |
| `metadataBase` | ✅ `https://www.ajambre.com.br` (o apex redireciona 308 para o www) |
| `robots.ts` | ✅ |
| `sitemap.ts` | ✅ 5 rotas, sem espaço acidental |
| Imagem Open Graph | ✅ `og-ajambre.png` 1200×630 |
| JSON-LD `Organization` | ✅ apenas dado confirmado |
| Endereço, telefone, redes, avaliações, fundadores | ❌ **omitidos de propósito** — não confirmados |

---

## 5. Tracking

**Nenhum script foi instalado. Nenhum ID foi inventado.**

Preparado apenas:

- nome em `.env.local.example`: `NEXT_PUBLIC_GTM_ID` — **único ID de tracking**. GA4,
  Meta Pixel e Google Ads entram como tags dentro do GTM, não como scripts no código:
  carregar cada um por fora duplicaria pageview e conversão e espalharia o controle de
  consentimento por vários pontos;
- leitura desses nomes em `src/lib/site.ts` (`tracking`), sem efeito colateral;
- documentação de que o carregamento deve ser condicionado a consentimento.

**Banner de cookies: deliberadamente não implementado.** Um banner que apenas some da tela
enquanto os scripts continuam rodando é pior do que não ter banner. Como ainda não há
script algum, não há o que consentir. Registrado em `TASKS.md`.

**`generate_lead`: não disparado.** Não existe formulário nem conversão real nesta fase, e
nenhum CTA dispara evento ao clique. Todos os CTAs são `mailto:contato@ajambre.com.br`.

---

## 6. Riscos e lacunas

| # | Item | Risco | Situação |
|---|---|---|---|
| 1 | **URL do Business Scanner não confirmada** | Alto | Produto apresentado, **sem link**. Nada inventado. Ver 6.1 |
| 2 | **`C:` sem espaço em disco** | Alto | Bloqueou install/build. Ver seção 9 |
| 3 | WhatsApp oficial não confirmado | Médio | Todos os CTAs usam `mailto:` |
| 4 | Repositório Git inexistente | Médio | Não inicializado — requer autorização |
| 5 | Env vars da Vercel não configuradas | Médio | Fora do escopo desta rodada |
| 6 | IDs de GTM/GA4/Pixel/Ads ausentes | Médio | Nada carregado, nada inventado |
| 7 | Consentimento de cookies pendente | Médio | Sem scripts, sem banner |
| 8 | Referências visuais ainda não fornecidas | Baixo | Design sóbrio e tokenizado, pronto para refino |
| 9 | Sem prova social | Baixo | **Nenhum** case, número ou depoimento inventado |
| 10 | Nome de arquivo do logo com espaço | Baixo | Original mantido; cópia segura criada |
| 11 | "Business Scanner" vs "Business Intelligence" | Baixo | Site usa **Business Scanner** (nome comercial desejado) |

### 6.1 URL do Business Scanner — pendência formal

Foi feita busca **estritamente somente-leitura** no projeto irmão
`C:\dev\ajambre-content-intelligence` ("ferramenta interna da Ajambre para monitorar
performance de conteúdo no Instagram de clientes"). **Nenhuma URL pública** foi encontrada
(`grep` por `https://*ajambre*` em `.md`, `.json`, `.ts`, `.tsx`, `.env*` → zero resultados;
`.vercel/project.json` inexistente).

Portanto, no site:

- o Business Scanner **é apresentado** — home (ecossistema), arquitetura integrada e footer;
- o card exibe: *"Apresentamos o Business Scanner na conversa comercial, aplicado ao seu contexto."*;
- **nenhum `href` foi criado** e **nenhum `#` foi usado como destino falso**;
- no footer ele aparece como item de texto, não como link.

**Para resolver:** preencher `products.businessScanner.url` em `src/lib/site.ts`.
O CTA e o link do footer passam a aparecer sozinhos — nenhuma outra mudança é necessária.

---

## 7. Não tocar

Os projetos abaixo pertencem ao ecossistema comercial da AJAMBRE, têm **repositório, banco e
deploy próprios**, e **não foram tocados**. O site institucional apenas os **apresenta e encaminha**.

### 🚫 LeadBase CRM — `https://leadbase.ajambre.com.br`

Nunca editar: repositório `leadbase-crm`, banco, migrations, schemas, RLS, Auth, webhooks,
secrets, integrações (Meta Lead Ads / WhatsApp), configurações ou deploy.

**Status desta rodada: zero contato.** Nenhum arquivo lido, listado, alterado ou criado.

### 🚫 Business Scanner / Business Intelligence

Ambos os nomes referem-se ao **mesmo produto**, até a nomenclatura ser consolidada.
Localizado em `C:\dev\ajambre-content-intelligence`.

Nunca editar: repositório, banco, APIs, autenticação, integrações, configurações, deploy
ou qualquer código interno.

**Status desta rodada: inspeção somente-leitura**, com um único objetivo — verificar se havia
URL pública confirmada. Comandos executados: `ls`, `cat package.json`, `cat next.config.mjs`,
`grep`. **Nenhuma escrita. Nenhum arquivo criado, alterado ou removido. Nenhum `.next` ou
`node_modules` desse projeto foi apagado**, inclusive durante a liberação de espaço em disco.

### 🚫 Vercel / DNS / Supabase

Não alterar projeto, domínio, aliases, integração Git, environments, deploy ou DNS.
Não criar projeto Supabase, migration ou tabela.

**Status desta rodada: nenhuma alteração.**

---

## 8. O que foi entregue

- Base Next.js 14 (App Router) + TypeScript strict + Tailwind + ESLint, sem dependência supérflua
- Design tokens em CSS variables + Tailwind — refino visual futuro acontece em um arquivo só
- Layout global: header com menu mobile acessível, footer com CNPJ e links legais
- Home institucional com 10 seções
- Página `/solucoes/atendimento-ia`
- 3 páginas legais + página 404
- `robots.ts`, `sitemap.ts`, metadata, Open Graph, JSON-LD `Organization`
- Favicon e imagem OG gerados a partir dos assets existentes
- 5 documentos: `README`, `REVIEW`, `TASKS`, `CLAUDE`, `AGENTS`

**Sem commit. Sem push. Sem deploy. Sem secret. Sem número inventado.**

---

## 9. Bloqueio: espaço em disco

A unidade `C:` (100 GB) estava com **0 byte livre** no início da rodada. Sintomas:

```text
npm install   →  npm error nospc  (insufficient space)
gravação de 1 MB de teste em C:  →  "Espaço insuficiente no disco"
```

### O que foi liberado — com autorização explícita

| Ação | Espaço | Observação |
|---|---|---|
| Remoção do diretório `npm-cache` | ~407 MB | Cache puro; o npm o recria sozinho |

`npm cache clean --force` **falhou** por não ter espaço nem para gravar o próprio log — o
diretório foi removido diretamente.

### O que não foi possível

- **Cache do Windows Update (~2,4 GB):** autorizado, mas exige privilégio de administrador
  (`Admin: False`, 19 falhas de acesso). Ver o comando no `README`.
- **`.next` de outros projetos (838 MB):** *não autorizado* — nenhum projeto foi tocado.

### Resolução

O cache do Windows Update foi limpo em sessão com privilégio de administrador, liberando
espaço suficiente. Depois disso o `npm install` concluiu (392 pacotes) e todas as validações
que dependiam dele rodaram.

Durante o processo, o cache do npm voltou a ocupar 422 MB e foi limpo de novo
(`npm cache clean --force`) para liberar espaço ao build. O npm o recria sozinho quando
precisar.

### Validações — resultado real

| Validação | Resultado |
|---|---|
| `npm install` | ✅ **392 pacotes**, exit 0 |
| `npm run typecheck` | ✅ **exit 0** — `tsc --noEmit`, sem erro |
| `npm run lint` | ✅ **exit 0** — "No ESLint warnings or errors" |
| `npm run build` | ✅ **exit 0** — 11 páginas, todas estáticas |
| `npm run start` + verificação HTTP | ✅ 10 rotas em 200, rota inexistente em 404 |
| `git diff --check` | ⏸️ **não executado** — ainda não há repositório Git |
| `git status --short` | ⏸️ **não executado** — ainda não há repositório Git |

Build de produção:

```text
Route (app)                        Size      First Load JS
┌ ○ /                              188 B     96.2 kB
├ ○ /_not-found                    138 B     87.5 kB
├ ○ /exclusao-de-dados             188 B     96.2 kB
├ ○ /icon.png                      0 B       0 B
├ ○ /politica-de-privacidade       188 B     96.2 kB
├ ○ /robots.txt                    0 B       0 B
├ ○ /sitemap.xml                   0 B       0 B
├ ○ /solucoes/atendimento-ia       188 B     96.2 kB
└ ○ /termos-de-uso                 188 B     96.2 kB
+ First Load JS shared by all      87.3 kB
○  (Static)  prerendered as static content
```

Verificado no servidor de produção real, não só no build: `robots.txt`, `sitemap.xml` com as
5 rotas, JSON-LD `Organization`, canonical, Open Graph completo, favicon 256×256, logotipo
servido pelo otimizador de imagens do Next (`/_next/image` → 200, 17,9 KB), CSS de 20,5 KB
com os tokens da marca e `prefers-reduced-motion`. Nenhum `href="#"` ou `href=""` no HTML
final, e o Business Scanner aparece **sem link**, como esperado.

**Nenhum resultado foi simulado.** O código agora está compilado e verificado.
