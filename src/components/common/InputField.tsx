import React from "react";
import ErrorMessage from "./ErrorMessage";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  isABN?: boolean
}

export default function InputField({
  label,
  placeholder,
  value,
  onChange,
  required = true,
  error = "",
  isABN,
}: InputFieldProps) {
  return (
   <div className="relative w-full">
  <label className="text-xs font-normal text-gray-500 block mb-1 font-roboto">
    {label} {required && <span className="text-red-500">*</span>}
  </label>
  <div className={`relative ${error ? "animate-shake" : ""}`}>
    <input
      type="text"
      maxLength={isABN ? 11 : undefined}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full border rounded px-2 py-[6px] text-[12px] font-roboto placeholder-gray-300 pr-20 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && (
      <div className="absolute right-2 bottom-[6px] text-[10px] text-red-500 font-roboto bg-white px-1">
        {error}
      </div>
    )}
  </div>
</div>
  );
}
