// src/App.js
import React, { Suspense, lazy, useState } from 'react';
import './styles.css';              // Importa o CSS
import menuItems from './data';      // Importa TODOS os itens

// Lazy load components
const MenuSection = lazy(() => import('./components/MenuSection'));
const Footer = lazy(() => import('./components/Footer'));
const Details = lazy(() => import('./components/Details'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Filtra os itens por categoria
  const entradas = menuItems.filter(item => item.categoria === 'Entrada');
  const pratosPrincipais = menuItems.filter(item => item.categoria === 'Prato Principal');
  const sobremesas = menuItems.filter(item => item.categoria === 'Sobremesa');

  // Loading component
  const LoadingFallback = () => (
    <div className="loading-fallback">
      <div className="loading-spinner"></div>
      <p>Carregando seção do menu...</p>
    </div>
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Div principal da aplicação
    <div className="App">

      {/* Cabeçalho */}
      <header>
        <div className="logo-container">
          <div className="logo">
            <img src="/imagens/logo.png" alt="Restaurante Barbie Logo" loading="lazy"/>
          </div>
          <h1>Restaurante Barbie</h1>
        </div>
        {/* Barra de Navegação */}
        <nav>
          <div className="hamburger-container">
            <button 
              className="hamburger-menu" 
              onClick={toggleMenu} 
              aria-label="Menu"
              onTouchStart={(e) => e.preventDefault()}
              onTouchMove={(e) => e.preventDefault()}
            >
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
          <ul className={`menu-nav ${isMenuOpen ? 'open' : ''}`}>
            <div className="menu-links">
              <li><a href="#entradas" onClick={toggleMenu}>Entradas</a></li>
              <li><a href="#pratos-principais" onClick={toggleMenu}>Pratos Principais</a></li>
              <li><a href="#sobremesas" onClick={toggleMenu}>Sobremesas</a></li>
            </div>
            <div className="info-links">
              <li><a href="#horario" onClick={toggleMenu}>Horário</a></li>
              <li><a href="#contato" onClick={toggleMenu}>Contato</a></li>
              <li><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
            </div>
          </ul>
          <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <MenuSection id="entradas" title="Entradas" items={entradas} />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <MenuSection id="pratos-principais" title="Pratos Principais" items={pratosPrincipais} />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <MenuSection id="sobremesas" title="Sobremesas" items={sobremesas} />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Details />
        </Suspense>
      </main>

      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>

    </div>
  );
}

export default App;