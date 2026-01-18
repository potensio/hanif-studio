import React from 'react';
import { WorkCard } from './WorkCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'BeliElektronik.com',
    category: 'Gadget & Electronic Commerce',
    description: 'Complete brand identity system for a forward-thinking tech startup, including logo design, color palette, and comprehensive brand guidelines.',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9813581-8cf0-47a3-8e50-7b6313139c4b_1600w.jpg',
    link: '#',
  },
  {
    id: '2',
    title: 'BugsRabbit',
    category: 'Annotation Tools',
    description: 'Comprehensive design system for an e-commerce platform, featuring 200+ components, design tokens, and implementation guidelines for consistent user experiences.',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9adad571-6e24-46b9-ba1a-306ebeedb73a_800w.jpg',
    link: '#',
  },
  {
    id: '3',
    title: 'Swissbel-hotel',
    category: 'Mobile App MVP',
    description: 'Complete UI/UX redesign of a productivity operating system, focusing on minimalism and user workflow optimization for enhanced daily productivity.',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a1ec0f4-f0c4-4620-b551-2cf2ec6832e4_1600w.jpg',
    link: '#',
  },
  {
    id: '4',
    title: 'Yara Bank',
    category: 'Web Experience',
    description: 'Modern banking web platform featuring intuitive account management, seamless transactions, and comprehensive financial tools designed for the digital-first customer.',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/608f5480-5a5a-48f2-ba16-38b548c291c0_1600w.jpg',
    link: '#',
  },
  {
    id: '5',
    title: 'Flux Mobile',
    category: 'Mobile App Design',
    description: 'Native mobile application for creative collaboration, featuring real-time editing, cloud synchronization, and an intuitive gesture-based interface for mobile workflows.',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8216c433-6c3e-43c1-9707-d087db50041b_800w.jpg',
    link: '#',
  },
  {
    id: '6',
    title: 'Analytics Pro',
    category: 'Dashboard Interface',
    description: 'Advanced analytics dashboard with interactive data visualization, custom reporting tools, and AI-powered insights for enterprise-level business intelligence.',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8292b1c-6443-4655-9c27-bf83487a8f60_800w.jpg',
    link: '#',
  },
];

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="max-w-7xl sm:px-8 mx-auto px-6 pb-24">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl text-black mb-4 font-geist tracking-tighter font-medium">
          Featured Work
        </h2>
        <p className="text-xl sm:text-2xl text-black/60 leading-relaxed max-w-3xl font-geist tracking-tighter font-medium">
          A curated selection of recent projects showcasing design thinking, creative problem-solving, and attention to detail across various industries and mediums.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};