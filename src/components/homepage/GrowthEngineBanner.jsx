import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const GrowthEngineBanner = () => {
  return (
    <section className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden flex items-center font-ibm">
      {/* Background Graphic: Rising arrows architectural backdrop */}
      <img
        src="https://growthjockey-prod.b-cdn.net/new/joinUs-v2.webp"
        alt="Rising geometric architectural backdrop representing venture growth engine"
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading="lazy"
      />

      {/* Deep blue gradient overlay matching the website theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#021338]/90 via-[#0A2E8A]/75 to-[#00A2ED]/50 z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
          
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white tracking-tight leading-[1.15] max-w-2xl drop-shadow-md"
          >
            Let&apos;s Build and Scale Your Next Venture.
          </motion.h2>

          {/* GrowthJockey Style "Build with us" CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="shrink-0"
          >
            <Link
              to="/contact-us"
              className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border border-white/80"
            >
              <span className="relative z-10 transition-colors group-hover:text-[#1F40CB]">
                Build with us
              </span>
              <ArrowRight className="w-4 h-4 text-slate-900 transition-all duration-300 group-hover:text-[#1F40CB] group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GrowthEngineBanner;

