import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessScreen from "../Models/SuccessModel";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate password change, then show success screen
    setShowSuccess(true);
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  if (showSuccess) {
    return (
      <SuccessScreen
        title="Password Changed Successfully!"
        message="Your password has been updated. Please use your new password to log in."
        buttonText="Go to Login"
      />
    );
  }

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Logo + Form */}
      <div className="relative flex flex-col justify-center items-center bg-white h-screen">
        <img
          src="/assets/images/cattletrain.png"
          alt="Cattle Train Logo"
          className="absolute"
          style={{ width: "100px", height: "100px", top: "48px", left: "48px" }}
        />

        <div className="w-[350px] mt-10 space-y-5">
          <div className="w-[350px] rounded-md p-6 ">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Change your Password
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Set your new password to access bookings
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleChangePassword}>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-700 block">
                  New Password
                </label>
                <div className="flex items-center border border-gray-300 rounded px-2 py-1.5">
                  <img
                    src="/assets/icons/lock-circle.svg"
                    alt="New Password"
                    className="w-4 h-4 mr-2"
                  />
                  <input
                    type="password"
                    placeholder="*********"
                    className="flex-1 text-sm focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-700 block">
                  Confirm Password
                </label>
                <div className="flex items-center border border-gray-300 rounded px-2 py-1.5">
                  <img
                    src="/assets/icons/lock-circle.svg"
                    alt="Confirm Password"
                    className="w-4 h-4 mr-2"
                  />
                  <input
                    type="password"
                    placeholder="*********"
                    className="flex-1 text-sm focus:outline-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-2 rounded font-medium"
              >
                Change Password
              </button>

              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
                >
                  Back to Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Train Image */}
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
