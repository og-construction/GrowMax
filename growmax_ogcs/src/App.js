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
import ProgramDetail3 from './pages/ProgramDetail3';
import ProgramDetail4 from './pages/ProgramDetail4';
import ProgramDetail5 from './pages/ProgramDetail5';
import ProgramDetail6 from './pages/ProgramDetail6';
import ProgramDetail7 from './pages/ProgramDetail7';
import ProgramDetail2 from './pages/ProgramDetails2';
import ProgramDetail8 from './pages/ProgramDetail8';
import ProgramDetail9 from './pages/ProgramDetail9';
import ProgramDetail10 from './pages/ProgramDetail10';
import ProgramDetail11 from './pages/ProgramDetail11';
import ProgramDetail12 from './pages/ProgramDetail12';
import ProgramDetail13 from './pages/ProgramDetail13';
import ProgramDetail14 from './pages/ProgramDetail14';
import ProgramDetail15 from './pages/ProgramDetail15';
import ProgramDetail16 from './pages/ProgramDetail16';
import ProgramDetail17 from './pages/ProgramDetail17';
import ProgramDetail18 from './pages/ProgramDetail18';
import ProgramDetail19 from './pages/ProgramDetail19';
import ProgramDetail20 from './pages/ProgramDetail20';
import ProgramDetail21 from './pages/ProgramDetail21';
import ProgramDetail22 from './pages/ProgramDetail22';
import ProgramDetail23 from './pages/ProgramDetail23';
import ProgramDetail24 from './pages/ProgramDetail24';

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
        <Route path="/programs" element={<Programs />} />
        <Route path="/program-details" element={<ProgramDetail />} />
        <Route path="/program2" element={<ProgramDetail2 />} />
        <Route path="/program3" element={<ProgramDetail3 />} />
        <Route path="/program4" element={<ProgramDetail4 />} />
        <Route path="/program5" element={<ProgramDetail5 />} />
        <Route path="/program6" element={<ProgramDetail6 />} />
        <Route path="/program7" element={<ProgramDetail7 />} />
        <Route path="/program8" element={<ProgramDetail8 />} />
        <Route path="/program9" element={<ProgramDetail9 />} />
        <Route path="/program10" element={<ProgramDetail10 />} />
        <Route path="/program11" element={<ProgramDetail11 />} />
        <Route path="/program12" element={<ProgramDetail12 />} /> 
        <Route path="/program13" element={<ProgramDetail13 />} />
       <Route path="/program14" element={<ProgramDetail14 />} /> 
       <Route path="/program15" element={<ProgramDetail15 />} />
       <Route path="/program16" element={<ProgramDetail16 />} />
       <Route path="/program17" element={<ProgramDetail17 />} />
       <Route path="/program18" element={<ProgramDetail18 />} />
       <Route path="/program19" element={<ProgramDetail19 />} />
       <Route path="/program20" element={<ProgramDetail20 />} />
       <Route path="/program21" element={<ProgramDetail21 />} />
       <Route path="/program22" element={<ProgramDetail22 />} />
       <Route path="/program23" element={<ProgramDetail23 />} />
       <Route path="/program24" element={<ProgramDetail24 />} />


      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
