import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#BFD8F7]/95 via-[#D4E6FA]/95 to-[#B5D2F5]/95 dark:from-[#020B24]/95 dark:via-[#041133]/95 dark:to-[#020B24]/95 backdrop-blur-md border-b border-[#1F40CB]/20 dark:border-white/10 shadow-[0_4px_20px_rgba(20,50,150,0.08)] py-1.5 sm:py-2'
          : 'bg-transparent border-none shadow-none py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left Side: Brand Logo & Nav Links together with gap */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Brand Logo */}
          <Link
            to="/"
            className={`flex items-center group ${
              isScrolled
                ? 'py-0.5'
                : 'py-0.5 -ml-[42px] sm:-ml-[53px] lg:-ml-[64px] -mr-[33px] sm:-mr-[41px] lg:-mr-[50px]'
            }`}
          >
            <img
              src={isScrolled ? '/logo-trimmed.png' : '/logo.png'}
              alt="Big Feathers Technology"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isScrolled
                  ? 'h-[2.65rem] sm:h-[2.9rem] lg:h-[3.15rem] max-w-[200px] sm:max-w-[230px] lg:max-w-[250px] -translate-y-1 sm:-translate-y-1.5 drop-shadow-[0_2px_8px_rgba(31,64,203,0.22)]'
                  : 'h-16 sm:h-20 lg:h-24 max-w-[250px] sm:max-w-[295px] -translate-y-1 sm:-translate-y-1.5 drop-shadow-[0_2px_12px_rgba(0,102,255,0.25)]'
              }`}
            />
          </Link>

          {/* Left Navigation Links (Next to Logo) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`tracking-wide transition-colors duration-200 ${
                  isScrolled
                    ? 'text-[14px] text-slate-800 dark:text-white/90 hover:text-[#1F40CB] dark:hover:text-[#00A2ED] font-semibold'
                    : 'text-[15px] text-white/80 hover:text-white font-normal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Theme Switch + Free Demo + Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* GrowthJockey Sliding Disc Theme Switch (Always Accessible) */}
          <button
            type="button"
            role="switch"
            aria-checked={isDarkMode}
            onClick={toggleTheme}
            className={`relative inline-flex items-center h-7 sm:h-8 w-[60px] sm:w-[66px] shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ${
              isScrolled
                ? 'bg-slate-900/10 dark:bg-white/10 hover:bg-slate-900/15 dark:hover:bg-white/15 border border-slate-300/60 dark:border-white/10'
                : 'bg-transparent hover:bg-white/5 border border-white/20'
            } group`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {/* Sliding Circular Disc Highlight */}
            <span
              className={`pointer-events-none absolute h-6 w-6 sm:h-7 sm:w-7 rounded-full shadow-md transition-transform duration-300 ease-in-out ${
                isScrolled
                  ? 'bg-white dark:bg-[#1F40CB] text-slate-900'
                  : 'bg-white/20 backdrop-blur-sm'
              } ${
                isDarkMode ? 'translate-x-[30px] sm:translate-x-[33px]' : 'translate-x-0.5'
              }`}
            />

            {/* Two Icons: Sun & Moon */}
            <div className="grid grid-cols-2 place-items-center w-full relative z-10 pointer-events-none">
              <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7">
                <Sun
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-200 ${
                    !isDarkMode
                      ? 'opacity-100 scale-105 text-amber-500 drop-shadow-sm'
                      : 'opacity-40 text-slate-400 group-hover:opacity-60'
                  }`}
                />
              </div>
              <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7">
                <Moon
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-200 ${
                    isDarkMode
                      ? 'opacity-100 scale-105 text-cyan-300 drop-shadow-sm'
                      : 'opacity-40 text-slate-400 group-hover:opacity-60'
                  }`}
                />
              </div>
            </div>
          </button>

          {/* Scrolled CTA: "Free Demo" */}
          {isScrolled && (
            <Link
              to="/free-demo"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-[#1F40CB] via-[#1554D8] to-[#00A2ED] hover:from-[#1935aa] hover:to-[#008ecf] text-white shadow-md hover:shadow-lg hover:shadow-blue-500/25 px-4 sm:px-5 py-1.5 text-xs sm:text-sm group"
            >
              <span>Free Demo</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 md:hidden focus:outline-none rounded-lg transition-colors ${
              isScrolled
                ? 'text-slate-800 dark:text-white hover:bg-blue-100/60 dark:hover:bg-white/10'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-6 space-y-4 transition-colors ${
            isScrolled
              ? 'bg-gradient-to-b from-[#BFD8F7]/98 via-[#D4E6FA]/98 to-[#B5D2F5]/98 dark:from-[#020B24]/98 dark:via-[#041133]/98 dark:to-[#020B24]/98 backdrop-blur-xl border-b border-[#1F40CB]/20 dark:border-white/10 text-slate-900 dark:text-white shadow-xl'
              : 'bg-[#020B24]/98 backdrop-blur-xl border-b border-white/10 text-white shadow-2xl'
          }`}
        >
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium py-1.5 transition-colors ${
                  isScrolled
                    ? 'text-slate-800 dark:text-white/90 hover:text-[#1F40CB] dark:hover:text-[#00A2ED]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/free-demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#1F40CB] via-[#1554D8] to-[#00A2ED] text-white shadow-md hover:from-[#1935aa] hover:to-[#008ecf] transition-all"
            >
              <span>Free Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
