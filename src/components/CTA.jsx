import React from 'react';

function CTA({ onContact }) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <span className="section-eyebrow">Impulsa tu empresa</span>
          <h2>¿Listo para dar el siguiente paso digital?</h2>
          <p>
            Cuéntanos sobre tu proyecto y diseñemos juntos la página web, aplicación a medida o integración con IA que tu negocio necesita.
          </p>
          <div className="cta-actions">
            <button className="btn btn-primary" onClick={onContact}>
              Solicitar una propuesta
            </button>
            <a href="#portafolio" className="btn btn-outline">
              Ver proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
