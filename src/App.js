import React from 'react';
import './App.css';

function App() {
  const entradas = [
    {
      id: 1,
      title: 'Salada Barbie',
      description: 'Uma salada fresquinha com folhas verdes e molho rosa especial.',
      price: 'R$ 24,00',
      image: '/imagens/entrada1.png'
    },
    {
      id: 2,
      title: 'Mini Hambúrgueres',
      description: 'Trio de mini hambúrgueres gourmet com queijo e molho especial.',
      price: 'R$ 32,00',
      image: '/imagens/entrada2.png'
    },
    {
      id: 3,
      title: 'Tartar de Salmão',
      description: 'Salmão fresco em cubos, temperado com molho especial de limão e gengibre.',
      price: 'R$ 28,00',
      image: '/imagens/entrada3.png'
    }
  ];

  const pratosPrincipais = [
    {
      id: 1,
      title: 'Pasta Rosa',
      description: 'Massa fresca com molho cremoso rosa e camarões.',
      price: 'R$ 45,00',
      image: '/imagens/prato1.png'
    },
    {
      id: 2,
      title: 'Salmão Grelhado',
      description: 'Filé de salmão grelhado com legumes coloridos e purê de batata.',
      price: 'R$ 52,00',
      image: '/imagens/prato2.png'
    },
    {
      id: 3,
      title: 'Risotto de Champagne',
      description: 'Arroz arbóreo preparado com champagne e finalizado com parmesão.',
      price: 'R$ 48,00',
      image: '/imagens/prato3.png'
    }
  ];

  const sobremesas = [
    {
      id: 1,
      title: 'Cupcake Glamour',
      description: 'Cupcake de baunilha com cobertura rosa e glitter comestível.',
      price: 'R$ 18,00',
      image: '/imagens/sobremesa1.png'
    },
    {
      id: 2,
      title: 'Macarons Sortidos',
      description: 'Três macarons em tons pastéis com diferentes sabores.',
      price: 'R$ 22,00',
      image: '/imagens/sobremesa2.png'
    },
    {
      id: 3,
      title: 'Parfait Dreams',
      description: 'Camadas de iogurte, frutas vermelhas e granola em tons rosados.',
      price: 'R$ 24,00',
      image: '/imagens/sobremesa3.png'
    }
  ];

  const MenuItem = ({ title, description, price, image }) => (
    <div className="menu-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="price">{price}</span>
    </div>
  );

  const MenuSection = ({ id, title, items }) => (
    <section id={id} className="menu-section">
      <h2>{title}</h2>
      <div className="menu-items">
        {items.map(item => (
          <MenuItem 
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );

  return (
    <div className="App">
      <header>
        <div className="logo-container">
          <div className="logo">
            <img src="/imagens/logo.png" alt="Barbie Silhouette" />
          </div>
          <h1>Restaurante Barbie</h1>
        </div>
        <nav>
          <ul className="menu-nav">
            <li><a href="#entradas">Entradas</a></li>
            <li><a href="#pratos-principais">Pratos Principais</a></li>
            <li><a href="#sobremesas">Sobremesas</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <MenuSection id="entradas" title="Entradas" items={entradas} />
        <MenuSection id="pratos-principais" title="Pratos Principais" items={pratosPrincipais} />
        <MenuSection id="sobremesas" title="Sobremesas" items={sobremesas} />
      </main>

      <footer>
        <p>&copy; 2025 Restaurante Barbie - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;