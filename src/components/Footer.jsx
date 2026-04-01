import React from 'react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white bg-gir-green">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full -top-24 -left-24 h-72 w-72 bg-gir-gold/10 blur-3xl" />
        <div className="absolute rounded-full -bottom-24 -right-24 h-72 w-72 bg-gir-sand/20 blur-3xl" />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold tracking-wide">Nature & Adventure Vibe</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Explore the wild heart of Gujarat with curated safari experiences, local guides, and unforgettable wildlife moments.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gir-gold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li><a href="#" className="transition-colors hover:text-gir-gold">Home</a></li>
              <li><a href="#about" className="transition-colors hover:text-gir-gold">About</a></li>
              <li><a href="#services" className="transition-colors hover:text-gir-gold">Safari Packages</a></li>
              <li><a href="#our-animals" className="transition-colors hover:text-gir-gold">Our Animals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gir-gold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>national parks </li>
              <li>+91 98765 43210</li>
              <li>natureandadventurevibe@gmail.com</li>
              <li>Mon - Sun: 6:00 AM - 7:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gir-gold">Stay Updated</h4>
            <p className="mt-4 text-sm text-white/80">Get safari alerts and seasonal wildlife updates.</p>
            <form className="flex gap-2 mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm border rounded-lg border-white/20 bg-white/10 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gir-gold"
              />
              <button
                type="button"
                className="px-4 py-2 text-sm font-semibold transition-colors rounded-lg bg-gir-gold text-gir-green hover:bg-gir-sand"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 mt-10 text-xs border-t border-white/15 sm:flex-row text-white/70">
          <p>Copyright {new Date().getFullYear()} Nature & Adventure Vibe. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {/* <a href="#" className="transition-colors hover:text-gir-gold">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-gir-gold">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-gir-gold">Booking Help</a> */}
              <h1 className="text-sm font-bold tracking-wide underline text-white/70 ">Designed By :- NAREN</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;