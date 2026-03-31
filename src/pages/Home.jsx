import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import OurAnimals from '../components/OurAnimals';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <Services />
      <OurAnimals />
      <Footer />
    </div>
  );
};

export default Home;
