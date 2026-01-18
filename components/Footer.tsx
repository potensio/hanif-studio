import React from 'react';
import { 
  BadgeCheck, 
  Check, 
  Mail, 
  Phone, 
  Send, 
  Github, 
  Twitter, 
  Linkedin, 
  Dribbble, 
  ArrowUp 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full max-w-7xl sm:px-6 md:px-10 mx-auto pt-12 pr-4 pb-10 pl-4">
      <div className="relative overflow-hidden bg-white border border-black/10 rounded-3xl">
        <div className="relative z-10 sm:p-12 md:p-16 pt-12 pr-8 pb-8 pl-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12 border-b border-black/10">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <BadgeCheck className="w-5 h-5 text-black/80" />
                <h3 className="text-2xl text-black font-geist tracking-tighter font-medium">
                  Lio — Product Designer
                </h3>
              </div>
              <p className="text-black/70 max-w-3xl font-geist">
                I create thoughtful, user-centered designs that solve real problems. Let's work together to bring your vision to life with careful attention to detail and user experience.
              </p>

              <div className="sm:p-6 md:p-8 bg-gradient-to-b from-neutral-700 to-neutral-900 border-black/10 border rounded-2xl mt-6 pt-5 pr-5 pb-5 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20 px-2.5 py-1 text-xs font-geist">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                      Available for new projects
                    </div>
                    <h4 className="text-white font-semibold tracking-tight font-geist">
                      Start a conversation
                    </h4>
                    <ul className="space-y-2 text-sm text-white/70 font-geist">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-blue-400 mt-0.5" />
                        <span className="font-geist">Expert product design and user experience strategy.</span>
                      </li>
                      <li className="flex items-start gap-2">
                         <Check className="w-4 h-4 text-blue-400 mt-0.5" />
                        <span className="font-geist">Collaborative approach with clear communication.</span>
                      </li>
                      <li className="flex items-start gap-2">
                         <Check className="w-4 h-4 text-blue-400 mt-0.5" />
                        <span className="font-geist">Research-driven design decisions and outcomes.</span>
                      </li>
                    </ul>
                    <div className="flex items-center gap-3 pt-2 text-sm font-geist">
                      <a href="mailto:hello@lio.design" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition font-geist">
                        <Mail className="w-4 h-4" />
                        hello@lio.design
                      </a>
                      <span className="text-white/20 font-geist">•</span>
                      <a href="tel:+14155551234" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition font-geist">
                        <Phone className="w-4 h-4" />
                        +1 (415) 555‑1234
                      </a>
                    </div>
                  </div>

                  <form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-1">
                      <label htmlFor="name" className="block text-xs font-medium text-white/80 mb-1 font-geist">Your name</label>
                      <input id="name" name="name" type="text" required placeholder="Jane Doe" className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition text-sm text-white bg-black/20 border-white/20 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 font-geist backdrop-blur-md" />
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="email" className="block text-xs font-medium text-white/80 mb-1 font-geist">Email</label>
                      <input id="email" name="email" type="email" required placeholder="jane@company.com" className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition text-sm text-white bg-black/20 border-white/20 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 font-geist backdrop-blur-md" />
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="company" className="block text-xs font-medium text-white/80 mb-1 font-geist">Company</label>
                      <input id="company" name="company" type="text" placeholder="Acme Inc." className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition text-sm text-white bg-black/20 border-white/20 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 font-geist backdrop-blur-md" />
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="project-type" className="block text-xs font-medium text-white/80 mb-1 font-geist">Project type</label>
                      <select id="project-type" name="projectType" className="w-full appearance-none outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition text-sm text-white bg-black/20 border-white/20 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 font-geist backdrop-blur-md">
                        <option className="bg-neutral-800 text-white font-geist" value="product">Product design</option>
                        <option className="bg-neutral-800 text-white font-geist" value="redesign">Website redesign</option>
                        <option className="bg-neutral-800 text-white font-geist" value="consultation">Design consultation</option>
                        <option className="bg-neutral-800 text-white font-geist" value="branding">Visual identity</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-xs font-medium text-white/80 mb-1 font-geist">Tell me about your project</label>
                      <textarea id="message" name="message" rows={4} placeholder="Describe your project, goals, and timeline. I'd love to learn more about what you're building." className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition text-sm text-white bg-black/20 border-white/20 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 font-geist backdrop-blur-md resize-none"></textarea>
                    </div>
                    <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex gap-2 text-xs text-white/70 items-center font-geist">
                        <input id="nda" name="nda" type="checkbox" className="h-4 w-4 rounded bg-black/20 border-white/20 text-blue-500 focus:ring-blue-500/50 backdrop-blur-md" />
                        Please send an NDA
                      </div>
                      <div className="flex items-center gap-2">
                        <button type="submit" className="inline-flex gap-2 ring-1 ring-white/20 hover:bg-white hover:text-black transition text-sm font-medium text-white bg-black/20 backdrop-blur-md rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm items-center font-geist">
                          <Send className="w-4 h-4" />
                          Send message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 pt-12">
            <div>
              <h4 className="text-black/80 text-xs uppercase tracking-[0.2em] font-medium font-geist">Services</h4>
              <ul className="mt-3 space-y-2 text-sm font-geist">
                <li><a href="#work" className="text-black/60 hover:text-black transition font-geist">Product Design</a></li>
                <li><a href="#work" className="text-black/60 hover:text-black transition font-geist">UX Strategy</a></li>
                <li><a href="#work" className="text-black/60 hover:text-black transition font-geist">Design Systems</a></li>
                <li><a href="#work" className="text-black/60 hover:text-black transition font-geist">Visual Identity</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black/80 text-xs uppercase tracking-[0.2em] font-medium font-geist">Resources</h4>
              <ul className="mt-3 space-y-2 text-sm font-geist">
                <li><a href="#work" className="text-black/60 hover:text-black transition font-geist">Case Studies</a></li>
                <li><a href="#" className="text-black/60 hover:text-black transition font-geist">Design Process</a></li>
                <li><a href="#" className="text-black/60 hover:text-black transition font-geist">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black/80 text-xs uppercase tracking-[0.2em] font-medium font-geist">About</h4>
              <ul className="mt-3 space-y-2 text-sm font-geist">
                <li><a href="#about" className="text-black/60 hover:text-black transition font-geist">About me</a></li>
                <li><a href="#" className="text-black/60 hover:text-black transition font-geist">Experience</a></li>
                <li><a href="#contact" className="text-black/60 hover:text-black transition font-geist">Contact</a></li>
                <li><a href="#" className="text-black/60 hover:text-black transition font-geist">Resume</a></li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase text-xs text-black/80 tracking-[0.2em] font-medium font-geist">Connect</h4>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10 text-black/60 hover:text-black hover:bg-black/10 transition">
                  <Github className="w-[16px] h-[16px]" />
                </a>
                <a href="#" aria-label="X" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10 text-black/60 hover:text-black hover:bg-black/10 transition">
                  <Twitter className="w-[16px] h-[16px]" />
                </a>
                <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10 text-black/60 hover:text-black hover:bg-black/10 transition">
                  <Linkedin className="w-[16px] h-[16px]" />
                </a>
                <a href="#" aria-label="Dribbble" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10 text-black/60 hover:text-black hover:bg-black/10 transition">
                  <Dribbble className="w-[16px] h-[16px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-black/60 text-sm font-geist">© <span className="font-geist">2025</span> Lio. All rights reserved.</p>
            <div className="flex items-center gap-4 text-black/60 text-sm font-geist">
              <a href="#" className="hover:text-black transition font-geist">Privacy</a>
              <span className="hidden sm:block text-black/20 font-geist">•</span>
              <a href="#" className="hover:text-black transition font-geist">Terms</a>
              <span className="hidden sm:block text-black/20 font-geist">•</span>
              <a href="#" className="hover:text-black transition inline-flex items-center gap-1 font-geist">
                <ArrowUp className="w-4 h-4" /> Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};