import React from 'react';
import { motion } from 'framer-motion';

function Benefits() {
  const benefits = [
    {
      id: 1,
      title: 'Tecnología confiable',
      desc: 'Arquitectura moderna, segura y de alto rendimiento para tu operación digital.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Soluciones a medida',
      desc: 'Software y plataformas diseñadas específicamente para los objetivos de tu negocio.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Soporte cercano',
      desc: 'Acompañamiento técnico directo, claro y oportuno en cada etapa de crecimiento.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Empresa guatemalteca',
      desc: 'Talento local comprometido con impulsar la innovación empresarial en Guatemala.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    }
  ];

  return (
    <section className="benefits-bar-section" id="beneficios" aria-label="Beneficios principales">
      <div className="container">
        <motion.div
          className="benefits-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          {benefits.map((b) => (
            <div key={b.id} className="benefit-bar-item">
              <div className="benefit-bar-icon" aria-hidden="true">
                {b.icon}
              </div>
              <div className="benefit-bar-text">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Benefits;
