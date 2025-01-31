import React, { useEffect, useState } from 'react';
import { Navigate, useLocation ,useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/ProgramDetails.module.css';
import { baseurl } from '../api'


const ProgramDetails = () => {
  const location = useLocation();
  const program = location.state?.program || {}; 
  //const [program, setProgram] = useState({});
  //const [setProgram]
  //const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '' });
  //const baseurl = 'https://yourapi.com'; // Replace with your API endpoint


  // useEffect(() => {
  //   const fetchProgramDetails = async () => {
  //     try {
  //       const response = await axios.get(`${baseurl}/api/programs/${id}`);
  //       setProgram(response.data);
  //     } catch (error) {
  //       console.error('Error fetching program details:', error);
  //     }
  //   };

  //   fetchProgramDetails();
  // }, [id]);


  // Set current date and time
  useEffect(() => {
    const today = new Date();
    setCurrentDate(today.toLocaleDateString());
    setCurrentTime(today.toLocaleTimeString());
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        programName: program.name,
      };

      const response = await axios.post(`${baseurl}/api/user/register`, payload);

      if (response.status === 201) {
        alert('You have successfully registered for the program!');
        setShowModal(false);
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error registering for program:', error);
      alert('User already exists');
    }
  };

  // const handleProgramDetails = async () => {

  //   const programId =localStorage.getItem("programId");
  //   const response = await axios.get(`${baseurl}/api/program/${programId}`);
  //   const program = response.data;
  //   setProgram(program);
    
    
  // }

  if (!program.name) {
    return (
      <div className={styles.errorContainer}>
        <h1 className={styles.errorText}>Program details not found!</h1>
      </div>
    );
  }


  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        {/* Program Title */}
        <h1 className={styles.title}>{program.name}</h1>

        {/* Program Image */}
        <img src={program.image} alt={program.name} className={styles.image} />

        {/* Program Description */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>About the Program</h2>
          <p className={styles.text}>{program.description}</p>
        </div>

        {/* Today's Date and Time */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Today's Date and Time</h3>
          <p className={styles.text}>
            <span className={styles.label}>Date:</span> {currentDate}
          </p>
          <p className={styles.text}>
            <span className={styles.label}>Time:</span> {currentTime}
          </p>
        </div>

        {/* Key Aspects of Nurturing Entrepreneurs */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Key Aspects of Nurturing Entrepreneurs</h3>
          <ul className={styles.text}>
            <li>
              <strong>Education and Training:</strong>
              <ul>
                <li>Provide courses on business management, marketing, financial planning, and leadership.</li>
                <li>Encourage soft skills like communication, negotiation, and resilience.</li>
              </ul>
            </li>
            <li>
              <strong>Mentorship and Networking:</strong>
              <ul>
                <li>Connect aspiring entrepreneurs with experienced mentors for guidance.</li>
                <li>Facilitate networking opportunities to help them build valuable business relationships.</li>
              </ul>
            </li>
            <li>
              <strong>Access to Resources:</strong>
              <ul>
                <li>Offer workspaces like co-working spaces or incubation centers.</li>
                <li>Provide access to tools, technology, and infrastructure for innovation.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Call-to-Action Buttons */}
        <div className={styles.buttonContainer}>
          {/* <button
            className={styles.enrollButton}
            onClick={() => alert('Enrolled Successfully!')}
          >
            Enroll Now
          </button> */}
          <button
            className={styles.joinButton}
            onClick={() => setShowModal(true)}
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Modal for Join Us */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Join {program.name}</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="mobile" className={styles.label}>Mobile</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>

          <div className={styles.formGroup}>
              <label htmlFor="programName" className={styles.label}>Program Name</label>
            <input
            type="text"
           id="programName"
           name="programName"
           value={program.name || ''}
           onClick={handleInputChange}
           className={styles.input}
           disabled
           />
         </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramDetails;
