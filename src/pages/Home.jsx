import React from 'react';
import Hero from '../components/homepage/Hero';
import GrowthThinking from '../components/homepage/GrowthThinking';
import VenturePartner from '../components/homepage/VenturePartner';
import ProcessVision from '../components/homepage/ProcessVision';
import TechStack from '../components/homepage/TechStack';
import WhyChooseUs from '../components/homepage/WhyChooseUs';
import ClientTestimonials from '../components/homepage/ClientTestimonials';
import GrowthEngineBanner from '../components/homepage/GrowthEngineBanner';
import VentureArchitects from '../components/homepage/VentureArchitects';
import FinalCTA from '../components/homepage/FinalCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="w-full bg-[#021338]">
      {/* 
        First Screen Fold (Exact 100vh / 100svh):
        - Top/Middle: Hero with 3D Video Carousel + Text + Loading Bars + CTA
        - Bottom: "Growth thinking in motion" bar visible at the bottom of the screen without scrolling
      */}
      <div className="w-full h-screen max-h-screen flex flex-col justify-between relative overflow-hidden">
        {/* Hero Section takes remaining height */}
        <div className="flex-1 min-h-0 w-full relative flex items-center">
          <Hero />
        </div>

        {/* Bottom Bar: Docked at the bottom of the initial screen, fully visible */}
        <div className="w-full z-30 shrink-0">
          <GrowthThinking />
        </div>
      </div>

      {/* Full-Stack Venture Building Partner Section with 6 Interactive Staggered Metric Cards */}
      <VenturePartner />

      {/* "How we bring your vision to life" 4-Step Process Section */}
      <ProcessVision />

      {/* Modern Tech Stack & AI Architecture Banner */}
      <TechStack />

      {/* Why Choose Us Section (GrowthJockey 2x2 Grid Layout) */}
      <WhyChooseUs />

      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* "Let's Build and Scale your next Growth Engine" Banner */}
      <GrowthEngineBanner />

      {/* "Not Just Developers. Venture Architects." & 4 Solutions Ecosystem */}
      <VentureArchitects />

      {/* Final Call to Action Section */}
      <FinalCTA />

      {/* Comprehensive Website Footer */}
      <Footer />
    </div>
  );
};

export default Home;
