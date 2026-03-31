import React from 'react';

const animals = [
  {
    name: 'Asiatic Lion',
    image: 'https://loremflickr.com/640/420/asiatic-lion?lock=1',
  },
  {
    name: 'Indian Leopard',
    image: 'https://loremflickr.com/640/420/indian-leopard?lock=2',
  },
  {
    name: 'Striped Hyena',
    image: 'https://loremflickr.com/640/420/striped-hyena?lock=3',
  },
  {
    name: 'Golden Jackal',
    image: 'https://loremflickr.com/640/420/golden-jackal?lock=4',
  },
  {
    name: 'Chital Deer',
    image: 'https://loremflickr.com/640/420/chital-deer?lock=5',
  },
  {
    name: 'Sambar Deer',
    image: 'https://loremflickr.com/640/420/sambar-deer?lock=6',
  },
  {
    name: 'Nilgai',
    image: 'https://loremflickr.com/640/420/nilgai?lock=7',
  },
  {
    name: 'Mugger Crocodile',
    image: 'https://loremflickr.com/640/420/mugger-crocodile?lock=8',
  },
  {
    name: 'Indian Peafowl',
    image: 'https://loremflickr.com/640/420/indian-peafowl?lock=9',
  },
  {
    name: 'Hanuman Langur',
    image: 'https://loremflickr.com/640/420/hanuman-langur?lock=10',
  },
];

const OurAnimals = () => {
  return (
    <section className="bg-[#f8f3e9] py-16 sm:py-20" id="our-animals">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-gir-green/80 tracking-[0.25em] text-xs sm:text-sm uppercase">Our Animals</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-gir-green">Nature & Adventure vibe</h2>
          <p className="max-w-2xl mx-auto mt-3 text-gir-green/80">
            Discover the incredible animals you may spot during your Sasan Gir safari.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {animals.map((animal) => (
            <article
              key={animal.name}
              className="overflow-hidden transition-shadow duration-300 bg-white shadow-md group rounded-2xl hover:shadow-xl"
            >
              <div className="overflow-hidden h-44">
                <img
                  src={animal.image}
                  alt={animal.name}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-sm font-semibold text-gir-green">{animal.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAnimals;