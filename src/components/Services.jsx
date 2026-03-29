import React from 'react';
import { motion } from 'framer-motion';
import { Car, Camera, Utensils, Map, Sofa, BedDouble } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: <Car className="w-8 h-8" />,
    title: 'Car Parking',
    description: 'Safe and spacious parking area for all types of vehicles.',
  },
  {
    id: 2,
    icon: <Camera className="w-8 h-8" />,
    title: 'Animal Photos',
    description: 'Special zones and permissions for wildlife photography.',
  },
  {
    id: 3,
    icon: <Utensils className="w-8 h-8" />,
    title: 'Food & Beverage',
    description: 'Authentic local cuisine and refreshing drinks available.',
  },
  {
    id: 4,
    icon: <Map className="w-8 h-8" />,
    title: 'Guide Service',
    description: 'Experienced local guides for a safe and informative safari.',
  },
  {
    id: 5,
    icon: <Sofa className="w-8 h-8" />,
    title: 'Resting Area',
    description: 'Comfortable waiting lounges and clean resting zones.',
  },
  {
    id: 6,
    icon: <BedDouble className="w-8 h-8" />,
    title: 'Room Booking',
    description: 'Luxury to budget-friendly stays near the jungle.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#fcfbf9] to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gir-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gir-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gir-green font-bold tracking-wider uppercase text-sm mb-3"
          >
            Our Amenities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900"
          >
            Premium Services
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-24 bg-gir-gold mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gir-green/10 hover:border-gir-gold/30 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gir-green to-gir-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              
              <div className="bg-[#fcfbf9] w-20 h-20 rounded-2xl flex items-center justify-center text-gir-green group-hover:bg-gradient-to-br group-hover:from-gir-green group-hover:to-gir-gold group-hover:text-white transition-all duration-500 mb-6 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gir-green transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
