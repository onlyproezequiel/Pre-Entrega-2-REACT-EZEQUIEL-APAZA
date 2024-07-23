

import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
const [count, setCount] = useState(0);

const incrementCount = () => {
    setCount(count + 1);
};

return (
    <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button onClick={incrementCount}>Agregar al carrito ({count})</button>
    </div>
);
}

export default ProductCard;
