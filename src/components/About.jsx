import React from 'react';
import LogotipoActualizado from '../assets/Tecnolejo.jpeg';

function About({ onContact }) {
  return (
    <section className="about" id="sobre-nosotros">
      <div className="about-img">
        <img 
          src={LogotipoActualizado} 
          alt="Tecnolejo - Logotipo Oficial" 
        />
      </div>
      <div className="about-content">
        <span className="section-eyebrow">Sobre Nosotros</span>
        <h2>
          Transformamos negocios a través de{' '}
          <span className="brand-accent">tecnología e innovación</span>
        </h2>
        <p>
          En <strong>Tecnolejo</strong> somos una empresa tecnológica guatemalteca dedicada a crear soluciones digitales modernas, confiables y diseñadas para generar resultados reales en cada negocio.
        </p>
        <p>
          Nos especializamos en el desarrollo de <strong>páginas web estáticas y corporativas</strong> de alto impacto, <strong>aplicaciones web a medida</strong> adaptadas a tus flujos de trabajo e <strong>integración con inteligencia artificial</strong> para automatizar tareas, optimizar tiempos operativos y escalar tus ventas.
        </p>
        <button className="btn btn-primary" onClick={onContact}>
          Hablemos de tu proyecto
        </button>
      </div>
    </section>
  );
}

export default About;
