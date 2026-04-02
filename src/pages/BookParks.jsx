import React from 'react';
import { Trees, MapPin, Ticket, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import lionImage from '../assets/sasan_gir_lion.png';
import safariImage from '../assets/sasan_gir_safari.png';
import landscapeImage from '../assets/sasan_gir_landscape.png';

const nationalParks = [
  {
    name: 'Jim Corbett National Park',
    state: 'Uttarakhand',
    famousFor: 'Bengal tiger sightings and jeep safaris',
    bestFor: 'Bengal tiger spotting and jeep safari',
    bestSeason: 'November to June',
    fee: 'From Rs. 250',
    image: lionImage,
  },
  {
    name: 'Ranthambore National Park',
    state: 'Rajasthan',
    famousFor: 'Tiger sightings near historic fort landscapes',
    bestFor: 'Tiger sightings near historic fort landscapes',
    bestSeason: 'October to June',
    fee: 'From Rs. 450',
    image: safariImage,
  },
  {
    name: 'Kaziranga National Park',
    state: 'Assam',
    famousFor: 'One-horned rhinoceros and birdwatching',
    bestFor: 'One-horned rhinoceros and birdwatching',
    bestSeason: 'November to April',
    fee: 'From Rs. 200',
    image: landscapeImage,
  },
  {
    name: 'Kanha National Park',
    state: 'Madhya Pradesh',
    famousFor: 'Barasingha and dense sal forest safari',
    bestFor: 'Barasingha and dense sal forest safari',
    bestSeason: 'October to June',
    fee: 'From Rs. 350',
    image: lionImage,
  },
  {
    name: 'Bandhavgarh National Park',
    state: 'Madhya Pradesh',
    famousFor: 'High tiger density and scenic trails',
    bestFor: 'High tiger density and scenic trails',
    bestSeason: 'October to June',
    fee: 'From Rs. 450',
    image: safariImage,
  },
  {
    name: 'Sundarbans National Park',
    state: 'West Bengal',
    famousFor: 'Mangrove safari and unique delta wildlife',
    bestFor: 'Mangrove safari and unique delta wildlife',
    bestSeason: 'September to March',
    fee: 'From Rs. 300',
    image: landscapeImage,
  },
];

const BookParks = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#f6f8f4] via-[#fcfcf8] to-white">
      <Navbar />

      <main className="px-4 pt-24 pb-16 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gir-green sm:text-sm">Book Parks</p>
            <h1 className="mt-3 text-3xl font-black text-gray-900 sm:text-5xl">Top National Parks in India</h1>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              Explore 6 iconic wildlife parks across India and plan your next jungle adventure with the best season and entry details.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {nationalParks.map((park) => (
              <article
                key={park.name}
                className="overflow-hidden rounded-[1.75rem] border border-[#e9eee3] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gir-green/10"
              >
                <div className="relative overflow-hidden aspect-16/11">
                  <img
                    src={park.image}
                    alt={park.name}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute flex items-center justify-center text-white shadow-lg w-11 h-11 left-4 top-4 rounded-2xl bg-gir-green/90 backdrop-blur-sm">
                    <Trees className="w-5 h-5" />
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase text-gir-green backdrop-blur-sm shadow-sm">
                    Featured
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/80">Famous for</p>
                    <p className="mt-2 text-lg font-bold leading-snug sm:text-xl">{park.famousFor}</p>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h2 className="text-xl font-black text-gray-900 sm:text-2xl">{park.name}</h2>

                  <div className="mt-4 space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-gir-green shrink-0" />
                      <span className="font-medium">{park.state}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock3 className="w-4 h-4 mt-0.5 text-gir-green shrink-0" />
                      <span>{park.bestSeason}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Ticket className="w-4 h-4 mt-0.5 text-gir-green shrink-0" />
                      <span>{park.fee}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">{park.bestFor}</p>

                  <Link
                    to="/safari"
                    className="inline-flex items-center justify-center w-full px-5 py-3 mt-5 font-semibold text-white transition-all duration-300 rounded-xl bg-gir-green hover:bg-gir-green/90 hover:shadow-lg hover:shadow-gir-green/20"
                  >
                    Book Now
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 p-6 mt-12 text-center border rounded-3xl border-[#e8e2d2] bg-[#fff8e9] sm:flex-row sm:p-8 sm:text-left sm:justify-between">
            <div>
              <h3 className="text-xl font-black text-gray-900 sm:text-2xl">Need help choosing the right park?</h3>
              <p className="mt-1 text-gray-600">Tell us your travel month and we will suggest the best safari option.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-black transition-opacity duration-300 rounded-xl bg-gir-gold hover:opacity-90"
            >
              Contact Planner
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookParks;