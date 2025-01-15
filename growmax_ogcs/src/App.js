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
import LoginPage from './components/LoginPage';
import RegisterForm from './components/RegisterForm';
import Booking from './pages/Booking';
import ProgramDetail from './pages/ProgramDetail';

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
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/program/:programId" element={<ProgramDetail />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
