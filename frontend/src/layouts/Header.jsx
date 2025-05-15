import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-950 shadow-md py-6 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          MySite
        </div>

        {/* Nav */}
        <nav className="flex items-center space-x-4">
        {/* Link Roadmaps */}
        <a href="#roadmaps" className="text-white hover:text-indigo-600 transition font-medium">
          Roadmaps
        </a>

          {/* Campo de busca */}
            <input
            type="text"
            placeholder="Buscar..."
            className="w-40 md:w-64 px-3 py-2 border border-white text-white placeholder-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
        </nav>

        {/* Botão Login */}
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition font-medium">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
