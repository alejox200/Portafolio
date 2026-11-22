import React from 'react';
import TecnoHorizontal from '../assets/TecnoHorizontal.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={TecnoHorizontal} alt="Tecnolejo" className="footer-logo-full" />
        </div>
        <p className="footer-desc">
          Empresa tecnológica guatemalteca — Páginas web, aplicaciones a medida e inteligencia artificial.
        </p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Tecnolejo por Hector Alejandro Xutuc Paz (Alejo). Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
