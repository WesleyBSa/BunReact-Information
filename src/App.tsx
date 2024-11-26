import React from "react";
import "./index.css";

const App: React.FC = () => {
  const lastUpdated = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans p-6">
      { }
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-red-400 mb-4">Bun.js & Web Standards APIs</h1>
        <p className="text-lg text-red-500">
          Entenda como o Bun.js está moldando o futuro dos runtimes JavaScript e APIs Web
        </p>
      </header>

      <main className="space-y-12">
        <section>
          <h2 className="text-3xl font-semibold mb-4">O que é o Bun.js?</h2>
          <p className="leading-relaxed">
            Bun.js é um runtime moderno de JavaScript projetado para ser rápido, leve e amigável para desenvolvedores. Construído com base em motores de JavaScript, como o JavaScriptCore do WebKit, e escrito em Zig, o Bun.js otimiza fluxos de trabalho para desenvolvimento e servidores.
            Diferente do Node.js, que usa o motor V8 e possui um ecossistema mais amplo, o Bun.js foca na velocidade e simplicidade.
          </p>
          <a
            href="https://bun.sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-orange-700 hover:underline"
          >
            Saiba mais sobre o Bun.js →
          </a>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold mb-6">Comparativo: Bun.js, Node.js e Deno</h2>
          <p className="mb-4 leading-relaxed">
            Compare as principais características dos runtimes de JavaScript mais populares.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300 text-center text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2 text-gray-700 border-b">Função</th>
                  <th className="px-3 py-2 text-orange-500 border-b">Bun.js</th>
                  <th className="px-3 py-2 text-lime-600 border-b">Node.js</th>
                  <th className="px-3 py-2 text-neutral-600 border-b">Deno</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 border-b">Suporte nativo a TypeScript</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">❌</td>
                  <td className="px-3 py-2 border-b">✅</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b">Velocidade em bundling e transpiling</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">❌</td>
                  <td className="px-3 py-2 border-b">❌</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b">Performance geral</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">✅</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b">Carregamento ultrarrápido de módulos</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">❌</td>
                  <td className="px-3 py-2 border-b">✅</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b">Uso de memória reduzido</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">❌</td>
                  <td className="px-3 py-2 border-b">❌</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b">Suporte a APIs Web nativas</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">✅</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b">Compatibilidade com React</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">✅</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b">Compilado em Zig</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">❌</td>
                  <td className="px-3 py-2 border-b">❌</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b">API para bundling integrada</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">❌</td>
                  <td className="px-3 py-2 border-b">❌</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b">Popularidade</td>
                  <td className="px-3 py-2 border-b">❌</td>
                  <td className="px-3 py-2 border-b">✅</td>
                  <td className="px-3 py-2 border-b">❌</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">O que são Web Standards APIs?</h2>
          <p className="leading-relaxed">
            Web Standards APIs são interfaces padronizadas que permitem interação consistente com o navegador ou ambiente web, promovendo a interoperabilidade entre dispositivos e navegadores. Exemplos incluem a Fetch API, DOM API e WebSockets, essenciais para criar aplicações web modernas.
          </p>
          <a
            href="https://wintercg.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-orange-700 hover:underline"
          >
            Saiba mais sobre web standards api →
          </a>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Relação do Bun.js com as Web Standards APIs</h2>
          <p className="leading-relaxed">
            O Bun.js é otimizado para Web Standards APIs, oferecendo um ambiente de execução rápido para trabalhar com APIs como a Fetch API, DOM API e WebSockets. Isso permite que os desenvolvedores testem e executem código que depende dessas APIs de maneira mais eficiente.
          </p>
          <p className="leading-relaxed">
            Ao integrar-se com essas APIs, o Bun melhora o desempenho, tornando o desenvolvimento de aplicações web mais rápido e eficiente. Sua execução rápida e compatibilidade com ferramentas modernas, como o React, tornam o processo mais ágil.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Integração do Bun com o React</h2>
          <p className="leading-relaxed">
            A integração do Bun.js com React é um dos seus pontos fortes, especialmente para desenvolvedores que buscam velocidade e simplicidade no desenvolvimento de aplicações. Bun foi projetado para ser altamente eficiente e suporta frameworks como React diretamente, tornando-o uma alternativa interessante.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Limitações</h2>
          <p className="leading-relaxed">
            Apesar das vantagens citadas, o Bun ainda é uma tecnologia em crescimento, e o seu desempenho é testado apenas em projetos teste.
            Por ainda ser uma tecnologia relativamente nova, alguns desenvolvedores hesitam em usá-la em produção, principalmente por conta de possíveis incompatibilidades ou bugs.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Tecnologias Utilizadas</h2>
          <div className="flex justify-around items-center">
            <div className="text-center">
              <img src="./public/image/React-Dark.svg" alt="React Logo" className="w-24 mx-auto mb-2" />
              <p>React</p>
            </div>
            <div className="text-center">
              <img src="./public/image/Bun-Dark.svg" alt="Bun Logo" className="w-24 mx-auto mb-2" />
              <p>Bun.js</p>
            </div>
            <div className="text-center">
              <img src="./public/image/TypeScript.svg" alt="TypeScript Logo" className="w-24 mx-auto mb-2" />
              <p>TypeScript</p>
            </div>
            <div className="text-center">
              <img src="./public/image/TailwindCSS-Dark.svg" alt="Tailwind Logo" className="w-24 mx-auto mb-2" />
              <p>Tailwind CSS</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center mt-12 border-t pt-6">
        <p>Powered by <span className="font-semibold text-blue-600">React</span> and <span className="font-semibold text-orange-500">Bun.js</span></p>
        <p>
          Última atualização: <strong>{lastUpdated}</strong>
        </p>
        <p>
          Autor:{" "}
          <a
            href="https://www.linkedin.com/in/wesley-batista-74b7a1198/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Wesley B. Santana
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
