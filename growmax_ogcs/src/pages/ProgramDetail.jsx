import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from './api';

const ProgramDetail = () => {
  const { programId } = useParams();
  const [program, setProgram] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const response = await axios.get(`${baseurl}/api/programs/67401e3a1d6ab1bd1c9c1be1`);
        setProgram(response.data);
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
    return <div>Loading...</div>;
  }
  
  // Format program date and time
  const formattedDate = program.date ? new Date(program.date).toLocaleDateString() : 'TBD';
  const formattedTime = program.time || 'TBD';

      
  
  return (
    <div className="program-detail">
    <h1 className="program-title">{program.name}</h1>
    <img src={program.image} alt={program.name} className="program-detail-image" />
    
    {/* Program Description */}
    <div className="program-description">
      <h2>About the Program</h2>
      <p>{program.description}</p>
    </div>
  
    {/* Program Details */}
    <div className="program-info">
      <h3>Program Details</h3>
      <ul>
        
        <li><strong>Duration:</strong> 7 hours</li>
        <li><strong>Instructor:</strong> Grow max </li>
        <li><strong>Price:</strong>  500</li>
      </ul>
    </div>

    {/* Today's Date and Time */}
    <div className="current-info">
        <h3>Today's Date and Time</h3>
        <p><strong>Date:</strong> {currentDate}</p>
        <p><strong>Time:</strong> {currentTime}</p>
      </div>
  
    {/* Program Content */}
    <div className="program-content">
      <h3>What You’ll Learn</h3>
      <p>{program.text}</p>
    </div>
  
    {/* Call-to-Action Buttons */}
    <div className="program-actions">
      <button className="enroll-button" onClick={() => alert('Enrolled Successfully!')}>
        Enroll Now
      </button>
      <button className="contact-button" onClick={() => alert('Contact form or details')}>
        Contact Us
      </button>
    </div>
  </div>
  
  );
};

export default ProgramDetail;
