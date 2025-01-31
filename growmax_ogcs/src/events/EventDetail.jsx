import React from "react";
import { useNavigate } from "react-router-dom";
//import Reviews from "./Review";
import ProgramDetail3 from "../pages/ProgramDetail3";

const EventDetail = () => {
  const navigate = useNavigate();

  return (

    <>
    <div>
      <ProgramDetail3 />
    </div>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <h1 style={{ fontSize: "28px", color: "#333", textAlign: "center", marginBottom: "10px" }}>
        Grow Max
      </h1>
      <h4 style={{ fontSize: "18px", color: "#666", textAlign: "center", marginBottom: "20px" }}>
        Unlock Your Potential, Build Your Success
      </h4>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/register")}
        >
          👉 Register Now
        </button>
      </div>

      {/* Program Schedule Section */}
      <h2 style={{ fontSize: "24px", color: "#444", textAlign: "center", marginBottom: "20px" }}>
        📅 Program Schedule
      </h2>
      <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px", textAlign: "center", marginBottom: "30px" }}>
        <h3 style={{ fontSize: "20px", color: "#333" }}>Mastery in Interview Success</h3>
        <p style={{ color: "#555", margin: "10px 0" }}>Boost Your Confidence and Shine in Interviews!</p>
        <p style={{ color: "#555" }}>This <strong>3-hour training program</strong> is designed to help you succeed with confidence!</p>

        <div style={{ marginTop: "20px" }}>
          <p><strong>🗓 Date:</strong> August 10, 2024</p>
          <p><strong>🕒 Time:</strong> 3:00 PM - 6:00 PM</p>
          <p><strong>📍 Platform:</strong> Zoom</p>
        </div>

        <h4 style={{ fontSize: "20px", color: "#444", marginTop: "20px" }}>What You'll Gain</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>✔ Confidence-Boosting Strategies</li>
          <li>✔ Expert Interview Tips</li>
          <li>✔ Master Presentation Skills</li>
          <li>✔ Craft Impactful Answers</li>
        </ul>
      </div>

      {/* About Trainer Section */}
      {/* <h2 style={{ fontSize: "24px", color: "#444", textAlign: "center", marginBottom: "20px" }}>
        👨‍🏫 Meet Your Trainer
      </h2>
      <div style={{ textAlign: "center" }}>
        <img
          src="/assets/trainer.jpg"
          alt="Trainer"
          style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "10px" }}
        />
        <p style={{ fontSize: "18px", color: "#333" }}>
          <strong>Baba V. Ohol</strong><br />
          Visionary Motivational Speaker & Corporate Trainer<br />
          Managing Director, OGCS Private Limited
        </p>
        <p style={{ color: "#555", marginTop: "10px" }}>
          With over <strong>three decades</strong> of experience, Baba has helped thousands of professionals unlock their full potential.
        </p>
      </div> */}

      {/* Buttons */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
          onClick={() => navigate("/register")}
        >
          👉 Register Now
        </button>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/learn-more")}
        >
          📌 Know More
        </button>
    
      </div>
    </div>
    </>
  );
};

export default EventDetail;
