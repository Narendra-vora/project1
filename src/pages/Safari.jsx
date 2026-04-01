import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bike, CarFront, Trees, Clock3, ShieldCheck, Ticket } from 'lucide-react';
import { jsPDF } from 'jspdf';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import heroImage from '../assets/hero.png';
import sasan_gir_safari from '../assets/sasan_gir_safari.png';
import sasan_gir_lion from '../assets/sasan_gir_lion.png';
import sasan_gir_landscape from '../assets/sasan_gir_landscape.png';
import scanner from '../assets/scanner.png';

const safariOptions = [
  {
    id: 1,
    icon: <Bike className="h-7 w-7" />,
    title: 'Horse Riding Safari',
    duration: '60 mins',
    price: 'From Rs. 900',
    description: 'Scenic horse trail with trained handlers through safe safari-side routes.',
    image: sasan_gir_landscape,
  },
  {
    id: 2,
    icon: <Trees className="h-7 w-7" />,
    title: 'Elephant Riding Safari',
    duration: '45 mins',
    price: 'From Rs. 1,200',
    description: 'Slow-paced jungle edge ride, ideal for families and nature photography lovers.',
    image: sasan_gir_lion,
  },
  {
    id: 3,
    icon: <CarFront className="h-7 w-7" />,
    title: 'Morning Safari',
    duration: '3 hours',
    price: 'From Rs. 1,600',
    description: 'Early morning slot with cool weather and high wildlife activity for sightings.',
    image: sasan_gir_safari,
  },
  {
    id: 4,
    icon: <CarFront className="h-7 w-7" />,
    title: 'Evening Safari',
    duration: '3 hours',
    price: 'From Rs. 1,700',
    description: 'Golden-hour safari experience with trained guide in designated forest zones.',
    image: sasan_gir_safari,
  },
  {
    id: 5,
    icon: <CarFront className="h-7 w-7" />,
    title: 'Gypsy Safari',
    duration: '3 hours',
    price: 'From Rs. 1,800',
    description: 'Open gypsy safari with certified guide and driver in scheduled forest slots.',
    image: sasan_gir_safari,
  },
  {
    id: 6,
    icon: <Trees className="h-7 w-7" />,
    title: 'Devalia Safari Park',
    duration: '90 mins',
    price: 'From Rs. 800',
    description: 'Compact safari circuit with high chances of spotting lions and deer species.',
    image: sasan_gir_lion,
  },
];

const perks = [
  {
    icon: <Clock3 className="w-5 h-5" />,
    text: 'Morning and evening safari slots',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    text: 'Verified drivers and local guides',
  },
  {
    icon: <Ticket className="w-5 h-5" />,
    text: 'Permit and entry support',
  },
];

const createBookingId = () => `HNF-${Date.now().toString().slice(-6)}`;

const extractPrice = (priceText) => {
  const price = Number(priceText.replace(/[^\d]/g, ''));
  return Number.isNaN(price) ? 0 : price;
};

const Safari = () => {
  const bookingSectionRef = useRef(null);
  const [selectedSafari, setSelectedSafari] = useState(null);
  const [step, setStep] = useState('form');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    visitDate: '',
    slot: 'Morning',
    persons: 2,
    note: '',
  });
  const [transactionId, setTransactionId] = useState('');
  const [ticketData, setTicketData] = useState(null);

  const bookingAmount = useMemo(() => {
    if (!selectedSafari) return 0;
    return extractPrice(selectedSafari.price) * Number(formData.persons || 1);
  }, [selectedSafari, formData.persons]);

  const handleSelectSafari = (option) => {
    setSelectedSafari(option);
    setStep('form');
    setTicketData(null);
    setTransactionId('');
    window.setTimeout(() => {
      bookingSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setStep('payment');
  };

  const handlePaymentConfirm = () => {
    if (!transactionId.trim()) {
      return;
    }

    setTicketData({
      bookingId: createBookingId(),
      bookedSafari: selectedSafari.title,
      ...formData,
      amount: bookingAmount,
      transactionId: transactionId.trim(),
      bookedOn: new Date().toLocaleString('en-IN'),
    });
    setStep('ticket');
  };

  const handleTicketDownload = () => {
    if (!ticketData) return;

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Nature & adventure Safari Ticket', 20, 20);

    doc.setDrawColor(181, 147, 74);
    doc.line(20, 24, 190, 24);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const rows = [
      `Booking ID: ${ticketData.bookingId}`,
      `Name: ${ticketData.fullName}`,
      `Phone: ${ticketData.phone}`,
      `Email: ${ticketData.email}`,
      `Safari: ${ticketData.bookedSafari}`,
      `Visit Date: ${ticketData.visitDate}`,
      `Slot: ${ticketData.slot}`,
      `Persons: ${ticketData.persons}`,
      `Amount Paid: Rs. ${ticketData.amount}`,
      `Transaction ID: ${ticketData.transactionId}`,
      `Booked On: ${ticketData.bookedOn}`,
      'Status: Confirmed',
    ];

    let y = 36;
    rows.forEach((line) => {
      doc.text(line, 20, y);
      y += 8;
    });

    doc.setFontSize(10);
    doc.text('Please carry this ticket and a valid ID at entry.', 20, y + 8);
    doc.save(`${ticketData.bookingId}.pdf`);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#f8f5ef] via-[#fffdf8] to-white">
      <Navbar />

      <header className="relative h-[58vh] min-h-80 overflow-hidden sm:h-[62vh] sm:min-h-90">
        <img
          src={sasan_gir_safari}
          alt="Safari hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <div className="max-w-3xl">
            {/* <p className="text-gir-gold uppercase tracking-[0.24em] text-xs sm:text-sm font-bold">Book Safari</p> */}
            <h1 className="mt-3 text-3xl font-black text-white sm:text-5xl md:text-6xl">Ride and Safaris</h1>
            <p className="max-w-2xl mx-auto mt-4 text-base text-white/90 sm:text-lg">
              Choose your preferred ride or safari package and reserve your slot for an unforgettable jungle experience.
            </p>
          </div>
        </div>
      </header>

      <main className="pt-10 pb-16 sm:pt-12 sm:pb-20">
        <p className="text-center text-gir-gold uppercase tracking-[0.2em] text-sm sm:text-base font-extrabold mb-8 sm:mb-10 hover:underline transition-all duration-200 cursor-pointer">
          Book Safari
        </p>

        <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {safariOptions.map((option) => (
              <article
                key={option.id}
                className="overflow-hidden bg-white border border-[#efe8dc] rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-40 sm:h-44">
                  <img src={option.image} alt={option.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute flex items-center justify-center w-12 h-12 top-4 left-4 rounded-xl bg-white/90 text-gir-green">
                    {option.icon}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h2 className="text-2xl font-extrabold text-gray-900">{option.title}</h2>
                  <p className="mt-2 text-sm text-gray-500">{option.duration}</p>
                  <p className="mt-2 font-bold text-gir-green">{option.price}</p>
                  <p className="mt-4 leading-relaxed text-gray-600">{option.description}</p>
                  <button
                    onClick={() => handleSelectSafari(option)}
                    className="w-full py-3 mt-6 font-semibold text-white transition-colors duration-200 rounded-xl bg-gir-green hover:bg-gir-green/90"
                  >
                    Book Now
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div ref={bookingSectionRef} className="mt-12 rounded-3xl border border-[#eadfce] bg-white p-5 sm:p-8">
            <h3 className="text-xl font-black text-gray-900 sm:text-2xl">Safari Booking Desk</h3>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Select a safari card, fill details, complete payment via scanner, and download your ticket instantly.
            </p>

            {!selectedSafari && (
              <div className="mt-5 rounded-2xl border border-dashed border-[#d8c9af] bg-[#fff9ef] p-5 text-sm text-gray-700">
                Please choose any safari package above to start booking.
              </div>
            )}

            {selectedSafari && (
              <div className="mt-6 space-y-6">
                <div className="rounded-2xl bg-[#f8f5ef] p-4 sm:p-5">
                  <p className="text-sm font-semibold text-gir-green">Selected Safari</p>
                  <p className="mt-1 text-lg font-black text-gray-900">{selectedSafari.title}</p>
                  <p className="text-sm text-gray-600">{selectedSafari.duration} | {selectedSafari.price} per person</p>
                </div>

                {step === 'form' && (
                  <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))}
                      className="w-full rounded-xl border border-[#decfb6] px-4 py-3 outline-none focus:border-gir-green"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                      className="w-full rounded-xl border border-[#decfb6] px-4 py-3 outline-none focus:border-gir-green"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      className="w-full rounded-xl border border-[#decfb6] px-4 py-3 outline-none focus:border-gir-green"
                    />
                    <input
                      type="date"
                      required
                      value={formData.visitDate}
                      onChange={(event) => setFormData((prev) => ({ ...prev, visitDate: event.target.value }))}
                      className="w-full rounded-xl border border-[#decfb6] px-4 py-3 outline-none focus:border-gir-green"
                    />
                    <select
                      value={formData.slot}
                      onChange={(event) => setFormData((prev) => ({ ...prev, slot: event.target.value }))}
                      className="w-full rounded-xl border border-[#decfb6] px-4 py-3 outline-none focus:border-gir-green"
                    >
                      <option value="Morning">Morning Slot</option>
                      <option value="Evening">Evening Slot</option>
                    </select>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      required
                      value={formData.persons}
                      onChange={(event) => setFormData((prev) => ({ ...prev, persons: event.target.value }))}
                      className="w-full rounded-xl border border-[#decfb6] px-4 py-3 outline-none focus:border-gir-green"
                    />
                    <textarea
                      rows="3"
                      placeholder="Special Note (optional)"
                      value={formData.note}
                      onChange={(event) => setFormData((prev) => ({ ...prev, note: event.target.value }))}
                      className="w-full rounded-xl border border-[#decfb6] px-4 py-3 outline-none sm:col-span-2 focus:border-gir-green"
                    />
                    <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-semibold text-gray-700">Estimated Total: Rs. {bookingAmount}</p>
                      <button
                        type="submit"
                        className="px-6 py-3 font-semibold text-white transition-colors duration-200 rounded-xl bg-gir-green hover:bg-gir-green/90"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                )}

                {step === 'payment' && (
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-[#e6dac5] bg-[#fffdf7] p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gir-green">Payment Scanner</p>
                      <img
                        src={scanner} // scanner add krna hai khudka ya fir koi dummy qr code rakhna hai
                        alt="Payment QR scanner"
                        className="w-52 h-52 mt-4 rounded-xl border border-[#e6dac5] bg-white p-2"
                      />
                      <p className="mt-4 text-sm text-gray-600">Scan this QR using any UPI app and pay Rs. {bookingAmount}.</p>
                    </div>

                    <div className="rounded-2xl border border-[#e6dac5] bg-white p-5">
                      <label className="text-sm font-semibold text-gray-700">Enter Transaction ID after payment</label>
                      <input
                        type="text"
                        required
                        value={transactionId}
                        onChange={(event) => setTransactionId(event.target.value)}
                        placeholder="UPI transaction/reference number"
                        className="w-full mt-2 rounded-xl border border-[#decfb6] px-4 py-3 outline-none focus:border-gir-green"
                      />
                      <div className="flex flex-col gap-3 mt-4 sm:flex-row">
                        <button
                          type="button"
                          onClick={() => setStep('form')}
                          className="rounded-xl border border-[#d9c8ac] px-5 py-3 font-semibold text-gray-700"
                        >
                          Edit Details
                        </button>
                        <button
                          type="button"
                          onClick={handlePaymentConfirm}
                          className="px-5 py-3 font-semibold text-white rounded-xl bg-gir-green hover:bg-gir-green/90"
                        >
                          Confirm Payment
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 'ticket' && ticketData && (
                  <div className="p-5 border border-green-200 rounded-2xl bg-green-50 sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-green-700">Booking Confirmed</p>
                    <h4 className="mt-2 text-xl font-black text-green-900">Ticket Ready</h4>
                    <div className="grid grid-cols-1 gap-2 mt-4 text-sm text-green-900 sm:grid-cols-2">
                      <p><span className="font-semibold">Booking ID:</span> {ticketData.bookingId}</p>
                      <p><span className="font-semibold">Name:</span> {ticketData.fullName}</p>
                      <p><span className="font-semibold">Safari:</span> {ticketData.bookedSafari}</p>
                      <p><span className="font-semibold">Date:</span> {ticketData.visitDate}</p>
                      <p><span className="font-semibold">Slot:</span> {ticketData.slot}</p>
                      <p><span className="font-semibold">Persons:</span> {ticketData.persons}</p>
                      <p><span className="font-semibold">Paid:</span> Rs. {ticketData.amount}</p>
                      <p><span className="font-semibold">Txn ID:</span> {ticketData.transactionId}</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleTicketDownload}
                      className="px-6 py-3 mt-5 font-semibold text-white rounded-xl bg-gir-green hover:bg-gir-green/90"
                    >
                      Download Ticket
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-12 rounded-3xl border border-[#ede3d4] bg-[#fff9ef] p-6 sm:p-8">
            <h3 className="mb-5 text-xl font-black text-gray-900 sm:text-2xl">What is included</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {perks.map((perk) => (
                <div key={perk.text} className="flex items-center gap-3 text-gray-700">
                  <span className="text-gir-green">{perk.icon}</span>
                  <span className="font-medium">{perk.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 font-semibold text-black transition-opacity duration-200 bg-gir-gold rounded-xl hover:opacity-90"
              >
                Need Custom Plan?
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Safari;