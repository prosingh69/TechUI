import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const trustMetrics = [
  {
    number: '250+',
    line1: 'Digital Products &',
    line2: 'Micro-services Engineered',
  },
  {
    number: '32+',
    line1: 'High-Growth Tech Ventures',
    line2: 'Co-Built & Scaled',
  },
  {
    number: '780+',
    line1: 'Strategic Agile Sprints',
    line2: 'Successfully Delivered',
  },
  {
    number: '>98%',
    line1: 'Client & Enterprise',
    line2: 'Satisfaction Rate',
  },
];

const AboutUs = () => {
  return (
    <div className="w-full bg-[#020B24] text-white">
      {/* 
        First Screen Fold (Exact 100vh / 100dvh):
        - Both Hero Section and Trust Metrics strip are 100% visible at scroll 0 without clipping
      */}
      <div className="w-full h-screen h-[100dvh] max-h-[100dvh] flex flex-col justify-between relative overflow-hidden bg-[#020B24]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://growthjockey-prod.b-cdn.net/new/wwaHeroSection.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Dark Gradient Overlay for flawless contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020B24]/80 via-[#020B24]/50 to-[#020B24]/90 z-0 pointer-events-none" />

        {/* Hero Content Fold (Comfortably centered between Navbar and Bottom Trust Strip) */}
        <div className="flex-1 min-h-0 w-full relative z-10 flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto pt-14 sm:pt-16 pb-2">
          <div className="max-w-3xl">
            {/* Editorial Serif Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-ibm-serif text-2xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.5rem] font-normal leading-[1.14] tracking-tight text-white mb-3 sm:mb-4"
            >
              Designing, Building &amp; Scaling the Ventures of Tomorrow
            </motion.h1>

            {/* Tailored BigFeathers Technology Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xs sm:text-sm lg:text-base text-white/85 max-w-2xl font-ibm leading-relaxed mb-5 sm:mb-6 font-light"
            >
              BigFeathers Technology is a full-stack digital engineering and venture building company.
              We partner with founders and enterprises to design, architect, and scale high-impact
              digital products, intelligent AI workflows, and modern cloud ecosystems.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-white text-[#020B24] font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00A2ED] hover:to-[#1F40CB] hover:text-white shadow-xl group w-fit font-ibm"
              >
                <span>Connect with us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 
          Trust & Metrics Strip:
          Fully visible docked at the bottom of the initial screen fold at scroll 0 (no cutting)
        */}
        <div className="w-full bg-white dark:bg-[#020B24] border-t border-slate-200 dark:border-white/10 z-20 shrink-0 py-2.5 sm:py-3 lg:py-3.5 shadow-[0_-4px_25px_rgba(0,0,0,0.15)] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 items-center">
              {trustMetrics.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-2"
                >
                  <span className="text-xl sm:text-2xl lg:text-[2.15rem] font-bold tracking-tight bg-gradient-to-r from-[#00A2ED] to-[#1F40CB] bg-clip-text text-transparent font-ibm leading-none mb-1">
                    {item.number}
                  </span>
                  <p className="text-[11px] sm:text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug font-ibm">
                    {item.line1}
                    <br />
                    {item.line2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Complete Website Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;

