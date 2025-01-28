import React from 'react';
import personImage from '../assets/sir2.png'; // Replace with your actual image path
import logo from '../assets/growmaxlogo11.png'; // Replace with your logo path

const HomePage = () => {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center justify-between px-10" style={{ backgroundImage: "url('../assets/background.jpg')" }}>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
          <h1 className="text-2xl font-bold">OGCS</h1>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#programs" className="hover:text-yellow-400">Programs</a></li>
          <li><a href="#events" className="hover:text-yellow-400">Event</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-start justify-center space-y-6 text-white max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          "Unlock Your Potential. Build Your Success."
        </h1>
        <h2 className="text-3xl font-bold">Baba V. Ohol</h2>
        <p className="text-lg md:text-xl font-light">
          Visionary Motivational Speaker & Corporate Trainer <br />
          Managing Director, OGCS Private Limited
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-indigo-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
          Start Your Transformation Now!
        </button>
      </div>

      {/* Right-Side Image */}
      <div className="flex justify-center">
        <img src={personImage} alt="Baba V. Ohol" className="w-48 md:w-64 lg:w-72" />
      </div>
    </div>
  );
};

export default HomePage;
