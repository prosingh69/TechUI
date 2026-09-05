import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
      className={`fixed top-0 left-0 right-0 z-50 border-none transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.06)] py-1 sm:py-1.5'
          : 'bg-transparent shadow-none py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left Side: Brand Logo & Nav Links together with gap */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group py-0.5 -mr-3 sm:-mr-5 lg:-mr-6">
            <img
              src="/logo.png"
              alt="Big Feathers Technology"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isScrolled
                  ? 'h-11 sm:h-13 lg:h-14 max-w-[185px] sm:max-w-[220px] -translate-y-0.5 sm:-translate-y-1 drop-shadow-[0_1px_3px_rgba(2,19,56,0.65)]'
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
                    ? 'text-[14px] text-gray-700 hover:text-blue-600 font-medium'
                    : 'text-[15px] text-white/80 hover:text-white font-normal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>


        {/* Right Side: Theme Switch (at top) OR Free Demo (on scroll) + Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {!isScrolled ? (
            /* Scroll Zero (Top): Exact GrowthJockey Sliding Disc Theme Switch on Transparent Background */
            <button
              type="button"
              role="switch"
              aria-checked={isDarkMode}
              onClick={toggleTheme}
              className="relative hidden sm:inline-flex items-center h-8 w-[66px] shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 bg-transparent hover:bg-white/5 group"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {/* Sliding Circular Disc Highlight (Matches uploaded image) */}
              <span
                className={`pointer-events-none absolute h-7 w-7 rounded-full bg-white/15 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-in-out ${
                  isDarkMode ? 'translate-x-[33px]' : 'translate-x-0.5'
                }`}
              />

              {/* Two Icons: Sun & Moon */}
              <div className="grid grid-cols-2 place-items-center w-full relative z-10 pointer-events-none">
                <div className="flex items-center justify-center w-7 h-7">
                  <Sun
                    className={`w-4 h-4 text-white transition-all duration-200 ${
                      !isDarkMode
                        ? 'opacity-100 scale-105 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
                        : 'opacity-40 group-hover:opacity-60'
                    }`}
                  />
                </div>
                <div className="flex items-center justify-center w-7 h-7">
                  <Moon
                    className={`w-4 h-4 text-white transition-all duration-200 ${
                      isDarkMode
                        ? 'opacity-100 scale-105 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
                        : 'opacity-40 group-hover:opacity-60'
                    }`}
                  />
                </div>
              </div>
            </button>
          ) : (
            /* Scrolled: "Free Demo" CTA Button */
            <Link
              to="/free-demo"
              className="hidden sm:inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 bg-[#1F40CB] hover:bg-blue-700 text-white shadow-sm px-4 py-1.5 text-xs sm:text-sm"
            >
              Free Demo
            </Link>
          )}

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 md:hidden focus:outline-none rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
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
              ? 'bg-white/98 backdrop-blur-xl border-b border-gray-200 text-gray-900 shadow-xl'
              : 'bg-[#020d26]/95 backdrop-blur-xl border-b border-white/10 text-white'
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
                    ? 'text-gray-800 hover:text-blue-600'
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
              className="block w-full text-center py-2.5 rounded-lg font-semibold text-sm bg-[#1F40CB] text-white shadow-md hover:bg-blue-700 transition-colors"
            >
              Free Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
