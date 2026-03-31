import React from 'react';
import { motion } from 'framer-motion';
import { Map, Leaf, Compass } from 'lucide-react';
import sasan_gir_safari from '../assets/sasan_gir_safari.png';

const reasons = [
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Free Car Parking',
    color: 'bg-green-50 text-gir-green',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Natural Environment',
    color: 'bg-yellow-50 text-gir-gold',
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'Professional Guide & Security',
    color: 'bg-orange-50 text-gir-sand',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'World Best Animals',
    color: 'bg-emerald-50 text-emerald-700',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#fcfbf9]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-bold tracking-widest uppercase text-gir-gold"
          >
            Welcome To Nature & Adventure Vibe
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold md:text-5xl text-gir-green"
          >
            Why You Should Visit National Park!
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 mx-auto mt-6 rounded-full bg-gir-gold"
          />
        </div>

        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg leading-relaxed text-gray-600"
          >
            <p>
              We protect wildlife and their habitats from human impact and destruction. We provide animals a safe space to survive and reproduce. We protect places of natural beauty and are home to several endemic species.
            </p>
            <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex flex-col items-center p-5 text-center bg-white border border-gray-100 shadow-sm rounded-2xl">
                  <div className={`${reason.color} p-3 rounded-full mb-3`}>
                    {reason.icon}
                  </div>
                  <h4 className="font-bold text-gray-800">{reason.title}</h4>
                </div>
              ))}
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
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-gir-green/80 to-transparent">
                <div className="text-white">
                  <h4 className="mb-2 text-2xl font-bold">Protecting Wildlife Forever</h4>
                  <p className="text-sm text-white/90">Explore nature while supporting conservation and habitat safety.</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute w-64 h-64 rounded-full -z-10 -bottom-8 -left-8 bg-gir-gold/20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
