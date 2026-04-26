import React from 'react';
import LogotipoCN from '../assets/Logotipo CN1.jpeg';
import PracticasINTEGRO from '../assets/Practicas Integro.jpeg';
import ClubEngasados from '../assets/Club Engasados.jpeg';
import InfuencerGT from '../assets/influencergt.jpeg';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'El Club de los Engasados',
      tag: 'Desarrollo Web / Base de Datos',
      problem: 'Necesidad de gestionar eficientemente la información de usuarios utilizando tecnologías modernas.',
      solution: 'Implementación y estructuración de sistema utilizando bases de datos avanzadas como Supabase.',
      result: 'Proyecto escalado con éxito, optimizando la consulta y registro de datos.',
      image: ClubEngasados 
    },
    {
      id: 2,
      title: 'Prácticas en Íntegro Desarrolladora',
      tag: 'Desarrollo Corporativo e IA',
      problem: 'Requerimientos de optimización y manejo de procesos internos durante práctica de 200 horas.',
      solution: 'Aplicación de conocimientos en Inteligencia Artificial y programación para mejorar herramientas.',
      result: 'Trabajo satisfactorio de alta exigencia demostrando adaptabilidad técnica.',
      image: PracticasINTEGRO
    },
    {
      id: 3,
      title: 'CN Centro Noticias Guatemala',
      tag: 'Desarrollo Web / Plataforma de Noticias',
      problem: 'Necesidad de expander las noticias a mas gente en Guatemala.',
      solution: 'Desarrollo de plataforma web profesional para publicación de noticias con panel administrativo integrado.',
      result: 'Creación de un medio digital escalable que potencia el alcance de las noticias locales.',
      image: LogotipoCN
    },
    {
      id: 4,
      title: 'Infuencer.gt',
      tag: 'Desarrollo Web / Marketing',
      problem: 'Hacer conocer marcas mediante una plataforma de concursos UGC',
      solution: 'Desarrollo de plataforma web profesional para diferentes marcas de concursos UGC',
      result: 'Creación de un medio digital escalable que potencia el alcance de las marcas',
      image: InfuencerGT
    }
  ];

  return (
    <section className="section portfolio" id="portafolio">
      <div className="container">
        <div className="text-center">
          <h2>Proyectos Destacados</h2>
          <p className="mb-8" style={{ color: 'var(--color-gray-200)', maxWidth: '600px', margin: '1rem auto' }}>
            Transformamos los problemas a soluciones digitales.
            Resultados comprobados para negocios reales en Guatemala.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map(p => (
            <div key={p.id} className="portfolio-card">
              <div className="portfolio-img">
                {p.image ? (
                  <img src={p.image} alt={`Mockup ${p.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  `Mockup ${p.title}`
                )}
              </div>
              <div className="portfolio-content">
                <span className="portfolio-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p><strong>Problema:</strong> {p.problem}</p>
                <p><strong>Solución:</strong> {p.solution}</p>
                <p className="portfolio-result">★ {p.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
