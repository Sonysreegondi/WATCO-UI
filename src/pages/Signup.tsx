import { Link } from "react-router-dom";
import { useState } from "react";
import InputField from "../components/common/InputField";
import SuccessScreen from "../Models/SuccessModel";
import { isValidTenDigitMobile } from "../commonUtils/Validators";

export default function Signup() {
  const [acknowledged, setAcknowledged] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleBack = () => {
    window.history.back();
  };
  const handleSubmit = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "companyName",
      "abn",
      "mobileNumber",
      "email", // still required, but no format check
    ];

    const newErrors: { [key: string]: string } = {};

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = field + " required.";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
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
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2
                className="text-[20px] font-normal text-gray-900 text-left leading-tight"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Create Your Account
              </h2>
              <p
                className="text-[12px] text-gray-400 mb-2"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Fill in your details to get started.
              </p>
            </div>
            <img
              src="/assets/images/cattletrain.png"
              alt="Cattle Train Logo"
              className="w-[50px] h-auto"
            />
          </div>

          {/* All Form Fields Together */}
          <div className="space-y-2 flex-1">
            {[
              {
                name: "firstName",
                label: "First Name",
                placeholder: "Enter First Name",
              },
              {
                name: "lastName",
                label: "Last Name",
                placeholder: "Enter Last Name",
              },
              {
                name: "companyName",
                label: "Company Name",
                placeholder: "Enter Company Name",
              },
              {
                name: "ABN",
                label: "Australian Business Number (ABN)",
                placeholder: "Enter Australian Business Number (ABN)",
              },
              {
                name: "mobileNumber",
                label: "Mobile Number",
                placeholder: "Enter Mobile Number",
              },
              {
                name: "email",
                label: "Email ID",
                placeholder: "Enter Email ID",
              },
            ].map((field, i) => (
              <InputField
                key={i}
                label={field.label}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={(e) => {
                  const value = e.target.value;

                  setFormData((prev) => ({
                    ...prev,
                    [field.name]: value,
                  }));

                  setErrors((prevErrors) => {
                    const updatedErrors = { ...prevErrors };

                    // Live validation for mobileNumber
                    if (field.name === "mobileNumber") {
                      if (!value.trim()) {
                        updatedErrors[field.name] = "Mobile Number required.";
                      } else if (!isValidTenDigitMobile(value)) {
                        updatedErrors[field.name] =
                          "Enter a valid 10-digit mobile number starting with 0.";
                      } else {
                        delete updatedErrors[field.name];
                      }
                    } else {
                      // Remove error if field has value
                      if (value.trim()) {
                        delete updatedErrors[field.name];
                      }
                    }

                    return updatedErrors;
                  });
                }}
                error={errors[field.name]}
              />
            ))}

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4 md:flex-row md:gap-3 mt-2 mb-0">
              <button
                type="button"
                onClick={handleBack}
                className="border border-yellow-500 text-yellow-500 px-4 py-1.5 rounded text-sm"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-yellow-500 text-white px-4 py-1.5 rounded text-sm"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      ) : (
        submitClicked &&
        showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white px-4">
            <SuccessScreen
              title="Application Submitted Successfully!"
              message="Your request has been received and is currently under review by our administrative team, once approved, you will receive a separate email to complete your profile."
              buttonText="Back to Login"
              titleClassName="text-sm"
              messageClassName="text-xs"
              imageType="variant1" // <-- Add this line
            />
          </div>
        )
      )}
    </div>
  );
}
