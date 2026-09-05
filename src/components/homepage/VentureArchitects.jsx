import React from 'react';
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

  return (
    <section className="w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden font-ibm">
      <div className="max-w-7xl mx-auto">
        
        {/* Part 1: The Core 4 Solutions Ecosystem (User's Exact Offerings) */}
        <div className="pb-12 sm:pb-14 lg:pb-16 border-b border-slate-200/80">
          
          {/* Section Sub-heading: Single Line */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-medium sm:font-semibold text-slate-900 tracking-tight font-ibm">
              End-to-End Solutions to{' '}
              <span className="bg-gradient-to-r from-[#00A2ED] to-[#1F40CB] bg-clip-text text-transparent">
                Build, Automate & Scale
              </span>
            </h3>
          </div>

          {/* 4 Solutions Solid Cards Grid (NO Glassmorphism) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {solutionsData.map((solution, idx) => {
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

        {/* Part 2: Pricing & Engagement Models layout */}
        <div className="pt-12 sm:pt-14 lg:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 2 Pricing Cards (Clean Placeholders) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-stretch w-full"
          >
            {/* Pricing Card 1 */}
            <div className="relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50/90 border border-slate-200/90 hover:border-slate-300 shadow-sm transition-all duration-300 min-h-[290px] sm:min-h-[310px]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 font-ibm">
                    Plan 01
                  </span>
                </div>

                <div className="mt-4 sm:mt-5">
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 font-ibm">
                    Sprint Plan
                  </h3>
                  <div className="mt-2.5 flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-ibm tracking-tight">
                      ₹—
                    </span>
                    <span className="text-xs text-slate-500 font-ibm">
                      / sprint
                    </span>
                  </div>
                </div>

                {/* Empty content area ready for user's features */}
                <div className="mt-5 py-6 px-4 rounded-xl border border-dashed border-slate-200/90 bg-white/60 flex items-center justify-center text-center">
                  <span className="text-xs text-slate-400 font-normal font-ibm">
                    Features placeholder
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  to="/contact-us"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-medium border border-slate-300 shadow-sm transition-all duration-200 font-ibm"
                >
                  <span>Select Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pricing Card 2 (Highlighted) */}
            <div className="relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#1F40CB]/40 hover:border-[#1F40CB] shadow-md hover:shadow-xl transition-all duration-300 min-h-[290px] sm:min-h-[310px]">
              {/* Popular Badge */}
              <div className="absolute -top-3 right-6">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#1F40CB] to-[#00A2ED] text-white shadow-sm font-ibm">
                  Popular
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#1F40CB] border border-blue-100 font-ibm">
                    Tier 02
                  </span>
                </div>

                <div className="mt-4 sm:mt-5">
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 font-ibm">
                    Scale Squad
                  </h3>
                  <div className="mt-2.5 flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-ibm tracking-tight">
                      ₹—
                    </span>
                    <span className="text-xs text-slate-500 font-ibm">
                      / month
                    </span>
                  </div>
                </div>

                {/* Empty content area ready for user's features */}
                <div className="mt-5 py-6 px-4 rounded-xl border border-dashed border-blue-200/80 bg-blue-50/20 flex items-center justify-center text-center">
                  <span className="text-xs text-blue-400 font-normal font-ibm">
                    Features placeholder
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  to="/contact-us"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#1F40CB] to-[#00A2ED] hover:opacity-95 text-white text-xs sm:text-sm font-medium shadow-md transition-all duration-200 font-ibm"
                >
                  <span>Select Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Typography & Dual CTAs for Pricing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#1F40CB] mb-2 sm:mb-2.5 block font-ibm">
              Pricing & Engagement Models
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.35rem] font-medium sm:font-semibold tracking-tight text-slate-900 leading-[1.12] font-ibm">
              Transparent Pricing.{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#00A2ED] to-[#1F40CB] bg-clip-text text-transparent whitespace-nowrap">
                Engineered to Scale.
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal font-ibm">
              Predictable, value-driven investment models tailored to your stage of growth. From rapid MVP sprints to dedicated venture engineering squads, get transparent deliverables with zero hidden costs.
            </p>

            {/* Dual CTA Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-[#1F40CB] text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg group font-ibm"
              >
                <span>Get a custom quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium border border-slate-300/80 transition-all duration-200 font-ibm"
              >
                <span>Schedule a consult</span>
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default VentureArchitects;

