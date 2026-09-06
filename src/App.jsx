import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <div className="min-h-screen bg-[#03153b] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/who-we-are" element={<AboutUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;