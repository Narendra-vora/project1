import React from 'react';
import { motion } from 'framer-motion';
import { Car, Camera, Utensils, Map, Sofa, BedDouble } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: Car,
    iconBg: 'from-sky-100 to-blue-200',
    iconColor: 'text-blue-700',
    title: 'Car Parking',
    description: 'Safe and spacious parking area for all types of vehicles.',
  },
  {
    id: 2,
    icon: Camera,
    iconBg: 'from-amber-100 to-orange-200',
    iconColor: 'text-orange-700',
    title: 'Animal Photos',
    description: 'Special zones and permissions for wildlife photography.',
  },
  {
    id: 3,
    icon: Utensils,
    iconBg: 'from-rose-100 to-pink-200',
    iconColor: 'text-rose-700',
    title: 'Food & Beverage',
    description: 'Authentic local cuisine and refreshing drinks available.',
  },
  {
    id: 4,
    icon: Map,
    iconBg: 'from-emerald-100 to-green-200',
    iconColor: 'text-emerald-700',
    title: 'Guide Service',
    description: 'Experienced local guides for a safe and informative safari.',
  },
  {
    id: 5,
    icon: Sofa,
    iconBg: 'from-violet-100 to-purple-200',
    iconColor: 'text-violet-700',
    title: 'Resting Area',
    description: 'Comfortable waiting lounges and clean resting zones.',
  },
  {
    id: 6,
    icon: BedDouble,
    iconBg: 'from-lime-100 to-yellow-200',
    iconColor: 'text-lime-700',
    title: 'Room Booking',
    description: 'Luxury to budget-friendly stays near the jungle.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden py-24 bg-linear-to-b from-[#fcfbf9] to-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-80 h-80 bg-gir-green/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-gir-gold/5 blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-sm font-bold tracking-wider uppercase text-gir-green"
          >
            Our Amenities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black text-gray-900 md:text-5xl"
          >
            Premium Services
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 mx-auto mt-6 rounded-full bg-gir-gold"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 overflow-hidden transition-all duration-500 bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-2xl hover:shadow-gir-green/10 hover:border-gir-gold/30 group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 transition-transform duration-500 ease-out origin-left transform scale-x-0 bg-linear-to-r from-gir-green to-gir-gold group-hover:scale-x-100"></div>

              <div className={`bg-linear-to-br ${service.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center ${service.iconColor} group-hover:scale-110 transition-all duration-500 mb-6 shadow-sm group-hover:shadow-lg`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h4 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-gir-green">
                {service.title}
              </h4>
              <p className="leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
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
