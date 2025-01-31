import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/ProgramDetail21.module.css';
import { baseurl } from '../api'

const ProgramDetail21 = () => {
  const location = useLocation();
  const program21 = location.state?.program || {}; // Safely access program data
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '' });
  //const baseurl = 'https://yourapi.com'; // Replace with your API endpoint

  useEffect(() => {
    const today = new Date();
    setCurrentDate(today.toLocaleDateString());
    setCurrentTime(today.toLocaleTimeString());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        programName: program21.name,
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

  if (!program21.name) {
    return (
      <div className={styles.errorContainer}>
        <h1 className={styles.errorText}>Program details not found!</h1>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>{program21.name}</h1>
        <img src={program21.image} alt={program21.name} className={styles.image} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>About the Program</h2>
          <p className={styles.text}>{program21.description}</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Today's Date and Time</h3>
          <p className={styles.text}>
            <span className={styles.label}>Date:</span> {currentDate}
          </p>
          <p className={styles.text}>
            <span className={styles.label}>Time:</span> {currentTime}
          </p>
        </div>

        <div className={styles.buttonContainer}>
          {/* <button
            className={styles.enrollButton}
            onClick={() => alert('You have successfully enrolled!')}
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

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Join {program21.name}</h2>
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
                         value={program21.name}
                         onChange={handleInputChange}
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

export default ProgramDetail21;
