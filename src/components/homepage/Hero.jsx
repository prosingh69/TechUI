import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 0,
    video: '/heroBanner02.mp4', // Structured tech cubes
    duration: 5.17,
    kicker: 'Technology Solutions',
    titleLines: ['Custom Software &', 'Web Development'],
    description:
      'High-performance websites, mobile apps, CRM/ERP systems, chatbots, and business automation.',
    cta: 'Explore Tech Solutions',
    href: '#technology',
  },
  {
    id: 1,
    video: '/heroBanner04.mp4', // AI transformation ring
    duration: 5.0,
    kicker: 'AI Solutions',
    titleLines: ['Generative AI &', 'Smart Automation'],
    description:
      'AI product photoshoots, model photography, image enhancement, and intelligent AI-powered solutions.',
    cta: 'Explore AI Solutions',
    href: '#ai-solutions',
  },
  {
    id: 2,
    video: '/heroBanner03.mp4', // Scaling pillars & sphere
    duration: 4.0,
    kicker: 'E-Commerce Solutions',
    titleLines: ['Marketplace Growth &', 'Catalogue Scaling'],
    description:
      'Product listing, catalogue creation, descriptions, and full support for Amazon, Flipkart & Meesho.',
    cta: 'Scale Your Store',
    href: '#ecommerce',
  },
  {
    id: 3,
    video: '/heroBanner01.mp4', // Network audience innovation
    duration: 5.08,
    kicker: 'Digital Marketing',
    titleLines: ['Performance Marketing', '& SEO Growth'],
    description:
      'Data-driven SEO, social media marketing, content marketing, and high-converting Meta & Google Ads.',
    cta: 'Accelerate Growth',
    href: '#marketing',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDuration, setActiveDuration] = useState(slides[0].duration);
  const videoRefs = useRef([]);

  // Control video playback when slide changes
  useEffect(() => {
    const activeVideo = videoRefs.current[currentIndex];

    if (activeVideo) {
      activeVideo.currentTime = 0;
      if (activeVideo.duration) {
        setActiveDuration(activeVideo.duration);
      } else {
        setActiveDuration(slides[currentIndex].duration);
      }
      const playPromise = activeVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy handled
        });
      }
    }

    videoRefs.current.forEach((v, idx) => {
      if (v && idx !== currentIndex) {
        v.pause();
      }
    });
  }, [currentIndex]);

  const handleLoadedMetadata = (index) => {
    if (index === currentIndex) {
      const activeVideo = videoRefs.current[index];
      if (activeVideo && activeVideo.duration) {
        setActiveDuration(activeVideo.duration);
      }
    }
  };

  const handleVideoEnded = (index) => {
    if (index === currentIndex) {
      goToNext();
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      {/* Background Videos with Framer Motion Cinematic Transition */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.06,
                zIndex: isActive ? 10 : 0,
              }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0 w-full h-full will-change-transform"
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={slide.video}
                playsInline
                autoPlay
                muted
                preload="auto"
                onLoadedMetadata={() => handleLoadedMetadata(idx)}
                onEnded={() => handleVideoEnded(idx)}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}

        {/* Cinematic subtle light sweep on slide switch */}
        <AnimatePresence>
          <motion.div
            key={`light-sweep-${currentIndex}`}
            initial={{ opacity: 0.25, x: '-10%' }}
            animate={{ opacity: 0, x: '10%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-transparent pointer-events-none z-15 mix-blend-screen"
          />
        </AnimatePresence>

        {/* Ambient Dark Gradient Overlays for high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#021338]/20 to-[#021338]/80 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021338]/90 via-transparent to-black/20 z-20 pointer-events-none" />
      </div>

      {/* Main Hero Content - Vertically centered between Navbar (Free Demo) and Progress Bars */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-end h-full pt-14 sm:pt-16 pb-8 sm:pb-10">
        {/* Entire Right Content Block: You can change `translate-y-[20px]` to any pixel value to shift up/down */}
        <div className="w-full lg:max-w-3xl xl:max-w-4xl flex flex-col items-start lg:items-end text-left lg:text-right translate-y-[17px]">
          
          {/* 1. Kicker: Service Category - Match GrowthJockey white normal title case */}
          <div className="h-5 sm:h-6 flex items-center justify-start lg:justify-end w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={`kicker-${currentIndex}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="text-white/80 font-normal sm:font-medium text-xs sm:text-sm tracking-normal"
              >
                {currentSlide.kicker}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* 2. Headline: Refined, elegant medium-weight GrowthJockey typography */}
          <div className="min-h-[78px] sm:min-h-[100px] lg:min-h-[128px] xl:min-h-[148px] flex flex-col justify-start items-start lg:items-end w-full mt-1 sm:mt-2">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-[1.75rem] sm:text-[2.2rem] md:text-[2.85rem] lg:text-[3.75rem] xl:text-[4.35rem] font-normal sm:font-[450] lg:font-medium tracking-[-0.02em] leading-[1.08] font-ibm"
              >
                {currentSlide.titleLines.map((line, lIdx) => (
                  <div key={lIdx} className="leading-[1.08]">{line}</div>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* 3. Subheading: Refined light/normal weight */}
          <div className="h-[44px] sm:h-[50px] flex items-start justify-start lg:justify-end w-full max-w-xl mt-2 sm:mt-2.5">
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="text-white/75 text-xs sm:text-sm lg:text-[15px] font-light sm:font-normal leading-relaxed"
              >
                {currentSlide.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* 4. Button: Horizontally aligned text and arrow icon with synchronized slide animation */}
          <div className="mt-3.5 sm:mt-4 h-10 sm:h-11 flex items-center justify-start lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={`btn-${currentIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={currentSlide.href}
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-white text-[#1A1D2E] font-medium text-xs sm:text-sm hover:bg-gray-100 transition-all duration-200 shadow-md group shrink-0 leading-none"
                >
                  <span className="leading-none">{currentSlide.cta}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* 4 Loading Progress Bars: Fixed at bottom right of Hero */}
      <div className="absolute bottom-2.5 sm:bottom-3 left-0 right-0 z-30 pointer-events-none">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-end">
          <div className="flex items-center gap-2.5 sm:gap-3 pointer-events-auto">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Switch to slide ${idx + 1}`}
                  className="group py-2 cursor-pointer focus:outline-none flex items-center"
                >
                  {/* Track Bar (starts white, fills with solid dark blue) */}
                  <div className="relative h-[2.5px] w-11 sm:w-16 rounded-full bg-white overflow-hidden transition-opacity duration-300">
                    {isActive ? (
                      <motion.div
                        key={`progress-bar-${currentIndex}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{
                          duration: activeDuration || slide.duration,
                          ease: 'linear',
                        }}
                        className="absolute top-0 left-0 h-full rounded-full bg-[#1a39b3]"
                      />
                    ) : idx < currentIndex ? (
                      <div className="absolute top-0 left-0 h-full w-full rounded-full bg-[#1a39b3]" />
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
