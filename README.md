# NovaCargo Logistics

Site institucional premium para a transportadora fictícia **NovaCargo Logistics** — projeto didático de frontend moderno com Next.js 15.

> **Slogan:** *Movendo negócios com inteligência.*

## Tecnologias

| Tecnologia | Uso |
|------------|-----|
| [Next.js 15](https://nextjs.org/) | App Router, SSR, metadata SEO |
| [React 19](https://react.dev/) | UI declarativa |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização utilitária |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes acessíveis (Radix) |
| [Framer Motion](https://www.framer.com/motion/) | Animações e scroll reveal |
| [Lucide React](https://lucide.dev/) | Ícones |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark mode |

## Como executar

```bash
# Instalar dependências
npm install

# Desenvolvimento (Turbopack)
npm run dev

# Build de produção
npm run build
npm start
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura de pastas

```
src/
├── app/              # Rotas (App Router) + layout global + metadata
├── components/
│   ├── layout/       # Navbar, Footer, ThemeToggle
│   ├── sections/     # Seções da landing e formulários
│   ├── shared/       # Container, Logo, ScrollReveal...
│   ├── ui/           # shadcn/ui (Button, Card, Sheet...)
│   └── providers/    # ThemeProvider
├── data/             # Conteúdo estático (serviços, depoimentos...)
├── hooks/            # useScrollBlur, useInViewCounter
├── lib/              # utils, constants, tracking-mock, animations
└── types/            # Interfaces TypeScript compartilhadas
```

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Landing completa com todas as seções |
| `/servicos` | Detalhamento dos serviços + FAQ |
| `/sobre` | História, missão e equipe |
| `/contato` | Formulário de cotação (mock) |
| `/rastreamento` | Rastreamento interativo (mock) |
| `404` | Página não encontrada |

## Rastreamento demo

Na página de rastreamento, use códigos com **6+ caracteres**, por exemplo:

- `NC2026001`
- `NCLOG12345`
- `DEMO2026`

## Convenções didáticas

### Server vs Client Components

- **Server (padrão):** páginas em `app/`, `Footer`, dados estáticos — melhor SEO e menos JS no cliente.
- **Client (`"use client"`):** componentes com estado, Framer Motion, tema, formulários.

### Organização

1. **Dados separados de UI** — `src/data/` e `src/lib/`
2. **Um componente por arquivo** — export nomeado em PascalCase
3. **Comentários em português** — explicam o *porquê*, não o óbvio
4. **`cn()`** — combina classes Tailwind sem conflito

### Acessibilidade

- HTML semântico (`header`, `main`, `section`, `footer`)
- `aria-label` em botões de ícone
- `prefers-reduced-motion` respeitado em animações

## Dark mode

Alternância via botão na navbar. Tema padrão: **dark**. Tokens CSS em `src/app/globals.css`.

## Licença

Projeto educacional — uso livre para fins de ensino.
