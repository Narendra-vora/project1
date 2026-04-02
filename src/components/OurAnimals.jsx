import React from 'react';
import { motion } from 'framer-motion';

const animals = [
  {
    name: 'Asiatic Lion',
    note: 'The king of Gir Forest',
    image: 'https://www.girnationalpark.in/blog/wp-content/uploads/2020/05/Asiatic-Lions.jpg',
  },
  {
    name: 'Indian Leopard',
    note: 'Stealthy and elusive',
    image: 'https://bigcatsindia.com/wp-content/uploads/2019/09/Indian-Leopard-Kabini-Wildlife-1024x738.jpg ',
  },
  {
    name: 'Striped Hyena',
    note: 'A rare nocturnal sighting',
    image: 'https://loremflickr.com/640/420/striped-hyena?lock=3',
  },
  {
    name: 'Golden Jackal',
    note: 'Often seen near open scrub',
    image: 'https://loremflickr.com/640/420/golden-jackal?lock=4',
  },
  {
    name: 'Chital Deer',
    note: 'Graceful and social',
    image: 'https://loremflickr.com/640/420/chital-deer?lock=5',
  },
  {
    name: 'Sambar Deer',
    note: 'Largest deer in the forest',
    image: 'https://loremflickr.com/640/420/sambar-deer?lock=6',
  },
  {
    name: 'Nilgai',
    note: 'India’s largest antelope',
    image: 'https://loremflickr.com/640/420/nilgai?lock=7',
  },
  {
    name: 'Mugger Crocodile',
    note: 'Often seen near water bodies',
    image: 'https://cdn.britannica.com/63/254563-050-F6CBD6CD/mugger-or-indian-marsh-crocodiles-Crocodylus-palustris.jpg',
  },
  {
    name: 'Indian Peafowl',
    note: 'Bright colors, iconic calls',
    image: 'https://www.naturephoto-cz.com/fullsize/birds/indian-peafowl-162291.jpg',
  },
  {
    name: 'Hanuman Langur',
    note: 'Active in forest canopies',
    image: 'https://loremflickr.com/640/420/hanuman-langur?lock=10',
  },
   {
    name: 'wolf',
    note: 'Silent strength. Sharp instincts. Wolf mindset',
    image: 'https://tse2.mm.bing.net/th/id/OIP.F64Ss20BitRwAArLaXcB_gHaE7?pid=Api&P=0&h=180',
  },
  {
    name: 'Rhinoceros',
    note: 'Power through challenges with the strength of a rhinoceros',
    image: 'https://tse1.mm.bing.net/th/id/OIP.TXFCZfFtyv4dfWSA2YmPqAHaEK?pid=Api&P=0&h=180',
  },
];

const OurAnimals = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-linear-to-b from-[#f8f3e9] via-white to-[#fcfbf9]" id="our-animals">
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gir-gold/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 rounded-full w-72 h-72 translate-x-1/3 translate-y-1/3 bg-gir-green/10 blur-3xl"></div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-gir-gold sm:text-sm">Our Animals</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl text-gir-green">
            Meet the wildlife of Gir
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-gir-green/75 sm:text-lg">
            A quick look at the iconic species you may encounter on safari, from big cats to graceful herbivores.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gir-gold"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 gap-4 mb-10 sm:grid-cols-3"
        >
          <div className="p-5 bg-white border border-white shadow-sm rounded-2xl">
            <p className="text-sm font-medium tracking-wide uppercase text-gir-green/60">Diversity</p>
            <p className="mt-2 text-2xl font-bold text-gir-green">10+ species</p>
          </div>
          <div className="p-5 bg-white border border-white shadow-sm rounded-2xl">
            <p className="text-sm font-medium tracking-wide uppercase text-gir-green/60">Best Time</p>
            <p className="mt-2 text-2xl font-bold text-gir-green">Early morning</p>
          </div>
          <div className="p-5 bg-white border border-white shadow-sm rounded-2xl">
            <p className="text-sm font-medium tracking-wide uppercase text-gir-green/60">Experience</p>
            <p className="mt-2 text-2xl font-bold text-gir-green">Guided safari</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {animals.map((animal, index) => (
            <motion.article
              key={animal.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden bg-white border border-white shadow-lg group rounded-[1.75rem] hover:shadow-2xl hover:shadow-gir-green/10"
            >
              <div className="relative overflow-hidden aspect-4/5 sm:aspect-3/4">
                <img
                  src={animal.image}
                  alt={animal.name}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gir-green/85 via-gir-green/20 to-transparent"></div>
                <div className="absolute top-4 left-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase text-gir-green backdrop-blur-sm shadow-sm">
                  Wildlife
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-bold">{animal.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/90">{animal.note}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAnimals;