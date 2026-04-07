import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}
