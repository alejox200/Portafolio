import React from 'react';
import { motion } from 'framer-motion';

function Pricing({ onContact }) {
  const plans = [
    {
      id: 1,
      title: 'Plan Web Esencial',
      setup: '1,200',
      monthly: '350',
      desc: 'Tu negocio en línea 24/7 con diseño profesional.',
      features: [
        'Diseño Web Impactante',
        'Adaptable a celulares',
        'Botón a WhatsApp',
        'Soporte y Mantenimiento'
      ],
      btnText: 'Elegir Esencial',
      popular: false,
      inverse: false
    },
    {
      id: 2,
      title: 'Plan Web + SEO Básico',
      setup: '1,800',
      monthly: '600',
      desc: 'Atrae y captura clientes a través de Google.',
      features: [
        'Todo lo del Plan Esencial',
        'Optimización SEO en Google',
        'Mayor velocidad de carga',
        'Mantenimiento Mensual Prioritario'
      ],
      btnText: 'Elegir Web + SEO',
      popular: true,
      inverse: true
    },
    {
      id: 3,
      title: 'Plan Total (Web + SEO + Redes)',
      setup: '2,200',
      monthly: '800',
      desc: 'El paquete definitivo para dominar el mercado.',
      features: [
        'Todo lo del Plan Web + SEO',
        'Gestión de Redes Sociales',
        '6 posts + 4 Reels al mes',
        'Estrategia de Contenido'
      ],
      btnText: 'Elegir Plan Total',
      popular: false,
      inverse: false
    }
  ];

  return (
    <section className="section container" id="precios" style={{ backgroundColor: 'var(--color-white)', borderRadius: '2rem' }}>
      <div className="text-center" style={{ maxWidth: '650px', margin: '0 auto 3rem auto' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-1px' }}>Precios simples para escalar</h2>
        <p style={{ color: 'var(--color-gray-800)', fontSize: '1.2rem' }}>
          Ya sea que estés empezando o creciendo, Tecnolejo escala con tus necesidades de contenido y ventas. Precios en Quetzales.
        </p>
      </div>

      <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1150px', margin: '0 auto', alignItems: 'end' }}>
        {plans.map(plan => (
          <div 
            key={plan.id} 
            className="pricing-card"
            style={{ 
              backgroundColor: plan.inverse ? 'var(--color-blue-900)' : 'var(--color-white)', 
              color: plan.inverse ? 'var(--color-white)' : 'var(--color-gray-900)',
              border: plan.inverse ? 'none' : '1px solid var(--color-gray-200)',
              boxShadow: plan.inverse ? '0 20px 25px -5px rgba(30, 58, 138, 0.4)' : '0 4px 6px -1px rgba(0,0,0,0.05)',
              padding: plan.inverse ? '3.5rem 1.5rem' : '3rem 1.5rem', 
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: plan.inverse ? 'rgba(255,255,255,0.7)' : 'var(--color-gray-800)', margin: 0 }}>
                {plan.title}
              </h3>
              {plan.popular && (
                <motion.div
                  animate={{ backgroundPositionX: "-100%" }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                  style={{
                    fontSize: '0.80rem', padding: '0.2rem 0.8rem', borderRadius: '50px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    background: 'linear-gradient(to right, #DD7DDF, #E1CD86, #BBCB92, #71C2EF, #3BFFFF)',
                    backgroundSize: '200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    fontWeight: '600'
                  }}
                >
                  Popular
                </motion.div>
              )}
            </div>

            <p style={{ color: plan.inverse ? 'rgba(255,255,255,0.8)' : 'var(--color-gray-800)', fontSize: '0.95rem', marginBottom: '2rem', minHeight: '40px' }}>
              {plan.desc}
            </p>

            <div style={{ display: 'flex', alignItems: 'end', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: '800', lineHeight: 1 }}>Q{plan.setup}</span>
              <span style={{ color: plan.inverse ? 'rgba(255,255,255,0.7)' : 'var(--color-gray-800)', fontWeight: '600', paddingBottom: '0.25rem' }}>
                inicial
              </span>
            </div>
            
            <div style={{ fontSize: '1.1rem', color: plan.inverse ? 'rgba(255,255,255,0.9)' : 'var(--color-gray-800)', marginBottom: '2rem' }}>
              Mensual: <strong style={{ color: plan.inverse ? 'var(--color-white)' : 'var(--color-blue-600)' }}>Q{plan.monthly}</strong>
            </div>
            
            <button 
              className="btn" 
              style={{ 
                width: '100%', 
                marginBottom: '2rem',
                backgroundColor: plan.inverse ? 'var(--color-white)' : 'var(--color-gray-100)',
                color: plan.inverse ? 'var(--color-blue-900)' : 'var(--color-gray-900)',
                border: plan.inverse ? 'none' : '1px solid var(--color-gray-300)',
                boxShadow: plan.inverse ? '0 10px 15px -3px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s'
              }}
              onClick={() => onContact(plan.title)}
              onMouseEnter={(e) => {
                if (plan.inverse) e.currentTarget.style.backgroundColor = 'var(--color-gray-100)';
                else e.currentTarget.style.backgroundColor = 'var(--color-gray-200)';
              }}
              onMouseLeave={(e) => {
                if (plan.inverse) e.currentTarget.style.backgroundColor = 'var(--color-white)';
                else e.currentTarget.style.backgroundColor = 'var(--color-gray-100)';
              }}
            >
              {plan.btnText}
            </button>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
              {plan.features.map((f, i) => (
                <li key={i} style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  color: plan.inverse ? 'rgba(255,255,255,0.9)' : 'var(--color-gray-800)',
                  fontSize: '0.95rem'
                }}>
                  <span style={{ color: plan.inverse ? '#60a5fa' : 'var(--color-blue-600)', fontWeight: 'bold' }}>✓</span> 
                  {f}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
      <div className="text-center" style={{ marginTop: '3rem', color: 'var(--color-gray-800)' }}>
        <p><i>* Precios base. Las cotizaciones pueden variar por características avanzadas. Consulta otros servicios por WhatsApp.</i></p>
      </div>
    </section>
  );
}

export default Pricing;
