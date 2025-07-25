import React from "react";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Password changed successfully");
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-[right_center] bg-no-repeat flex items-center justify-end"
      style={{ backgroundImage: "url('/assets/images/train.jpg')" }}
    >
      <div className="bg-white w-full max-w-md p-8 shadow-2xl rounded-lg m-6">
        <div className="text-center mb-6">
          <img
            src="/assets/images/cattletrain.png"
            alt="Cattle Train Logo"
            className="mx-auto mb-4 w-24 sm:w-28"
            style={{ maxWidth: "25%", height: "auto" }}
          />

          <h2 className="text-xl font-semibold text-gray-800">
            Change your Password
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Set your new password to access bookings
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Change Password
          </button>
        </form>
        <div className="text-center mt-4 text-sm">
          <Link to="/login" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
