import React from "react";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Password changed successfully");
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat bg-right flex items-center justify-end px-4 sm:px-8 py-8"
      style={{ backgroundImage: "url('/assets/images/train.jpg')" }}
    >
      <div className="bg-white w-full max-w-md lg:max-w-lg p-6 shadow-2xl rounded-lg flex flex-col mr-12">
        <div className="text-center mb-4">
          <img
            src="/assets/images/cattletrain.png"
            alt="Cattle Train Logo"
            className="mx-auto w-24 sm:w-28 mb-3"
          />

          <h2
            className="text-[22px] font-semibold text-gray-900 leading-tight"
            style={{ fontFamily: "Lexend Deca" }}
          >
            Change your Password
          </h2>
          <p
            className="text-sm text-gray-600 mt-1"
            style={{ fontFamily: "Lexend Deca" }}
          >
            Set your new password to access bookings
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* New Password */}
          <div>
            <label className="block text-sm mb-1">New Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <img
                  src="/assets/icons/lock-circle.svg"
                  alt="Lock Icon"
                  className="w-5 h-5"
                />
              </span>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <img
                  src="/assets/icons/lock-circle.svg"
                  alt="Lock Icon"
                  className="w-5 h-5"
                />
              </span>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Change Password
          </button>
        </form>

        {/* Back to Login */}
        <div className="text-center mt-4 text-sm">
          <Link to="/login" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
