import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, Calendar, AlertCircle } from 'lucide-react';
import Navbar from './Navbar';
import sasan_gir_lion from '../assets/sasan_gir_lion.png';
import Footer from './Footer';

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
            <div className="relative h-[58vh] min-h-[320px] w-full sm:h-[70vh]">
                <img
                    src={sasan_gir_lion}
                    alt="Majestic Asiatic Lion"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        {/* <h1 className="mb-4 text-5xl font-black tracking-wider text-white md:text-7xl text-shadow">
                            FAQ & Info
                        </h1> */}
                        <p className="text-xl font-medium text-white/90">Everything you need to know before visiting</p>
                    </motion.div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="flex-grow py-14 sm:py-20">
                <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">

                    <div className="mb-16 text-center">
                        <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-gir-green">Questions & Answers</h2>
                        <h3 className="text-3xl font-black text-gray-900 sm:text-4xl">Frequently Asked Questions</h3>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gir-gold"></div>
                    </div>

                    <div className="mb-20 space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-2xl"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex items-center justify-between w-full p-4 text-left transition-colors sm:p-6 focus:outline-none hover:bg-gray-50"
                                >
                                    <span className="pr-3 text-base font-bold text-gray-800 sm:text-lg">{faq.question}</span>
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
                                            <div className="p-4 pt-0 leading-relaxed text-gray-600 border-t sm:p-6 sm:pt-0 border-gray-50">
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
                        className="bg-gradient-to-br from-gir-green to-[#1e3629] rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
                    >
                        {/* Background design */}
                        <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>

                        <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
                            <div className="flex-1">
                                <h3 className="flex items-center gap-3 mb-4 text-2xl font-black sm:text-3xl">
                                    <Clock className="w-8 h-8 text-gir-gold" />
                                    Park Timings & Schedule
                                </h3>
                                <p className="mb-6 text-lg text-white/80">Plan your safari according to our official operating hours.</p>

                                <div className="p-6 border bg-black/20 rounded-2xl backdrop-blur-sm border-white/10">
                                    <div className="flex items-start gap-4 mb-4">
                                        <Calendar className="flex-shrink-0 w-6 h-6 mt-1 text-gir-gold" />
                                        <div>
                                            <h4 className="mb-1 text-xl font-bold text-gir-gold">Open Days</h4>
                                            <p className="text-lg font-medium text-white">Tuesday to Sunday</p>
                                            <p className="flex items-center gap-1 mt-1 text-sm text-red-300">
                                                <AlertCircle className="w-4 h-4" />
                                                Park remains completely CLOSED on Mondays.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full h-px my-4 bg-white/10"></div>

                                    <div className="flex flex-col gap-6 sm:flex-row">
                                        <div className="flex-1">
                                            <h4 className="mb-2 text-sm font-bold tracking-wider uppercase text-white/70">Morning Safari</h4>
                                            <p className="text-xl font-bold">06:00 AM - 11:00 AM</p>
                                        </div>
                                        <div className="hidden w-px bg-white/10 sm:block"></div>
                                        <div className="flex-1">
                                            <h4 className="mb-2 text-sm font-bold tracking-wider uppercase text-white/70">Evening Safari</h4>
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
            {/* <footer className="bg-[#111] text-center py-10 mt-auto">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <p className="text-white/70">
                        &copy; {new Date().getFullYear()} Sasan Gir National Park Explorer. All rights reserved.
                    </p>
                </div>
            </footer> */}
            <Footer />    
        </div>
    );
};

export default Faq;
