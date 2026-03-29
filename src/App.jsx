import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Faq from './components/Faq';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Placeholder routes for future sections */}
        <Route path="/safari" element={<div className="p-20 text-center text-3xl font-bold bg-gir-sand/10 min-h-screen">Safari Page Coming Soon...</div>} />
        <Route path="/contact" element={<div className="p-20 text-center text-3xl font-bold bg-gir-green text-white min-h-screen">Contact Page Coming Soon...</div>} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
