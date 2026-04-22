import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>Tecnolejo</h3>
        <p style={{ marginBottom: '2rem' }}>Diseño y Marketing Digital en Guatemala enfocado en resultados.</p>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          &copy; {new Date().getFullYear()} Tecnolejo por Hector Alejandro Xutuc Paz (Alejo). Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
