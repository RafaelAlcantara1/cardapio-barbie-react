// components/menuitem.js
import React from 'react';

// Componente funcional MenuItem que recebe um 'item' como prop
function MenuItem({ item }) {

  // Função auxiliar para formatar o preço como moeda Brasileira (BRL)
  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  // Retorna a estrutura JSX para um item do cardápio
  return (
    <div className="menu-item"> {/* Container do item com classe CSS */}
      <img
        src={item.imagemUrl}      // URL da imagem vinda da prop 'item'
        alt={item.nome}           // Texto alternativo com o nome do item
      />
      <h3>{item.nome}</h3>        {/* Nome do item */}
      <p>{item.descricao}</p>     {/* Descrição do item */}
      <span className="menu-item-preco"> {/* Span para o preço com classe CSS */}
        {formatCurrency(item.preco)}     {/* Preço formatado */}
      </span>
    </div>
  );
}

// Exporta o componente como padrão
export default MenuItem;
