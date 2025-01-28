import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Event.css";

const Event = ({ selectedTab: defaultTab = "upcoming" }) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedTab(defaultTab);
  }, [defaultTab]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (tab === "completed") {
      navigate("/event/completedevent");  
    } else {
      navigate("/event/upcoming"); 
    }
  };

  return (
    <section className="event-page">
      {/* Tabs for Switching Between Events */}
      <div className="event-tabs">
        <button
          className={selectedTab === "upcoming" ? "active" : ""}
          onClick={() => handleTabClick("upcoming")}
        >
          Upcoming Events
        </button>
        <button
          className={selectedTab === "completed" ? "active" : ""}
          onClick={() => handleTabClick("completed")}
        >
          Completed Events
        </button>
      </div>

      {/* Content Based on Selected Tab */}
      <div className="event-overlay">
        {selectedTab === "upcoming" ? (
          <div className="event-box">
            <h2>Upcoming Events</h2>
            <p>Explore our exciting upcoming events designed for growth and success.</p>
            <button>View Details</button>
          </div>
        ) : (
          <div className="event-box">
            <h2>Completed Events</h2>
            <p>Check out highlights and memories from our past events.</p>
            <button onClick={() => navigate("/event/completedevent")}>View Gallery</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Event;
