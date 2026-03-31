import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, Mail, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import sasanGirLion from '../assets/sasan_gir_lion.png';
import sasanGirLandscape from '../assets/sasan_gir_landscape.png';
import sasanGirSafari from '../assets/sasan_gir_safari.png';

const contactCards = [
  {
    title: 'Address',
    value: 'Gir Interpretation Zone, Sasan, Gujarat 362135',
    icon: MapPin,
    actionText: 'View Location',
    actionLink: 'https://maps.google.com/?q=Gir+Interpretation+Zone+Sasan+Gujarat',
  },
  {
    title: 'Call Now',
    value: '+91 98765 43210',
    icon: PhoneCall,
    actionText: 'Call Team',
    actionLink: 'tel:+919876543210',
  },
  {
    title: 'Mail Now',
    value: 'hello@sasangirexplorer.com',
    icon: Mail,
    actionText: 'Send Email',
    actionLink: 'mailto:hello@sasangirexplorer.com',
  },
];

const galleryImages = [
  {
    src: sasanGirLion,
    alt: 'Asiatic lion in Sasan Gir',
  },
  {
    src: sasanGirLandscape,
    alt: 'Forest landscape of Gir',
  },
  {
    src: sasanGirSafari,
    alt: 'Safari jeep in Gir national park',
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#fcfbf9] text-gray-900">
      <Navbar />

      <header className="relative h-[58vh] min-h-[320px] sm:h-[62vh] sm:min-h-[360px] overflow-hidden">
        <img
          src={sasanGirLandscape}
          alt="Sasan Gir overview"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gir-gold sm:text-sm sm:tracking-[0.28em]">
              Contact Us
            </p>
            <h1 className="text-3xl font-black text-white sm:text-5xl md:text-6xl">
              Let&apos;s Plan Your Wild Escape
            </h1>
            <p className="mt-4 text-base text-white/90 sm:text-lg">
              Reach out for bookings, safari timings, group trips, and custom itinerary support.
            </p>
          </motion.div>
        </div>
      </header>

      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-gir-green">Gallery</h2>
              <h3 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">Safari Moments, FAQ Style Visuals</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.alt}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="overflow-hidden bg-white border border-gray-100 shadow-sm group rounded-3xl"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-3">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="p-6 bg-white border shadow-sm rounded-3xl border-gir-green/10 sm:p-7"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-white rounded-2xl bg-gir-green">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-gray-900">{card.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{card.value}</p>
                  <a
                    href={card.actionLink}
                    target={card.actionLink.startsWith('http') ? '_blank' : undefined}
                    rel={card.actionLink.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex mt-5 text-sm font-bold transition-colors text-gir-green hover:text-gir-gold"
                  >
                    {card.actionText}
                  </a>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto overflow-hidden bg-white border shadow-xl rounded-3xl sm:rounded-4xl border-gir-green/10">
            <div className="bg-linear-to-br from-[#f8f4ea] via-[#fdfbf5] to-[#f5efe3] p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-gir-green">Have Any Query?</p>
              <h3 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">Contact Us</h3>
              <p className="mt-3 text-sm text-gray-600 sm:text-base">
                Share your travel date, group size, and preferences. Our support team will get back to you quickly.
              </p>

              <form className="mt-8 space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:border-gir-gold focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:border-gir-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-700">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:border-gir-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700">Your Query</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us what you need help with"
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-200 resize-none rounded-xl focus:border-gir-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-colors rounded-xl bg-gir-green hover:bg-gir-gold hover:text-gir-green"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto overflow-hidden bg-white border shadow-xl max-w-7xl rounded-3xl sm:rounded-4xl border-gir-green/10">
            <div className="px-6 pt-8 pb-4 text-center sm:px-8">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-gir-green">Find Us On Map</p>
              <h3 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">Our Location</h3>
            </div>

            <div className="h-[320px] sm:h-[420px] md:h-[520px] bg-[#e7efe9]">
              <iframe
                title="Gir location map"
                src="https://www.google.com/maps?q=Gir+National+Park+Gujarat&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
