# Portfólio — Hyago Souza (Designer)

Landing page em React para portfólio de designer. Projeto React já existe, vazio (sem dependências extras instaladas, sem componentes). Siga as etapas na ordem.

---

## Stack

- React (projeto já criado)
- Tailwind CSS
- Framer Motion (animações e transições suaves entre seções)
- Dados dos projetos em JSON (`src/data/projects.json`)

## Tipografia e cores

- **Títulos:** `Archivo Black` (Google Fonts)
- **Texto/corpo:** `Helvetica Neue`, fallback `Helvetica`, `Arial`, `sans-serif` (fonte de sistema, sem import — Helvetica é licenciada)
- **Cor principal:** azul bebê como acento forte (`#A8D5F2`, variações `light: #D6EBFA`, `dark: #6FB5E0`)
- **Cores de apoio (usar com criatividade, sem exagerar):** coral suave `#FFB4A2`, lilás `#C8B6E2`
- Fundo escuro (`bg-neutral-950`), texto branco/off-white por padrão
- Scroll suave (`scroll-behavior: smooth`) e transições suaves entre todas as seções (fade/slide on scroll via Framer Motion)

## Assets existentes

- Pasta `img/` na raiz do projeto contém: imagem da Hero + logo. **Mover para `src/assets/img/`** antes de referenciar nos componentes. Confirmar nomes exatos dos arquivos ao integrar (não assumir `hero.jpg`/`logo.png` sem checar).

---

## Etapa 1 — Setup

1. Instalar dependências:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install framer-motion
   ```
2. Configurar `tailwind.config.js`:
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {
         fontFamily: {
           display: ["'Archivo Black'", "sans-serif"],
           body: ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
         },
         colors: {
           babyblue: {
             DEFAULT: "#A8D5F2",
             light: "#D6EBFA",
             dark: "#6FB5E0",
           },
           coral: "#FFB4A2",
           lilac: "#C8B6E2",
         },
         backdropBlur: {
           xs: "2px",
         },
       },
     },
     plugins: [],
   }
   ```
3. Configurar `src/index.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   html {
     scroll-behavior: smooth;
   }

   body {
     @apply font-body bg-neutral-950 text-white;
   }

   h1, h2, h3, .font-display {
     @apply font-display;
   }
   ```
4. Criar estrutura de pastas:
   ```
   src/
     assets/
       img/          <- mover a pasta img existente pra cá
     components/
     data/
       projects.json
     App.jsx
     index.css
     main.jsx
   ```
5. `src/App.jsx` deve importar e renderizar, nesta ordem: `Header`, `Hero`, `Projects`, `About`, `Contact`, todos dentro de um wrapper `<div id="top" className="relative min-h-screen overflow-x-hidden">`.
6. Validar que `npm run dev` builda sem erro antes de seguir.

---

## Etapa 2 — Header (barra flutuante com glass effect)

Componente `src/components/Header.jsx`:

- Fixo no topo, centralizado horizontalmente, flutuando com margem (`fixed top-4 left-1/2 -translate-x-1/2`)
- Largura ~92% em mobile, `max-w-3xl` em telas maiores
- Efeito glass: `bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20`
- Formato: `rounded-full` (pílula) com bordas bem arredondadas
- Conteúdo: logo à esquerda (link para `#top`), links de navegação ao centro/direita (`Projetos`, `Sobre`, `Trabalhe comigo` com âncoras `#projetos`, `#sobre`, `#contato`), botão CTA "Vamos falar" com `bg-babyblue` linkando para `#contato`
- Nav links escondidos em mobile (`hidden sm:flex`), com um botão de menu hambúrguer simples no lugar (funcionalidade de abrir/fechar pode ficar para depois, botão pode ser só visual por enquanto)
- Entrada animada com Framer Motion: fade + slide de cima para baixo ao montar (`initial={{ y: -40, opacity: 0 }}` → `animate={{ y: 0, opacity: 1 }}`)
- Links de navegação com hover suave para a cor `babyblue`

---

## Etapa 3 — Hero

Componente `src/components/Hero.jsx`:

- Seção full-height (ou quase), usa a imagem da Hero já existente em `src/assets/img/`
- Nome do designer (Hyago Souza) em destaque com `font-display` (Archivo Black), tamanho grande
- Uma frase de headline/tagline curta abaixo do nome, em `font-body`
- Um CTA (ex: "Ver projetos" com âncora para `#projetos`) com destaque em `babyblue`
- Entrada animada suave com Framer Motion (fade-in, leve slide-up)
- Considerar overlay escuro sutil sobre a imagem para garantir contraste do texto

---

## Etapa 4 — Projetos

Componente `src/components/Projects.jsx` + `src/components/ProjectCard.jsx` + `src/data/projects.json`.

**`projects.json`** — estrutura sugerida (editável facilmente por Hyago depois):
```json
[
  {
    "id": 1,
    "title": "Nome do Projeto",
    "description": "Descrição curta do projeto.",
    "image": "/src/assets/img/projeto-1.jpg",
    "tags": ["Branding", "UI"],
    "link": "https://www.behance.net/..."
  }
]
```

**Seção `Projetos`:**
- Texto introdutório curto no topo da seção contando um trecho da história/trajetória do Hyago (placeholder de texto, marcar como `[EDITAR: texto sobre a história do Hyago]`)
- Abaixo, grid responsivo de `ProjectCard` (1 coluna mobile, 2-3 colunas desktop), populado a partir de `projects.json`
- Cada `ProjectCard`: imagem do projeto, título, tags, hover suave (leve scale/zoom na imagem ou elevação do card) via Framer Motion
- Scroll reveal: cards entram com fade + slide-up conforme entram na viewport (`whileInView`)

---

## Etapa 5 — Sobre

Componente `src/components/About.jsx`:

- Layout de duas colunas em desktop: **foto do designer à direita**, **texto à esquerda** (em mobile, empilhar: texto em cima, foto embaixo, ou conforme ficar melhor visualmente)
- Texto: bio/apresentação (placeholder `[EDITAR: bio do Hyago]`)
- Foto com leve tratamento visual (borda arredondada, sombra, ou moldura sutil com `babyblue`/`coral`/`lilac`)
- Scroll reveal ao entrar na viewport

---

## Etapa 6 — Trabalhe comigo (Contato)

Componente `src/components/Contact.jsx`:

- Título de destaque ("Trabalhe comigo" ou similar) em `font-display`
- Informações de contato: e-mail (placeholder `[EDITAR: email]`), link para Behance (placeholder `[EDITAR: link behance]`)
- Botões/links estilizados com a paleta (destaque `babyblue`)
- Pode funcionar como footer final da página
- Scroll reveal suave

---

## Etapa 7 — Polimento final

- Revisar transições entre todas as seções (scroll suave já configurado no CSS global; garantir que os `whileInView` do Framer Motion estejam consistentes em todas as seções — mesma duração/easing)
- Testar responsividade em mobile, tablet, desktop
- Conferir contraste de texto sobre imagens (Hero e Sobre)
- Verificar que todos os placeholders `[EDITAR: ...]` foram sinalizados claramente pra Hyago preencher com conteúdo real
- Testar menu mobile do header (mesmo que só visual por enquanto)
- Rodar `npm run build` e confirmar que não há erros

---

## Placeholders de conteúdo a preencher depois

- Texto de introdução da seção Projetos (história do Hyago)
- Bio da seção Sobre
- Dados reais em `projects.json` (imagens, títulos, descrições, links)
- E-mail e link do Behance na seção Contato
- Nomes exatos dos arquivos de imagem em `src/assets/img/` (hero e logo)
