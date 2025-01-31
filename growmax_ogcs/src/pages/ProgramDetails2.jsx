import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from '../api';

const ProgramDetail2 = () => {
  const { programId } = useParams();
  const [program, setProgram2] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const response = await axios.get(`${baseurl}/api/programs/${programId}`);
        setProgram2(response.data);
      } catch (error) {
        console.error('Error fetching program details:', error);
      }
    };

    fetchProgram();

    const today = new Date();
    setCurrentDate(today.toLocaleDateString());
    setCurrentTime(today.toLocaleTimeString());
  }, [programId]);

  if (!program) {
    return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 min-h-screen p-6 flex justify-center items-center">
      <div className="bg-white max-w-4xl w-full rounded-lg shadow-lg p-6 space-y-6">
        {/* Program Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800">{program.name}</h1>

        {/* Program Image */}
        <img
          src={program.image}
          alt={program.name}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />

        {/* Program Description */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-700">About the Program</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{program.description}</p>
        </div>

        {/* Program Details */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-700">Program Details</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <span className="font-medium text-gray-800">Duration:</span> 7 hours
            </li>
            <li>
              <span className="font-medium text-gray-800">Instructor:</span> Grow Max
            </li>
            <li>
              <span className="font-medium text-gray-800">Price:</span> ₹500
            </li>
          </ul>
        </div>

        {/* Current Date and Time */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Today's Date and Time</h3>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Date:</span> {currentDate}
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Time:</span> {currentTime}
          </p>
        </div>

        {/* Program Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-700">What You’ll Learn</h3>
          <p className="text-gray-600 leading-relaxed">{program.text}</p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-6">
          {/* <button
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            onClick={() => alert('Enrolled Successfully!')}
          >
            Enroll Now
          </button> */}
          <button
            className="px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg shadow hover:bg-gray-300 transform hover:scale-105 transition-all duration-300"
            onClick={() => alert('Contact form or details')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail2;
