import React, { useState, useEffect, useCallback } from 'react';
import ProjectCard from './ProjectCard';
import ContestadoraIAImg from '../assets/mockups/contestadora-ia.jpg';
import InfluencersGTImg from '../assets/mockups/influencer-gt.jpg';
import ClubEngasadosImg from '../assets/Club Engasados.jpeg';
import CNGuatemalaImg from '../assets/Logotipo CN1.jpeg';
import IntegroPulseImg from '../assets/mockups/integro-pulse.jpg';
import IntegroVozImg from '../assets/mockups/integro-voz.jpg';
import IntegroPracticasImg from '../assets/mockups/integro-practicas.jpg';
import ElLuchadorImg from '../assets/mockups/el-luchador-demo.jpg';

const PROJECTS = [
  {
    id: 'contestadora-ia',
    title: 'Contestadora Inteligente con IA',
    category: 'Inteligencia artificial / Automatización',
    description:
      'Prototipo de sistema de contestación y gestión telefónica integrado con inteligencia artificial y telefonía Asterisk, para el seguimiento de llamadas, consultas y métricas en tiempo real.',
    image: ContestadoraIAImg,
    fitMode: 'cover'
  },
  {
    id: 'influencer-gt',
    title: 'Influencer.gt',
    category: 'Plataforma web / UGC',
    description:
      'Plataforma digital diseñada para conectar marcas con creadores de contenido mediante concursos y experiencias participativas.',
    image: InfluencersGTImg,
    fitMode: 'cover'
  },
  {
    id: 'club-engasados',
    title: 'El Club de los Engasados',
    category: 'Entretenimiento / Comunidad',
    description:
      'Proyecto digital con una identidad visual llamativa, orientado al entretenimiento y a la comunidad guatemalteca.',
    technologies: ['Supabase'],
    image: ClubEngasadosImg,
    fitMode: 'cover'
  },
  {
    id: 'cn-guatemala',
    title: 'CN Guatemala',
    category: 'Identidad visual / Proyecto digital',
    description:
      'Proyecto con identidad guatemalteca que destaca elementos culturales y visuales propios del país.',
    image: CNGuatemalaImg,
    fitMode: 'contain-blur'
  },
  {
    id: 'integro-pulse',
    title: 'Íntegro Pulse',
    category: 'Aplicación web / Plataforma empresarial',
    description:
      'Aplicación web empresarial orientada al registro, organización y consulta estructurada de información corporativa.',
    participation: 'Desarrollado durante prácticas supervisadas en Íntegro.',
    image: IntegroPulseImg,
    fitMode: 'cover'
  },
  {
    id: 'integro-voz',
    title: 'Íntegro Voz',
    category: 'Aplicación web / Sistema de gestión',
    description:
      'Aplicación web orientada a la recepción de comentarios y recomendaciones mediante formularios digitales, integrada con un panel administrativo para consultar y gestionar la información.',
    participation: 'Desarrollado durante prácticas supervisadas en Íntegro.',
    image: IntegroVozImg,
    fitMode: 'cover'
  },
  {
    id: 'integro-practicas',
    title: 'Sitio web de prácticas profesionales de Íntegro',
    category: 'Desarrollo web / Sitio informativo',
    description:
      'Proyecto web diseñado para presentar información clara sobre el programa de prácticas profesionales y facilitar el acceso a los interesados.',
    participation: 'Desarrollado durante prácticas supervisadas en Íntegro.',
    image: IntegroPracticasImg,
    fitMode: 'cover'
  },
  {
    id: 'el-luchador',
    title: 'El Luchador (Demo)',
    category: 'Demo web / Gastronomía',
    description:
      'Demostración conceptual de sitio web para restaurante de cocina mexicana fusión, enfocada en presentación de menú, ambiente visual y reservaciones.',
    image: ElLuchadorImg,
    fitMode: 'cover'
  }
];

function Portfolio({ onContact }) {
  const total = PROJECTS.length;
  const extendedProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  const [trackIndex, setTrackIndex] = useState(total);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 860 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 860);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setWithTransition(true);
    setTrackIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setWithTransition(true);
    setTrackIndex((prev) => prev - 1);
  }, []);

  const goToProject = (index) => {
    setWithTransition(true);
    setTrackIndex(total + index);
  };

  const handleTransitionEnd = () => {
    if (trackIndex >= total * 2) {
      setWithTransition(false);
      setTrackIndex(trackIndex - total);
    } else if (trackIndex < total) {
      setWithTransition(false);
      setTrackIndex(trackIndex + total);
    }
  };

  useEffect(() => {
    if (isPaused || selectedProject) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, selectedProject, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const activeDot = ((trackIndex % total) + total) % total;
  const slidePercent = isMobile ? 100 : 50;

  const handleRequestSimilar = (project) => {
    setSelectedProject(null);
    if (onContact) {
      onContact(project.title);
    }
  };

  return (
    <section className="section portfolio" id="portafolio">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">PROYECTOS SELECCIONADOS</span>
          <h2>Soluciones digitales que convierten ideas en realidad.</h2>
          <p className="section-subtitle">
            Explora algunos de los proyectos en los que hemos trabajado, desarrollando experiencias digitales y herramientas tecnológicas.
          </p>
        </div>

        <div
          className="portfolio-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          aria-roledescription="carrusel"
          aria-label="Proyectos del portafolio"
        >
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            onClick={prevSlide}
            aria-label="Proyecto anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="portfolio-carousel-viewport">
            <div
              className="portfolio-carousel-track"
              style={{
                transform: `translate3d(-${trackIndex * slidePercent}%, 0, 0)`,
                transition: withTransition
                  ? 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)'
                  : 'none'
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedProjects.map((project, idx) => (
                <div key={`${project.id}-${idx}`} className="portfolio-carousel-slide">
                  <ProjectCard project={project} onSelect={setSelectedProject} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            onClick={nextSlide}
            aria-label="Siguiente proyecto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Controles inferiores: flechas en móvil + indicadores circulares */}
        <div className="carousel-controls-bottom">
          <button
            type="button"
            className="carousel-arrow-mobile"
            onClick={prevSlide}
            aria-label="Proyecto anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="carousel-dots" role="tablist" aria-label="Seleccionar proyecto">
            {PROJECTS.map((project, idx) => (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={activeDot === idx}
                aria-label={`Ver ${project.title}`}
                className={`carousel-dot ${activeDot === idx ? 'is-active' : ''}`}
                onClick={() => goToProject(idx)}
              />
            ))}
          </div>

          <button
            type="button"
            className="carousel-arrow-mobile"
            onClick={nextSlide}
            aria-label="Siguiente proyecto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Cerrar detalle del proyecto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div
              className={`project-modal-media ${
                selectedProject.fitMode === 'contain-blur' ? 'is-contain-blur' : ''
              } ${selectedProject.fitMode === 'contain-light' ? 'is-contain-light' : ''}`}
            >
              {selectedProject.fitMode === 'contain-blur' && (
                <img
                  src={selectedProject.image}
                  alt=""
                  aria-hidden="true"
                  className="project-card-bg-blur"
                />
              )}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="project-modal-img"
              />
            </div>

            <div className="project-modal-content">
              <span className="project-card-category">{selectedProject.category}</span>
              <h3 id="project-modal-title" className="project-modal-title">
                {selectedProject.title}
              </h3>
              <p className="project-modal-desc">{selectedProject.description}</p>

              {selectedProject.participation && (
                <p className="project-card-participation">{selectedProject.participation}</p>
              )}

              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <ul className="project-card-tech" aria-label="Tecnologías utilizadas">
                  {selectedProject.technologies.map((tech) => (
                    <li key={tech} className="project-tech-pill">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}

              <div className="project-modal-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleRequestSimilar(selectedProject)}
                >
                  Cotizar un proyecto similar
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSelectedProject(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
