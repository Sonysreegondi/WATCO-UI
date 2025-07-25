// src/components/Stepper.tsx
interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

export default function Stepper({ currentStep, totalSteps }: StepperProps) {
  return (
    <div className="flex items-center space-x-1 mt-2">
      {Array.from({ length: totalSteps }, (_, i) => (
        <span
          key={i}
          className={`h-[3px] w-6 rounded-full transition-all duration-300 ${
            i < currentStep ? "bg-yellow-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
