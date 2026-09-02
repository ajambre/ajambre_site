# AGENTS.md — Regras para agentes de IA neste repositório

Vale para qualquer agente ou assistente que venha a trabalhar aqui.
As regras de negócio e as proibições completas estão em [`CLAUDE.md`](CLAUDE.md) — este
arquivo trata de **como trabalhar** no código.

---

## 1. Fronteiras dos projetos — leia primeiro

```text
✅ AJAMBRE Site       C:\dev\ajambre-site        ← único alterável
🚫 LeadBase CRM       leadbase.ajambre.com.br    ← produto independente
🚫 Business Scanner   C:\dev\ajambre-content-intelligence
```

Antes da primeira escrita, confirme diretório, repositório, remote e branch.
Se não for `ajambre-site`, **pare**.

Os outros dois produtos só podem ser **apresentados e linkados**. Nunca editar código,
banco, migrations, Auth, RLS, webhooks, secrets, deploy ou integrações deles — nem mesmo
"só para consultar e ajustar". Leitura estritamente somente-leitura é aceitável apenas para
confirmar um dado público; qualquer escrita é proibida.

---

## 2. Segurança

- Nunca criar, ler para reproduzir, logar ou commitar secrets: tokens, senhas, App Secret,
  Page Access Token, `service_role`, chaves de API privadas, cookies de sessão
- Nunca copiar credenciais de outro projeto
- `service_role` **jamais** no client; nada sensível com prefixo `NEXT_PUBLIC_`
- Em `.env.local.example`, apenas **nomes** de variáveis — nunca valores
- Revisar `.gitignore` antes de alterações relevantes: `.env.local`, `.env*.local`,
  `node_modules`, `.next`, `.vercel` precisam continuar ignorados
- Assets de marca em `public/` **são versionados** — não ignorar

---

## 3. Arquitetura

```text
src/app/          rotas (App Router), metadata, robots, sitemap
src/components/
  layout/         Header, Footer, Logo, LegalPage
  sections/       seções de página
  ui/             primitivas reutilizáveis (Button, Section, SectionHeader)
src/lib/          site.ts (config central), fonts.ts
public/           fontes e imagens da marca
```

- **Server Components por padrão.** `"use client"` só quando houver estado, efeito ou
  evento de navegador. Hoje o único client component é o `Header`, por causa do menu mobile
- Dados confirmados ficam centralizados em `src/lib/site.ts`. Não espalhe e-mail, CNPJ,
  URL de produto ou preço pelos componentes — importe de lá
- Informação não confirmada é modelada como `null` e o componente trata esse caso
  (ver `products.businessScanner.url`)

---

## 4. Convenções

- TypeScript `strict`. Sem `any`, sem `@ts-ignore`
- Imports internos via alias `@/` — nada de `../../../`
- Componentes em `PascalCase`; arquivos de componente em `PascalCase.tsx`
- Conteúdo do site em **português do Brasil**, com acentuação correta
- Comentários explicam **por quê**, não o quê — especialmente decisões de dado não confirmado
- Seguir o estilo do código vizinho: mesma densidade de comentário, mesma nomenclatura

---

## 5. Componentização

- Antes de criar componente novo, verifique se `ui/` já resolve
- Seção nova: use `Section` + `SectionHeader`, não recrie a estrutura
- CTA: use `ButtonLink`. Ele já trata link externo (`target="_blank"` + `rel="noopener
  noreferrer"` + aviso para leitor de tela) e `mailto:` (sem passar pelo router)
- Não crie dezenas de componentes ornamentais. A base precisa continuar fácil de refinar

---

## 6. Design system

- Tokens em `src/app/globals.css` (CSS variables), referenciados em `tailwind.config.ts`
- **Ajuste os tokens**, não valores soltos nos componentes
- As cores vieram do logotipo por amostragem de pixels — `#D13A0A` é a cor da marca, não
  uma aproximação. Não trocar por "um laranja parecido"
- Não redesenhar, modificar proporções, recriar ou substituir o logotipo
- Direção: clean, moderna, editorial, orientada a sistemas e fluxos
- Evitar: SaaS roxo genérico, excesso de gradiente, neon, robôs, cérebros artificiais,
  circuitos, fotos corporativas genéricas, glassmorphism
- **Referências visuais ainda serão fornecidas.** Não cristalizar identidade complexa agora

---

## 7. Responsividade

Verificar sempre em: **320px, 375px, 768px, notebook, desktop e telas grandes**.
Revisar menu, hero, cards, preços, fluxos, footer e páginas legais.

Tipografia usa `clamp()` — evite adicionar breakpoint onde o `clamp` já resolve.

---

## 8. Acessibilidade

- HTML semântico e hierarquia de headings sem pular nível
- `alt` descritivo em imagem com conteúdo; `aria-hidden` em elemento decorativo
- Foco visível — não remover outline sem substituto
- Navegação por teclado funcional; menu mobile fecha com Escape
- `aria-*` só quando necessário — HTML nativo primeiro
- Contraste mínimo AA. Verifique por cálculo, não por impressão visual
- `prefers-reduced-motion` sempre respeitado

---

## 9. SEO

- Toda rota nova precisa de `metadata` com title, description e canonical
- Toda rota nova entra em `src/app/sitemap.ts`
- JSON-LD apenas com dado confirmado — nunca preencher endereço, telefone, avaliação,
  fundador ou rede social "para ficar completo"
- Gerar caminho de sitemap programaticamente sem espaço acidental

---

## 10. Tracking

- Nenhum script de tracking está ativo e nenhum ID foi definido
- **Não inventar ID.** Não adicionar GTM sem o valor real
- **Só o GTM entra no código.** GA4, Meta Pixel e Google Ads são configurados como tags
  dentro do container — nunca como script separado no site. Adicionar qualquer um deles
  por fora duplica pageview e conversão e quebra o ponto único de consentimento
- Quando ativar: o carregamento **deve** ser tecnicamente condicionado ao consentimento.
  Banner que apenas some da tela enquanto os scripts rodam é inaceitável
- `generate_lead` só em conversão real, garantido antes de qualquer redirect.
  Nunca disparar conversão em clique de botão qualquer
- Captura de IP, se necessária, **server-side**. Nunca via serviço externo no client

---

## 11. Dependências

- Não instalar sem necessidade clara e justificada
- Verificar antes se já existe solução equivalente no projeto
- Nada de biblioteca só para animação, só para ícone ou só por estética
- Mudanças no lockfile precisam ser conscientes e revisadas no diff

---

## 12. Git e deploy

- **Nunca** commit, push ou deploy sem autorização explícita
- **Nunca** `git config --global`
- **Nunca** comando interativo (`git rebase -i`, `git add -i`)
- **Nunca** alterar Vercel, DNS ou banco sem autorização
- Se estiver na branch padrão, criar branch antes de qualquer alteração relevante

---

## 13. Validação antes de encerrar

```powershell
npm run typecheck
npm run lint
npm run build
git diff --check
git status --short
```

Ambiente Windows: **não** encadeie com `&&` no PowerShell — rode um por vez.

Se um script não existir, informe. Se um comando não puder rodar, **diga que não rodou**.
Nunca simule resultado de validação e nunca crie script só para aparentar cumprimento.

Ao revisar o diff, procure por: secrets, arquivos inesperados, alterações fora de escopo,
mudanças de lockfile, mudanças de config e arquivos dos outros produtos.

---

## 14. Como reportar

Ao final de uma rodada, relate com honestidade:

- o que foi feito;
- o que **não** foi feito e por quê;
- o que ficou bloqueado por informação faltante;
- o resultado real de cada validação — inclusive as que não rodaram.

Pendência nova vai para `TASKS.md`. Diagnóstico e risco vão para `REVIEW.md`.
Não considere uma rodada concluída só porque a interface ficou bonita.
