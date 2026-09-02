# CLAUDE.md — Regras deste repositório

> Leia este arquivo inteiro antes de qualquer alteração.
> Ele existe para impedir que erros já mapeados se repitam.

---

## 1. Identidade do repositório

**Este repositório é exclusivamente o site institucional da AJAMBRE.**

```text
Domínio:    https://ajambre.com.br
Diretório:  C:\dev\ajambre-site
```

Antes de alterar qualquer arquivo, confirme:

1. o diretório atual;
2. o repositório Git;
3. o remote configurado;
4. a branch atual.

**Se não estiver em `ajambre-site`, pare.**

---

## 2. Fronteiras — os três projetos

Existem três projetos conceitualmente diferentes:

```text
AJAMBRE Site       ajambre.com.br            ← ESTE. O único alterável.
LeadBase CRM       leadbase.ajambre.com.br   ← produto independente
Business Scanner   (URL não confirmada)      ← produto independente
```

### 🚫 Não editar o LeadBase

Nunca alterar, a partir deste repositório: repositório `leadbase-crm`, banco, migrations,
configurações, Auth, RLS, webhooks, secrets, deploy ou integrações (Meta Lead Ads, WhatsApp).

### 🚫 Não editar o Business Scanner / Business Intelligence

Nunca alterar: repositório, banco, APIs, configurações, deploy, autenticação, integrações
ou qualquer código interno. Localização local conhecida: `C:\dev\ajambre-content-intelligence`.

Este site apenas **apresenta e encaminha** para esses produtos.

**Se o terminal estiver aberto no LeadBase, no Business Intelligence, no Business Scanner ou
em qualquer outro projeto: pare sem alterar nada.**

---

## 3. Git, deploy e infraestrutura

- **Não** fazer commit sem autorização
- **Não** fazer push sem autorização
- **Não** fazer deploy sem autorização — inclusive pela interface ou API da Vercel
- **Não** alterar a Vercel sem autorização: projeto, domínio, aliases, integração Git,
  environments ou DNS
- **Não** alterar banco de dados sem autorização
- **Não** criar secrets
- **Não** usar `git config --global` — jamais
- **Não** rodar `git rebase -i`, `git add -i` ou qualquer comando interativo

Se a identidade local do Git estiver ausente ou incorreta, **registre em `TASKS.md`**;
não corrija por conta própria.

---

## 4. Conteúdo — o que nunca inventar

**Não inventar, em nenhuma hipótese:**

- números, métricas, ROI, percentuais de crescimento
- clientes, cases, depoimentos, logotipos de marcas
- endereço, telefone, WhatsApp, redes sociais
- domínios ou subdomínios (especialmente o do Business Scanner)
- funcionalidades de produto não confirmadas
- integrações não confirmadas
- condições comerciais: desconto, parcelamento, setup, fidelidade, prazo contratual

Se um dado não estiver confirmado: **apresente sem o dado** e registre a pendência em
`REVIEW.md` e `TASKS.md`. Nunca use `#` como destino falso de link.

### Valores confirmados — os únicos publicáveis

```text
Gestão de tráfego completa:  R$ 2.500        (sem "/mês", sem periodicidade)
Projetos de IA:              a partir de R$ 3.000
```

Nunca acrescentar periodicidade ao valor de R$ 2.500 sem confirmação explícita.

### Linguagem proibida

Nada de "garantimos resultado", "garantimos vendas", "nunca mais perca leads", "vendas
automáticas", "a IA vende por você", "aumente seu faturamento em X%", "resultado garantido".

**Preferir:** reduzir perda de oportunidades, melhorar acompanhamento, aumentar clareza,
organizar processo, melhorar tempo de resposta, criar estrutura, medir, analisar, otimizar.

Sobre tracking, preferir sempre **"quando aplicável à operação"** a afirmar que todas as
tecnologias são usadas em todos os clientes.

Sobre IA: ela **não** substitui responsabilidade humana. Casos sensíveis, complexos,
negociações e decisões profissionais podem exigir intervenção de pessoas — e o site deve
comunicar isso.

Sobre custos: deixar claro que APIs, tokens, modelos, hospedagem, VPS, infraestrutura e
WhatsApp/API são custos de terceiros suportados pelo cliente. Nunca dar a entender que
existe uso ilimitado de IA incluso. Nunca estimar valores de consumo.

---

## 5. Código

- **Não instalar biblioteca desnecessária.** Antes de instalar, verifique se o projeto já
  tem solução equivalente. Nada de biblioteca só para animação ou só por estética
- **Não alterar a arquitetura de outros produtos**
- Server Components por padrão; `"use client"` apenas onde for realmente necessário
- Não transformar a home inteira em client component por causa de animação
- Animações em CSS ou `IntersectionObserver`; respeitar `prefers-reduced-motion`
- Tokens de design ficam em `src/app/globals.css` e `tailwind.config.ts` — **não** espalhar
  valores arbitrários pelos componentes
- Não apagar arquivos existentes; não rodar `create-next-app` sobre o projeto
- Nunca logar ou commitar: tokens, senhas, App Secret, Page Access Token, `service_role`,
  chaves privadas, cookies de sessão ou qualquer secret
- Nunca copiar credenciais de outros projetos
- `service_role` **jamais** no client; nada de secret com prefixo `NEXT_PUBLIC_`

---

## 6. Ambiente Windows / PowerShell

- **Não** encadear comandos com `&&` — não existe no PowerShell 5.1.
  Use um comando por vez, ou `;` / `if ($?) { ... }`
- Ternário, `??` e `?.` também não existem nesta versão
- Rode comandos individualmente e verifique a saída

---

## 7. Antes de concluir qualquer rodada

```powershell
npm run typecheck
npm run lint
npm run build
git diff --check
git status --short
```

Se um script não existir, **informe** — não crie script só para simular cumprimento.
Se um comando não puder rodar, **diga que não rodou** — nunca presuma o resultado.

Ao revisar o diff, procure especificamente por: secrets, arquivos inesperados, alterações
fora de escopo, mudanças de lockfile, mudanças de config e **qualquer arquivo pertencente
aos outros produtos**.

---

## 8. Estado atual (23/08/2026)

- ⚠️ **Sem repositório Git** neste diretório — `git init` ainda não foi autorizado
- ✅ **Validado**: `npm install` (392 pacotes), `typecheck`, `lint` e `build` passaram.
  11 páginas estáticas, verificadas por HTTP no servidor de produção
- ⚠️ **`C:` perto do limite de disco** — se o build falhar por espaço, ver `README.md`
- ⚠️ **URL do Business Scanner não confirmada** — produto apresentado sem link
- ⚠️ **WhatsApp não confirmado** — todos os CTAs usam `mailto:contato@ajambre.com.br`
- ⚠️ **Referências visuais ainda não fornecidas** — não cristalizar identidade visual
  complexa; a base atual é propositalmente sóbria para ser refinada depois
