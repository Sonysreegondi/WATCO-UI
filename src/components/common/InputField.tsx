// src/components/common/InputField.tsx
import React from "react";
import ErrorMessage from "./ErrorMessage";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

export default function InputField({
  label,
  placeholder,
  value,
  onChange,
  required = true,
  error = "",
}: InputFieldProps) {
  return (
    <div>
     <label className="text-xs font-normal text-gray-700 block mb-0.5">

        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border border-gray-300 rounded px-2 py-[6px] text-xs ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      <ErrorMessage message={error} />
    </div>
  );
}
