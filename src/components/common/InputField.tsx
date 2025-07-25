// src/components/InputField.tsx
interface InputFieldProps {
  label: string;
  placeholder: string;
  required?: boolean;
}

export default function InputField({ label, placeholder, required = true }: InputFieldProps) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700 block mb-0.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded px-3 py-[6px] text-sm"
      />
    </div>
  );
}
