import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isRoadmapsPage = location.pathname === '/roadmaps';

  return (
    <header className="bg-indigo-950 shadow-[0_12px_30px_rgba(255,255,255,0.4)] py-6 px-6 relative z-50">

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:justify-center space-y-4 md:space-y-0 md:space-x-8">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          MySite
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/roadmaps" className="text-white hover:text-indigo-600 transition font-medium">
            Roadmaps
          </Link>
          
          {/* Campo de busca apenas em /roadmaps */}
          {isRoadmapsPage && (
            <input
              type="text"
              placeholder="Buscar..."
              className="w-40 md:w-64 px-3 py-2 border border-white text-white placeholder-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          )}
        </nav>

        {/* Botão Login Desktop */}
        <Link
          to="/login"
          className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition font-medium text-center"
        >
          Login
        </Link>

        {/* Botão Menu Mobile (☰) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white text-2xl absolute top-6 right-6"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile Fullscreen */}
      {menuOpen && (
        <div className="fixed inset-0 bg-indigo-950 text-white flex flex-col items-center justify-center space-y-6 z-50">
          {/* Botão Fechar */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-4xl font-bold hover:text-indigo-400"
          >
            ×
          </button>

          <Link
            to="/roadmaps"
            className="text-lg hover:text-indigo-600 transition font-medium"
          >
            Roadmaps
          </Link>

          {/* Campo de busca apenas em /roadmaps */}
          {isRoadmapsPage && (
            <input
              type="text"
              placeholder="Buscar..."
              className="w-3/4 max-w-sm px-4 py-2 border border-white text-white placeholder-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          )}
  
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition font-medium"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
