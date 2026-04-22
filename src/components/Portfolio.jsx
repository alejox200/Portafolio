import React from 'react';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'El Club de los Engasados',
      tag: 'Desarrollo Web / Base de Datos',
      problem: 'Necesidad de gestionar eficientemente la información de usuarios utilizando tecnologías modernas.',
      solution: 'Implementación y estructuración de sistema utilizando bases de datos avanzadas como Supabase.',
      result: 'Proyecto escalado con éxito, optimizando la consulta y registro de datos.'
    },
    {
      id: 2,
      title: 'Prácticas en Íntegro Desarrolladora',
      tag: 'Desarrollo Corporativo e IA',
      problem: 'Requerimientos de optimización y manejo de procesos internos durante práctica de 200 horas.',
      solution: 'Aplicación de conocimientos en Inteligencia Artificial y programación para mejorar herramientas.',
      result: 'Trabajo satisfactorio de alta exigencia demostrando adaptabilidad técnica.'
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
                Mockup {p.title}
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
