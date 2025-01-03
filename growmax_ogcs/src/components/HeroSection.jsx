// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import backgroundImage from '../assets/background.jpg';
import secondImage from '../assets/second.jpg';
import personImage from '../assets/person.png';
import Blogs from '../pages/Blogs';

const HeroSection = () => {
    return (
        <>
            {/* First Hero Section */}
            <section 
                className="hero-section" 
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="overlay">
                    <div className="hero-content">
                        <h1> "Unlock Your Potential. Build Your Success."</h1>
                        <p>
                            
                            <h1>Baba V. Ohol</h1>
                            Visionary Motivational Speaker & Corporate Trainer<br/>
                            Managing Director, OGCS Private Limited
                        </p>
                        <button className="cta-button">Start Your Transformation Now!</button>
                    </div>
                    <img src={personImage} alt="Person" className="person-image" />
                </div>
            </section>

            {/* Second Section with Different Background */}
            <section 
                className="second-section" 
                style={{ backgroundImage: `url(${secondImage})` }}
            >
                <div className="overlay">
                    <div className="hero-content">
                        <h1>Continue Your Journey with GrowMax</h1>
                        <p>
                            <strong>"Empowering Growth and Success."</strong><br/>
                            Join a community dedicated to personal and professional development.
                        </p>
                        <button className="cta-button">Learn More</button>
                    </div>
                </div>
            </section> 

             {/* Best Selling Books Section */}
             <Blogs />

{/* Other sections here */}
        </>
    );
};

export default HeroSection;
