import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    company: 'NovaByte Solutions',
    avatar: 'AM',
    rating: 5,
    text: 'Big Feathers Technology completely transformed our digital infrastructure. Their full-stack team delivered a scalable platform in just 8 weeks that handles 50K+ daily users flawlessly. The attention to detail and technical depth is unmatched.',
    highlight: '50K+ daily users',
    industry: 'SaaS Platform',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Head of Digital',
    company: 'UrbanCraft Retail',
    avatar: 'PS',
    rating: 5,
    text: 'Our marketplace revenue jumped 3.5X within the first quarter after Big Feathers optimized our catalogue management across Amazon and Flipkart. Their automation workflows saved us 60% of manual effort — a game changer for our operations.',
    highlight: '3.5X revenue growth',
    industry: 'E-Commerce',
  },
  {
    id: 3,
    name: 'Rohit Kapoor',
    role: 'CTO',
    company: 'FinEdge Analytics',
    avatar: 'RK',
    rating: 5,
    text: 'The AI-driven analytics dashboard they built for us processes millions of data points in real-time. Their engineering team understood our complex fintech requirements perfectly and delivered beyond expectations with 99.9% uptime.',
    highlight: '99.9% uptime SLA',
    industry: 'FinTech',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Marketing Director',
    company: 'GreenLeaf Organics',
    avatar: 'SR',
    rating: 5,
    text: 'From brand-new website design to performance marketing campaigns delivering 4.5X ROAS, Big Feathers handled everything end-to-end. They are not just a tech vendor — they are a true growth partner who cares about results.',
    highlight: '4.5X ROAS achieved',
    industry: 'D2C Brand',
  },
  {
    id: 5,
    name: 'Vikram Joshi',
    role: 'Co-Founder',
    company: 'SwiftLogix',
    avatar: 'VJ',
    rating: 5,
    text: 'We went from concept to a fully deployed mobile app with 10K downloads in under 12 weeks. The Big Feathers team moves fast without cutting corners — their code quality and architecture decisions are enterprise-grade.',
    highlight: '10K downloads in 12 weeks',
    industry: 'Mobile App',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < rating
            ? 'fill-amber-400 text-amber-400'
            : 'fill-slate-300 text-slate-300'
        }`}
      />
    ))}
  </div>
);

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (newIndex) => {
      setDirection(newIndex > activeIndex ? 1 : -1);
      setActiveIndex(newIndex);
    },
    [activeIndex]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  const current = testimonials[activeIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <section className="w-full bg-white text-slate-900 pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 px-6 sm:px-8 lg:px-12 relative overflow-hidden font-ibm">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header — GrowthJockey "Insights, Innovation and Impact" style */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.35rem] font-normal sm:font-[450] lg:font-medium tracking-[-0.02em] text-slate-900 leading-[1.12] font-ibm">
            Voices, Trust and{' '}
            <span className="bg-gradient-to-r from-[#00A2ED] to-[#1F40CB] bg-clip-text text-transparent">
              Results
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed">
            From venture launches to enterprise transformations, hear how we
            help founders and businesses turn ambition into scalable,
            market-leading digital products.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Featured Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 h-[490px] sm:h-[480px] lg:h-[490px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(31,64,203,0.35)] flex flex-col justify-between"
              style={{
                background:
                  'linear-gradient(135deg, #1838BA 0%, #1F40CB 35%, #1068E6 70%, #00A2ED 100%)',
              }}
            >
              {/* Floating Quote Icon */}
              <motion.div
                className="absolute top-5 right-6 sm:top-7 sm:right-8 pointer-events-none"
                animate={{ rotate: [0, 6, -6, 0], y: [0, -3, 3, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-white/15 fill-white/5" />
              </motion.div>

              {/* Animated Card Content Area with Fixed Flow */}
              <div className="relative flex-1 min-h-0 flex flex-col justify-between overflow-hidden">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-between h-full"
                  >
                    {/* Top Section: Badge, Stars & Quote Text */}
                    <div>
                      {/* Industry Badge */}
                      <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white mb-3 sm:mb-4">
                        {current.industry}
                      </span>

                      {/* Stars */}
                      <div className="mb-3 sm:mb-4">
                        <StarRating rating={current.rating} />
                      </div>

                      {/* Testimonial Text with Consistent Breathing Room */}
                      <p className="text-white/95 text-base sm:text-lg lg:text-xl leading-[1.65] font-normal min-h-[5.5rem] sm:min-h-[6rem] lg:min-h-[6.5rem]">
                        &ldquo;{current.text}&rdquo;
                      </p>
                    </div>

                    {/* Bottom Section: Metric Badge & Author Info */}
                    <div className="pt-2">
                      {/* Highlight Metric */}
                      <motion.div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-400/20 border border-emerald-300/30 backdrop-blur-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25, duration: 0.3 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-emerald-200">
                          {current.highlight}
                        </span>
                      </motion.div>

                      {/* Author Info */}
                      <div className="mt-4 sm:mt-5 flex items-center gap-3.5 sm:gap-4">
                        {/* Avatar Circle */}
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-md shrink-0">
                          {current.avatar}
                        </div>
                        <div className="min-w-0">
                          <p className="text-white font-semibold text-sm sm:text-base truncate">
                            {current.name}
                          </p>
                          <p className="text-white/80 text-xs sm:text-sm truncate">
                            {current.role},{' '}
                            <span className="text-cyan-200 font-medium">
                              {current.company}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls - Permanently Docked at Bottom */}
              <div className="shrink-0 pt-4 mt-3 flex items-center justify-between border-t border-white/15">
                {/* Progress Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="relative group p-1 -m-1"
                      aria-label={`Go to testimonial ${i + 1}`}
                    >
                      <div
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === activeIndex
                            ? 'w-8 bg-white shadow-sm'
                            : 'w-1.5 bg-white/35 group-hover:bg-white/55'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={goPrev}
                    className="w-9 h-9 rounded-full border border-white/25 hover:border-white/50 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={goNext}
                    className="w-9 h-9 rounded-full border border-white/25 hover:border-white/50 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stacked Mini Testimonial Preview Cards - Stable Uniform Height */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-3"
          >
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => goTo(i)}
                className={`group w-full text-left rounded-xl sm:rounded-2xl p-4 transition-all duration-300 border ${
                  i === activeIndex
                    ? 'border-transparent shadow-lg shadow-blue-500/25'
                    : 'bg-slate-50/80 border-slate-200/60 hover:bg-slate-100/80 hover:border-slate-300/70'
                }`}
                style={
                  i === activeIndex
                    ? {
                        background:
                          'linear-gradient(135deg, #1838BA 0%, #1F40CB 35%, #1068E6 70%, #00A2ED 100%)',
                      }
                    : undefined
                }
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-3">
                  {/* Mini Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300 ${
                      i === activeIndex
                        ? 'bg-white/20 border border-white/30 text-white shadow-sm'
                        : 'bg-slate-200/80 text-slate-600 group-hover:bg-slate-300/70'
                    }`}
                  >
                    {t.avatar}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm font-semibold truncate transition-colors ${
                        i === activeIndex
                          ? 'text-white'
                          : 'text-slate-700 group-hover:text-slate-900'
                      }`}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`text-xs truncate ${
                        i === activeIndex
                          ? 'text-white/80'
                          : 'text-slate-400'
                      }`}
                    >
                      {t.role} — <span className="font-medium">{t.company}</span>
                    </p>
                  </div>

                  {/* Active Indicator */}
                  <div
                    className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300 ${
                      i === activeIndex
                        ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-110'
                        : 'bg-slate-300'
                    }`}
                  />
                </div>

                {/* Animated Review Snippet Reveal for Active Card */}
                <AnimatePresence>
                  {i === activeIndex && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="mt-2.5 text-xs text-white/85 leading-relaxed line-clamp-2 pl-13"
                    >
                      &ldquo;{t.text.substring(0, 105)}...&rdquo;
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats Strip - Tightened Gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-slate-200/80"
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '3.5X', label: 'Avg Revenue Growth' },
            { value: '99.9%', label: 'Uptime Guarantee' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#1F40CB] to-[#00A2ED] bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
