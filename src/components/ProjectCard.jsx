import React from 'react';

function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-card">
      <div
        className={`project-card-media ${
          project.fitMode === 'contain-blur' ? 'is-contain-blur' : ''
        } ${project.fitMode === 'contain-light' ? 'is-contain-light' : ''}`}
      >
        {project.fitMode === 'contain-blur' && (
          <img
            src={project.image}
            alt=""
            aria-hidden="true"
            className="project-card-bg-blur"
          />
        )}
        <img
          src={project.image}
          alt={project.title}
          className="project-card-img"
          loading="lazy"
        />
      </div>

      <div className="project-card-body">
        <span className="project-card-category">{project.category}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        {project.participation && (
          <p className="project-card-participation">{project.participation}</p>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <ul className="project-card-tech" aria-label="Tecnologías utilizadas">
            {project.technologies.map((tech) => (
              <li key={tech} className="project-tech-pill">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="project-card-footer">
          <button
            type="button"
            className="project-card-btn"
            onClick={() => onSelect(project)}
          >
            <span>Ver proyecto</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
