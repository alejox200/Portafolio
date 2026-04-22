import React from 'react';

function Benefits() {
  const benefits = [
    {
      id: 1,
      title: 'Aumenta tus ventas',
      desc: 'Una web actúa como un vendedor que trabaja para ti 24/7, permitiendo a tus clientes comprar o reservar a cualquier hora.',
      icon: '📈'
    },
    {
      id: 2,
      title: 'Consigue más clientes',
      desc: 'El posicionamiento local te ayuda a aparecer cuando busquen tus servicios en tu área, ganando tráfico de alta calidad.',
      icon: '🎯'
    },
    {
      id: 3,
      title: 'Haz crecer tu negocio',
      desc: 'Automatizamos la captación de leads y los conectamos a tu WhatsApp para que solo te preocupes por cerrar la venta.',
      icon: '🚀'
    }
  ];

  return (
    <section className="section container text-center" id="beneficios">
      <h2>¿Por qué necesitas una Web Profesional?</h2>
      <p className="mb-4" style={{ color: 'var(--color-gray-800)', maxWidth: '600px', margin: '1rem auto 3rem' }}>
         Explicamos cómo transformar tu presencia digital en un motor constante de rentabilidad.
      </p>
      <div className="benefits-grid">
        {benefits.map(b => (
          <div key={b.id} className="benefit-card">
            <div className="benefit-icon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p style={{ color: 'var(--color-gray-800)' }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
