import React, { useState, useRef } from 'react';

export default function Contact() {
  const [formNote, setFormNote] = useState({ text: '', color: '' });
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const subject = subjectRef.current.value.trim() || 'Frontend Developer Role';
    const msg = messageRef.current.value.trim();

    if (!name || !email || !msg) {
      setFormNote({ text: 'Please populate required fields.', color: 'text-amber-600 dark:text-amber-500' });
      return;
    }

    window.location.href = `mailto:karthik.cm17@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry: ${subject} from ${name}`
    )}&body=${encodeURIComponent(`${msg}\n\nFrom: ${name} (${email})`)}`;

    setFormNote({ text: '✓ Invoking local system mail runtime engine…', color: 'text-emerald-600 dark:text-cyan-400' });
  };

  return (
    <section id="contact" className="py-24 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[64px] items-start">
          <div className="reveal-element opacity-0 translate-y-5 transition-all duration-500 ease-out">
            <div className="text-xs font-bold text-amber-600 dark:text-amber-500 tracking-widest uppercase mb-3 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-[2px] before:bg-amber-600 dark:before:bg-amber-500">Get In Touch</div>
            <h2 className="text-4xl sm:text-[2.8rem] font-extrabold tracking-tight text-slate-950 dark:text-white mb-4">Let's Build<br /><span className="bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">Something Great</span></h2>
            <p className="text-slate-800 dark:text-slate-300 mb-8 font-semibold text-lg">I am currently open to Frontend and React developer positions. Drop me a line directly or connect via my active professional networks.</p>

            <div className="flex flex-col gap-4">
              <a href="tel:+919360859919" className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#121926] text-slate-900 dark:text-white transition-all hover:border-violet-500 dark:hover:border-violet-500 hover:translate-x-1 shadow-sm group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1-2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <div className="text-[0.7rem] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Mobile</div>
                  <div className="text-base font-bold text-slate-800 dark:text-slate-200">+91 93608 59919</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/karthikcm17/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#121926] text-slate-900 dark:text-white transition-all hover:border-violet-500 dark:hover:border-violet-500 hover:translate-x-1 shadow-sm group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[#0A66C2]/10 text-[#0A66C2] dark:bg-[#0A66C2]/20 dark:text-[#0A66C2]">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </div>
                <div>
                  <div className="text-[0.7rem] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">LinkedIn</div>
                  <div className="text-base font-bold text-slate-800 dark:text-slate-200">linkedin.com/in/karthikcm17</div>
                </div>
              </a>

              <a href="https://github.com/karthikcm17" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#121926] text-slate-900 dark:text-white transition-all hover:border-violet-500 dark:hover:border-violet-500 hover:translate-x-1 shadow-sm group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </div>
                <div>
                  <div className="text-[0.7rem] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">GitHub</div>
                  <div className="text-base font-bold text-slate-800 dark:text-slate-200">github.com/karthikcm17</div>
                </div>
              </a>

              <a href="mailto:karthik.cm17@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#121926] text-slate-900 dark:text-white transition-all hover:border-violet-500 dark:hover:border-violet-500 hover:translate-x-1 shadow-sm group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <div className="text-[0.7rem] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</div>
                  <div className="text-base font-bold text-slate-800 dark:text-slate-200">karthik.cm17@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          <div className="reveal-element opacity-0 translate-y-5 transition-all duration-500 ease-out w-full">
            <form className="flex flex-col gap-5 bg-white dark:bg-[#151C2C]/40 p-6 sm:p-8 border-2 border-slate-200 dark:border-white/[0.06] rounded-2xl shadow-md" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-800 dark:text-slate-400" htmlFor="fname">Your Name</label>
                  <input ref={nameRef} className="bg-slate-50 dark:bg-[#151C2C] border border-slate-300 dark:border-white/10 rounded-xl p-3.5 px-4 text-slate-950 dark:text-white font-body text-base transition-all outline-none w-full placeholder-slate-400 dark:placeholder-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" type="text" id="fname" placeholder="Your Name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-800 dark:text-slate-400" htmlFor="femail">Email Address</label>
                  <input ref={emailRef} className="bg-slate-50 dark:bg-[#151C2C] border border-slate-300 dark:border-white/10 rounded-xl p-3.5 px-4 text-slate-950 dark:text-white font-body text-base transition-all outline-none w-full placeholder-slate-400 dark:placeholder-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" type="text" id="femail" placeholder="Name@company.com" required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-800 dark:text-slate-400" htmlFor="fsubject">Subject</label>
                <input ref={subjectRef} className="bg-slate-50 dark:bg-[#151C2C] border border-slate-300 dark:border-white/10 rounded-xl p-3.5 px-4 text-slate-950 dark:text-white font-body text-base transition-all outline-none w-full placeholder-slate-400 dark:placeholder-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" type="text" id="fsubject" placeholder="Frontend Developer Role" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-800 dark:text-slate-400" htmlFor="fmessage">Message</label>
                <textarea ref={messageRef} className="bg-slate-50 dark:bg-[#151C2C] border border-slate-300 dark:border-white/10 rounded-xl p-3.5 px-4 text-slate-950 dark:text-white font-body text-base transition-all outline-none w-full placeholder-slate-400 dark:placeholder-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 resize-y min-h-[140px]" id="fmessage" placeholder="Hi Karthikeyan, let's discuss..." required></textarea>
              </div>
              <button type="submit" className="font-bold text-base px-7 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md hover:opacity-95 transition-all w-full text-center cursor-pointer">Send Message →</button>
              {formNote.text && <p className={`text-sm text-center mt-1 font-mono font-bold ${formNote.color}`}>{formNote.text}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}