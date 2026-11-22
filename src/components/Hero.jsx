import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import TecnoHorizontal from '../assets/TecnoHorizontal.png';
import HeroMockup from '../assets/hero-mockup.png';

function Hero({ onContact }) {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  // Pequeña animación al hacer scroll: desplazamiento vertical suave, ligero escalado e inclinación sutil
  const mockupY = useTransform(smoothProgress, [0, 1], [0, -45]);
  const mockupScale = useTransform(smoothProgress, [0, 1], [1, 1.035]);
  const mockupRotate = useTransform(smoothProgress, [0, 1], [0, -1.2]);

  return (
    <section className="hero" id="inicio" ref={heroRef}>
      {/* Elementos geométricos diagonales en azul y celeste integrados en el fondo */}
      <div className="hero-bg-decor" aria-hidden="true">
        <div className="diagonal-band band-1"></div>
        <div className="diagonal-band band-2"></div>
        <div className="diagonal-band band-3"></div>
        <div className="diagonal-corner-bottom"></div>
        <div className="hero-surface-glow"></div>
      </div>

      <div className="container hero-grid">
        {/* Columna izquierda */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          {/* Identidad de Tecnolejo (Logo completo TecnoHorizontal) */}
          <div className="hero-identity">
            <img src={TecnoHorizontal} alt="Tecnolejo" className="hero-identity-logo-full" />
          </div>

          <div className="hero-divider-line" aria-hidden="true"></div>

          {/* Etiqueta pequeña */}
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            <span>Empresa tecnológica guatemalteca</span>
          </div>

          {/* Título principal */}
          <h1 className="hero-title">
            Creamos soluciones digitales para{' '}
            <span className="hero-title-highlight">impulsar tu negocio.</span>
          </h1>

          {/* Descripción */}
          <p className="hero-description">
            Páginas web, aplicaciones a medida e inteligencia artificial.
          </p>

          {/* Botones de acción */}
          <div className="hero-actions">
            <a href="#portafolio" className="btn btn-primary hero-btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
              <span>Ver proyectos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <button type="button" className="btn btn-outline hero-btn-secondary" onClick={onContact}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 3C6.48 3 2 6.92 2 11.75c0 2.18.91 4.18 2.43 5.72-.18.96-.67 2.24-1.35 3.16-.21.28.04.68.38.61 1.78-.35 3.43-1.04 4.59-1.69 1.22.45 2.55.7 3.95.7 5.52 0 10-3.92 10-8.75S17.52 3 12 3z" />
              </svg>
              <span>Solicitar una propuesta</span>
            </button>
          </div>
        </motion.div>

        {/* Columna derecha: Mockup de portátil y teléfono integrado directamente al fondo con animación al scrollear */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 28, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
          style={{
            y: mockupY,
            scale: mockupScale,
            rotate: mockupRotate
          }}
        >
          <div className="hero-mockup-integrated">
            <img
              src={HeroMockup}
              alt="Mockup de computadora portátil y teléfono mostrando el sitio web corporativo de Tecnolejo"
              className="hero-mockup-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
