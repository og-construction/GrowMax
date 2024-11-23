// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Program';
import Event from './pages/Event';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App () {
  return (
    <Router>
        <div> 
      <Navbar />
      <Routes>
        <Route
        path="/"
        element={
            <>
            <HeroSection />
            </>
        }
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
