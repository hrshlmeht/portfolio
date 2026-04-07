import { useState, useEffect, useRef } from 'react';
import { useTheme } from './hooks/useTheme';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const sectionIds = ['hero', 'experience', 'projects', 'about', 'contact'];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -65% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      fadeObserver.observe(el);
    });

    return () => fadeObserver.disconnect();
  }, []);

  return (
    <div className="app-layout">
      <Sidebar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <div className="main-content">
        <main>
          <Hero />
          <Experience />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
