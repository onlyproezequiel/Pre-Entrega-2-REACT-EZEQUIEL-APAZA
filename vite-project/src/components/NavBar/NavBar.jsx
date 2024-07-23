// src/components/NavBar/NavBar.jsx
import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({ itemCount }) => {
return (
    <nav className="navbar">
    <div className="logo">
        <h1>Lepuchi Bazar</h1>
    </div>
    <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
    </ul>
    <CartWidget itemCount={itemCount} />
    </nav>
);
}

export default NavBar;
