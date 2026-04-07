import { FiBookOpen } from 'react-icons/fi';
import { about, education } from '../../data/content';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section fade-in">
      <h2 className="section-title">About Me</h2>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>{about.bio}</p>
          <p>{about.interests}</p>

          <div className={styles.education}>
            <h3 className={styles.eduTitle}>
              <FiBookOpen size={18} />
              Education
            </h3>
            {education.map((edu, i) => (
              <div key={i} className={styles.eduItem}>
                <span className={styles.eduDegree}>{edu.degree}</span>
                <span className={styles.eduField}>{edu.field}</span>
                <span className={styles.eduMeta}>
                  {edu.school} &middot; {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageWrap}>
          <img
            src={`${import.meta.env.BASE_URL}images/harshal.png`}
            alt="Harshal Mehta"
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  );
}
