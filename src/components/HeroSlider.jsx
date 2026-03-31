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
    videoSrc: 'lion_running.mp4', // <--- Yahan video ka path hai (public folder se)
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
  // {
  //   id: 3,
  //   type: 'image',
  //   image: sasan_gir_safari,
  //   // title: 'The Wild Safari',
  //   subtitle: 'Embark on an unforgettable journey through the heart of the jungle.',
  // }
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
    <div className="relative w-full min-h-[560px] h-[100svh] overflow-hidden bg-black">
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
              className="absolute inset-0 object-cover w-full h-full"
            />
          ) : (
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="absolute inset-0 object-cover w-full h-full"
            />
          )}
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl px-4 mx-auto text-center">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl text-shadow">
              {slides[currentSlide].title}
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-base font-medium text-gray-200 sm:text-xl md:text-2xl text-shadow">
              {slides[currentSlide].subtitle}
            </p>
            {/* <button className="flex items-center gap-2 px-10 py-4 mx-auto font-bold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gir-gold hover:bg-yellow-500 hover:scale-105">
              Book Your Safari */}
            {/* <ChevronRight className="w-5 h-5" />
          </button> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-20 hidden p-3 text-white transition-all -translate-y-1/2 rounded-full left-4 top-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md sm:block"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-20 hidden p-3 text-white transition-all -translate-y-1/2 rounded-full right-4 top-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md sm:block"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      {/* <div className="absolute z-20 flex space-x-3 -translate-x-1/2 bottom-10 left-1/2">
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
