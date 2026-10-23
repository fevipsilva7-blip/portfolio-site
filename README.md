#  Portfólio — Felipe Rodrigues

> Site pessoal de uma página, feito do zero com HTML, CSS e JavaScript puro, com foco em responsividade e acessibilidade.

[![Demo](https://img.shields.io/badge/Site-ao%20vivo-00C2B8?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-site-five-jet-79.vercel.app/)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-007BFF?style=for-the-badge)

<!-- Quando tiver um print ou GIF, salve em docs/preview.png e descomente a linha abaixo:
![Preview do portfólio](docs/preview.png)
-->

---

##  Sobre o projeto

Meu cartão de visitas na web: apresenta quem eu sou, as tecnologias que estudo, meus projetos com demo e código, e como entrar em contato. Foi construído sem frameworks, para praticar os fundamentos de HTML, CSS e JavaScript.

###  O que tem no site

- **Hero** com apresentação, cargo e links rápidos para LinkedIn e GitHub
- **Sobre mim** com trajetória e princípios de trabalho
- **Tecnologias** que venho estudando e aplicando (Front-end, Integração, Back-end e dados, Ferramentas)
- **Projetos em destaque**, cada um com demo online e código-fonte:
  - Pulse — Dashboard (React, Vite, Recharts)
  - Movie Explorer (React, Vite, TMDB API)
  - Cadastro de Clientes (Node.js, Express, SQLite)
  - Field Notes (HTML, CSS, JavaScript, localStorage)
  - Jogo da Memória (HTML, CSS, JavaScript)
- **Contato** com e-mail (com botão de copiar), GitHub, LinkedIn e Instagram

###  Destaques técnicos

- Layout responsivo com menu mobile
- Navegação que destaca a seção visível durante a rolagem
- Animações de entrada ao rolar a página, desativadas para quem usa `prefers-reduced-motion`
- Acessibilidade: link "pular para o conteúdo", atributos `aria-*` e foco visível

---

##  Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

- **HTML5** semântico
- **CSS3** com Grid, Flexbox e variáveis CSS, sem frameworks
- **JavaScript puro**, usando Intersection Observer API e Clipboard API

---

##  Como rodar localmente

O projeto é estático, então não precisa instalar nada.

```bash
# 1. Clone o repositório
git clone https://github.com/fevipsilva7-blip/portfolio-site.git

# 2. Entre na pasta
cd portfolio-site
```

3. Abra o arquivo `index.html` no navegador (clique duas vezes nele).

> Dica: no VS Code, a extensão **Live Server** recarrega a página automaticamente a cada alteração.

---

##  Estrutura de pastas

```
portfolio-site/
├── index.html   # conteúdo da página
├── style.css    # estilos e variáveis de cor (:root)
├── script.js    # menu, destaque da navegação, animações e botão de copiar
└── README.md
```

---

##  Próximos passos

- [ ] Adicionar o Bookshelf API na seção de projetos
- [ ] Melhorar a pontuação de acessibilidade e performance (Lighthouse)
- [ ] Migrar para React + TypeScript

---

##  Autor

**Felipe Rodrigues**
[LinkedIn](https://www.linkedin.com/in/felipe-rodrigues-da-silvaa/) · [GitHub](https://github.com/fevipsilva7-blip)
