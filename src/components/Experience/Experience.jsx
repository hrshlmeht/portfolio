import { useEffect, useRef } from 'react';
import { experiences } from '../../data/content';
import styles from './Experience.module.css';

export default function Experience() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section fade-in">
      <h2 className="section-title">Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={styles.item}
            ref={(el) => (itemsRef.current[i] = el)}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className={styles.marker} />
            <div className={styles.card}>
              <div className={styles.header}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.company}>{exp.company}</p>
              <ul className={styles.list}>
                {exp.description.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
