import React from 'react';
import { motion } from 'framer-motion';
import { Map, Leaf, Compass } from 'lucide-react';
import sasan_gir_safari from '../assets/sasan_gir_safari.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-gir-gold uppercase mb-3"
          >
            Discover India's Pride
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gir-green"
          >
            Welcome to Sasan Gir
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gir-gold mx-auto mt-6 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-gray-600 leading-relaxed"
          >
            <p>
              Nestled in the Junagadh district of Gujarat, <strong>Gir National Park and Wildlife Sanctuary</strong> is the sole sanctuary of the majestic Asiatic Lion (Panthera leo persica). Spanning over 1,412 square kilometers, this rugged ecosystem is a testament to successful conservation efforts.
            </p>
            <p>
              Beyond the lions, the dry deciduous forest is a thriving habitat for diverse flora and fauna. From leopards and marsh crocodiles to over 300 species of birds, the golden terrain of Sasan Gir offers an unparalleled wildlife experience.
            </p>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-green-50 p-3 rounded-full mb-3 text-gir-green shadow-sm">
                  <Map className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800">1,412 sq km</h4>
                <p className="text-sm text-gray-500  ">Protected Area</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-yellow-50 p-3 rounded-full mb-3 text-gir-gold">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800">Biodiverse</h4>
                <p className="text-sm text-gray-500">Flora & Fauna</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-orange-50 p-3 rounded-full mb-3 text-gir-sand">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800">Est. 1965</h4>
                <p className="text-sm text-gray-500">Conservation</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src={sasan_gir_safari}
                alt="Sasan Gir Landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gir-green/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h4 className="text-2xl font-bold mb-2">A Journey Awaits</h4>
                  <p className="text-sm text-white/90">Experience the untamed wilderness in its purest form.</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-gir-gold/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
