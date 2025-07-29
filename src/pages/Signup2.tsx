import { Link } from "react-router-dom";
import { useState } from "react";
import Stepper from "../components/common/Stepper";
import InputField from "../components/common/InputField";
import SuccessScreen from "../Models/SuccessModel";

export default function Login() {
  const [step, setStep] = useState(1);
  const [acknowledged, setAcknowledged] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleNext = () => {
    const newErrors: { [key: string]: string } = {};

    if (step === 2) {
      ["Street Address", "City", "State", "Country", "Postcode"].forEach(
        (field) => {
          if (!formData[field]?.trim()) {
            newErrors[field] = `${field} is required.`;
          }
        }
      );
    }

    if (step === 3) {
      ["Name", "Phone Number", "Office Phone Number", "Email"].forEach(
        (field) => {
          if (!formData[field]?.trim()) {
            newErrors[field] = `${field} is required.`;
          }
        }
      );
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    if (!acknowledged) {
      alert("Please acknowledge the terms and conditions.");
      return;
    }

    setSubmitClicked(true);
    setShowSuccess(true);
  };

  return (
   <div
  className="min-h-screen w-full bg-cover bg-no-repeat bg-right flex items-center justify-end px-4 sm:px-8 py-8"
  style={{ backgroundImage: "url('/assets/images/train.jpg')" }}
>

      {!showSuccess ? (
     <div className="bg-white w-full max-w-md lg:max-w-lg p-6 shadow-2xl rounded-lg overflow-y-auto max-h-[90vh] flex flex-col mr-12">

          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-base font-medium text-gray-800">
                Complete Your Account
              </h2>
              <p className="text-xs text-gray-500 mt-1">
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

          {/* Form Content */}
          <div className="space-y-2 flex-1">
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-2">
       
                {[
                  { label: "First Name", placeholder: "Enter First Name" },
                  { label: "Last Name", placeholder: "Enter Last Name" },
                  { label: "Company Name", placeholder: "Enter Company Name" },
                  {
                    label: "Mobile Number",
                    placeholder: "Enter Mobile Number",
                  },
                  { label: "Email ID", placeholder: "Enter Email ID" },
                ].map((field, i) => (
                  <InputField
                    key={i}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={formData[field.label] || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        [field.label]: value,
                      }));
                    }}
                    error={""}
                  />
                ))}
              </div>
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
                    value={formData[field.label] || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        [field.label]: value,
                      }));

                      // Clear error as user types
                      if (errors[field.label]) {
                        setErrors((prev) => {
                          const updated = { ...prev };
                          delete updated[field.label];
                          return updated;
                        });
                      }
                    }}
                    error={errors[field.label]}
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
                  {
                    label: "Name",
                    placeholder: "Enter Name",
                  },
                  {
                    label: "Phone Number",
                    placeholder: "Enter Phone Number",
                  },
                  {
                    label: "Office Phone Number",
                    placeholder: "Enter Office Phone Number",
                  },
                  {
                    label: "Email",
                    placeholder: "Enter Email",
                  },
                ].map((field, i) => (
                  <InputField
                    key={i}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={formData[field.label] || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        [field.label]: value,
                      }));

                      // Clear error as user types
                      if (errors[field.label]) {
                        setErrors((prev) => {
                          const updated = { ...prev };
                          delete updated[field.label];
                          return updated;
                        });
                      }
                    }}
                    error={errors[field.label]}
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
                    label: "Name",
                    placeholder: "Enter Name",
                  },
                  {
                    label: "Phone Number",
                    placeholder: "Enter Phone Number",
                  },
                  {
                    label: "Name 2",
                    placeholder: "Enter Second Name",
                  },
                  {
                    label: "Phone Number 2",
                    placeholder: "Enter Second Phone Number",
                  },
                ].map((field, i) => (
                  <InputField
                    key={i}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={formData[field.label] || ""}
                    required={false}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        [field.label]: value,
                      }));
                    }}
                    error={errors[field.label]}
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
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col gap-3 pt-3 md:flex-row md:gap-3 mt-2 mb-0">
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
                type="button"
                onClick={handleSubmit}
                className="bg-yellow-500 text-white px-4 py-1.5 rounded text-sm"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        submitClicked &&
        showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white px-4">
            <SuccessScreen
              title="Account Created Successfully"
              message="Your account setup is complete. You can now log in and start booking!"
              buttonText="Back to Login"
               titleClassName="text-sm"
              messageClassName="text-xs"
            />
          </div>
        )
      )}
    </div>
  );
}
