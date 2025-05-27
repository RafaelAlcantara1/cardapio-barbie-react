import React from 'react';

const Footer = () => {
  return (
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
              <img 
                src="/imagens/instagram-logo.png" 
                alt="Logo do Instagram - Siga-nos no Instagram" 
                width="32" 
                height="32"
                loading="lazy"
              />
            </a>
            <a href="https://twitter.com/restaurantebarbie" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img 
                src="/imagens/twitter-logo.png" 
                alt="Logo do Twitter - Siga-nos no Twitter" 
                width="32" 
                height="32"
                loading="lazy"
              />
            </a>
            <a href="https://www.tiktok.com/@restaurantebarbie" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <img 
                src="/imagens/tiktok-logo.png" 
                alt="Logo do TikTok - Siga-nos no TikTok" 
                width="32" 
                height="32"
                loading="lazy"
              />
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
  );
};

export default Footer; 