import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[72px] items-start">

          <div className="reveal-element opacity-0 translate-y-5 transition-all duration-500 ease-out">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-cyan-500 rounded-[32px] filter blur-xl opacity-15 dark:opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse"></div>

              <div className="absolute -inset-1 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-white/10 dark:to-white/5 rounded-[30px] p-[2px] transition-all duration-500 group-hover:from-violet-500 group-hover:to-cyan-400 shadow-md">
                <div className="w-full aspect-[4/5] bg-slate-200 dark:bg-[#151C2C] rounded-[28px] overflow-hidden relative shadow-inner animate-[float_6s_ease-in-out_infinite]">
                  <img
                    src="image.jpeg"
                    alt="Karthikeyan Professional Developer Portrait"
                    className="w-full h-full object-cover transition-all duration-700 ease-out scale-100 group-hover:scale-108 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/40 via-transparent to-transparent mix-blend-multiply opacity-60"></div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#151C2C] border-2 border-slate-200 dark:border-white/10 rounded-2xl p-4 py-4 flex items-center gap-2.5 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:border-violet-500">
                <span className="text-2xl animate-bounce">⚡</span>
                <div>
                  <div className="text-xs font-extrabold text-slate-950 dark:text-white uppercase tracking-wider">Open to Work</div>
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400">Frontend Roles</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-element opacity-0 translate-y-5 transition-all duration-500 ease-out">
            <div className="text-xs font-bold text-amber-600 dark:text-amber-500 tracking-widest uppercase mb-3 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-[2px] before:bg-amber-600 dark:before:bg-amber-500">
              About Me
            </div>
            <h2 className="text-4xl sm:text-[2.8rem] font-extrabold tracking-tight text-slate-950 dark:text-white mb-4">
              Full-Stack Roots, <span className="bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">Frontend Focus</span>
            </h2>
            <div className="w-16 h-[4px] rounded-sm bg-gradient-to-r from-violet-600 to-cyan-500 mt-4 mb-9"></div>

            <p className="text-slate-950 dark:text-slate-200 text-lg sm:text-xl leading-relaxed mb-6 font-semibold">
              Hi, I'm Karthikeyan. I build things for the web. While my foundation is rooted deeply in the complete MERN stack (MongoDB, Express, React, Node.js), my passion lies on the frontend. I specialize in turning complex ideas into clean, maintainable React code.
            </p>
            <p className="text-slate-950 dark:text-slate-200 text-lg sm:text-xl leading-relaxed font-semibold">
              Because I understand the backend ecosystem, I don't just build UI components — I optimize state management, write seamless API integrations, and ensure that the frontend architecture aligns perfectly with server capabilities.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}