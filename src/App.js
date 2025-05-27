// src/App.js
import React, { Suspense, lazy, useState, useEffect } from 'react';
import './styles.css';              // Importa o CSS
import menuItems from './data';      // Importa TODOS os itens
import ThemeSwitcher from './components/ThemeSwitcher';

// Lazy load components
const MenuSection = lazy(() => import('./components/MenuSection'));
const Footer = lazy(() => import('./components/Footer'));
const Details = lazy(() => import('./components/Details'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : {
      name: 'Barbie Pink',
      colors: {
        primary: '#ff69b4',
        light: '#ffc0cb',
        lighter: '#ffd1dc',
        gradient: 'linear-gradient(135deg, #ff69b4 0%, #ff8dc7 100%)',
        gradientLight: 'linear-gradient(135deg, #ffc0cb 0%, #ffd1dc 100%)'
      }
    };
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--barbie-pink', currentTheme.colors.primary);
    document.documentElement.style.setProperty('--barbie-light-pink', currentTheme.colors.light);
    document.documentElement.style.setProperty('--barbie-lighter-pink', currentTheme.colors.lighter);
    document.documentElement.style.setProperty('--gradient-pink', currentTheme.colors.gradient);
    document.documentElement.style.setProperty('--gradient-light', currentTheme.colors.gradientLight);
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  }, [currentTheme]);

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

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    document.querySelector('.theme-options').classList.remove('show');
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
        <ThemeSwitcher currentTheme={currentTheme.name} onThemeChange={handleThemeChange} />
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