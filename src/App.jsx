import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.body.classList.toggle('light-mode', next === 'light');
      return next;
    });
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="pixel-grid" />
      <div className="scanline-overlay" />
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;