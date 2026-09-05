import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code2, 
  Sparkles, 
  ShoppingBag, 
  TrendingUp, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

const enterpriseLogos = [
  {
    name: 'Microsoft',
    darkSrc: 'https://growthjockey-prod.b-cdn.net/new/DarkLogos/Microsoft.webp',
    origSrc: 'https://growthjockey-prod.b-cdn.net/new/Original/Microsoft.webp',
  },
  {
    name: 'Samsung',
    darkSrc: 'https://growthjockey-prod.b-cdn.net/new/DarkLogos/Samsung.webp',
    origSrc: 'https://growthjockey-prod.b-cdn.net/new/Original/Samsung.webp',
  },
  {
    name: 'Infosys',
    darkSrc: 'https://growthjockey-prod.b-cdn.net/new/DarkLogos/Infosys.webp',
    origSrc: 'https://growthjockey-prod.b-cdn.net/new/Original/Infosys.webp',
  },
  {
    name: 'Jio',
    darkSrc: 'https://growthjockey-prod.b-cdn.net/new/DarkLogos/JIO.webp',
    origSrc: 'https://growthjockey-prod.b-cdn.net/new/Original/JIO.webp',
  },
  {
    name: 'OYO',
    darkSrc: 'https://growthjockey-prod.b-cdn.net/new/DarkLogos/OYO.webp',
    origSrc: 'https://growthjockey-prod.b-cdn.net/new/Original/OYO.webp',
  },
  {
    name: 'Rivigo',
    darkSrc: 'https://growthjockey-prod.b-cdn.net/new/DarkLogos/Rivigo.webp',
    origSrc: 'https://growthjockey-prod.b-cdn.net/new/Original/Rivigo.webp',
  },
];

const solutionsData = [
  {
    id: 'tech-solutions',
    pillar: '01 / ARCHITECTURE',
    title: 'Technology Solutions',
    description:
      'High-performance web, mobile, and cloud infrastructure engineered for zero downtime, resilient scaling, and seamless user experiences.',
    icon: Code2,
    badge: 'Core Engineering',
    services: [
      'Website Development',
      'Software Development',
      'Mobile App Development',
      'CRM / ERP',
      'Chatbot',
      'Business Automation',
    ],
  },
  {
    id: 'ai-solutions',
    pillar: '02 / INTELLIGENCE',
    title: 'AI Solutions',
    description:
      'Next-generation generative AI, intelligent vision workflows, and custom LLM applications designed to eliminate manual bottlenecks and accelerate product launches.',
    icon: Sparkles,
    badge: 'Generative AI',
    services: [
      'AI Product Photoshoot',
      'AI Model Photography',
      'Product Image Enhancement',
      'AI Content Generation',
      'AI-powered business solutions',
    ],
  },
  {
    id: 'ecommerce-solutions',
    pillar: '03 / MARKETPLACES',
    title: 'E-Commerce Solutions',
    description:
      'Omnichannel commerce scaling with automated cataloguing, rich marketplace optimization, and multi-platform listing synchronizations that drive conversions.',
    icon: ShoppingBag,
    badge: 'Commerce & Scale',
    services: [
      'Product Listing',
      'Catalogue Creation',
      'Product Description',
      'Marketplace Listing',
      'E-commerce Catalogue Design',
      'Amazon / Flipkart / Meesho listing support',
    ],
  },
  {
    id: 'digital-marketing',
    pillar: '04 / REVENUE ACCELERATION',
    title: 'Digital Marketing',
    description:
      'Data-driven performance growth, search domination, and targeted multichannel campaigns engineered to deliver high-converting customer acquisition at scale.',
    icon: TrendingUp,
    badge: 'Performance Growth',
    services: [
      'Social Media Marketing',
      'SEO',
      'Performance Marketing',
      'Content Marketing',
      'Meta / Google Ads',
    ],
  },
];

const VentureArchitects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSolutions =
    activeTab === 'all'
      ? solutionsData
      : solutionsData.filter((s) => s.id === activeTab);

  return (
    <section className="w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden font-ibm">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Part: GrowthJockey Signature "Not Just Experts. Venture Architects." layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center pb-16 sm:pb-20 border-b border-slate-200">
          
          {/* Left Column: Trusted Enterprise & Pedigree Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 items-center justify-center p-4 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100"
          >
            {enterpriseLogos.map((logo, index) => (
              <div
                key={index}
                className="group relative h-16 sm:h-20 flex items-center justify-center p-3 rounded-xl bg-white border border-slate-200/70 hover:border-[#1F40CB]/40 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Monochrome/Dark Logo */}
                <img
                  src={logo.darkSrc}
                  alt={logo.name}
                  loading="lazy"
                  className="max-h-7 sm:max-h-9 max-w-[85%] object-contain filter grayscale opacity-70 group-hover:opacity-0 transition-opacity duration-300"
                />
                {/* Original/Color Logo on Hover */}
                <img
                  src={logo.origSrc}
                  alt={logo.name}
                  loading="lazy"
                  className="absolute max-h-7 sm:max-h-9 max-w-[85%] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>

          {/* Right Column: High-Impact Typography & Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl font-bold text-slate-900 tracking-tight leading-[1.12]">
              Not Just Developers.{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#00A2ED] to-[#1F40CB] bg-clip-text text-transparent whitespace-nowrap">
                Venture Architects.
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              With proven engineering execution across custom software, generative AI, omnichannel commerce, and performance marketing, our roots lie in building what works. We bring disciplined venture building to every partnership.
            </p>

            {/* Dual CTA Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-[#1F40CB] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <span>Who we are</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-300/80 transition-all duration-200"
              >
                <span>Start a project</span>
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Bottom Part: The Core 4 Solutions Ecosystem (User's Exact Offerings) */}
        <div className="pt-16 sm:pt-20">
          
          {/* Section Sub-heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F40CB]">
                Our Full-Stack Capabilities
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Solutions Engineered For Digital Ventures
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Solutions' },
                { id: 'tech-solutions', label: 'Tech' },
                { id: 'ai-solutions', label: 'AI' },
                { id: 'ecommerce-solutions', label: 'E-Commerce' },
                { id: 'digital-marketing', label: 'Marketing' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#1F40CB] to-[#00A2ED] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Solutions Solid Cards Grid (NO Glassmorphism) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredSolutions.map((solution, idx) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group relative rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 hover:border-[#1F40CB]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Pillar tag & Category Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-bold text-slate-400 tracking-wider">
                        {solution.pillar}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#1F40CB] border border-blue-100">
                        {solution.badge}
                      </span>
                    </div>

                    {/* Card Title & Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1F40CB] to-[#00A2ED] flex items-center justify-center text-white shrink-0 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#1F40CB] transition-colors">
                        {solution.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    {/* Sub-services List with Checkmarks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-100">
                      {solution.services.map((service, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium py-1 px-2 rounded-lg bg-slate-50 group-hover:bg-blue-50/50 transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1F40CB] shrink-0" />
                          <span className="truncate">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                      Customized Deployment
                    </span>
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F40CB] hover:text-blue-700 group-hover:translate-x-1 transition-all"
                    >
                      <span>Consult With Our Experts</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default VentureArchitects;

