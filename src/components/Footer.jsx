import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

// Custom SVG Social Icons (Pixel-perfect & zero-dependency)
const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const technologyServices = [
  'Website Development',
  'Software Development',
  'Mobile App Development',
  'CRM / ERP',
  'Chatbot',
  'Business Automation',
];

const aiServices = [
  'AI Product Photoshoot',
  'AI Model Photography',
  'Product Image Enhancement',
  'AI Content Generation',
  'AI-powered business solutions',
];

const ecommerceServices = [
  'Product Listing',
  'Catalogue Creation',
  'Product Description',
  'Marketplace Listing',
  'E-commerce Catalogue Design',
  'Amazon / Flipkart / Meesho listing support',
];

const digitalMarketingServices = [
  'Social Media Marketing',
  'SEO',
  'Performance Marketing',
  'Content Marketing',
  'Meta/Google Ads',
];

const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Blog', href: '/blog' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#020B24] text-white border-t border-white/10 font-ibm">
      {/* Top Banner Row: Logo, Brand Mission & Quick Contact */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Brand Identity */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Link to="/" className="inline-block group mb-5">
              <img
                src="/logo-trimmed.png"
                alt="Big Feathers Technology"
                className="h-16 sm:h-[4.75rem] lg:h-[5.25rem] w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,162,237,0.35)] transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Big Feathers Technology is a full-stack venture building and digital engineering partner. We combine custom software architecture, generative AI systems, marketplace commerce scaling, and performance marketing to build ventures that lead industries.
            </p>
          </div>

          {/* Quick Contact & Action Card */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 w-full sm:w-auto">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A2ED] block mb-1">
                Direct Inquiries
              </span>
              <a
                href="mailto:contact@bigfeatherstechnology.com"
                className="text-sm sm:text-base font-semibold text-white hover:text-[#00A2ED] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-[#00A2ED]" />
                <span>contact@bigfeatherstechnology.com</span>
              </a>
            </div>

            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1F40CB] to-[#00A2ED] hover:from-[#1935aa] hover:to-[#008ecf] text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] shrink-0 w-full sm:w-auto text-center"
            >
              <span>Talk to Our Experts</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* Main 4-Column Solutions & Services Directory (User Content) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: Technology Solutions */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>Technology Solutions</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A2ED]" />
            </h4>
            <ul className="space-y-2.5">
              {technologyServices.map((item, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-xs sm:text-[13px] text-white/65 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: AI Solutions */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>AI Solutions</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A2ED]" />
            </h4>
            <ul className="space-y-2.5">
              {aiServices.map((item, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-xs sm:text-[13px] text-white/65 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: E-Commerce Solutions */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>E-Commerce Solutions</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A2ED]" />
            </h4>
            <ul className="space-y-2.5">
              {ecommerceServices.map((item, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-xs sm:text-[13px] text-white/65 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Digital Marketing */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>Digital Marketing</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A2ED]" />
            </h4>
            <ul className="space-y-2.5">
              {digitalMarketingServices.map((item, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-xs sm:text-[13px] text-white/65 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Secondary Row: Company Navigation & Social Links */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-white/70 font-medium">
          {companyLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Media Links with Inline SVGs */}
        <div className="flex items-center gap-3">
          {[
            { Icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
            { Icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
            { Icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
            { Icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="w-full bg-[#010614] py-5 px-6 sm:px-8 lg:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Big Feathers Technology. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link to="/contact-us" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact-us" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact-us" className="hover:text-white/70 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

