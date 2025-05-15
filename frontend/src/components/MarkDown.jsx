// MarkdownEditor.jsx
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = () => {
  const [markdown, setMarkdown] = useState('# Digite seu Markdown aqui');

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Entrada de texto */}
      <textarea
        className="w-300 h-200 p-2 border border-gray-300 rounded-md resize-none"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
    </div>
  );
};

export default Markdown;
