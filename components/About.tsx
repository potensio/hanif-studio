import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl sm:px-8 mx-auto px-6">
      <div className="py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-3">
            <h2 className="text-lg font-semibold text-black font-geist">About me</h2>
          </div>
          <div className="md:col-span-9">
            <p className="sm:text-3xl lg:text-4xl leading-tight text-2xl text-black font-geist tracking-tighter font-medium">
              I am a dedicated product designer with a passion for creating fun and intuitive designs. Over the last 7 years I've worked on many projects across industries—from mobile applications to web products. I translate ideas into effective and highly‑crafted solutions.
            </p>
            <p className="leading-relaxed text-lg text-black/60 mt-8 font-geist">
              My approach to design is grounded in research and collaboration. I believe the best results come from understanding the end‑user and working closely with the team. With clear communication and an open mind, I make sure each project meets its goals and exceeds expectations.
            </p>
            <p className="leading-relaxed text-lg text-black/60 mt-6 font-geist">
              Outside of work, I enjoy staying up‑to‑date with the latest design trends and tools. I often participate in design workshops and online courses to refine my skills. I'm continuously learning, which helps me bring fresh ideas to my work.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};