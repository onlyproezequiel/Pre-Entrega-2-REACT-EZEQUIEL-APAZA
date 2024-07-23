// src/App.js
import React, { useState } from 'react';
import Navbar from './components/NavBar/NavBar.jsx';
import Contenedor from './components/Contenedor/Contenedor.jsx';

const App = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCartItemCount = (count) => {
    setCartItemCount(prevCount => Math.max(prevCount + count, 0)); // Suma el nuevo conteo, pero no deja que sea negativo sigue sin funcionar
  };

  const productos = [
    { id: 1, name: 'Juego de ollas Tramontina', description: 'Contiene 4 ollas y 2 sartenes con su respectiva espatula', price: 10, image: '/img/ollas4.jpg' },
    { id: 2, name: 'Secaplatos', description: 'Secaplatos de aluminio reforzado color negro extrema duración', price: 20, image: '/img/secaplatos.jpg' },
    { id: 3, name: 'Set Vasos Cristar', description: 'Contiene 6 vasos de mesa de cristal reforzados', price: 50, image: '/img/vasos.jpg' },
  ];

  return (
    <div>
      <Navbar itemCount={cartItemCount} />
      <Contenedor 
        mensajeBienvenida="¡Bienvenidos a Lepuchi Bazar!" 
        productos={productos} 
        updateCartItemCount={updateCartItemCount} 
      />
    </div>
  );
}

export default App;
