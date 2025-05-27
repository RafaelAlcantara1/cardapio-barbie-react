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

  // Função para gerar descrição detalhada do prato
  const generateAltText = (item) => {
    return `${item.nome} - ${item.descricao.split('.')[0]}. Prato do cardápio do Restaurante Barbie.`;
  };

  // Retorna a estrutura JSX para um item do cardápio
  return (
    <div className="menu-item"> {/* Container do item com classe CSS */}
      <img 
        src={item.imagemUrl}      // URL da imagem vinda da prop 'item'
        alt={generateAltText(item)} // Texto alternativo descritivo
        loading="lazy"
        width="300"              // Largura base da imagem
        height="200"             // Altura base da imagem
        className="menu-item-imagem"
        // srcset para diferentes tamanhos de tela
        srcSet={`
          ${item.imagemUrl.replace('.jpg', '-small.jpg')} 300w,
          ${item.imagemUrl.replace('.jpg', '-medium.jpg')} 600w,
          ${item.imagemUrl} 900w
        `}
        sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 900px"
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
