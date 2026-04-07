import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          Designed & Built by <strong>Harshal Mehta</strong>
        </p>
        <p className={styles.copy}>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
