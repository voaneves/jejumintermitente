<a name="readme-top"></a>

<div align="center">
  
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]

</div>
<br />
<div align="center">
  <a href="https://github.com/voaneves/jejumintermitente">
    <img src="src/assets/img/logo.svg" />    
  </a>
  <h3 align="center">Jejum Intermitente - Landing Page</h3>
  <p align="center">
    Uma landing page de alta conversão, moderna e performática, criada para a venda do e-book "Guia Prático do Jejum Intermitente".
    <br />
    <a href="https://github.com/voaneves/jejumintermitente"><strong>Explore o código-fonte »</strong></a>
    <br />
    <br />
    <a href="https://voaneves.com/jejumintermitente/"><strong>Visite o Site »</strong></a>
    <br>
    <a href="https://github.com/voaneves/jejumintermitente/issues">Reporte um Bug</a>
    ·
    <a href="https://github.com/voaneves/jejumintermitente/issues">Sugira uma Funcionalidade</a>
  </p>
</div>

<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a></li>
      </ul>
    </li>
    <li><a href="#funcionalidades-principais">Funcionalidades Principais</a></li>
    <li><a href="#estrutura-de-pastas">Estrutura de Pastas</a></li>
    <li><a href="#como-começar">Como Começar (Guia do Desenvolvedor)</a></li>
    <li><a href="#processo-de-deploy">Processo de Deploy</a></li>
    <li><a href="#contribuindo">Contribuindo</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>
  </ol>
</details>

## Sobre o Projeto

Este projeto representa a materialização de uma landing page moderna, desenvolvida com o objetivo de ser uma ferramenta de vendas eficaz e visualmente atraente para produtos digitais. O foco foi criar uma experiência de usuário (UX) limpa e direta, que guiasse o visitante através de uma jornada de persuasão, desde a apresentação dos benefícios até a chamada para ação (CTA) final.

A página foi meticulosamente otimizada para performance e SEO, garantindo tempos de carregamento rápidos e uma base sólida para ser bem ranqueada em motores de busca. Além de ser um projeto funcional, serve como um case de estudo e um template robusto para a criação de outras páginas de venda, utilizando um stack de desenvolvimento moderno e escalável.

<div align="center">
  <a href="https://voaneves.com/jejumintermitente/">
    <img src="src/assets/img/screenshot.png" alt="Screenshot da página inicial" width="80%">
  </a>
</div>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

### Tecnologias Utilizadas

A escolha das tecnologias foi fundamental para atingir os objetivos de performance, manutenibilidade e experiência de desenvolvimento.

*   [![React][React.js]][React-url]
    Utilizado como a biblioteca principal para a construção da interface de usuário. Sua arquitetura baseada em componentes permite a criação de uma UI modular, reutilizável e fácil de manter.

*   [![Vite][Vite.dev]][Vite-url]
    Escolhido como a ferramenta de build e servidor de desenvolvimento. O Vite oferece uma experiência de desenvolvimento extremamente rápida com Hot Module Replacement (HMR) instantâneo e um processo de build otimizado que gera pacotes menores e mais eficientes para produção.

*   [![TypeScript][TypeScript.org]][TypeScript-url]
    Adotado para adicionar tipagem estática ao JavaScript. O TypeScript aumenta a robustez do código, previne bugs comuns em tempo de desenvolvimento e melhora a autocompletude e a compreensão geral do projeto.

*   [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url]
    Utilizado para a estilização. Como um framework utility-first, o Tailwind CSS permite construir designs complexos e customizados diretamente no HTML, resultando em um desenvolvimento rápido e um sistema de design consistente.

*   [![Shadcn/UI][Shadcn-UI]][Shadcn-UI-url]
    Usado para a criação dos componentes de UI. Diferente de bibliotecas de componentes tradicionais, o Shadcn/UI fornece componentes lindamente desenhados que podem ser copiados para o seu projeto, dando a você controle total sobre o código, estilo e comportamento.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Funcionalidades Principais

-   **Otimização para SEO:** O `index.html` foi enriquecido com um conjunto completo de meta tags, incluindo Open Graph para redes sociais, dados estruturados (Schema.org) para resultados de busca ricos, e tags canônicas para evitar conteúdo duplicado.
-   **Performance de Carregamento:** O uso do Vite garante um build otimizado, e as fontes são pré-carregadas para uma renderização mais rápida, visando altas pontuações em métricas como o Lighthouse.
-   **Design Totalmente Responsivo:** A interface foi construída com uma abordagem mobile-first, garantindo uma experiência de visualização e navegação perfeita em todos os dispositivos, de smartphones a desktops.
-   **Deploy Automatizado (CI/CD):** Um workflow de GitHub Actions está configurado para automaticamente construir e publicar o site no GitHub Pages a cada `push` na branch `main`, garantindo que o site esteja sempre atualizado com a última versão do código.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Estrutura de Pastas

A estrutura de arquivos do projeto foi organizada para ser intuitiva e escalável.

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Workflow de deploy automático
├── public/
│   ├── assets/img/         # Ícones e imagens públicas
│   └── site.webmanifest    # Manifesto do site
├── src/
│   ├── assets/             # Imagens e assets importados nos componentes
│   ├── components/
│   │   ├── ui/             # Componentes base do Shadcn/UI (ex: button.tsx)
│   │   └── HeroSection.tsx # Componentes de seção da página
│   ├── pages/
│   │   └── Index.tsx       # Componente principal da página de índice
│   ├── App.tsx             # Componente raiz com provedores e rotas
│   ├── main.tsx            # Ponto de entrada da aplicação React
│   └── index.css           # Estilos globais e configuração do Tailwind
├── index.html              # A "casca" principal da aplicação
└── vite.config.ts          # Arquivo de configuração do Vite
```

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Como Começar (Guia do Desenvolvedor)

Para obter uma cópia local do projeto e começar a desenvolver, siga estes passos simples.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão LTS recomendada) instalado em sua máquina.

### Instalação

1.  Clone o repositório para sua máquina local.
    ```sh
    git clone [https://github.com/voaneves/jejumintermitente.git](https://github.com/voaneves/jejumintermitente.git)
    ```
2.  Navegue até o diretório do projeto.
    ```sh
    cd jejumintermitente
    ```
3.  Instale todas as dependências do projeto.
    ```sh
    npm install
    ```
4.  Inicie o servidor de desenvolvimento.
    ```sh
    npm run dev
    ```
5.  Abra seu navegador e acesse `http://localhost:8080` (ou a porta indicada no seu terminal). Você verá a página com hot-reloading ativado.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Processo de Deploy

O deploy deste projeto é totalmente automatizado através do GitHub Actions e do GitHub Pages.

O workflow, definido em `.github/workflows/deploy.yml`, é acionado a cada `push` na branch `main`. Ele executa os seguintes passos:
1.  **Checkout:** Baixa a versão mais recente do código.
2.  **Setup Node.js:** Prepara o ambiente Node.js.
3.  **Install Dependencies:** Instala todas as dependências do projeto com `npm install`.
4.  **Build:** Executa `npm run build` para compilar o site para produção. A configuração `base` no `vite.config.ts` garante que todos os caminhos dos assets sejam gerados corretamente para o subdiretório `/jejumintermitente/`.
5.  **Deploy:** Pega os arquivos gerados na pasta `dist` e os publica no ambiente do GitHub Pages.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Contribuindo

Contribuições são bem-vindas! Se você tem alguma ideia para melhorar este projeto, sinta-se à vontade para fazer um fork e abrir um pull request.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Contato

[linkedin@voaneves](https://linkedin.com/in/voaneves) - [voaneves.com](https://voaneves.com) - voaneves@gmail.com

Link do Projeto: [https://github.com/voaneves/jejumintermitente](https://github.com/voaneves/jejumintermitente)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Agradecimentos

Gostaria de agradecer às seguintes ferramentas e comunidades que tornaram este projeto possível:

* [Vite](https://vitejs.dev/)
* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Shadcn/UI](https://ui.shadcn.com/)
* [GitHub Pages](https://pages.github.com/)
* [lovable.dev](https://lovable.dev/)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/voaneves/jejumintermitente.svg?style=for-the-badge
[contributors-url]: https://github.com/voaneves/jejumintermitente/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/voaneves/jejumintermitente.svg?style=for-the-badge
[forks-url]: https://github.com/voaneves/jejumintermitente/network/members
[stars-shield]: https://img.shields.io/github/stars/voaneves/jejumintermitente.svg?style=for-the-badge
[stars-url]: https://github.com/voaneves/jejumintermitente/stargazers
[issues-shield]: https://img.shields.io/github/issues/voaneves/jejumintermitente.svg?style=for-the-badge
[issues-url]: https://github.com/voaneves/jejumintermitente/issues
[license-shield]: https://img.shields.io/github/license/voaneves/jejumintermitente.svg?style=for-the-badge
[license-url]: https://github.com/voaneves/jejumintermitente/blob/main/LICENSE
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite.dev]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[TypeScript.org]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS.com]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Shadcn-UI]: https://img.shields.io/badge/shadcn--ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white
[Shadcn-UI-url]: https://ui.shadcn.com/
[Lucide-React]: https://img.shields.io/badge/Lucide-5A67D8?style=for-the-badge&logo=lucide&logoColor=white
[Lucide-React-url]: https://lucide.dev/
