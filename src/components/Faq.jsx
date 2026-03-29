import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, Calendar, AlertCircle } from 'lucide-react';
import Navbar from './Navbar';
import sasan_gir_lion from '../assets/sasan_gir_lion.png';

const faqs = [
    {
        question: "What is the best time to visit Sasan Gir?",
        answer: "The best time to visit Sasan Gir National Park is during the winter months, from December to March, when the weather is cool and pleasant. The chances of spotting wildlife, including the Asiatic Lion, are very high during early mornings."
    },
    {
        question: "Do I need to book the safari in advance? How can I do it?",
        answer: "Yes, it is highly recommended to book your safari permits online well in advance. Permits sell out very quickly, especially during weekends and holidays. You can book authorized safaris through the official forest department portal."
    },
    {
        question: "Are private vehicles allowed inside the National Park?",
        answer: "No, private vehicles are strictly prohibited inside the core safari area. You must hire the officially authorized open-top Gypsy vehicles provided by the forest department, which always come with an experienced driver and a local guide."
    },
    {
        question: "Besides lions, what other animals can I expect to see?",
        answer: "Gir is rich in biodiversity. Apart from the Asiatic Lion, you can spot leopards, Indian cobras, jungle cats, striped hyenas, golden jackals, sambar deer, chital, nilgai, four-horned antelopes, wild boars, and over 300 species of birds."
    },
    {
        question: "Is there a restricted or closed season for the park?",
        answer: "Yes, Sasan Gir National Park is closed to visitors every year during the monsoon season, typically from mid-June to mid-October, for the breeding season of the animals and safety due to poor road conditions."
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="font-sans antialiased bg-[#fcfbf9] min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Banner with Lion Photo */}
            <div className="relative h-[60vh] w-full mt-20">
                <img
                    src={sasan_gir_lion}
                    alt="Majestic Asiatic Lion"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        {/* <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-wider text-shadow">
                            FAQ & Info
                        </h1> */}
                        <p className="text-xl text-white/90 font-medium">Everything you need to know before visiting</p>
                    </motion.div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-20 flex-grow">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <h2 className="text-gir-green font-bold tracking-wider uppercase text-sm mb-3">Questions & Answers</h2>
                        <h3 className="text-4xl font-black text-gray-900">Frequently Asked Questions</h3>
                        <div className="h-1 w-24 bg-gir-gold mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="space-y-4 mb-20">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-bold text-gray-800">{faq.question}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-gir-gold text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Park Timings Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gir-green to-[#1e3629] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
                    >
                        {/* Background design */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
                                    <Clock className="w-8 h-8 text-gir-gold" />
                                    Park Timings & Schedule
                                </h3>
                                <p className="text-white/80 text-lg mb-6">Plan your safari according to our official operating hours.</p>

                                <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                                    <div className="flex items-start gap-4 mb-4">
                                        <Calendar className="w-6 h-6 text-gir-gold flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-xl mb-1 text-gir-gold">Open Days</h4>
                                            <p className="text-lg font-medium text-white">Tuesday to Sunday</p>
                                            <p className="text-sm text-red-300 mt-1 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                Park remains completely CLOSED on Mondays.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-white/10 my-4"></div>

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white/70 uppercase text-sm tracking-wider mb-2">Morning Safari</h4>
                                            <p className="text-xl font-bold">06:00 AM - 11:00 AM</p>
                                        </div>
                                        <div className="w-px bg-white/10 hidden sm:block"></div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white/70 uppercase text-sm tracking-wider mb-2">Evening Safari</h4>
                                            <p className="text-xl font-bold">03:00 PM - 06:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#111] text-center py-10 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-white/70">
                        &copy; {new Date().getFullYear()} Sasan Gir National Park Explorer. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Faq;
