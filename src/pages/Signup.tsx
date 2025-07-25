// src/pages/Signup.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // You can add real validation/auth here
    navigate("/watco/AdminDashboard");
  };


  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="relative flex flex-col justify-center items-center bg-white h-screen">
        {/* Logo */}
        <img
          src="/assets/images/cattletrain.png"
          alt="Cattle Train Logo"
          className="absolute"
          style={{ maxWidth: '20%', height: 'auto', top: "20px", left: "20px",backgroundColor:'#fff' }}
        />

        {/* Form Container */}
        <div className="w-[350px] space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Welcome
          </h2>
          <p className="text-sm text-center text-gray-600">
            Please enter your details to access bookings
          </p>

          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Mobile or Email */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 space-x-2">
              <img
                src="/assets/icons/profile-circle.svg"
                alt="email"
                className="w-5 h-5"
              />
              <input
                type="text"
                placeholder="Mobile or Email"
                className="flex-1 focus:outline-none text-sm"
              />
            </div>
            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 space-x-2">
              <img
                src="/assets/icons/lock-circle.svg"
                alt="password"
                className="w-5 h-5"
              />
              <input
                type="password"
                placeholder="Password"
                className="flex-1 focus:outline-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md font-medium"
            >
              Log in securely
            </button>
          </form>

          <p className="text-center text-xs text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block h-screen overflow-hidden">
        <img
          src="/assets/images/train.jpg"
          alt="Train"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
