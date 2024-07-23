

import React from 'react'
import './NavBar.css'

const Navbar = () => {
return (
    <nav className="navbar">
    <div className="logo">
        <a href="/">Mi Tienda</a>
    </div>
    <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
    </ul>
    <div className="cart-widget">
        <a href="/carrito">
        <img src="/path/to/cart-icon.png" alt="Carrito" />
        <span className="cart-count">0</span>
        </a>
    </div>
    </nav>
);
}

export default Navbar
