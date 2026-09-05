import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="w-full relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden font-ibm"
      style={{
        background: 'linear-gradient(to right, #1F40CB, #0F2065, #162E92)',
      }}
    >
      {/* Background Subtle Tech Ambient Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 sm:gap-10">
        
        {/* Left Column: Headline and Value Proposition */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Ready for 10X Venture Acceleration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl font-medium sm:font-semibold text-white tracking-tight leading-[1.12] font-ibm">
            Ready to Build and Scale with <br />
            <span className="bg-gradient-to-r from-cyan-300 to-sky-100 bg-clip-text text-transparent">
              Big Feathers Technology?
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-white/80 text-sm sm:text-base leading-relaxed font-normal">
            Whether you are launching a new digital product from scratch or scaling an existing enterprise, our full-stack venture architects are ready to deploy.
          </p>
        </motion.div>

        {/* Right Column: Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0"
        >
          <Link
            to="/contact-us"
            className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="transition-colors group-hover:text-[#1F40CB]">
              Build with us
            </span>
            <ArrowRight className="w-4 h-4 text-slate-900 transition-all duration-300 group-hover:text-[#1F40CB] group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold border border-white/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Schedule Strategy Call</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;

