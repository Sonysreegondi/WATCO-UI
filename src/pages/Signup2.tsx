import { Link } from "react-router-dom";
import { useState } from "react";
import Stepper from "../components/common/Stepper";
import InputField from "../components/common/InputField";
import SuccessScreen from "../Models/SuccessModel";
import TermsAndConditions from "../Models/Terms&Conditions"; // Add this import
import { isBlacklistedEmail } from "../commonUtils/Validators";

export default function Login() {
  const [step, setStep] = useState(1);
  const [acknowledged, setAcknowledged] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [contacts, setContacts] = useState([{ id: 1 }]);
  const [activeContactId, setActiveContactId] = useState(1);
  const [contactCounter, setContactCounter] = useState(2); // next available unique ID
  const [errorTabs, setErrorTabs] = useState<number[]>([]);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [contactLimitError, setContactLimitError] = useState("");

  const handleNext = () => {
    const newErrors: { [key: string]: string } = {};

    if (step === 2) {
      ["streetAddress", "city", "state", "country", "postcode"].forEach(
        (field) => {
          if (!formData[field]?.trim()) {
            newErrors[field] = `${field} is required.`;
          }
        }
      );
    }

    if (step === 3) {
      const errorContactIds: number[] = [];

      contacts.forEach((contact) => {
        let hasError = false;

        ["name", "phone", "email"].forEach((field) => {
          const key = `accountContact_${contact.id}_${field}`;
          const label =
            field === "name"
              ? "Name"
              : field === "phone"
              ? "Phone Number"
              : "Email";

          if (!formData[key]?.trim()) {
            newErrors[key] = `${label} is required.`;
            hasError = true;
          }
        });

        if (hasError) {
          errorContactIds.push(contact.id);
        }
      });

      setErrorTabs(errorContactIds); // highlight tabs with errors
    }

    if (step === 4) {
      ["refName1", "refPhone1", "refName2", "refPhone2"].forEach((field) => {
        if (!formData[field]?.trim()) {
          newErrors[field] = `${field} is required.`;
        }
      });
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
              <h2 className="text-[16px] font-normal text-gray-900 text-left leading-tight">
                Complete Your Account
              </h2>
              <p className="text-[11px] text-gray-500 mt-1 mb-2">
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
                  { name: "email", label: "Email", placeholder: "Enter Email" },
                ].map((field, i) => (
                  <InputField
                    key={i}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ""}
                    // disabled={true} // ✅ Make Step 1 fields read-only
                    onChange={() => {}} // Disabled, no updates
                    error=""
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
                    name: "streetAddress",
                    label: "Street Address",
                    placeholder: "Enter Street Address",
                  },
                  {
                    name: "city",
                    label: "City",
                    placeholder: "Enter City Name",
                  },
                  {
                    name: "state",
                    label: "State",
                    placeholder: "Enter State Name",
                  },
                  {
                    name: "country",
                    label: "Country",
                    placeholder: "Enter Country Name",
                  },
                  {
                    name: "postcode",
                    label: "Postcode",
                    placeholder: "Enter Postcode",
                  },
                ].map((field, i) => (
                  <InputField
                    key={i}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ""}
                    onChange={(e) => {
                      const value = e.target.value.trim();

                      setFormData((prev) => ({ ...prev, [field.name]: value }));

                      if (errors[field.name]) {
                        setErrors((prev) => {
                          const updated = { ...prev };
                          delete updated[field.name];
                          return updated;
                        });
                      }
                    }}
                    error={errors[field.name]}
                  />
                ))}
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-4 mt-2 p-2">
                {/* Header and Add Button */}
                <div className="flex justify-between items-center mb-[0px]">
                  <h3 className="text-sm font-semibold text-gray-800 m-0 p-0">
                    Accounts Payable Contact
                  </h3>
                  <button
                    type="button"
                    className={`text-xs font-medium ${
                      contacts.length >= 5
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-blue-600"
                    }`}
                    onClick={() => {
                      if (contacts.length < 5) {
                        setContacts((prev) => [
                          ...prev,
                          { id: contactCounter },
                        ]);
                        setActiveContactId(contactCounter);
                        setContactCounter((prev) => prev + 1);
                        setContactLimitError("");
                      } else {
                        setContactLimitError(
                          "You can only add up to 5 contacts."
                        );
                      }
                    }}
                  >
                    Add+
                  </button>
                </div>

                {contactLimitError && (
                  <div className="text-xs text-red-500 m-0 p-0 leading-none">
                    {contactLimitError}
                  </div>
                )}

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 mt-2 text-xs font-medium">
                  {contacts.map((contact, index) => {
                    const isActive = activeContactId === contact.id;
                    const hasErrors = Object.keys(errors).some((key) =>
                      key.startsWith(`accountContact_${contact.id}_`)
                    );
                    return (
                      <div
                        key={contact.id}
                        onClick={() => setActiveContactId(contact.id)}
                        className={`flex items-center px-4 py-1.5 rounded-full cursor-pointer border transition-all duration-200
  ${
    isActive
      ? "bg-yellow-500 text-white border-yellow-500 shadow-sm"
      : hasErrors
      ? "bg-red-100 text-red-600 border-red-400 hover:bg-red-200"
      : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
  }`}
                      >
                        Contact {String(index + 1).padStart(2, "0")}
                        {contacts.length > 1 && (
                          <span
                            className="text-white ml-2 hover:text-red-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              const updated = contacts.filter(
                                (c) => c.id !== contact.id
                              );
                              setContacts(updated);

                              // Set a new active tab if needed
                              if (isActive && updated.length > 0) {
                                setActiveContactId(updated[0].id);
                              }

                              setContactLimitError(""); // ✅ Clear the limit error when a tab is removed
                            }}
                          >
                            ✕
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Contact Form for Active Tab */}
                <div className="mt-2 space-y-2">
                  {[
                    { key: "name", label: "Name", placeholder: "Enter Name" },
                    {
                      key: "phone",
                      label: "Phone Number",
                      placeholder: "Enter Phone Number",
                    },
                    {
                      key: "email",
                      label: "Email",
                      placeholder: "Enter Email",
                    },
                  ].map((field) => {
                    const fieldKey = `accountContact_${activeContactId}_${field.key}`;

                    return (
                      <InputField
                        key={fieldKey}
                        label={field.label}
                        placeholder={field.placeholder}
                        name={
                          field.key === "phone" ? "mobileNumber" : field.key
                        }
                        value={formData[fieldKey] || ""}
                        onChange={(e) => {
                          const trimmed = e.target.value.trim();

                          // Apply maxLength manually only for phone
                          const finalValue =
                            field.key === "phone"
                              ? trimmed.slice(0, 10)
                              : trimmed;

                          setFormData((prev) => ({
                            ...prev,
                            [fieldKey]: finalValue,
                          }));

                          // Validation based on field type
                          if (field.key === "phone") {
                            if (!trimmed) {
                              setErrors((prev) => ({
                                ...prev,
                                [fieldKey]: "Phone Number is required.",
                              }));
                            } else {
                              setErrors((prev) => {
                                const updated = { ...prev };
                                delete updated[fieldKey];
                                return updated;
                              });
                            }
                          } else if (field.key === "email") {
                            if (!trimmed) {
                              setErrors((prev) => ({
                                ...prev,
                                [fieldKey]: "Email is required.",
                              }));
                            } else if (isBlacklistedEmail(trimmed)) {
                              setErrors((prev) => ({
                                ...prev,
                                [fieldKey]: "Not a Valid email!",
                              }));
                            } else {
                              setErrors((prev) => {
                                const updated = { ...prev };
                                delete updated[fieldKey];
                                return updated;
                              });
                            }
                          } else {
                            if (!trimmed) {
                              setErrors((prev) => ({
                                ...prev,
                                [fieldKey]: `${field.label} is required.`,
                              }));
                            } else {
                              setErrors((prev) => {
                                const updated = { ...prev };
                                delete updated[fieldKey];
                                return updated;
                              });
                            }
                          }
                        }}
                        error={errors[fieldKey]}
                      />
                    );
                  })}
                </div>
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
                    name: "refName1",
                    label: "Name",
                    placeholder: "Enter Name",
                  },
                  {
                    name: "refPhone1",
                    label: "Phone Number",
                    placeholder: "Enter Phone Number",
                  },
                  {
                    name: "refName2",
                    label: "Name 2",
                    placeholder: "Enter Second Name",
                  },
                  {
                    name: "refPhone2",
                    label: "Phone Number 2",
                    placeholder: "Enter Second Phone Number",
                  },
                ].map((field, i) => (
                  <InputField
                    key={i}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ""}
                    required={false}
                    onChange={(e) => {
                      const trimmed = e.target.value.trim();
                      setFormData((prev) => ({
                        ...prev,
                        [field.name]: trimmed,
                      }));

                      if (errors[field.name]) {
                        setErrors((prev) => {
                          const updated = { ...prev };
                          delete updated[field.name];
                          return updated;
                        });
                      }
                    }}
                    error={errors[field.name]}
                  />
                ))}

                {/* Terms Acknowledgment */}
                <div className="flex items-start gap-2 mt-2">
                  <input
                    type="checkbox"
                    checked={acknowledged}
                    disabled={!termsAccepted}
                    onChange={(e) => setAcknowledged(e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-xs text-gray-700">
                    <button
                      type="button"
                      onClick={() => setShowTermsModal(true)}
                      className="text-blue-600 underline"
                    >
                      Acknowledgment of Terms and Conditions
                    </button>
                  </span>
                </div>
              </div>
            )}
          </div>
{step === 4 && (
  <p className="text-[12px] text-yellow-600 font-medium mb-1 ml-2">
   Please review and acknowledge the Terms and Conditions before submitting.
  </p>
)}
          {/* Navigation Buttons */}
          <div className="flex flex-col gap-3 pt-3 md:flex-row md:gap-3 mt-2 mb-0 relative">
            {/* Buttons */}
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
                disabled={!acknowledged}
                style={{
                  opacity: !acknowledged ? 0.6 : 1,
                  cursor: !acknowledged ? "not-allowed" : "pointer",
                }}
              >
                Submit
              </button>
            )}

            {/* Must be filled note */}
            {step !== 1 && (
              <span className="absolute right-0 -bottom-5 text-[14px]">
                <span className="text-red-500 font-bold text-[16px]">*</span>{" "}
                <span className="text-black font-normal">Must be filled</span>
              </span>
            )}
          </div>
        </div>
      ) : (
        submitClicked &&
        showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white px-4">
            <SuccessScreen
              title="Profile completed successfully!"
              message="You will receive a separate email with your login credentials and a link to set your password."
              buttonText="Back to Login"
              titleClassName="text-sm"
              messageClassName="text-xs"
            />
          </div>
        )
      )}
      {showTermsModal && (
        <TermsAndConditions
          setShowTermsModal={setShowTermsModal}
          setTermsAccepted={setTermsAccepted}
          setAcknowledged={setAcknowledged}
        />
      )}
    </div>
  );
}
