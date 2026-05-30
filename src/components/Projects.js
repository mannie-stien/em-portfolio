import React, { useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../assets/icons/data";

const categoryFilters = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const [featuredProject, ...gridProjects] = filteredProjects;

  return (
    <section id="projects" className="section projects-section">
      <Container>
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker">Selected Work</span>
          <h2>Products shipped across web, mobile, and AI</h2>
          <p>
            SaaS platforms, fintech flows, browser extensions, and utilities —
            each with a live demo or repo when available.
          </p>
        </motion.div>

        <motion.div
          className="projects-toolbar"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="projects-stats" aria-label="Project summary">
            <div className="projects-stat">
              <strong>{projects.length}</strong>
              <span>Projects</span>
            </div>
            <div className="projects-stat">
              <strong>{categoryFilters.length - 1}</strong>
              <span>Categories</span>
            </div>
            <div className="projects-stat">
              <strong>
                {projects.filter((project) => project.liveLink).length}
              </strong>
              <span>Live demos</span>
            </div>
          </div>

          <div
            className="projects-filters"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categoryFilters.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeFilter === category}
                className={`projects-filter ${
                  activeFilter === category ? "is-active" : ""
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <p className="projects-empty">No projects in this category yet.</p>
        ) : (
          <div className="projects-showcase">
            {featuredProject && (
              <ProjectCard
                project={featuredProject}
                index={0}
                featured
                key={`featured-${featuredProject.title}`}
              />
            )}

            {gridProjects.length > 0 && (
              <div className="projects-grid">
                {gridProjects.map((project, index) => (
                  <ProjectCard
                    project={project}
                    index={index + 1}
                    key={project.title}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

const ProjectCard = ({ project, index, featured = false }) => {
  const cardClass = featured ? "project-card project-card--featured" : "project-card";

  return (
    <motion.article
      className={cardClass}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.25) }}
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="project-card-media">
        <img
          src={project.image}
          alt=""
          className="project-card-image"
          loading="lazy"
        />
        <div className="project-card-media-overlay" aria-hidden="true" />
        <div className="project-card-badges">
          <span className="project-card-index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="project-card-category">{project.category}</span>
        </div>
      </div>

      <div className="project-card-content">
        <p className="project-card-highlight">{project.highlight}</p>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>

        <div className="project-card-stack">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link project-card-link--primary"
            >
              <FaExternalLinkAlt aria-hidden="true" />
              Live demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <FaGithub aria-hidden="true" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
