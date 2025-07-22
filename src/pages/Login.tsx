// src/pages/auth/Login.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add authentication logic here
    navigate("/watco/admindashboard");
  };

  return (
    <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* Logo Positioned Absolutely */}
      <img
        src="/assets/images/cattletrain.png"
        alt="Cattle Train Logo"
        className="w-[72px] h-[72px] absolute top-[48px] left-[48px]"
      />
      {/* Left Login Form */}
      <div className="flex justify-center items-center p-4 md:p-8">
        <div className="w-[350px] h-[317px] bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome to Watco
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Please enter your details to access bookings
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Mobile or Email
              </label>
              <input
                type="text"
                placeholder="Albertflores@gmail.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <div className="flex justify-between text-sm mt-1">
                <label className="text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
                <a
                  href="#"
                  className="text-yellow-600 font-medium hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Log in securely
            </button>

            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <a
                href="#"
                className="text-yellow-600 font-medium hover:underline"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right-side Train Image */}
      <div className="hidden md:block">
        <img
          src="/assets/images/train.jpg"
          alt="Watco Train"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
