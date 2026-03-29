import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import sasan_gir_lion from '../assets/sasan_gir_lion.png';
import sasan_gir_landscape from '../assets/sasan_gir_landscape.png';
import sasan_gir_safari from '../assets/sasan_gir_safari.png';


const slides = [
  {
    id: 1,
    type: 'video',
    videoSrc: '/lion_running.mp4', // <--- Yahan video ka path hai (public folder se)
    image: sasan_gir_lion, // video load hone tak ye image dikhegi (poster)
    // title: 'The Royal Roar',
    // subtitle: 'Witness the majesty of the Asiatic Lion in its only natural habitat.',
  },
  // {
  //   id: 2,
  //   type: 'image',
  //   image: sasan_gir_landscape,
  //   // title: 'A Golden Ecosystem',
  //   subtitle: 'Explore the breathtaking dry deciduous forests and rocky hills.',
  // },
  {
    id: 3,
    type: 'image',
    image: sasan_gir_safari,
    // title: 'The Wild Safari',
    subtitle: 'Embark on an unforgettable journey through the heart of the jungle.',
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Media (Video or Image) */}
          {slides[currentSlide].type === 'video' ? (
            <video
              src={slides[currentSlide].videoSrc}
              autoPlay
              loop
              muted
              playsInline
              poster={slides[currentSlide].image}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight text-shadow">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-medium mb-10 max-w-3xl mx-auto text-shadow">
              {slides[currentSlide].subtitle}
            </p>
            {/* <button className="bg-gir-gold hover:bg-yellow-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
              Book Your Safari */}
            {/* <ChevronRight className="w-5 h-5" />
          </button> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 backdrop-blur-md p-3 rounded-full text-white transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 backdrop-blur-md p-3 rounded-full text-white transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gir-gold w-8' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div >
  );
};

export default HeroSlider;
