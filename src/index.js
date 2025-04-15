// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderizar na web
import App from './App';                   // Importa o componente principal App

// Cria a raiz da aplicação React, conectando ao elemento HTML com id 'root'
// (Este elemento deve existir no seu public/index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro da raiz
// React.StrictMode é um wrapper que ajuda a identificar potenciais problemas na aplicação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);