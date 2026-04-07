import { useState } from 'react';
import {
  FiHome,
  FiBriefcase,
  FiCode,
  FiUser,
  FiMail,
  FiFileText,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import RotatingText from '../RotatingText/RotatingText';
import { personalInfo, socialLinks } from '../../data/content';
import styles from './Sidebar.module.css';

const navItems = [
  { id: 'hero', label: '/home', icon: FiHome },
  { id: 'experience', label: '/experience', icon: FiBriefcase },
  { id: 'projects', label: '/projects', icon: FiCode },
  { id: 'about', label: '/about', icon: FiUser },
  { id: 'contact', label: '/contact', icon: FiMail },
];

const connectLinks = [
  { href: socialLinks.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
  { href: socialLinks.github, icon: FaGithub, label: 'GitHub' },
  { href: socialLinks.devpost, icon: FaDev, label: 'DEV' },
];

export default function Sidebar({ theme, toggleTheme, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const handleResume = () => {
    // Opens resume PDF from public/ folder.
    // Drop your resume as public/resume.pdf — it will be served at /portfolio/resume.pdf
    const base = import.meta.env.BASE_URL || '/';
    window.open(`${base}resume.pdf`, '_blank');
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className={styles.mobileBar}>
        <button className={styles.logo} onClick={() => scrollTo('hero')}>
          HM<span className={styles.dot}>.</span>
        </button>
        <div className={styles.mobileActions}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className={styles.menuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${mobileOpen ? styles.open : ''}`}>
        {/* Profile */}
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <span>HM</span>
          </div>
          <div className={styles.profileInfo}>
            <h2 className={styles.name}>{personalInfo.name.split(' ')[0]}</h2>
            <RotatingText texts={personalInfo.roles} interval={2500} />
          </div>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`${styles.navItem} ${activeSection === id ? styles.active : ''}`}
              onClick={() => scrollTo(id)}
            >
              <Icon size={18} />
              <span className={styles.navLabel}>{label}</span>
            </button>
          ))}
          <button className={styles.navItem} onClick={handleResume}>
            <FiFileText size={18} />
            <span className={styles.navLabel}>/resume</span>
          </button>
        </nav>

        {/* Connect */}
        <div className={styles.connect}>
          <p className={styles.connectTitle}>Connect</p>
          {connectLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.connectLink}
            >
              <Icon size={18} />
              <span>{label}</span>
              <FiExternalLink size={14} className={styles.externalIcon} />
            </a>
          ))}
        </div>

        {/* Theme toggle (desktop) */}
        <div className={styles.desktopTheme}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </aside>
    </>
  );
}

function FiExternalLink({ size, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
