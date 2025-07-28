// src/components/common/ErrorMessage.tsx
import React from "react";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <p className="text-xs text-red-600 mt-1 ml-1">{message}</p>
  );
}
