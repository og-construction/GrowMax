import React from 'react';
import './contact.css'; // Import the CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                {/* <p>We're here to help you! Get in touch with us through any of the methods below.</p> */}
            </div>
            <div className="contact-details">
                <div className="contact-card">
                    <h3>Phone</h3>
                    <p>📞 +91 9967621235</p>
                    <p>📞 +91 9967610135</p>
                </div>
                <div className="contact-card">
                    <h3>Email</h3>
                    <p>📧 <a href="mailto:growmax@ogcs.co.in">growmax@ogcs.co.in</a></p>
                </div>
                <div className="contact-card">
                    <h3>Website</h3>
                    <p>🌐 <a href="https://www.ogcs.co.in" target="_blank" rel="noopener noreferrer">www.ogcs.co.in</a></p>
                    <p>🌐 <a href="https://buildpro.ogcs.co.in/" target="_blank" rel="noopener noreferrer">buildpro.ogcs.co.in</a></p>

                </div>
            </div>
        </div>
    );
};

export default Contact;
