import React from 'react';
import TecnolejoLogo from '../assets/Tecnolejo Logo.png';

function About({ onContact }) {
  return (
    <section className="about" id="sobre-mi">
      <div className="about-img">
        <img 
          src={TecnolejoLogo} 
          alt="Hector Alejo" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
        />
      </div>
      <div className="about-content">
        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Hola, soy Hector Xutuc Paz <br/><span style={{ color: 'var(--color-blue-600)' }}>(Alejo)</span></h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-gray-800)' }}>
          Soy el fundador de <strong>Tecnolejo</strong>. Combino la disciplina y la producción audiovisual de alto impacto con el desarrollo de software avanzado e Inteligencia Artificial.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--color-gray-800)' }}>
          Mi visión es aportar la adaptabilidad de las nuevas tecnologías, respaldado por un enfoque de liderazgo y resolución de problemas, para potenciar la marca de mis clientes y multiplicar sus ventas.
        </p>
        <button className="btn btn-primary" onClick={onContact}>
          Hablemos de tu proyecto
        </button>
      </div>
    </section>
  );
};

export default About;
