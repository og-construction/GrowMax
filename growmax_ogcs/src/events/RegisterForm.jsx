import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      setErrorMsg("⚠️ Please fill in all the required fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("❌ Invalid Email Address.");
      return false;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setErrorMsg("📞 Enter a valid 10-digit phone number.");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:3000/register", formData);
        if (response.data.success) {
          localStorage.setItem("userData", JSON.stringify(formData));
          navigate("/dataFrom"); // Redirect after successful registration
        } else {
          throw new Error(response.data.message || "Registration failed");
        }
      } catch (error) {
        setErrorMsg("⚠️ Registration failed. Please try again.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-cover bg-center" style={{ backgroundImage: "url('/assets/register.jpg')" }}>
      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-xl max-w-md w-full border border-gray-200/20">
        <h1 className="text-4xl font-bold text-white text-center tracking-wide drop-shadow-lg">🚀 Register Now</h1>
        <hr className="my-4 border-gray-300" />

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <label className="block text-lg font-medium text-gray-300">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}
              className="w-full px-4 py-3 mt-2 text-lg text-white bg-transparent border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-gray-300"
              placeholder="Enter your full name" required />
          </div>

          <div className="relative">
            <label className="block text-lg font-medium text-gray-300">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full px-4 py-3 mt-2 text-lg text-white bg-transparent border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-gray-300"
              placeholder="Enter your email" required />
          </div>

          <div className="relative">
            <label className="block text-lg font-medium text-gray-300">Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange}
              className="w-full px-4 py-3 mt-2 text-lg text-white bg-transparent border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-gray-300"
              placeholder="Enter your phone number" required />
          </div>

          {errorMsg && <p className="text-red-400 text-center font-semibold">{errorMsg}</p>}

          <button type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg hover:shadow-blue-400/50 transition-all duration-300 transform hover:scale-105">
            ✅ Register Now
          </button>
        </form>

        <p className="text-gray-300 text-center mt-6">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => navigate("/login")}>
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
