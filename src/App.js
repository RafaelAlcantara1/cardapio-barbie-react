// src/App.js
import React, { Suspense, lazy, useState } from 'react';
import './styles.css';              // Importa o CSS
import menuItems from './data';      // Importa TODOS os itens

// Lazy load the MenuSection component
const MenuSection = lazy(() => import('./components/MenuSection'));

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

        <div className="detalhes-container">
          <div id="horario" className="detalhes-card">
            <h3>Horário de Funcionamento</h3>
            <ul className="horario-funcionamento">
              <li>
                <span className="dia">Segunda - Sexta</span>
                <span>11:00 - 22:00</span>
              </li>
              <li>
                <span className="dia">Sábado</span>
                <span>11:00 - 23:00</span>
              </li>
              <li>
                <span className="dia">Domingo</span>
                <span>12:00 - 21:00</span>
              </li>
            </ul>
          </div>

          <div id="contato" className="detalhes-card">
            <h3>Contato</h3>
            <div className="contato-info">
              <a href="tel:+5511999999999">
                <span>📞</span> (11) 99999-9999
              </a>
              <a href="mailto:contato@restaurantebarbie.com">
                <span>✉️</span> contato@restaurantebarbie.com
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                <span>📍</span> Rua Barbie, 123 - São Paulo
              </a>
            </div>
          </div>

          <div id="sobre" className="detalhes-card">
            <h3>Sobre Nós</h3>
            <p>
              Bem-vindo ao Restaurante Barbie, onde a elegância encontra a gastronomia! 
              Nossa cozinha oferece pratos sofisticados com um toque especial de glamour.
            </p>
            <p>
              Ambiente exclusivo, atendimento personalizado e uma experiência 
              gastronômica única inspirada no universo Barbie.
            </p>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Envie seu Feedback</h4>
            <p className="feedback-note">* Formulário em desenvolvimento</p>
            <form className="feedback-form">
              <input type="text" placeholder="Seu nome" disabled />
              <input type="email" placeholder="Seu email" disabled />
              <textarea placeholder="Sua mensagem" disabled></textarea>
              <button type="button" disabled>Enviar Mensagem</button>
            </form>
          </div>

          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/restaurantebarbie" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/imagens/instagram-logo.png" alt="Instagram" loading="lazy"/>
              </a>
              <a href="https://twitter.com/restaurantebarbie" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src="/imagens/twitter-logo.png" alt="Twitter" loading="lazy"/>
              </a>
              <a href="https://www.tiktok.com/@restaurantebarbie" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <img src="/imagens/tiktok-logo.png" alt="TikTok" loading="lazy"/>
              </a>
            </div>
            <p className="social-note">Siga-nos para novidades e promoções!</p>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Receba nossas novidades e promoções exclusivas!</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Seu email" disabled />
              <button type="button" disabled>Inscrever-se</button>
            </form>
            <p className="newsletter-note">* Em breve</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Restaurante Barbie - Todos os direitos reservados</p>
        </div>
      </footer>

    </div>
  );
}

export default App;