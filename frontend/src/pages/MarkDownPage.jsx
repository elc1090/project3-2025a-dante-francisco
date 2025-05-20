import React from 'react';
import Markdown from '../Components/markDown';
import Header from '../layouts/Header';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const MarkDownPage = () => {
  const exemploMarkdown = `
# Título Principal

**Texto em negrito**

*Texto em itálico*

[Link para o Google](https://www.google.com)

- Item 1
- Item 2
- Item 3

\`\`\`js
console.log('Olá, mundo!');
\`\`\`
`;

  return (
    <>
      <Header />

      {/* Seção de Instruções com Exemplo */}
      <section className="bg-indigo-950 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Exemplo de Markdown renderizado */}
          <div className="bg-indigo-900 border border-indigo-700 rounded-lg p-6 overflow-auto">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Exemplo:</h3>

            <div className="prose prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {exemploMarkdown}
              </ReactMarkdown>
            </div>
            
          </div>

          {/* Instruções */}
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Como usar Markdown:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-indigo-400"># Títulos:</strong> Use <code>#</code> no início da linha.</li>
              <li><strong className="text-indigo-400">**Negrito**:</strong> Use <code>**texto**</code>.</li>
              <li><strong className="text-indigo-400">*Itálico*:</strong> Use <code>*texto*</code>.</li>
              <li><strong className="text-indigo-400">[Links](url):</strong> Use <code>[texto](url)</code>.</li>
              <li><strong className="text-indigo-400">Listas:</strong> Use <code>-</code> ou <code>*</code> para listas simples.</li>
              <li><strong className="text-indigo-400">Bloco de código:</strong> Use três crases (<code>```</code>) antes e depois.</li>
              <li><strong className="text-indigo-400">Imagens:</strong> Use <code>![alt](imagem.png)</code>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Editor Markdown */}
      <div className="container mx-auto p-6">
        <Markdown />
      </div>
    </>
  );
};

export default MarkDownPage;
