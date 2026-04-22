import React from 'react';

function CTA({ onContact }) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>¿Listo para subir al siguiente nivel?</h2>
        <p>No dejes que tu competencia se lleve a tus clientes. Déjame crear la plataforma digital que tu negocio merece.</p>
        <button 
          className="btn" 
          style={{ backgroundColor: '#25D366', color: 'white', border: 'none', padding: '1.25rem 3rem', fontSize: '1.25rem', boxShadow: '0 10px 20px -10px #25D366' }}
          onClick={onContact}
        >
          ¡Quiero mi página web AHORA!
        </button>
      </div>
    </section>
  );
}

export default CTA;
