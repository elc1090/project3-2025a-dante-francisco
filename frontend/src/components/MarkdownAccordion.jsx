import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useCollapse } from 'react-collapsed';

// Parseia markdown simples em estrutura árvore H1 -> H2 -> H3
function parseMarkdownToTree(markdown) {
  const lines = markdown.split('\n');
  const tree = [];
  let currentH1 = null;
  let currentH2 = null;

  lines.forEach(line => {
    if (line.startsWith('# ')) {
      // H1
      currentH1 = { title: line.slice(2).trim(), level: 1, content: [], children: [] };
      tree.push(currentH1);
      currentH2 = null;
    } else if (line.startsWith('## ')) {
      // H2
      if (!currentH1) {
        // Cria uma seção padrão se não existir H1 antes
        currentH1 = { title: 'Sem título principal', level: 1, content: [], children: [] };
        tree.push(currentH1);
      }
      currentH2 = { title: line.slice(3).trim(), level: 2, content: [], children: [] };
      currentH1.children.push(currentH2);
    } else if (line.startsWith('### ')) {
      // H3
      if (!currentH2) {
        // Se não houver H2, cria um default
        if (!currentH1) {
          currentH1 = { title: 'Sem título principal', level: 1, content: [], children: [] };
          tree.push(currentH1);
        }
        currentH2 = { title: 'Sem subtítulo', level: 2, content: [], children: [] };
        currentH1.children.push(currentH2);
      }
      const h3 = { title: line.slice(4).trim(), level: 3, content: [], children: [] };
      currentH2.children.push(h3);
    } else {
      // Conteúdo (texto, lista, etc)
      if (currentH2 && currentH2.children.length > 0) {
        // Adiciona conteúdo no último H3 aberto
        const lastH3 = currentH2.children[currentH2.children.length - 1];
        if (lastH3) {
          lastH3.content.push(line);
          return;
        }
      }
      if (currentH2) {
        currentH2.content.push(line);
        return;
      }
      if (currentH1) {
        currentH1.content.push(line);
        return;
      }
      // Se nada definido, joga numa seção padrão
      if (tree.length === 0) {
        tree.push({ title: 'Sem título principal', level: 1, content: [line], children: [] });
      } else {
        tree[tree.length - 1].content.push(line);
      }
    }
  });

  return tree;
}

function CollapsibleSection({ node }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  // Juntar conteúdo em string para renderizar Markdown
  const contentString = node.content.join('\n').trim();

  // Define estilos conforme nível para hierarquia visual
  const paddingLeft = node.level === 1 ? '0' : node.level === 2 ? '1rem' : '2rem';
  const bgColors = ['bg-indigo-800', 'bg-indigo-700', 'bg-indigo-600'];
  const fontSizes = ['text-3xl', 'text-2xl', 'text-xl'];

  return (
    <div className={`mb-3 rounded ${bgColors[node.level - 1]}`} style={{ paddingLeft }}>
      <button
        {...getToggleProps()}
        className={`w-full text-left text-white font-bold px-4 py-2 select-none ${fontSizes[node.level - 1]}`}
      >
        {node.title} {isExpanded ? '▲' : '▼'}
      </button>

      <section {...getCollapseProps()} className="px-4 py-2 text-white">
        {/* Renderizar conteúdo markdown do nível atual */}
        {contentString && (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ node, ...props }) => <p className="mb-2" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-2" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-2" {...props} />,
              li: ({ node, ...props }) => <li className="mb-1" {...props} />,
              code: ({ node, inline, className, children, ...props }) => (
                <code
                  className={`bg-gray-700 text-green-400 px-1 rounded ${
                    inline ? '' : 'block p-2 my-2'
                  }`}
                  {...props}
                >
                  {children}
                </code>
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-400" {...props} />
              ),
            }}
          >
            {contentString}
          </ReactMarkdown>
        )}

        {/* Renderizar recursivamente filhos (subseções) */}
        {node.children && node.children.map((child, i) => <CollapsibleSection key={i} node={child} />)}
      </section>
    </div>
  );
}

const MarkdownAccordion = ({ content }) => {
  const tree = parseMarkdownToTree(content);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-900 rounded">
      {tree.map((section, i) => (
        <CollapsibleSection key={i} node={section} />
      ))}
    </div>
  );
};

export default MarkdownAccordion;
