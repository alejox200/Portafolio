import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: '"Desde que Tecnolejo nos hizo la web con pedidos online, nuestras ventas de fin de semana subieron un montón. La inversión se pagó sola en el primer mes."',
      author: 'Carlos G.',
      role: 'Dueño de Restaurante Local'
    },
    {
      id: 2,
      text: '"¡Excelente servicio! No sabía nada de páginas web, pero Alejo me explicó todo y ahora recibo clientes directo a mi WhatsApp todos los días."',
      author: 'Ana M.',
      role: 'Emprendedora'
    },
    {
      id: 3,
      text: '"Mi barbería estaba estancada. La página nos dio la imagen profesional que necesitábamos para cobrar mejor y organizar las citas sin errores."',
      author: 'Roberto P.',
      role: 'Propietario de Barbería'
    }
  ];

  return (
    <section className="section testimonials" id="testimonios">
      <div className="container">
        <div className="text-center">
          <h2>Lo que dicen nuestros clientes</h2>
          <p style={{ color: 'var(--color-gray-800)', marginTop: '1rem' }}>No escuches solo mis palabras, mira los resultados reales que hemos logrado.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card">
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>{t.author}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
