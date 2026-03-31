import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed z-50 w-full h-20 py-4 transition-all duration-300 ${isScrolled ? 'bg-black/45 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-lg font-black tracking-wide text-white transition-colors duration-300 sm:text-xl lg:text-2xl hover:text-gir-gold">
              <MapPin className="w-6 h-6 text-gir-gold sm:h-7 sm:w-7" />
              <span className="truncate max-w-44 sm:max-w-none">Nature & Adventure Vibe</span>
              {/* <h1 className='text-gir-green'>hanafen  </h1> */}
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-6 lg:space-x-10">
            <Link to="/" className="font-semibold transition-all duration-300 text-white hover:text-green-500  hover:-translate-y-0.5">Home</Link>
            <a href="#about" className="font-semibold transition-all duration-300 text-white hover:text-gir-gold hover:-translate-y-0.5">About </a>
            <a href="#services" className="font-semibold transition-all duration-300 text-white hover:text-gir-gold hover:-translate-y-0.5">Services</a>
            <Link to="/book-parks" className="font-semibold transition-all duration-300 text-white hover:text-gir-gold hover:-translate-y-0.5">Book Parks</Link>
            <Link to="/faq" className="font-semibold transition-all duration-300 text-white hover:text-gir-gold hover:-translate-y-0.5">FAQ</Link>
            <Link to="/contact" className="font-semibold transition-all duration-300 text-white hover:text-gir-gold hover:-translate-y-0.5">Contact Us</Link>
            <Link
              to="/safari"
              className="inline-flex items-center justify-center rounded-xl bg-gir-gold px-5 py-2.5 font-semibold text-white  duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              Book Now
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 text-white transition-colors rounded-md hover:text-gir-gold focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute w-full pb-4 shadow-xl md:hidden bg-white/95 backdrop-blur-md">
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-lg font-medium text-gray-800 rounded-md hover:text-gir-gold">Home</Link>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-lg font-medium text-gray-800 rounded-md hover:text-gir-gold">About</a>
            <Link to="/book-parks" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-lg font-medium text-gray-800 rounded-md hover:text-gir-gold">Book Parks</Link>
            <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-lg font-medium text-gray-800 rounded-md hover:text-gir-gold">FAQ</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-lg font-medium text-gray-800 rounded-md hover:text-gir-gold">Contact</Link>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-lg font-medium text-gray-800 rounded-md hover:text-gir-gold">Services</a>
            <Link
              to="/safari"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-gir-gold px-6 py-2.5 font-bold text-black transition-all duration-300 hover:opacity-90"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
