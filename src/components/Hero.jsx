import React from 'react';
import { motion } from 'framer-motion';

function Hero({ onContact }) {
  return (
    <section className="hero" id="inicio">
      <div className="container text-center">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Convierte tu negocio en una <br/><span>máquina de clientes</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Con una página web profesional, rápida y optimizada para ventas. Diseño web premium en Guatemala para emprendedores y negocios locales que buscan resultados reales.
          </motion.p>
          
          <motion.div 
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <button className="btn btn-primary" onClick={onContact}>
              Contáctame por WhatsApp
            </button>
            <a href="#portafolio" className="btn btn-secondary">
              Ver Proyectos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
