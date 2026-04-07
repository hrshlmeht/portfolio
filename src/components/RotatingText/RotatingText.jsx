import { useState, useEffect, useCallback } from 'react';
import styles from './RotatingText.module.css';

export default function RotatingText({ texts, interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('enter');

  const cycle = useCallback(() => {
    setPhase('exit');
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      setPhase('enter');
    }, 500);
  }, [texts.length]);

  useEffect(() => {
    const id = setInterval(cycle, interval);
    return () => clearInterval(id);
  }, [cycle, interval]);

  return (
    <span className={`${styles.wrapper}`}>
      <span className={`${styles.text} ${styles[phase]}`}>{texts[index]}</span>
    </span>
  );
}
