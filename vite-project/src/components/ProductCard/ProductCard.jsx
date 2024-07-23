import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, updateCartItemCount }) => {
const [count, setCount] = useState(0);

const incrementCount = () => {
    setCount(prevCount => {
    const newCount = prevCount + 1;
      updateCartItemCount(1); // Agrega un producto al carrito
    return newCount;
    });
};

const decrementCount = () => {
    setCount(prevCount => {
    if (prevCount > 0) {
        const newCount = prevCount - 1;
        updateCartItemCount(-1); // Quita un producto del carrito
        return newCount;
    }
    return prevCount;
    });
};

return (
    <div className="product-card">
    <img src={product.image} alt={product.name} />
    <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
    </div>
    <div className="product-actions">
        <button onClick={incrementCount}>Agregar al carrito ({count})</button>
        {count > 0 && <button onClick={decrementCount}>Eliminar del carrito</button>}
    </div>
    </div>
);
}

export default ProductCard;