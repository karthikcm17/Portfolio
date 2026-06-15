import React from 'react';

export default function Hero({ scrollToSection }) {
  const coreSkills = [
    {
      title: "Frontend Core Focus",
      tags: ["React.js", "JavaScript ES6+", "Tailwind CSS", "HTML5 & CSS3", "React Hooks", "Bootstrap", "Redux Toolkit"]
    },
    {
      title: "Full-Stack & APIs",
      tags: ["Node.js", "Express.js", "RESTful APIs", "MERN Architecture", "Async JSON Pipelines", "Middleware Auth"]
    },
    {
      title: "Data Architectures",
      tags: ["MongoDB", "Mongoose ODM", "Data Modeling", "CRUD Operations", "Aggregation Queries"]
    },
    {
      title: "Version & Tooling",
      tags: ["Git Versioning", "GitHub Engine", "Fetch / Axios API", "NPM Ecosystem", "VS Code Runtime"]
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-between pt-28 pb-12 relative overflow-hidden">
      <div className="absolute rounded-full filter blur-[100px] opacity-[0.06] dark:opacity-15 w-[650px] h-[650px] bg-violet-600 -top-[100px] -right-[150px] z-0"></div>
      <div className="absolute rounded-full filter blur-[100px] opacity-[0.06] dark:opacity-15 w-[450px] h-[450px] bg-cyan-500 bottom-12 -left-20 z-0"></div>

      <div className="max-w-[1240px] mx-auto px-6 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-start">

          <div className="w-full lg:pl-[44px]">
            <div className="inline-flex items-center gap-2 font-mono text-sm font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-5">
              Available for Opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.15] tracking-tight text-slate-950 dark:text-white mb-5">
              Karthikeyan<br />
              <span className="bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">MERN Full Stack</span><br />
              Developer
            </h1>
            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-300 leading-relaxed max-w-[520px] mb-8 font-semibold">
              Crafting high-performance user experiences with React &amp; full-stack intelligence. MERN Stack Developer pivoting backend depth into forward-thinking frontend experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={() => scrollToSection('projects')} className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg hover:opacity-95 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                View Projects
              </button>
              <a href="Karthikeyan_Resume.pdf" download="Karthikeyan_Resume.pdf" className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-transparent text-slate-800 dark:text-white hover:border-violet-500 dark:hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Download Resume
              </a>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-300 dark:border-white/5">
              {[
                { val: "20+", lbl: "Projects deployed" },
                { val: "MERN", lbl: "Full Stack" },
                { val: "React", lbl: "Primary Focus" }
              ].map((stat, idx) => (
                <div key={idx} className="flex-1 bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-white/5 rounded-xl p-4 shadow-md text-center sm:text-left">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent mb-0.5">{stat.val}</div>
                  <div className="text-sm text-slate-700 dark:text-slate-400 font-bold leading-tight">{stat.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group w-full mt-2 lg:mt-[44px]">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-2xl filter blur-xl opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 animate-pulse"></div>
            <div className="relative bg-[#0d1321] border border-white/10 rounded-2xl overflow-hidden shadow-2xl lg:perspective-[1000px] lg:rotate-y-[-6deg] lg:rotate-x-[3deg] hover:transform-none hover:scale-[1.01] transition-all duration-500">

              <div className="flex items-center justify-between px-4 py-2.5 bg-[#090d16] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] shadow-[0_0_8px_#FF5F57]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] shadow-[0_0_8px_#FEBC2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] shadow-[0_0_8px_#28C840]"></div>
                  <span className="ml-2 font-mono text-[0.7rem] text-slate-400 tracking-wider">developer.js</span>
                </div>
                <span className="text-[0.6rem] font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 uppercase tracking-widest animate-pulse">Live Engine</span>
              </div>

              <div className="p-4 pb-5 font-mono text-xs sm:text-sm leading-relaxed text-[#A6ACCD]">
                <div className="flex gap-4 group/line py-0.5 hover:bg-white/[0.03] transition-colors duration-150">
                  <span className="text-[#2D3748] min-w-[20px] text-right select-none text-xs">1</span>
                  <span><span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF] font-semibold drop-shadow-[0_0_12px_rgba(130,170,255,0.3)]">developer</span> <span className="text-[#89DDFF]">=</span> <span className="text-[#89DDFF]">{'{'}</span></span>
                </div>
                <div className="flex gap-4 group/line py-0.5 hover:bg-white/[0.03] transition-colors duration-150">
                  <span className="text-[#2D3748] min-w-[20px] text-right select-none text-xs">2</span>
                  <span>&nbsp;&nbsp;<span className="text-amber-400">name</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">"Karthikeyan"</span><span className="text-[#89DDFF]">,</span></span>
                </div>
                <div className="flex gap-4 group/line py-0.5 hover:bg-white/[0.03] transition-colors duration-150">
                  <span className="text-[#2D3748] min-w-[20px] text-right select-none text-xs">3</span>
                  <span>&nbsp;&nbsp;<span className="text-amber-400">role</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">"Frontend Developer"</span><span className="text-[#89DDFF]">,</span></span>
                </div>
                <div className="flex gap-4 group/line py-0.5 hover:bg-white/[0.03] transition-colors duration-150">
                  <span className="text-[#2D3748] min-w-[20px] text-right select-none text-xs">4</span>
                  <span>&nbsp;&nbsp;<span className="text-amber-400">stack</span><span className="text-[#89DDFF]">:</span> <span className="text-[#89DDFF]">[</span><span className="text-[#C3E88D]">"React"</span><span className="text-[#89DDFF]">,</span> <span className="text-[#C3E88D]">"Node"</span><span className="text-[#89DDFF]">,</span> <span className="text-[#C3E88D]">"MongoDB"</span><span className="text-[#89DDFF]">]</span><span className="text-[#89DDFF]">,</span></span>
                </div>
                <div className="flex gap-4 group/line py-0.5 hover:bg-white/[0.03] transition-colors duration-150">
                  <span className="text-[#2D3748] min-w-[20px] text-right select-none text-xs">5</span>
                  <span>&nbsp;&nbsp;<span className="text-amber-400">passion</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">"UI/UX &amp; Performance"</span><span className="text-[#89DDFF]">,</span></span>
                </div>
                <div className="flex gap-4 group/line py-0.5 hover:bg-white/[0.03] transition-colors duration-150">
                  <span className="text-[#2D3748] min-w-[20px] text-right select-none text-xs">6</span>
                  <span>&nbsp;&nbsp;<span className="text-amber-400">isAvailable</span><span className="text-[#89DDFF]">:</span> <span className="text-[#C792EA] font-medium tracking-wide">true</span><span className="text-[#89DDFF]">,</span></span>
                </div>
                <div className="flex gap-4 group/line py-0.5 hover:bg-white/[0.03] transition-colors duration-150">
                  <span className="text-[#2D3748] min-w-[20px] text-right select-none text-xs">7</span>
                  <span><span className="text-[#89DDFF]">{'}'}</span><span className="text-[#89DDFF]">;</span></span>
                </div>
                <div className="flex gap-4 group/line py-0.5 hover:bg-white/[0.03] transition-colors duration-150">
                  <span className="text-[#2D3748] min-w-[20px] text-right select-none text-xs">8</span>
                  <span>&nbsp;</span>
                </div>
                <div className="flex gap-4 group/line py-0.5 hover:bg-white/[0.03] transition-colors duration-150">
                  <span className="text-[#2D3748] min-w-[20px] text-right select-none text-xs">9</span>
                  <span><span className="text-[#546E7A] italic font-medium">// Let's collaborate 🚀</span></span>
                </div>
                <div className="flex gap-4 group/line py-0.5 hover:bg-white/[0.03] transition-colors duration-150">
                  <span className="text-[#2D3748] min-w-[20px] text-right select-none text-xs">10</span>
                  <span className="inline-flex items-center">
                    <span className="text-[#82AAFF]">developer</span>
                    <span className="text-[#89DDFF]">.</span>
                    <span className="text-[#82AAFF]">build</span>
                    <span className="text-[#89DDFF]">(</span>
                    <span className="text-[#C3E88D]">"product"</span>
                    <span className="text-[#89DDFF]">)</span>
                    <span className="inline-block w-[2.5px] h-[14px] bg-cyan-400 ml-1.5 animate-pulse shadow-[0_0_10px_#06B6D4]"></span>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12 w-full">
          {coreSkills.map((card, i) => (
            <div key={i} className="bg-white dark:bg-[#121926] border-2 border-slate-200 dark:border-white/[0.06] rounded-xl p-5 shadow-sm relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 dark:hover:border-violet-500/50">
              <div className="absolute top-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-violet-600 to-cyan-500"></div>
              <div className="text-sm font-extrabold text-slate-950 dark:text-white mb-3 flex items-center gap-2 tracking-wide uppercase text-violet-600 dark:text-violet-400">
                <span>◈</span>
                {card.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.04] transition-all duration-200 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}