import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/common/InputField";
import SuccessScreen from "../Models/SuccessModel";
import {
  isBlacklistedEmail,
  isValidTenDigitMobile,
} from "../commonUtils/Validators";

type FieldConfig = {
  name: string;
  label: string;
  placeholder: string;
  maxLength?: number;
  inputMode?: "numeric" | "text" | "tel" | "email";
};

const fields: FieldConfig[] = [
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
    maxLength: 11,
    inputMode: "numeric",
  },
  {
    name: "mobileNumber",
    label: "Mobile Number",
    placeholder: "Enter Mobile Number",
    maxLength: 10,
    inputMode: "tel",
  },
  {
    name: "email",
    label: "Email ID",
    placeholder: "Enter Email ID",
    inputMode: "email",
  },
];

export default function Signup() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleBack = () => window.history.back();

  const handleSubmit = () => {
    const requiredFields = fields.map((f) => f.name);
    const newErrors: { [key: string]: string } = {};

    for (const field of requiredFields) {
      const value = formData[field]?.trim() || "";

      if (!value) {
        newErrors[field] = `${field} required.`;
        continue;
      }

      if (field === "mobileNumber" && !isValidTenDigitMobile(value)) {
        newErrors[field] =
          "Enter a valid 10-digit mobile number starting with 0.";
      }

      if (field === "ABN" && value.length !== 11) {
        newErrors[field] = "ABN must be exactly 11 digits.";
      }
    }

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
        <div className="bg-white w-full max-w-md lg:max-w-lg p-6 shadow-2xl rounded-lg overflow-y-auto max-h-[90vh] flex flex-col mr-12 relative">
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-[20px] font-normal text-gray-900 text-left leading-tight">
                Create Your Account
              </h2>
              <p className="text-[12px] text-gray-400 mb-2">
                Fill in your details to get started.
              </p>
            </div>
            <img
              src="/assets/images/cattletrain.png"
              alt="Cattle Train Logo"
              className="w-[50px] h-auto"
            />
          </div>

          {/* Form */}
          <div className="space-y-2 flex-1">
            {fields.map((field, i) => (
              <InputField
                key={i}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
                inputMode={field.inputMode}
                value={formData[field.name] || ""}
                onChange={(val: string) => {
                  const trimmed = val.trim();

                  setFormData((prev) => ({
                    ...prev,
                    [field.name]: trimmed,
                  }));

                  setErrors((prevErrors) => {
                    const updatedErrors = { ...prevErrors };

                    if (field.name === "mobileNumber") {
                      if (!trimmed) {
                        updatedErrors[field.name] = "Mobile Number required.";
                      } else if (!isValidTenDigitMobile(trimmed)) {
                        updatedErrors[field.name] =
                          "Enter a valid 10-digit mobile number starting with 0.";
                      } else {
                        delete updatedErrors[field.name];
                      }
                    } else if (field.name === "ABN") {
                      if (!trimmed) {
                        updatedErrors[field.name] = "ABN required.";
                      } else if (trimmed.length !== 11) {
                        updatedErrors[field.name] =
                          "ABN must be exactly 11 digits.";
                      } else {
                        delete updatedErrors[field.name];
                      }
                    } else if (field.name === "email") {
                      if (!trimmed) {
                        updatedErrors[field.name] = "Email is required.";
                      } else if (isBlacklistedEmail(trimmed)) {
                        updatedErrors[field.name] =
                          "This is a restricted email address. Please use your personal or work email instead.";
                      } else {
                        delete updatedErrors[field.name];
                      }
                    } else {
                      // Generic required validation for any other field
                      if (!trimmed) {
                        updatedErrors[
                          field.name
                        ] = `${field.label} is required.`;
                      } else {
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

          {/* Footer note */}
          <span className="absolute right-4 -bottom-0 text-[14px]">
            <span className="text-red-500 font-bold text-[16px]">*</span>{" "}
            <span className="text-black font-normal">Must be filled</span>
          </span>
        </div>
      ) : (
        submitClicked &&
        showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white px-4">
            <SuccessScreen
              title="Application Submitted Successfully!"
              message="Your request has been received and is currently under review by our administrative team. Once approved, you will receive a separate email to complete your profile."
              buttonText="Back to Login"
              titleClassName="text-sm"
              messageClassName="text-xs"
              imageType="variant1"
            />
          </div>
        )
      )}
    </div>
  );
}
