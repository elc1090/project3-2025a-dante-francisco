import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useCollapse } from 'react-collapsed';

const MarkDownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-white my-4" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-2xl font-semibold text-white my-3" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-white my-2" {...props} />,
        p: ({node, ...props}) => <p className="text-white mb-2 leading-relaxed" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc list-inside pl-4 mb-2 text-white" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal list-inside pl-4 mb-2 text-white" {...props} />,
        li: ({node, ...props}) => <li className="mb-1" {...props} />,
        code: ({node, inline, className, children, ...props}) => 
          <code className={`bg-gray-700 text-green-400 px-1 rounded ${inline ? '' : 'block p-2 my-2'}`} {...props}>
            {children}
          </code>,
        blockquote: ({node, ...props}) => 
          <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-400" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
};

export default MarkDownRenderer;
