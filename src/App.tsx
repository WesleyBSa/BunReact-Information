import React from "react";

const App: React.FC = () => {
  const lastUpdated = new Date().toLocaleString(); // Data e hora da última modificação

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Bun.js & Web Standards APIs</h1>
        <p>Entenda como o Bun.js está moldando o futuro dos runtimes JavaScript e APIs Web</p>
      </header>

      <main>
        <section>
          <h2>O que é o Bun.js?</h2>
          <p>
            Bun.js é um runtime moderno de JavaScript projetado para ser rápido, leve e amigável para desenvolvedores. Construído com base em motores de JavaScript, como o JavaScriptCore do WebKit, e escrito em Zig, o Bun.js otimiza fluxos de trabalho para desenvolvimento e servidores.
            Diferente do Node.js, que usa o motor V8 e possui um ecossistema mais amplo, o Bun.js foca na velocidade e simplicidade.
          </p>
          <a
            href="https://bun.sh/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '10px',
              color: '#007acc',
              textDecoration: 'none',
            }}
          >
            Saiba mais sobre o Bun.js →
          </a>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2>Comparativo: Bun.js, Node.js e Deno</h2>
          <p>
            Bun.js, Node.js e Deno são runtimes populares, cada um com suas características:
          </p>
          <ul>
            <li><strong>Bun.js:</strong> Focado em velocidade, especialmente em bundling e transpiling, superando o Node.js em algumas tarefas. Vale ressaltar que ainda não é utilizado no ambiente de produção.</li>
            <li><strong>Node.js:</strong> O mais consolidado e amplamente utilizado, com um vasto ecossistema de pacotes via NPM.</li>
            <li><strong>Deno:</strong> Criado por Ryan Dahl, busca corrigir falhas do Node.js, como suporte nativo a TypeScript e segurança aprimorada.</li>
          </ul>
          <p>
            Bun.js promete desempenho superior, tornando-se uma ótima opção para quem busca velocidade de execução. Tem vários pontos positivos como por exemplo o suporte nativo ao typescript.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2>O que são Web Standards APIs?</h2>
          <p>
            Web Standards APIs são interfaces padronizadas que permitem interação consistente com o navegador ou ambiente web, promovendo a interoperabilidade entre dispositivos e navegadores. Exemplos incluem a Fetch API, DOM API e WebSockets, essenciais para criar aplicações web modernas.
          </p>
          <a
            href="https://wintercg.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '10px',
              color: '#007acc',
              textDecoration: 'none',
            }}
          >
            Saiba mais sobre web standards api →
          </a>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2>Relação do Bun.js com as Web Standards APIs</h2>
          <p>
            O Bun.js é otimizado para Web Standards APIs, oferecendo um ambiente de execução rápido para trabalhar com APIs como a Fetch API, DOM API e WebSockets. Isso permite que os desenvolvedores testem e executem código que depende dessas APIs de maneira mais eficiente.
          </p>
          <p>
            Ao integrar-se com essas APIs, o Bun melhora o desempenho, tornando o desenvolvimento de aplicações web mais rápido e eficiente. Sua execução rápida e compatibilidade com ferramentas modernas, como o React, tornam o processo mais ágil.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2>Integração do Bun com o React</h2>
          <p>
            O Bun.js oferece suporte a JSX e TypeScript, além de se integrar bem com ferramentas como Webpack e Babel, acelerando o fluxo de trabalho no desenvolvimento de projetos React.
            A SPA desenvolvida aqui é um exemplo prático (exemplo simples) da utilização das tecnologias citadas.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2>Tecnologias Utilizadas</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="./public/image/React-Dark.svg" alt="React Logo" style={{ width: '100px' }} />
              <p>React</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="./public/image/Bun-Dark.svg" alt="Bun Logo" style={{ width: '100px' }} />
              <p>Bun.js</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="./public/image/TypeScript.svg" alt="TypeScript Logo" style={{ width: '100px' }} />
              <p>TypeScript</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="./public/image/JavaScript.svg" alt="JavaScript Logo" style={{ width: '100px' }} />
              <p>JavaScript</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '40px' }}>
        <p>Powered by React and Bun.js</p>
        <p>
          Última atualização: <strong>{lastUpdated}</strong>
        </p>
        <p>
          Autor: <a href="https://www.linkedin.com/in/wesley-batista-74b7a1198/" target="_blank" rel="noopener noreferrer">Wesley B. Santana</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
