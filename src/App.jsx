import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);
      setShowScrollTop(scrollY > 400);

      const sections = ['about', 'projects', 'experience', 'contact'];
      let currentSection = '';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && scrollY >= el.offsetTop - 140) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-5');
            }, index * 40);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll('.reveal-element').forEach((el) => observer.observe(el));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;

      window.scrollTo({
        top: id === 'hero' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`${darkMode ? 'dark bg-[#0B0F1A]' : 'bg-slate-50'} text-slate-900 dark:text-slate-100 min-h-screen selection:bg-violet-500 selection:text-white overflow-x-hidden antialiased transition-colors duration-300 font-sans text-lg`}>
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        isScrolled={isScrolled} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-7 right-7 w-12 h-12 rounded-xl bg-violet-600 text-white border-none cursor-pointer flex items-center justify-center text-xl shadow-lg transition-all duration-300 z-50 hover:-translate-y-0.5 ${
          showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}