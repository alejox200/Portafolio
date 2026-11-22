import React from 'react';
import { motion } from 'framer-motion';

function Services({ onContact }) {
  const services = [
    {
      id: 1,
      name: 'Páginas web estáticas',
      desc: 'Sitios web corporativos y landing pages de carga ultrarrápida, diseño moderno, adaptable a móviles y optimizado para captar clientes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'Aplicaciones web a medida',
      desc: 'Sistemas personalizados, paneles administrativos, gestión de bases de datos y plataformas escalables adaptadas al flujo de tu empresa.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'Integración con inteligencia artificial',
      desc: 'Automatización inteligente de procesos, asistentes virtuales y herramientas de IA que reducen tiempos operativos y multiplican resultados.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4" />
          <path d="m6.8 15-3.5 2" />
          <path d="m20.7 17-3.5-2" />
          <path d="M6.8 9 3.3 7" />
          <path d="m20.7 7-3.5 2" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 18v4" />
        </svg>
      )
    }
  ];

  return (
    <section className="section services-section" id="servicios">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Soluciones Digitales</span>
          <h2>Nuestros Servicios</h2>
          <p className="section-subtitle">
            Desarrollamos tecnología moderna con estándares corporativos para llevar tu empresa al siguiente nivel.
          </p>
        </div>

        <div className="services-cards-grid">
          {services.map((s, idx) => (
            <motion.article
              key={s.id}
              className="service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="service-card-top">
                <div className="service-card-icon" aria-hidden="true">
                  {s.icon}
                </div>
                <div className="service-card-body">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
              <div className="service-card-footer">
                <button
                  type="button"
                  className="service-card-link"
                  onClick={() => onContact(s.name)}
                >
                  <span>Conocer más</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
