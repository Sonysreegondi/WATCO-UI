import { Link } from "react-router-dom";
import { useState } from "react";
import InputField from "../components/common/InputField";
import SuccessScreen from "../Models/SuccessModel";
import { isValidTenDigitMobile } from "../commonUtils/Validators";
import rawPatterns from "../commonUtils/excludedPatterns.json";
const excludedPatterns = rawPatterns.map((pattern) => new RegExp(pattern, "i"));
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
      "First name",
      "Last name",
      "Company name",
      "ABN",
      "Mobile number",
      "Email", // still required, but no format check
    ];
    console.log("formdata:::::",formData.email);
   
    const newErrors: { [key: string]: string } = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = field + " required!";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if(!validateEmail(formData.email))
    {
      newErrors["Email"] = "Not a Valid email!";
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitClicked(true);
    setShowSuccess(true);
  };
  const validateEmail = (email: string): boolean => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return false;
    if (!emailRegex.test(email)) return false;
    const isExcluded = excludedPatterns.some((pattern) =>
      pattern.test(email.toLowerCase())
    );
    if (isExcluded) return false;
    return true;
  };


  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat bg-right flex items-center justify-end px-4 sm:px-8"
      style={{ backgroundImage: "url('/assets/images/train.jpg')" }}
    >
      {!showSuccess ? (
        <div className="bg-white w-full max-w-md lg:max-w-lg p-6 shadow-2xl rounded-lg overflow-y-auto max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-base font-medium text-gray-800">
                Complete Your Account
              </h2>
              <p className="text-[10px] text-gray-500">
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
                errorMsg: "First name",
              },
              {
                name: "lastName",
                label: "Last Name",
                placeholder: "Enter Last Name",
                errorMsg: "Last name",
              },
              {
                name: "companyName",
                label: "Company Name",
                placeholder: "Enter Company Name",
                errorMsg: "Company name",
              },
              {
                name: "abn",
                label: "Australian Business Number (ABN)",
                placeholder: "Enter Australian Business Number (ABN)",
                errorMsg: "ABN",
              },
              {
                name: "mobileNumber",
                label: "Mobile Number",
                placeholder: "Enter Mobile Number",
                errorMsg: "Mobile number",
              },
              {
                name: "email",
                label: "Email",
                placeholder: "Enter Email",
                errorMsg: "Email",
              },
            ].map((field, i) => (
              <InputField
                key={i}
                label={field.label}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                isABN = {field.name === "abn"}
                onChange={(e) => {
                  const value = e.target.value;
                  
                  setFormData((prev) => ({
                    ...prev,
                    [field.name]: value,
                    [field.errorMsg]: value,
                  }));

                  setErrors((prevErrors) => {
                    const updatedErrors = { ...prevErrors };

                    // Live validation for mobileNumber
                    if (field.name === "mobileNumber") {
                      if (!value.trim()) {
                        updatedErrors[field.name] = "Mobile Number required.";
                      } else if (!isValidTenDigitMobile(value)) {
                        updatedErrors[field.name] =
                          "Enter a valid 10-digit mobile number";
                      } else {
                        delete updatedErrors[field.errorMsg];
                      }
                    } else {
                      // Remove error if field has value
                      if (value.trim()) {
                        delete updatedErrors[field.errorMsg];
                      }
                    }

                    return updatedErrors;
                  });
                }}
                error={errors[field.errorMsg]}
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
            />
          </div>
        )
      )}
    </div>
  );
}
