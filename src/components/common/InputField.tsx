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
      <label className="text-xs font-normal text-gray-500 block mb-1 font-roboto">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded px-2 py-[6px] text-[11px] font-roboto placeholder-gray-300 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      <ErrorMessage message={error} />
    </div>
  );
}
