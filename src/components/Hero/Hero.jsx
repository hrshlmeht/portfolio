import { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import ChatBot from '../ChatBot/ChatBot';
import { personalInfo, socialLinks } from '../../data/content';
import styles from './Hero.module.css';

export default function Hero() {
  // typing → shimmer → settled
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('shimmer'), 2200);
    const t2 = setTimeout(() => setPhase('settled'), 4500);
    return () => [t1, t2].forEach(clearTimeout);
  }, []);

  const nameClass = [
    styles.name,
    phase === 'shimmer' ? styles.nameShimmer : '',
    phase === 'settled' ? styles.nameSettled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.snip}>
          <h1 className={nameClass}>
            Hey, I&apos;m {personalInfo.name.split(' ')[0]}
          </h1>
          <h2 className={styles.role}>{personalInfo.roles[0]}</h2>
        </div>

        <p className={styles.tagline}>
          {personalInfo.bio}
        </p>

        <ChatBot />

        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.connectCard}
        >
          <FaLinkedin size={22} className={styles.linkedinIcon} />
          <span>Let's connect on LinkedIn</span>
          <span className={styles.followBtn}>Connect</span>
        </a>
      </div>
    </section>
  );
}
