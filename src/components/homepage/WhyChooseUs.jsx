import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    id: 'reason-1',
    pillar: '01 / VENTURE ARCHITECTURE',
    title: 'Full-Stack Execution Over Advisory Slides',
    description:
      'We do not hand over generic slide decks. Our in-house team designs, codes, deploys, and scales production-ready web and mobile ecosystems ground up.',
    image: 'https://growthjockey-prod.b-cdn.net/new/clientStories2-v2.webp',
    alt: '3D analytical blocks representing architecture and velocity',
    link: '/contact-us',
  },
  {
    id: 'reason-2',
    pillar: '02 / AI & AUTOMATION',
    title: 'Battle-Tested AI & Modern Cloud Systems',
    description:
      'Harness custom generative AI models, autonomous CRM agent workflows, and resilient serverless microservices engineered for 99.9% uptime SLA.',
    image: 'https://growthjockey-prod.b-cdn.net/new/clientStories3-v2.webp',
    alt: 'Fluid digital waves representing modern AI systems',
    link: '/contact-us',
  },
  {
    id: 'reason-3',
    pillar: '03 / COMMERCE & GROWTH',
    title: 'E-Commerce Scaling & Revenue Growth',
    description:
      'Automated multi-platform marketplace listings on Amazon & Flipkart, paired with high-converting performance marketing campaigns.',
    image: 'https://growthjockey-prod.b-cdn.net/new/clientStories1-v2.webp',
    alt: 'Glowing futuristic sphere representing market growth',
    link: '/contact-us',
  },
];

const trustPoints = [
  '100% In-house architecture, design & full-stack development',
  'Rapid zero-to-one prototyping to production deployment',
  'Data-driven performance guarantees & measurable commercial ROI',
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white text-slate-900 pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 lg:pb-10 px-6 sm:px-8 lg:px-12 relative overflow-hidden font-ibm">
      <div className="max-w-7xl mx-auto">
        {/* GrowthJockey Signature 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-9">
          
          {/* Quadrant 1 (Top Left): Section Header & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between h-full py-1 lg:py-2 pr-0 lg:pr-6"
          >
            <div>
              {/* Main Heading - Exact matching ProcessVision typography */}
              <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.35rem] font-medium sm:font-semibold tracking-tight text-gray-900 leading-[1.12] font-ibm">
                Why Choose Us <br />
                <span className="bg-gradient-to-r from-[#00A2ED] to-[#1F40CB] bg-clip-text text-transparent whitespace-nowrap">
                  To Build & Scale
                </span>
              </h2>

              {/* Body Description */}
              <p className="mt-4 sm:mt-5 text-gray-600 text-sm sm:text-base leading-[1.7] font-normal font-ibm">
                From zero-to-one venture building to enterprise-level digital expansion, our venture engineering system replaces guesswork with validated execution. We align design, technology, and commercial strategy to build businesses that lead markets.
              </p>

              {/* Key Trust Checkpoints */}
              <div className="mt-6 sm:mt-7 space-y-3">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium font-ibm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F40CB] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro CTA link at bottom of Quadrant 1 */}
            <div className="mt-8 pt-5 border-t border-gray-200 flex items-center justify-between font-ibm">
              <span className="text-xs text-gray-500 font-normal">
                Proven across 50+ ventures & enterprises
              </span>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F40CB] hover:text-blue-700 transition-colors group"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Quadrant 2 (Top Right): Card 1 - Venture Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative h-[20rem] sm:h-[23rem] lg:h-auto min-h-[20rem] lg:min-h-[23rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
          >
            {/* Background Image with Zoom */}
            <img
              src={reasons[0].image}
              alt={reasons[0].alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Gradient Overlay for optimal readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B24]/95 via-[#020B24]/60 to-black/30" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-7 lg:p-8 text-white">
              {/* Header: Pillar Badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded bg-white/15 backdrop-blur-md border border-white/20 text-white">
                  {reasons[0].pillar}
                </span>
              </div>

              {/* Bottom: Title, Description & Action */}
              <div>
                <h3 className="text-xl sm:text-2xl font-medium sm:font-semibold text-white leading-tight group-hover:text-cyan-200 transition-colors">
                  {reasons[0].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed font-light sm:font-normal line-clamp-2">
                  {reasons[0].description}
                </p>

                <div className="mt-4 flex items-center justify-end">
                  <Link
                    to={reasons[0].link}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-xs font-medium text-white transition-all duration-200 group-hover:bg-white group-hover:text-slate-900 group-hover:border-transparent"
                  >
                    <span>Explore Capability</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quadrant 3 (Bottom Left): Card 2 - AI & Automation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative h-[20rem] sm:h-[23rem] lg:h-auto min-h-[20rem] lg:min-h-[23rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
          >
            {/* Background Image with Zoom */}
            <img
              src={reasons[1].image}
              alt={reasons[1].alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Gradient Overlay for optimal readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B24]/95 via-[#020B24]/60 to-black/30" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-7 lg:p-8 text-white">
              {/* Header: Pillar Badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded bg-white/15 backdrop-blur-md border border-white/20 text-white">
                  {reasons[1].pillar}
                </span>
              </div>

              {/* Bottom: Title, Description & Action */}
              <div>
                <h3 className="text-xl sm:text-2xl font-medium sm:font-semibold text-white leading-tight group-hover:text-cyan-200 transition-colors">
                  {reasons[1].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed font-light sm:font-normal line-clamp-2">
                  {reasons[1].description}
                </p>

                <div className="mt-4 flex items-center justify-end">
                  <Link
                    to={reasons[1].link}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-xs font-medium text-white transition-all duration-200 group-hover:bg-white group-hover:text-slate-900 group-hover:border-transparent"
                  >
                    <span>Explore Capability</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quadrant 4 (Bottom Right): Card 3 - Commerce & Scaling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative h-[20rem] sm:h-[23rem] lg:h-auto min-h-[20rem] lg:min-h-[23rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
          >
            {/* Background Image with Zoom */}
            <img
              src={reasons[2].image}
              alt={reasons[2].alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Gradient Overlay for optimal readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B24]/95 via-[#020B24]/60 to-black/30" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-7 lg:p-8 text-white">
              {/* Header: Pillar Badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded bg-white/15 backdrop-blur-md border border-white/20 text-white">
                  {reasons[2].pillar}
                </span>
              </div>

              {/* Bottom: Title, Description & Action */}
              <div>
                <h3 className="text-xl sm:text-2xl font-medium sm:font-semibold text-white leading-tight group-hover:text-cyan-200 transition-colors">
                  {reasons[2].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed font-light sm:font-normal line-clamp-2">
                  {reasons[2].description}
                </p>

                <div className="mt-4 flex items-center justify-end">
                  <Link
                    to={reasons[2].link}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-xs font-medium text-white transition-all duration-200 group-hover:bg-white group-hover:text-slate-900 group-hover:border-transparent"
                  >
                    <span>Explore Capability</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* GrowthJockey Style Bottom Bar with "Build with us" CTA */}
        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-3 sm:pt-3.5 border-t border-slate-100">
          <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left font-medium">
            Ready to build, launch, or scale your venture with <span className="text-slate-900 font-semibold">Big Feathers Technology</span>?
          </p>

          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1F40CB] to-[#00A2ED] hover:from-[#1935aa] hover:to-[#008ecf] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] group"
          >
            <span>Build with us</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

