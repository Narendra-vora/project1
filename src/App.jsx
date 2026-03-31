import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Safari from './pages/Safari';
import Faq from './components/Faq';
import Contact from './pages/Contact';
import BookParks from './pages/BookParks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/book-parks" element={<BookParks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
