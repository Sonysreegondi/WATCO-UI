import React, { useState } from "react";

export default function UserRegistration() {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div className="relative w-screen h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left - Form Section */}
      <div className="relative flex flex-col justify-center h-full w-full lg:w-1/2 px-6 lg:px-[146px]">
        {/* Logo */}
        <img
          src="/assets/images/cattletrain.png"
          alt="Cattle Train Logo"
          className="absolute w-[100px] h-[100px]"
          style={{ top: "24px", left: "48px" }}
        />

        {/* Content Wrapper */}
        <div className="mt-[120px] w-full max-w-[840px]">
          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-[24px] font-semibold text-gray-800">
              Complete Your Account
            </h2>
            <p className="text-[14px] text-gray-600 mt-1">
              Fill in your details to get started.
            </p>
            <div className="flex items-center gap-1 mt-2">
              <div
                className={`w-6 h-1 rounded-full ${
                  step === 1 ? "bg-yellow-500" : "bg-gray-300"
                }`}
              />
              <div
                className={`w-6 h-1 rounded-full ${
                  step === 2 ? "bg-yellow-500" : "bg-gray-300"
                }`}
              />
            </div>
          </div>

          {/* Step Forms */}
          {step === 1 && (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 w-full">
              <input
                type="text"
                placeholder="Enter Company Name"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="text"
                placeholder="Enter Australian Business Number"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="text"
                placeholder="Enter Contact Name"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="email"
                placeholder="Enter Email ID"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="text"
                placeholder="Enter Street Address"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="text"
                placeholder="Enter State"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="text"
                placeholder="Enter City"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="text"
                placeholder="Enter Country"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="text"
                placeholder="Enter Zip Code"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
            </form>
          )}

          {step === 2 && (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 w-full">
              {/* Section: Accounts Contact */}
              <div className="col-span-2 flex justify-between items-center mt-0">
                <h3 className="text-[16px] font-semibold text-gray-800">
                  Accounts Contact
                </h3>
                <button
                  type="button"
                  className="text-sm text-blue-600 font-medium"
                >
                  Add+
                </button>
              </div>

              <input
                type="text"
                placeholder="Accounts Name"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="email"
                placeholder="Accounts Email"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="text"
                placeholder="Accounts Phone"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />
              <input
                type="text"
                placeholder="Accounts Phone 2"
                className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
              />

              {/* Terms Checkbox */}
              <div className="col-span-2 flex items-center gap-2 mt-2">
                <input type="checkbox" id="terms" className="h-4 w-4" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  <a href="#" className="text-blue-600 underline ml-1">
                    Acknowledgement of Terms
                  </a>
                </label>
              </div>
            </form>
          )}

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3 pb-12">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="border border-yellow-500 text-yellow-500 px-5 py-2 rounded text-sm"
              >
                Back
              </button>
            )}
            {step < 2 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-yellow-500 text-white px-5 py-2 rounded text-sm"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-yellow-500 text-white px-5 py-2 rounded text-sm"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right - Image Section */}
      <div className="hidden lg:block flex-1 h-full">
        <img
          src="/assets/images/train.jpg"
          alt="Train"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
