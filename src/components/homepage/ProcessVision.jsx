import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const processSteps = [
  {
    stepNumber: '01',
    phase: 'PHASE 01 // DISCOVERY & STRATEGY',
    title: 'Deep-Dive Discovery & Tailored Digital Architecture',
    description:
      'We analyze your market opportunities, map core user journeys, and architect scalable tech roadmaps, interactive UI/UX wireframes, and enterprise-grade data infrastructure.',
    tags: ['System Architecture', 'UI/UX Wireframes', 'Tech Stack Strategy'],
    duration: 'Week 1 - 2',
    image: 'https://growthjockey-prod.b-cdn.net/new/articleImage01-v2.webp',
    altText: 'Cluster of floating blue cubes forming a futuristic structure to illustrate discovery and architecture',
    link: '#technology',
  },
  {
    stepNumber: '02',
    phase: 'PHASE 02 // FULL-STACK DEVELOPMENT',
    title: 'High-Performance Engineering & Intelligent AI Integration',
    description:
      'From custom responsive websites and high-converting web apps to cross-platform mobile apps, CRM/ERP workflows, and custom AI chatbots, we engineer fast, secure, and maintainable software.',
    tags: ['Custom Web & Apps', 'CRM/ERP Automation', 'AI Chatbots'],
    duration: 'Week 3 - 6',
    image: 'https://growthjockey-prod.b-cdn.net/new/articleImage02-v2.webp',
    altText: 'Spinning radial disc representing full-stack engineering and AI integration',
    link: '#technology',
  },
  {
    stepNumber: '03',
    phase: 'PHASE 03 // CREATIVE & COMMERCE',
    title: 'Studio-Grade AI Visuals & Complete Marketplace Launch',
    description:
      'We generate studio-quality AI product photoshoots and model imagery, craft SEO-optimized product listings, and structure complete catalogue onboarding across Amazon, Flipkart, and Meesho.',
    tags: ['AI Photoshoots', 'Amazon & Flipkart', 'Catalogue Scaling'],
    duration: 'Week 7 - 8',
    image: 'https://growthjockey-prod.b-cdn.net/new/articleImage03-v2.webp',
    altText: 'Luminous interwoven strands symbolizing creative AI visuals and marketplace synergy',
    link: '#ecommerce',
  },
  {
    stepNumber: '04',
    phase: 'PHASE 04 // SCALE & REVENUE',
    title: 'Data-Driven Performance Marketing & Continuous ROI Growth',
    description:
      'We launch and scale targeted Meta and Google ad campaigns, execute continuous technical SEO, and utilize real-time conversion intelligence to maximize ROAS and drive predictable revenue.',
    tags: ['Meta & Google Ads', 'SEO Optimization', 'ROAS Scaling'],
    duration: 'Ongoing Growth',
    image: 'https://growthjockey-prod.b-cdn.net/new/articleImage04-v2.webp',
    altText: 'Interconnected 3D lattice symbolizing data-driven performance marketing and revenue scale',
    link: '#marketing',
  },
];

const ProcessVision = () => {
  return (
    <section className="w-full bg-white dark:bg-[#030A1E] text-gray-900 dark:text-white pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Headline only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.35rem] font-medium sm:font-semibold tracking-tight text-gray-900 dark:text-white leading-[1.12] font-ibm">
            <span className="bg-gradient-to-r from-[#00A2ED] to-[#1F40CB] bg-clip-text text-transparent">
              How we bring
            </span>{' '}
            your vision to life
          </h2>
        </motion.div>

        {/* 2x2 Process Cards Grid: Exact GrowthJockey height-locked animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-10 mt-5 sm:mt-6 lg:mt-7">
          {processSteps.map((step, idx) => (
            <motion.a
              key={step.stepNumber}
              href={step.link}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col w-full h-[25.5rem] sm:h-[28rem] lg:h-[29.5rem] rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-white dark:bg-[#06112C] hover:shadow-2xl hover:border-blue-200 dark:hover:border-[#00A2ED]/40 transition-all duration-500 cursor-pointer"
            >
              {/* 
                Top Image Container:
                - Unhovered: Occupies full upper height
                - Hovered: Shrinks/shifts up smoothly (transition-[height]), expanding the white description area below
              */}
              <div className="w-full h-[16rem] sm:h-[18rem] lg:h-[19rem] group-hover:h-[9.5rem] sm:group-hover:h-[10.5rem] lg:group-hover:h-[11rem] transition-[height] duration-500 ease-out overflow-hidden relative shrink-0">
                <img
                  src={step.image}
                  alt={step.altText}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Step Badge Overlay */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/90 shadow-sm border border-white/60 dark:border-white/20 flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-[#1F40CB]" />
                  <span className="text-[11px] sm:text-xs font-bold text-gray-900 dark:text-white tracking-wider font-ibm">
                    STEP {step.stepNumber}
                  </span>
                </div>
              </div>

              {/* 
                Content Area:
                - Expands upwards as the image contracts
                - Fixed overall card height (zero layout shift)
              */}
              <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 lg:p-7 bg-white dark:bg-[#06112C] transition-all duration-500">
                <div>
                  {/* Phase Kicker */}
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-[#00A2ED] font-ibm block mb-1">
                    {step.phase}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-[1.35rem] font-semibold sm:font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#00A2ED] transition-colors duration-200 font-ibm leading-snug line-clamp-2">
                    {step.title}
                  </h3>

                  {/* Description: Collapsed by default, expands and fades in on hover */}
                  <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-28 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="mt-3 text-sm sm:text-[14.5px] text-gray-600 dark:text-slate-300 leading-relaxed font-ibm font-normal line-clamp-2">
                      {step.description}
                    </p>

                    {/* Deliverable Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-[11px] font-medium text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-white/[0.06] px-2 py-0.5 rounded border border-gray-200/80 dark:border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Row: Timeline on Left, View Details on Right */}
                <div className="flex items-center justify-between pt-3.5 mt-auto border-t border-gray-100 dark:border-white/10">
                  {/* Timeline (Always visible on bottom-left, exactly like reference) */}
                  <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-gray-500 dark:text-slate-400 font-medium font-ibm">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{step.duration}</span>
                  </div>

                  {/* View Details Link: Slides in smoothly from the right on hover */}
                  <div className="flex items-center gap-1 text-xs sm:text-[13.5px] font-medium text-gray-900 group-hover:text-blue-600 transition-all duration-500 transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 font-ibm">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessVision;
