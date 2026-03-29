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
    <nav className="fixed w-full h-20 z-50 transition-all duration-300 bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 font-black text-2xl tracking-wider text-white hover:text-gir-gold transition-colors duration-300">
              <MapPin className="h-7 w-7 text-gir-gold" />
              <span className="text-bold">SASAN GIR</span>
              {/* <h1 className='text-gir-green'>hanafen  </h1> */}
            </Link>
          </div>

          <div className="md:ml-6 md:flex md:space-x-14">
            <Link to="/" className="font-semibold transition-all duration-300 text-white hover:text-green-500  hover:-translate-y-0.5">Home</Link>
            <a href="#about" className="font-semibold transition-all duration-300 text-white hover:text-gir-gold hover:-translate-y-0.5">About Gir</a>
            <a href="#services" className="font-semibold transition-all duration-300 text-white hover:text-gir-gold hover:-translate-y-0.5">Services</a>
            <Link to="/faq" className="font-semibold transition-all duration-300 text-white hover:text-gir-gold hover:-translate-y-0.5">FAQ</Link>
            <Link to="/safari" className="font-semibold transition-all duration-300 text-white hover:text-gir-gold hover:-translate-y-0.5">Book Safari</Link>
            <Link to="/contact" className="font-semibold transition-all duration-300 text-white hover:text-gir-gold hover:-translate-y-0.5">Contact Us</Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gir-green hover:text-gir-gold focus:outline-none p-1 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute w-full pb-4 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link to="/" className="text-gray-800 hover:text-gir-gold block px-3 py-2 rounded-md font-medium text-lg">Home</Link>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-gir-gold block px-3 py-2 rounded-md font-medium text-lg">About</a>
            <Link to="/safari" className="text-gray-800 hover:text-gir-gold block px-3 py-2 rounded-md font-medium text-lg">Safari</Link>
            <Link to="/contact" className="text-gray-800 hover:text-gir-gold block px-3 py-2 rounded-md font-medium text-lg">Contact</Link>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-gir-gold block px-3 py-2 rounded-md font-medium text-lg">Services</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
