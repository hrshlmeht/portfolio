import { FiMail } from 'react-icons/fi';
import SocialLinks from '../SocialLinks/SocialLinks';
import { personalInfo } from '../../data/content';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className="section fade-in">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Let&apos;s Connect</h2>
        <p className={styles.subtitle}>
          Have a project in mind or just want to chat? Feel free to reach out.
        </p>
        <a href={`mailto:${personalInfo.email}`} className={styles.email}>
          <FiMail size={20} />
          {personalInfo.email}
        </a>
        <div className={styles.social}>
          <SocialLinks size={24} />
        </div>
      </div>
    </section>
  );
}
