import React from 'react';

const Details = () => {
  return (
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
  );
};

export default Details; 