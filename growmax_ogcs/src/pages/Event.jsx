import React, { useState } from 'react';
import './Event.css';

const Event = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <section className="event-page">
      {/* Tabs for Switching Between Events */}
      <div className="event-tabs">
        <button
          className={selectedTab === 'upcoming' ? 'active' : ''}
          onClick={() => handleTabClick('upcoming')}
        >
          Upcoming Events
        </button>
        <button
          className={selectedTab === 'completed' ? 'active' : ''}
          onClick={() => handleTabClick('completed')}
        >
          Completed Events
        </button>
      </div>

      {/* Content Based on Selected Tab */}
      <div className="event-overlay">
        {selectedTab === 'upcoming' ? (
          <div className="event-box">
            <h2>Upcoming Events</h2>
            <p>Explore our exciting upcoming events designed for growth and success.</p>
            <button>View Details</button>
          </div>
        ) : (
          <div className="event-box">
            <h2>Completed Events</h2>
            <p>Check out highlights and memories from our past events.</p>
            <button>View Gallery</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Event;
