import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiLayers, FiZoomIn } from 'react-icons/fi';
import { projects } from '../../data/content';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="section fade-in">
      <h2 className="section-title">Notable Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <div key={i} className={styles.card}>
            {project.image ? (
              <a
                href={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageWrap}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
                  alt={`${project.title} architecture`}
                  className={styles.image}
                />
                <span className={styles.zoomHint}>
                  <FiZoomIn size={13} />
                  View Architecture
                </span>
              </a>
            ) : (
              <div className={styles.imageWrap}>
                <div className={styles.placeholder}>
                  <FiLayers size={32} />
                  <span>Architecture Diagram</span>
                </div>
              </div>
            )}
            <div className={styles.details}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.tags}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <FaGithub size={16} />
                  <span>Source</span>
                </a>
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
