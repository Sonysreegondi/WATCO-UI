// src/components/common/InputField.tsx
import React from "react";
import ErrorMessage from "./ErrorMessage";

export interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void; // Changed to accept string
  required?: boolean;
  error?: string;
  maxLength?: number;
 inputMode?: "numeric" | "text" | "tel" | "email";
  type?: string; // Added
  name?: string; // Added
}

export default function InputField({
  label,
  placeholder,
  value,
  onChange,
  required = true,
  error = "",
  type = "text",
  maxLength,
  inputMode,
  name,
}: InputFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    // Validation/Sanitization by field name
    if (name === "mobileNumber") {
      newValue = newValue.replace(/\D/g, "").slice(0, 10);
    } else if (name === "ABN") {
      newValue = newValue.replace(/\D/g, "").slice(0, 11);
    } else if (maxLength) {
      newValue = newValue.slice(0, maxLength);
    }

    onChange(newValue); // Pass sanitized value
  };

  return (
    <div>
      <label className="text-xs font-normal text-gray-500 block mb-1 font-roboto">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        inputMode={inputMode}
        className={`w-full border border-gray-300 rounded px-2 py-[6px] text-xs ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      <ErrorMessage message={error} />
    </div>
  );
}
