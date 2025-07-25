import { Link } from "react-router-dom";
import { useState } from "react";
import Stepper from "../components/common/Stepper";
import InputField from "../components/common/InputField";

export default function Login() {
  const [step, setStep] = useState(1);
  const [acknowledged, setAcknowledged] = useState(false);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!acknowledged) {
    //   alert("Please acknowledge the terms and conditions.");
    //   return;
    // }
    // alert("Form submitted!");
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-[right_center] bg-no-repeat flex items-center justify-end"
      style={{ backgroundImage: "url('/assets/images/train.jpg')" }}
    >
      <div className="bg-white w-full max-w-md p-6 shadow-2xl rounded-lg m-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Complete Your Account
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Fill in your details to get started.
            </p>
            <Stepper currentStep={step} totalSteps={4} />
          </div>
          <img
            src="/assets/images/cattletrain.png"
            alt="Cattle Train Logo"
            className="w-[50px] h-auto"
          />
        </div>

        {/* Form Section */}
        <form className="space-y-2" onSubmit={handleSubmit}>
          {/* Step 1 */}
          {step === 1 && (
            <>
              {[
                "First Name",
                "Last Name",
                "Company Name",
                "Mobile Number",
                "Email ID",
              ].map((label, i) => (
                <InputField
                  key={i}
                  label={label}
                  placeholder={`Enter ${label}`}
                />
              ))}
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-800 mb-1 mt-2">
                Address
              </h3>
              {[
                {
                  label: "Street Address",
                  placeholder: "Enter Street Address",
                },
                { label: "City", placeholder: "Enter City Name" },
                { label: "State", placeholder: "Enter State Name" },
                { label: "Country", placeholder: "Enter Country Name" },
                { label: "Postcode", placeholder: "Enter Postcode" },
              ].map((field, i) => (
                <InputField
                  key={i}
                  label={field.label}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-4 mt-2 p-2">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-gray-800">
                  Accounts Contact
                </h3>
                <button
                  type="button"
                  className="text-sm text-blue-600 font-medium hover:underline"
                >
                  Add+
                </button>
              </div>
              {[
                { label: "Accounts Name", placeholder: "Enter Accounts Name" },
                {
                  label: "Accounts Phone Number",
                  placeholder: "Enter Accounts Phone Number",
                },
                {
                  label: "Accounts Office Phone Number",
                  placeholder: "Enter Accounts Office Phone Number",
                },
                {
                  label: "Accounts Email",
                  placeholder: "Enter Accounts Email",
                },
              ].map((field, i) => (
                <InputField
                  key={i}
                  label={field.label}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="space-y-2 mt-2 p-2">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                Trade Reference Contact
              </h3>
              {[
                {
                  label: "Trade Reference Name",
                  placeholder: "Enter Trade Reference Name",
                },
                {
                  label: "Trade Reference Phone Number",
                  placeholder: "Enter Trade Reference Phone Number",
                },
                {
                  label: "Trade Reference Name 2",
                  placeholder: "Enter Trade Reference Name",
                },
                {
                  label: "Trade Reference Phone Number 2",
                  placeholder: "Enter Trade Reference Phone Number",
                },
              ].map((field, i) => (
                <InputField
                  key={i}
                  label={field.label}
                  placeholder={field.placeholder}
                  required={false}
                />
              ))}

              {/* Terms Acknowledgment */}
              <div className="flex items-start gap-2 mt-2">
                <input
                  type="checkbox"
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                  className="mt-1"
                />
                <span className="text-xs text-gray-700">
                  <Link to="#" className="text-blue-600 underline">
                    Acknowledgment of Terms and Conditions
                  </Link>
                </span>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-3">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="border border-yellow-500 text-yellow-500 px-4 py-1.5 rounded text-sm"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-yellow-500 text-white px-4 py-1.5 rounded text-sm"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-1.5 rounded text-sm"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
