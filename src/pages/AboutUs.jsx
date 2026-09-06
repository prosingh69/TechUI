import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const trustMetrics = [
  {
    number: '250+',
    line1: 'Venture Micro-services',
    line2: 'Engineered',
  },
  {
    number: '32+',
    line1: 'Ventures Co-Built across',
    line2: 'Industries',
  },
  {
    number: '780+',
    line1: 'Strategic Sprints',
    line2: 'Completed',
  },
  {
    number: '>98%',
    line1: 'Venture Owner',
    line2: 'Satisfaction',
  },
];

const AboutUs = () => {
  return (
    <div className="w-full bg-[#020B24] text-white">
      {/* 
        First Screen Fold (Exact 100vh / 100svh):
        - Background: GrowthJockey official ambient high-tech network video
        - Top/Middle: Breadcrumb + Serif Headline + Description + Connect CTA
        - Bottom: Trust / Metrics strip docked at the bottom of the first screen
      */}
      <div className="w-full h-screen max-h-screen min-h-[640px] flex flex-col justify-between relative overflow-hidden bg-[#020B24]">
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

        {/* Ambient Dark Gradient Overlay for flawless contrast & typography pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020B24]/75 via-[#020B24]/45 to-[#020B24]/85 z-0 pointer-events-none" />

        {/* Hero Content Fold (Centered vertically between Navbar and Bottom Strip) */}
        <div className="flex-1 min-h-0 w-full relative z-10 flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto pt-16 sm:pt-20">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 mb-3 sm:mb-5 font-ibm"
            >
              <Link
                to="/"
                className="hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-[#00A2ED] font-semibold">Who We Are</span>
            </motion.div>

            {/* Editorial Serif Heading (Exact GrowthJockey IBM Plex Serif) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-ibm-serif text-3xl sm:text-5xl lg:text-[4rem] xl:text-[4.25rem] font-normal leading-[1.14] tracking-tight text-white mb-4 sm:mb-6"
            >
              Designing, Building &amp; Scaling the Ventures of Tomorrow
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-white/85 max-w-2xl font-ibm leading-relaxed mb-6 sm:mb-8 font-light"
            >
              BigFeathers is a full-stack venture building company. We partner with enterprises to
              design, build, and scale businesses to turn ideas into market-leading ventures.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-white text-[#020B24] font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00A2ED] hover:to-[#1F40CB] hover:text-white shadow-xl group w-fit font-ibm"
              >
                <span>Connect with us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 
          Trust & Metrics Strip:
          Docked at the bottom of the 100svh first screen fold
        */}
        <div className="w-full bg-white dark:bg-[#020B24] border-t border-slate-200 dark:border-white/10 z-20 shrink-0 py-4 sm:py-5 lg:py-6 shadow-[0_-4px_25px_rgba(0,0,0,0.15)] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
              {trustMetrics.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-2"
                >
                  <span className="text-2xl sm:text-3xl lg:text-[2.65rem] font-bold tracking-tight bg-gradient-to-r from-[#00A2ED] to-[#1F40CB] bg-clip-text text-transparent font-ibm leading-none mb-1 sm:mb-1.5">
                    {item.number}
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug font-ibm">
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
