import React from 'react';
import './navBar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Grunhild</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">Galeria</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categories">Contacto</a>
            </li>
          </ul>
        </div>
        <CartWidget itemCount={2} />
      </div>
    </nav>
  );
};

export default Navbar;



