import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';
import { socialLinks } from '../../data/content';
import styles from './SocialLinks.module.css';

const links = [
  { href: socialLinks.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
  { href: socialLinks.github, icon: FaGithub, label: 'GitHub' },
  { href: socialLinks.devpost, icon: FaDev, label: 'DEV' },
];

export default function SocialLinks({ size = 22 }) {
  return (
    <div className={styles.links}>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label={label}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
