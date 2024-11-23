import React from 'react';
import './contact.css'; // Import the CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We're here to help you! Get in touch with us through any of the methods below.</p>
            </div>
            <div className="contact-details">
                <div className="contact-card">
                    <h3>Phone</h3>
                    <p>📞 +91 9869185299</p>
                    <p>📞 +91 8591948585</p>
                </div>
                <div className="contact-card">
                    <h3>Email</h3>
                    <p>📧 <a href="mailto:og.constructionsolution@gmail.com">og.constructionsolution@gmail.com</a></p>
                    <p>📧 <a href="mailto:babaohol@ogcs.co.in">babaohol@ogcs.co.in</a></p>
                </div>
                <div className="contact-card">
                    <h3>Website</h3>
                    <p>🌐 <a href="https://www.ogcs.co.in" target="_blank" rel="noopener noreferrer">www.ogcs.co.in</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
