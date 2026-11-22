import React, { useState } from 'react';
import TecnoHorizontal from '../assets/TecnoHorizontal.png';

function Navbar({ onContact }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#portafolio' },
    { label: 'Precios', href: '#precios' },
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' }
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#inicio" className="navbar-brand" aria-label="Tecnolejo Inicio">
          <img src={TecnoHorizontal} alt="Tecnolejo" className="navbar-brand-logo-full" />
        </a>

        <nav className="navbar-nav" aria-label="Navegación principal">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-cta-wrap">
          <button className="btn btn-primary btn-nav" onClick={onContact}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13" />
              <path d="m22 2-7 20-4-9-9-4 20-7z" />
            </svg>
            <span>Hablemos</span>
          </button>

          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="container">
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={handleNavClick}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-primary mobile-cta-btn"
              onClick={() => {
                setMenuOpen(false);
                onContact();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4 20-7z" />
              </svg>
              <span>Solicitar una propuesta</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
