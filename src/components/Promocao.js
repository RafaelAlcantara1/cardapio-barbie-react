import React from 'react';

const Promocao = () => {
  return (
    <div className="promocao-container">
      <div className="promocao-content">
        <h2>✨ Promoção Especial ✨</h2>
        <p className="promocao-texto">
          Compre 5 Mini Hamburgueres Brilhantes e ganhe um 6º de graça! 
          Cada hambúrguer vem com um brilho mágico que muda de cor enquanto você come!
        </p>
        <div className="hamburgueres-container">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="hamburguer-wrapper">
              <div className="hamburguer">
                <div className="pao-superior"></div>
                <div className="alface"></div>
                <div className="carne"></div>
                <div className="queijo"></div>
                <div className="pao-inferior"></div>
                <div className="brilho"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promocao; 