import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';

const Home = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <Services />
      
      {/* Footer Placeholder */}
      <footer className="bg-gir-green text-center py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Sasan Gir National Park Explorer. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-white/70">
            <a href="#" className="hover:text-gir-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gir-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gir-gold transition-colors">Safari Info</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
