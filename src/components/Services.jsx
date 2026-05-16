import React from 'react';

function Services({ onContact }) {
  const services = [
    {
      id: 1,
      name: 'Plan Web Esencial',
      desc: 'Diseño web profesional, optimizado para celulares y estructurado para convertir de visitas a clientes directamente en WhatsApp.',
      icon: '💻'
    },
    {
      id: 2,
      name: 'Plan Web + IA Automatización',
      desc: 'Añadimos Automatización con Inteligencia Artificial. Ayudamos a que tu negocio tenga menos carga con trabajos largos, los hacemos más sencillos y rápidos.',
      icon: '🔎'
    },
    {
      id: 3,
      name: 'Plan Web + IA + Redes Sociales',
      desc: 'El ecosistema completo. Además de tu web y IA, gestionamos tus redes con contenido dinámico (Reels y Posts) editado profesionalmente.',
      icon: '📱'
    }
  ];

  return (
    <section className="section container" id="servicios">
      <div className="text-center">
        <h2>Nuestros Servicios</h2>
        <p style={{ color: 'var(--color-gray-800)', maxWidth: '600px', margin: '1rem auto' }}>Soluciones integrales de marketing digital para llevar tu negocio al siguiente nivel.</p>
      </div>

      <div className="services-list">
        {services.map(s => (
          <div key={s.id} className="service-item" onClick={() => onContact(s.name)} style={{ cursor: 'pointer' }}>
            <div className="service-icon">{s.icon}</div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>{s.name}</h3>
              <p style={{ color: 'var(--color-gray-800)' }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
