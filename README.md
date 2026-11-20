<a id="top"></a>

<div align="center">

<img alt="Logotipo Jejum Intermitente: Landing Page" src="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/src/assets/img/logo.svg" width="112" height="112" />

<h1>Jejum Intermitente: Landing Page</h1>

<p>
  <strong>Página de venda do e-book "Guia Prático do Jejum Intermitente", feita em React e Vite.</strong><br />
  <sub>React, Vite, TypeScript e Tailwind, com SEO e deploy automático</sub>
</p>

<p>
  <a href="https://voaneves.github.io/jejumintermitente/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/buttons/live-dark.svg" /><img alt="Abrir a página" src="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/buttons/live-light.svg" height="40" /></picture></a>
  <a href="#como-rodar"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/buttons/run-dark.svg" /><img alt="Rodar localmente" src="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/buttons/run-light.svg" height="40" /></picture></a>
</p>

<p><sub>Precisa de algo assim? <a href="https://voaneves.com/#contato"><strong>Vamos conversar →</strong></a></sub></p>

<p>
  <a href="https://github.com/voaneves/jejumintermitente/blob/main/LICENSE"><img src="https://img.shields.io/github/license/voaneves/jejumintermitente?style=flat-square&color=0A0A0A" alt="Licença MIT" /></a>
  <img src="https://img.shields.io/badge/React%20%C2%B7%20Vite%20%C2%B7%20TypeScript-b80000?style=flat-square" alt="React, Vite e TypeScript" />
</p>

<p>
  <a href="https://voaneves.github.io/jejumintermitente/">Página</a> ·
  <a href="#funcionalidades">Funcionalidades</a> ·
  <a href="#como-rodar">Como rodar</a> ·
  <a href="#deploy">Deploy</a> ·
  <a href="#contato">Contato</a>
</p>

</div>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/brand/rule-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/brand/rule-light.svg" />
  <img alt="" src="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/brand/rule-light.svg" width="100%" />
</picture>

## Sobre o projeto

Uma landing page para vender o e-book "Guia Prático do Jejum Intermitente", que leva o visitante dos benefícios até a chamada final para ação.

<div align="center">
  <a href="https://voaneves.github.io/jejumintermitente/">
    <img src="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/src/assets/img/screenshot.png" alt="Screenshot da página inicial do Jejum Intermitente">
  </a>
</div>

O foco é uma experiência limpa e direta, com boa performance e SEO. Também serve como estudo de caso e modelo para outras páginas de venda.

**Página:** <https://voaneves.github.io/jejumintermitente/>

### Tecnologias

- **React:** interface em componentes reutilizáveis.
- **Vite:** build e servidor de desenvolvimento rápidos.
- **TypeScript:** tipagem estática para um código mais seguro.
- **Tailwind CSS:** estilização utility-first.
- **Shadcn/UI:** componentes de interface copiados para o projeto, com controle total do código.

## Funcionalidades

- **SEO:** meta tags, Open Graph para redes sociais, dados estruturados (Schema.org) e tags canônicas no `index.html`.
- **Carregamento:** build otimizado pelo Vite e fontes pré-carregadas.
- **Responsivo:** layout mobile-first.
- **Deploy automático:** um workflow do GitHub Actions publica no GitHub Pages a cada `push` na branch `main`.

## Estrutura de pastas

```
.github/workflows/deploy.yml   deploy automático
public/                        ícones, imagens e manifesto
src/
  assets/                      imagens importadas nos componentes
  components/                  seções da página e ui/ (Shadcn/UI)
  pages/Index.tsx              página principal
  App.tsx, main.tsx, index.css raiz, entrada e estilos globais
index.html                     casca da aplicação
vite.config.ts                 configuração do Vite
```

## Como rodar

Você precisa do [Node.js](https://nodejs.org/) (versão LTS).

```sh
git clone https://github.com/voaneves/jejumintermitente.git
cd jejumintermitente
npm install
npm run dev
```

Abra `http://localhost:8080` (ou a porta indicada no terminal).

## Deploy

O workflow `.github/workflows/deploy.yml` roda a cada `push` na `main`: faz o checkout, prepara o Node.js, instala as dependências, executa `npm run build` e publica a pasta `dist` no GitHub Pages. A opção `base` em `vite.config.ts` gera os caminhos corretos para `/jejumintermitente/`.

## Contribuindo

Contribuições são bem-vindas: faça um fork e abra um pull request.

## Agradecimentos

[Vite](https://vitejs.dev/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn/UI](https://ui.shadcn.com/), [GitHub Pages](https://pages.github.com/) e [lovable.dev](https://lovable.dev/).

## Contato

<p>
  <a href="https://voaneves.com/#contato"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/buttons/hire-dark.svg" /><img alt="Vamos conversar" src="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/buttons/hire-light.svg" height="40" /></picture></a>
  <a href="https://voaneves.com/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/buttons/site-dark.svg" /><img alt="voaneves.com" src="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/buttons/site-light.svg" height="40" /></picture></a>
</p>

<a href="https://linkedin.com/in/voaneves">LinkedIn</a> · <a href="mailto:victorneves478@gmail.com">E-mail</a>

<p align="center">
  <img alt="VOANEVES mark" src="https://raw.githubusercontent.com/voaneves/jejumintermitente/main/assets/brand/mark-duo.svg" width="32" height="32" />
</p>

<p align="center"><sub>Distribuído sob a <a href="https://github.com/voaneves/jejumintermitente/blob/main/LICENSE">licença MIT</a>.</sub></p>

<p align="center"><sub><a href="#top">↑ Voltar ao topo</a></sub></p>
