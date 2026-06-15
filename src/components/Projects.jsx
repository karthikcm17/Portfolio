import React from 'react';

export default function Projects() {
  const dataset = [
    {
      num: "01 / Project", icon: "📚", name: "Mathura Academy",
      desc: "A dynamic course listing and browsing application built with React. Implemented component-driven architecture, responsive card layouts, and real-time filtering.",
      tech: ["React.js", "JavaScript", "CSS"], demo: "https://karthikcm17.github.io/my-course-app/", code: "https://github.com/karthikcm17/my-course-app"
    },
    {
      num: "02 / Project", icon: "🛍️", name: "Mathura Hypermart",
      desc: "A React-based product catalogue with dynamic listing, filtering, and responsive grid layouts. Built with clean component separation and reusable UI patterns.",
      tech: ["React.js", "JavaScript", "CSS Grid"], demo: "https://karthikcm17.github.io/product-listing-using-react-js/", code: "https://github.com/karthikcm17/product-listing-using-react-js"
    },
    {
      num: "03 / Project", icon: "📍", name: "Mathura Events",
      desc: "A community events discovery platform with React Router-powered SPA navigation, dynamic event listings, and an accessible, mobile-first design framework.",
      tech: ["React.js", "React Router", "JavaScript"], demo: "https://karthikcm17.github.io/local-event-hub/#/", code: "https://github.com/karthikcm17/local-event-hub"
    }
  ];

  return (
    <section id="projects" className="py-24 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="reveal-element opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <div className="text-xs font-bold text-amber-600 dark:text-amber-500 tracking-widest uppercase mb-3 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-[2px] before:bg-amber-600 dark:before:bg-amber-500">
            Featured Work
          </div>
          <h2 className="text-4xl sm:text-[2.8rem] font-extrabold tracking-tight text-slate-950 dark:text-white mb-4">
            Projects I've <span className="bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">Built</span>
          </h2>
          <p className="text-slate-800 dark:text-slate-300 max-w-[550px] mb-14 text-lg font-semibold">
            A selection of projects showcasing my frontend skills, component architecture, and API integration expertise.
          </p>
        </div>

        {/* Card elements text colors and background values fixed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataset.map((proj, i) => (
            <article key={i} className="reveal-element opacity-0 translate-y-5 transition-all duration-500 ease-out bg-white dark:bg-[#121926] border-2 border-slate-200 dark:border-white/[0.06] rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-violet-500 dark:hover:border-violet-500/50 hover:shadow-xl transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-violet-600 before:to-cyan-500 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
              <div className="font-mono text-xs text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider mb-4">{proj.num}</div>
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 dark:bg-violet-600/15 border border-violet-600/20 flex items-center justify-center text-2xl mb-[20px]">
                {proj.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-wide">{proj.name}</h3>
              <p className="text-base text-slate-800 dark:text-slate-300 leading-relaxed mb-6 flex-1 font-semibold">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-100 dark:bg-violet-600/15 text-slate-800 dark:text-violet-300 border border-slate-200 dark:border-violet-500/25">{t}</span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl transition-all duration-200 bg-violet-600/10 dark:bg-violet-600/15 border border-violet-600/30 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white">Live Demo</a>
                <a href={proj.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl transition-all duration-200 bg-transparent border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-slate-400 hover:text-slate-900 dark:hover:text-white">GitHub</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}