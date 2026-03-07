# Clínica Nova Vida - Modern Web Platform

![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/status-production_ready-success)

> **Engenharia de Alto Nível:** Migração completa da arquitetura legada (HTML/jQuery) para um stack moderno focado em Performance (Core Web Vitals), Acessibilidade e Manutenibilidade.

---

## 🏗️ Decisões Arquiteturais (RFC)

### 1. Astro (Islands Architecture)
Optamos pelo **Astro** como framework principal para garantir **Zero JS por padrão**.
- **Por quê?** O site é majoritariamente informativo (estático). Frameworks SPA (Single Page Applications) como Create React App enviariam um bundle JS enorme desnecessariamente.
- **Resultado:** O HTML é renderizado no servidor (SSG) e entregue pronto para o navegador. A interatividade é "hidratada" apenas onde necessário.

### 2. Tailwind CSS (Utility-First)
Substituímos o CSS monolítico (`style.css`) pelo **Tailwind CSS**.
- **Por quê?** Elimina o problema de "append-only CSS" (medo de deletar classes antigas).
- **Design System:** Cores e fontes (Nunito/Roboto) configuradas no `tailwind.config.mjs` para garantir consistência visual.

### 3. Componentização (Atomic Design)
A interface foi quebrada em componentes reutilizáveis e isolados em `src/components/`:
- `Header.astro`: Navegação responsiva.
- `Timeline.astro`: Renderização dinâmica da rotina baseada em dados (JSON-like array), facilitando futuras integrações com CMS.
- `Gallery.astro`: Otimização automática de imagens (WebP/AVIF) via `astro:assets`.

### 4. Performance de Imagens
Uso do componente `<Image />` do Astro.
- **Antes:** Carregava imagens originais (2MB+ cada).
- **Agora:** Gera automaticamente variantes responsivas (`srcset`) e formatos modernos (`webp`), reduzindo o payload em até 90%.

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:4321`

### Build (Produção)
```bash
npm run build
```
Gera arquivos estáticos na pasta `dist/` prontos para deploy em Vercel, Netlify ou AWS S3.

---

## 🧪 Qualidade de Código & Tooling

- **TypeScript:** Tipagem estrita ativada para prevenir erros de runtime.
- **ESLint + Prettier:** Padronização de código automática e verificação de boas práticas.
  - Execute `npx eslint src` para verificar erros.
- **Semântica HTML:** Uso correto de `<main>`, `<section>`, `<header>` para acessibilidade (a11y).
- **SEO:** Meta tags e Schema.org (JSON-LD) integrados no layout base.

---

## 📂 Estrutura do Projeto

```
/
├── public/              # Assets estáticos (favicon, robots.txt)
├── src/
│   ├── assets/          # Imagens otimizadas pelo Astro
│   ├── components/      # Blocos de UI (Header, Hero, etc.)
│   ├── layouts/         # Layout base (HTML, Head, SEO)
│   └── pages/           # Rotas (index.astro)
├── astro.config.mjs     # Configuração do Framework
├── tailwind.config.mjs  # Design System
└── package.json         # Dependências e Scripts
```

---

## 🔄 CI/CD (GitHub Actions)

O projeto conta com workflow de CI configurado em `.github/workflows/deploy.yml` que:
1. Instala dependências.
2. Executa o build de produção.
3. Faz deploy automático para o GitHub Pages.

---

**Autor:** Staff Software Engineer (Trae AI)
