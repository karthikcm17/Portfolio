import React, { useState } from 'react';

export default function Navbar({ darkMode, setDarkMode, isScrolled, activeSection, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 dark:bg-[#0B0F1A]/92 backdrop-blur-md shadow-md dark:shadow-[0_1px_0_rgba(255,255,255,0.07)] border-b border-slate-200 dark:border-transparent'
        : 'bg-transparent'
      }`}>
      <div className="max-w-[1240px] mx-auto px-6">
        <nav className="flex items-center justify-between h-[76px]" aria-label="Main navigation">
          <button onClick={() => handleNavClick('hero')} className="font-bold text-2xl bg-transparent border-none cursor-pointer tracking-tight text-slate-900 dark:text-white">
            <span className="bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">Karthik</span>
            <span className="text-violet-600 dark:text-violet-400">.</span>dev
          </button>

          <ul className="hidden md:flex items-center gap-10 list-none">
            {['about', 'projects', 'experience', 'contact'].map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => handleNavClick(sec)}
                  className={`text-base font-bold tracking-wide transition-colors duration-200 relative pb-1 capitalize bg-transparent border-none cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-violet-600 dark:after:bg-violet-400 after:transition-all after:duration-200 ${activeSection === sec
                      ? 'text-slate-950 dark:text-white after:w-full'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white after:w-0 hover:after:w-full'
                    }`}
                >
                  {sec}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:scale-105 transition-all shadow-sm cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c.132 0 .263 0 .393.007a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3z" /></svg>
              ) : (
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              )}
            </button>

            <button onClick={() => handleNavClick('contact')} className="text-sm font-bold px-5 py-2.5 rounded-xl border border-violet-600 text-violet-600 dark:text-violet-400 dark:border-violet-500 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-500 transition-all duration-200 shadow-sm cursor-pointer">
              Let's Talk
            </button>
            <a href="Karthikeyan_Resume.pdf" download="Karthikeyan_Resume.pdf" className="text-sm font-bold px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white flex items-center gap-1.5 transition-all shadow-md hover:opacity-90">
              Resume
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
            <button className="flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <span className={`block w-[22px] h-[2px] bg-slate-900 dark:bg-white rounded-sm transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
              <span className={`block w-[22px] h-[2px] bg-slate-900 dark:bg-white rounded-sm transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-[22px] h-[2px] bg-slate-900 dark:bg-white rounded-sm transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
            </button>
          </div>
        </nav>
      </div>

      <div className={`md:hidden bg-white dark:bg-[#0B0F1A] border-t border-slate-200 dark:border-white/5 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="list-none py-4">
          {['about', 'projects', 'experience', 'contact'].map((sec) => (
            <li key={sec}>
              <button onClick={() => handleNavClick(sec)} className="block w-full text-left px-6 py-3 text-lg font-bold text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white capitalize bg-transparent border-none">
                {sec}
              </button>
            </li>
          ))}
          <li className="px-6 pt-2">
            <a href="/Karthikeyan_Resume.pdf" download="Karthikeyan_Resume.pdf" className="block text-center text-base font-bold py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-sm">Download Resume</a>
          </li>
        </ul>
      </div>
    </header>
  );
}