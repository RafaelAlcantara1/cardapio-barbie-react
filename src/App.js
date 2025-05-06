// src/App.js
import React from 'react';
import './styles.css';              // Importa o CSS
import menuItems from './data';      // Importa TODOS os itens
import MenuItem from './components/menuitem'; // Importa o componente de item

function App() {

  // Filtra os itens por categoria
  const entradas = menuItems.filter(item => item.categoria === 'Entrada');
  const pratosPrincipais = menuItems.filter(item => item.categoria === 'Prato Principal');
  const sobremesas = menuItems.filter(item => item.categoria === 'Sobremesa');

  // Componente auxiliar para renderizar uma seção do menu
  const MenuSection = ({ title, items, id }) => (
    <section id={id} className="menu-section"> {/* Adiciona a classe menu-section */}
      <h2>{title}</h2> {/* Título da seção (Entradas, etc.) */}
      <div className="lista-itens-cardapio"> {/* Container grid para os itens */}
        {items.map((item) => (
          <MenuItem key={item.id} item={item} /> // Renderiza cada item da seção
        ))}
      </div>
    </section>
  );

  return (
    // Div principal da aplicação
    <div className="App">

      {/* Cabeçalho */}
      <header>
        <div className="logo-container">
          <div className="logo">
            {/* Certifique-se que 'logo.png' está em 'public/imagens/' */}
            <img src="/imagens/logo.png" alt="Restaurante Barbie Logo" loading="lazy"/>
          </div>
          <h1>Restaurante Barbie</h1>
        </div>
        {/* Barra de Navegação */}
        <nav>
          <ul className="menu-nav">
             {/* Links de navegação (a funcionalidade href="#..." funciona melhor com IDs nas seções) */}
            <li><a href="#entradas">Entradas</a></li>
            <li><a href="#pratos-principais">Pratos Principais</a></li>
            <li><a href="#sobremesas">Sobremesas</a></li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main>
        {/* Renderiza cada seção do menu usando o componente auxiliar */}
        <MenuSection id="entradas" title="Entradas" items={entradas} />
        <MenuSection id="pratos-principais" title="Pratos Principais" items={pratosPrincipais} />
        <MenuSection id="sobremesas" title="Sobremesas" items={sobremesas} />
      </main>

      {/* Rodapé */}
      <footer>
        <p>© 2025 Restaurante Barbie - Todos os direitos reservados</p>
      </footer>

    </div>
  );
}

export default App;