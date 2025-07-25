// src/pages/Login.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // You can add real validation/auth here
    navigate("/watco/AdminDashboard");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // You can add real validation/auth here
    navigate("/watco/AdminDashboard");
  };


  return (
    <div className="min-h-screen w-full bg-cover bg-[right_center] bg-no-repeat flex items-center justify-end"
         style={{ backgroundImage: "url('/assets/images/train.jpg')" }}>
      
      {/* Floating Login Card */}
      <div className="bg-white w-full max-w-md p-8 shadow-2xl rounded-lg m-8">
        <div className="text-center mb-6">
        <img
          src="/assets/images/cattletrain.png"
          alt="Cattle Train Logo"
          className="mx-auto mb-4 w-28 sm:w-32"
          style={{  maxWidth: '25%', height: 'auto', top: "20px", }}
        />

          <p className="text-gray-700 mt-4"
            style={{fontFamily:"Lexend Deca"}}
          >Welcome!<br />Please enter your details to Login</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Albertflores@gmail.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="**************"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot Your Password?</a>
          </div>

          <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition">
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
}
