import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ventureCards = [
  {
    id: 'card-1',
    tag: 'WEB & APP DEV',
    metric: '10X',
    description: 'Faster digital transformation with scalable custom web & mobile apps',
    src: 'https://growthjockey-prod.b-cdn.net/new/VentureCard1-v2.webp',
    altText: 'Web and software development acceleration card',
    href: '#technology',
    desktopColumn: 0,
    mobileColumn: 0,
  },
  {
    id: 'card-2',
    tag: 'GENERATIVE AI',
    metric: '4X',
    description: 'Faster product launch cycles with studio-grade AI photography & visuals',
    src: 'https://growthjockey-prod.b-cdn.net/new/VentureCard2-v2.webp',
    altText: 'Generative AI photoshoot and model visual card',
    href: '#ai-solutions',
    desktopColumn: 1,
    mobileColumn: 0,
  },
  {
    id: 'card-3',
    tag: 'E-COMMERCE SCALING',
    metric: '3.5X',
    description: 'Sales growth across Amazon, Flipkart & Meesho catalogue management',
    src: 'https://growthjockey-prod.b-cdn.net/new/VentureCard3-v2.webp',
    altText: 'Marketplace catalogue scaling card for Amazon and Flipkart',
    href: '#ecommerce',
    desktopColumn: 1,
    mobileColumn: 1,
  },
  {
    id: 'card-4',
    tag: 'PERFORMANCE MARKETING',
    metric: '4.5X',
    description: 'Average ROAS delivered across high-converting Meta & Google Ad campaigns',
    src: 'https://growthjockey-prod.b-cdn.net/new/VentureCard4-v2.webp',
    altText: 'Performance marketing and ROAS delivery card',
    href: '#marketing',
    desktopColumn: 2,
    mobileColumn: 1,
  },
  {
    id: 'card-5',
    tag: 'SMART AUTOMATION',
    metric: '60%',
    description: 'Reduction in operational workload through custom CRM & AI chatbots',
    src: 'https://growthjockey-prod.b-cdn.net/new/VentureCard5-v2.webp',
    altText: 'Business automation and CRM workflow optimization card',
    href: '#technology',
    desktopColumn: 2,
    mobileColumn: 0,
  },
  {
    id: 'card-6',
    tag: 'SEO & ORGANIC GROWTH',
    metric: '250%',
    description: 'Increase in organic search traffic and qualified high-intent leads',
    src: 'https://growthjockey-prod.b-cdn.net/new/VentureCard6-v2.webp',
    altText: 'SEO and organic lead generation growth card',
    href: '#marketing',
    desktopColumn: 2,
    mobileColumn: 1,
  },
];

const CardItem = ({ card }) => {
  return (
    <motion.a
      href={card.href}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group relative block w-full h-[15rem] sm:h-[16rem] lg:h-[17.5rem] xl:h-[18.5rem] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1.5 isolate"
    >
      {/* Background Image: Always 100% visible, subtle zoom on hover */}
      <img
        src={card.src}
        alt={card.altText}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
      />

      {/* Card Content: Top stat + Bottom description & action link */}
      <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-5.5 lg:p-6">
        {/* Top: Category Tag & Big Metric */}
        <div>
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-white uppercase font-ibm">
            {card.tag}
          </span>

          <div className="mt-2 sm:mt-2.5 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-none font-ibm">
            {card.metric}
          </div>
        </div>

        {/* Bottom: Description placed at the bottom, just above the Know more button */}
        <div className="mt-auto pt-3 flex flex-col gap-2 sm:gap-2.5">
          <p className="text-sm sm:text-[14.5px] lg:text-[15px] text-white leading-snug font-medium font-ibm drop-shadow-sm">
            {card.description}
          </p>

          {/* Know More Link: Reveals smoothly on hover */}
          <div className="flex items-center gap-1.5 text-xs sm:text-[13.5px] font-medium text-white opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span>Know more</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const VenturePartner = () => {
  return (
    <section className="w-full bg-white dark:bg-[#020B24] text-gray-900 dark:text-white pt-3 sm:pt-5 lg:pt-6 pb-8 sm:pb-12 lg:pb-14 px-6 sm:px-8 lg:px-12 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[38%_minmax(0,1fr)] xl:grid-cols-[40%_minmax(0,1fr)] gap-8 lg:gap-10 xl:gap-12 items-start">
        
        {/* Left Column (38%-40%): Brand Headline, Pitch, CTA & 3D Feature Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col self-start pt-1 lg:pt-2"
        >
          {/* Kicker: Tailored to Big Feathers Technology (tight spacing to headline) */}
          <div className="block mb-1 sm:mb-1.5">
            <span className="text-[15px] sm:text-[1.05rem] lg:text-[1.18rem] xl:text-[1.22rem] font-medium tracking-normal text-gray-800 dark:text-slate-300 font-ibm">
              Full-Stack Tech, AI & Digital Growth Partner
            </span>
          </div>

          {/* Headline with Exact GrowthJockey Line Wrap and Signature Gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.35rem] font-medium sm:font-semibold tracking-tight text-gray-900 dark:text-white leading-[1.12] font-ibm">
            <div>
              We{' '}
              <span className="bg-gradient-to-r from-[#00A2ED] to-[#1F40CB] bg-clip-text text-transparent">
                Design.
              </span>{' '}
              We
            </div>
            <div>
              <span className="bg-gradient-to-r from-[#00A2ED] to-[#1F40CB] bg-clip-text text-transparent">
                Build.
              </span>{' '}
              We{' '}
              <span className="bg-gradient-to-r from-[#00A2ED] to-[#1F40CB] bg-clip-text text-transparent">
                Scale.
              </span>
            </div>
          </h2>

          {/* Copy: Tailored to Big Feathers Technology services */}
          <div className="mt-4 sm:mt-5 lg:mt-6 space-y-4 text-gray-800 dark:text-slate-300 text-sm sm:text-[15.5px] lg:text-[16.5px] leading-[1.65] font-medium font-ibm max-w-xl">
            <p>
              From concept to code, we engineer high-performance websites, custom software, mobile apps,
              and intelligent business automation that streamline operations and give brands a competitive edge.
            </p>
            <p>
              We scale businesses end-to-end — combining studio-grade AI product photography, complete marketplace
              catalogue management on Amazon, Flipkart, and Meesho, and data-driven performance marketing that drives consistent revenue growth.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-5 sm:mt-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-lg bg-[#1F40CB] hover:bg-blue-800 text-white font-medium text-sm transition-all duration-200 shadow-md group hover:shadow-lg hover:scale-[1.01]"
            >
              <span>Build with us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Feature Illustration Image: Sized to match paragraph width and scale proportionally */}
          <div className="mt-6 sm:mt-8 w-full max-w-xl">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-white/10 w-full">
              <img
                src="https://growthjockey-prod.b-cdn.net/new/VentureCardImage-v2.webp"
                alt="Stylized hands raising a glowing sphere with cubes rising above, symbolizing nurturing ventures from concept to scalable innovation"
                className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>


        {/* Right Column: 3 Staggered Columns on Desktop, 2 Columns on Mobile/Tablet */}
        <div className="w-full flex items-center justify-center lg:justify-end">
          {/* Desktop 3-Column Staggered Grid (>= 1024px) */}
          <div className="hidden lg:grid grid-cols-3 gap-3.5 xl:gap-5 items-center w-full min-h-[46rem] xl:min-h-[52rem]">
            
            {/* Column 0: 1 Card (Vertically Centered in grid) */}
            <div className="grid grid-cols-1 gap-4 xl:gap-5">
              {ventureCards
                .filter((card) => card.desktopColumn === 0)
                .map((card) => (
                  <CardItem key={card.id} card={card} />
                ))}
            </div>

            {/* Column 1: 2 Cards (Vertically Centered in grid) */}
            <div className="grid grid-cols-1 gap-4 xl:gap-5">
              {ventureCards
                .filter((card) => card.desktopColumn === 1)
                .map((card) => (
                  <CardItem key={card.id} card={card} />
                ))}
            </div>

            {/* Column 2: 3 Cards (Vertically Centered in grid) */}
            <div className="grid grid-cols-1 gap-4 xl:gap-5">
              {ventureCards
                .filter((card) => card.desktopColumn === 2)
                .map((card) => (
                  <CardItem key={card.id} card={card} />
                ))}
            </div>

          </div>

          {/* Mobile & Tablet 2-Column Grid (< 1024px) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto w-full lg:hidden">
            {ventureCards.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VenturePartner;
