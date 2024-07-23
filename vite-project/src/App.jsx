// src/App.js
import React from 'react';
import Navbar from './components/NavBar/NavBar.jsx';
import Contenedor from './components/Contenedor/Contenedor.jsx';

const App = () => {
  const productos = [
    { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', price: 10, image: '' },
    { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', price: 20, image: '' },
    // Agregar más productos por falta de imaginación y tiempo
  ];

  return (
    <div>
      <Navbar />
      <Contenedor mensajeBienvenida="¡Bienvenido a nuestra tienda!" productos={productos} />
    </div>
  );
}

export default App;
