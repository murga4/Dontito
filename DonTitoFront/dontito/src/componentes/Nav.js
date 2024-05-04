import React, { useState, useRef } from 'react';
import './nav.css';
import navbar from '../Images/Nav/Logo-navbar.png';
import carousel from '../Images/Nav/Logo-main.png';

function Nav() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="navbar-container">
      <nav ref={navRef} className={`Navbar ${menuVisible ? 'hidden' : ''}`}>
        <div className='logo-nav'>
          <img className='navbar-icon' src={navbar} alt="icono" />
        </div>
        <div className='navbar-section'>
          <a href="#Inicio">Inicio</a>
          <a href="#Nosotros">Nosotros</a>
          <a href="#Remates">Remates</a>
          <a href="#Contacto">Contacto</a>
        </div>
      </nav>
      {menuVisible && (
        <nav className="MobileNavbar">
          <a href="#Inicio">Inicio</a>
          <a href="#Nosotros">Nosotros</a>
          <a href="#Remates">Remates</a>
          <a href="#Contacto">Contacto</a>
        </nav>
      )}
      <img className='navbar-icon-mobile' src={navbar} alt="icono" />
      <div className={`hamburger-menu ${menuVisible ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {menuVisible && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
}

export default Nav;
