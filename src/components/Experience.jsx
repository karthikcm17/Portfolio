import React from 'react';

export default function Experience() {
  const logs = [
    {
      date: "2025 – Present", role: "Advanced MERN Full-Stack Development Training", company: "Illinois Institute of Technology & Entri Elevate",
      bullets: [
        "Mastering modular component-driven architecture using React.js, focusing on custom Hooks, routing, and predictable state management.",
        "Developing robust server-side applications with Node.js and Express.js, architecting optimized RESTful APIs, and managing secure middleware execution.",
        "Designing flexible, scalable database architectures utilizing MongoDB and Mongoose ODM, including data modeling and advanced aggregation operations.",
        "Implementing modern styling frameworks like Tailwind CSS to engineer responsive, high-performance interfaces while maintaining strict Git/GitHub version control workflows."
      ]
    },
    {
      date: "Prior Career", role: "Senior Education Consultant", company: "Global Academic Placement Consultancies",
      bullets: [
        "Over 10+ years directing strategic consulting operations, cross-border university partnerships, and stakeholder pipelines for global MBBS admissions.",
        "Managed complex international student data analysis and streamlined multi-country admission workflows into structured, user-centric processes.",
        "Pivoting a rich career in strategic education consulting directly into building scalable, high-performance frontend architectures."
      ]

    }
  ];

  return (
    <section id="experience" className="py-24 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="reveal-element opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <div className="text-xs font-bold text-amber-600 dark:text-amber-500 tracking-widest uppercase mb-3 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-[2px] before:bg-amber-600 dark:before:bg-amber-500">
            Career Journey
          </div>
          <h2 className="text-4xl sm:text-[2.8rem] font-extrabold tracking-tight text-slate-950 dark:text-white mb-4">
            Experience &amp; <span className="bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">Training</span>
          </h2>
          <p className="text-slate-800 dark:text-slate-300 max-w-[550px] mb-14 text-lg font-semibold">
            My professional trajectory merging core software development training with execution.
          </p>
        </div>

        <div className="mt-4 flex flex-col">
          {logs.map((exp, i) => (
            <div key={i} className="reveal-element opacity-0 translate-y-5 transition-all duration-500 ease-out grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-10 py-10 border-b border-slate-200 dark:border-white/5 last:border-b-0">
              <div className="font-mono text-base text-slate-700 dark:text-slate-400 font-extrabold pt-1">{exp.date}</div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-950 dark:text-white mb-1.5">{exp.role}</h3>
                <div className="text-base text-violet-600 dark:text-violet-400 font-bold mb-4">{exp.company}</div>
                <ul className="text-base sm:text-lg text-slate-800 dark:text-slate-300 list-none space-y-3 font-semibold">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="relative pl-5 before:content-['→'] before:absolute before:left-0 before:text-amber-500 before:font-black before:text-sm before:top-0.5">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}