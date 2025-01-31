import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import images properly
import review2 from "../assets/review2.jpg";
import review3 from "../assets/review3.jpg";
import review4 from "../assets/review4.jpg";
import review5 from "../assets/review5.jpg";
import review6 from "../assets/review6.jpg";
import review7 from "../assets/review7.jpg";
import review8 from "../assets/review8.jpg";
import review from "../assets/review.jpg";

const Reviews = () => {
  const reviewsData = [
    { id: 1, img: review2, text: "Great experience with OGCS Private Limited!" },
    { id: 2, img: review3, text: "Baba's training sessions were truly inspiring!" },
    { id: 3, img: review4, text: "Excellent corporate training program!" },
    { id: 4, img: review8, text: "Highly recommend OGCS for project management solutions!" },
    { id: 5, img: review5, text: "Innovative solutions for complex projects!" },
    { id: 6, img: review6, text: "Transformative leadership development program!" },
    { id: 7, img: review7, text: "Engaging storytelling in training sessions!" },
    { id: 8, img: review8, text: "Practical advice for career growth!" },
    { id: 9, img: review, text: "Impactful training in multiple languages!" },
  ];

  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState({ isOpen: false, imgSrc: "" });

  const openLightbox = (imgSrc) => {
    setLightbox({ isOpen: true, imgSrc });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imgSrc: "" });
  };

  return (
    <div className="text-center py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 drop-shadow-xl">
        ⭐ Reviews
      </h2>

      {/* 3x3 Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 duration-300 hover:shadow-yellow-500/50 cursor-pointer"
            onClick={() => openLightbox(review.img)}
          >
            <img
              src={review.img}
              alt={`Review ${review.id}`}
              className="w-full h-32 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-yellow-400 font-semibold text-lg mt-3">Review</h3>
            <p className="text-gray-200 text-xs mt-1">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 space-x-4">
        <button
          className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md transition-transform duration-300 hover:scale-105"
          onClick={() => navigate("/registerform")}
        >
          👉 Register Now
        </button>
        <button
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full shadow-md transition-transform duration-300 hover:scale-105"
          onClick={() => navigate("/learn-more")}
        >
          📌 Know More
        </button>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50"
          onClick={closeLightbox}
        >
          <img
            src={lightbox.imgSrc}
            alt="Fullsize Review"
            className="max-w-2xl max-h-3/4 rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Reviews;
