import React from 'react';
import './Contenedor.css';
import ProductCard from '../ProductCard/ProductCard';

const Contenedor = ({ mensajeBienvenida, productos, updateCartItemCount }) => {
  return (
    <div className="contenedor">
      <h2>{mensajeBienvenida}</h2>
      <div className="product-list">
        {productos.map(producto => (
          <ProductCard 
            key={producto.id} 
            product={producto} 
            updateCartItemCount={updateCartItemCount} 
          />
        ))}
      </div>
    </div>
  );
}

export default Contenedor;
