import React from 'react';
import './About.css';
import backgroundImage from '../assets/About2.jpg'; // Background image
import personImage1 from '../assets/sir2.png'; // Image for Baba V. Ohol
import softskill from '../assets/softskills.jpg'
import technical from  '../assets/technical.png'
import logo from '../assets/growmaxlogo11.png';
import leader from '../assets/leadersir.jpeg'
import journy from '../assets/journy.jpg'


const About = () => {
  return (
    <section className="about-bsr" style={{ backgroundImage: `url(${backgroundImage})` }}>
       {/* About GrowMax Section */}
       <div className="about-overlay growmax-section">
        <div className="about-content">
          <h1>About GrowMax</h1>
          <h2>"Unlock Your Potential. Build Your Success."</h2>
          <p>
            GrowMax is more than a training platform—it’s a gateway to personal and professional transformation.
            Spearheaded by Baba V. Ohol, a visionary leader with over three decades of experience, GrowMax specializes
            in equipping individuals and organizations with the tools to thrive in today’s competitive world.
          </p>
          <p>
            At GrowMax, we work with fresh graduates, seasoned professionals, and entrepreneurs alike, helping them:
            <ul>
              <li>Gain confidence and clarity in their roles.</li>
              <li>Develop leadership and technical skills.</li>
              <li>Enhance workplace safety and operational efficiency.</li>
              <li>Navigate challenges with innovative and effective solutions.</li>
            </ul>
          </p>
        </div>
        <div className="about-image">
          <img src={logo} alt="GrowMax Overview" />
        </div>
      </div>

      {/* Who is Baba Ohol Section */}
      <div className="about-overlay who-section">
        <div className="about-image">
          <img src={personImage1} alt="Baba V. Ohol" />
        </div>
        <div className="about-content">
          <h1>Who is Baba Ohol?</h1>
          <p>
            Baba V. Ohol<br />
            Visionary Motivational Speaker & Corporate Trainer<br />
            Managing Director of OGCS Private Limited<br /><br />
            Baba V. Ohol is a renowned motivational speaker and corporate trainer,
            known for his transformative sessions that inspire and empower individuals
            and teams across various industries. With over three decades of experience,
            Baba brings a wealth of knowledge and practical insights, making him a sought-after
            figure in the world of corporate training and personal development.
          </p>
        </div>
      </div>

      {/* Journey of Baba Ohol Section */}
      <div className="about-overlay journey-section">
        <div className="about-content">
          <h1>Journey of Baba Ohol</h1>
          <p>
            The journey of Baba V. Ohol is one of perseverance, dedication, and a relentless
            pursuit of excellence. Starting his career in the construction industry, Baba quickly
            became a leader, guiding teams and managing large-scale projects across diverse sectors
            such as roads, hydropower, petrochemical plants, and more. His ability to combine technical
            expertise with soft skills has made him a trusted name in the industry.
          </p>
        </div>
        <div className="about-image">
          <img src={journy} alt="Journey of Baba Ohol" />
        </div>
      </div>

     
      {/* Why Choose GrowMax Section */}
      <div className="about-overlay journey-section">
        <div className="about-content">
          <h1>Why Choose GrowMax</h1>
          <p>
            <ul>
              <li>Unmatched Expertise: Programs designed by industry veterans.</li>
              <li>Tailored Solutions: Every program is customized to meet participant needs.</li>
              <li>Transformative Impact: Focused on delivering real-world results.</li>
              <li>Comprehensive Offerings: Covering everything from technical training to leadership development.</li>
            </ul>
          </p>
        </div>
        <div className="about-image">
          <img src={logo} alt="Why GrowMax" />
        </div>
      </div>

      {/* Technical Skills Training Section */}
      <div className="about-overlay journey-section">
        <div className="about-content">
          <h1>Technical Skills Training</h1>
          <p>
            <ul>
              <li>Master Construction Techniques: Hands-on expertise in project management, planning, QA, and safety protocols.</li>
              <li>Enhance Efficiency: Learn strategies to reduce costs and meet deadlines effectively.</li>
              <li>Growth Built Program: A one-week intensive course covering excavation, formwork, quality control, and essential documentation.</li>
            </ul>
          </p>
        </div>
        <div className="about-image">
          <img src={technical} alt="Technical Skills Training" />
        </div>
      </div>

      {/* Soft Skills Training Section */}
      <div className="about-overlay journey-section">
        <div className="about-content">
          <h1>Soft Skills Training</h1>
          <p>
            <ul>
              <li>Leadership Excellence: Unlock leadership potential through effective communication and decision-making skills.</li>
              <li>Conflict Resolution: Gain tools to manage stress and foster teamwork.</li>
              <li>Confidence Booster Program: Build self-assurance and unlock personal power for professional success.</li>
            </ul>
          </p>
        </div>
        <div className="about-image">
          <img src={softskill} alt="Soft Skills Training" />
        </div>
      </div>

      {/* Meet the Leader Section */}
      <div className="about-overlay leader-section">
        <div className="about-content">
          <h1>Meet the Leader</h1>
          <h2>Baba V. Ohol</h2>
          <p>
            Motivational Speaker & Corporate Trainer<br />
            Visionary Leader with Over 30 Years of Experience<br /><br />
            Baba V. Ohol brings unmatched expertise from his extensive career in the construction sector, managing diverse
            and complex projects across industries. From infrastructure to industrial developments, Baba’s training sessions
            are packed with practical advice and strategies to empower participants.
          </p>
        </div>
        <div className="about-image">
          <img src={leader} alt="Meet the Leader" />
        </div>
      </div>
    </section>
  );
};

export default About;
