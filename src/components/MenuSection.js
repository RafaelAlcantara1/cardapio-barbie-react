import React from 'react';
import MenuItem from './menuitem';

const MenuSection = ({ title, items, id }) => (
  <section id={id} className="menu-section">
    <h2>{title}</h2>
    <div className="lista-itens-cardapio">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default MenuSection; 