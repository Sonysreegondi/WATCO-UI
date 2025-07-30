import { useNavigate } from "react-router-dom";

interface SuccessScreenProps {
  title: string;
  message: string;
  buttonText?: string;
  titleClassName?: string;
  messageClassName?: string;
  imageType?: "default" | "variant1"; // <-- Add this line
}

export default function SuccessScreen({
  title,
  message,
  buttonText = "Back to Login",
  titleClassName = "",
  messageClassName = "",
  imageType = "default", // <-- Default to normal image
}: SuccessScreenProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const imageSrc =
    imageType === "variant1"
      ? "/assets/images/success1.png"
      : "/assets/images/success.png";

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 relative">
      {/* Logo */}
      <img
        src="/assets/images/cattletrain.png"
        alt="Cattle Train Logo"
        className="absolute top-6 left-6 w-[80px] sm:w-[100px] h-auto"
      />

      {/* Center Content */}
      <div className="flex flex-col items-center text-center max-w-[90%] sm:max-w-[600px]">
        {/* Success Illustration */}
        <img
          src={imageSrc}
          alt="Success Illustration"
          className="w-[250px] sm:w-[300px] md:w-[350px] mb-6"
        />

        {/* Title */}
        <h2
          className={`text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 ${titleClassName}`}
        >
          {title}
        </h2>

        {/* Message */}
        <p
          className={`text-sm text-gray-600 mb-6 px-4 whitespace-nowrap overflow-hidden text-ellipsis ${messageClassName}`}
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          {message}
        </p>

        {/* Button */}
        <button
          onClick={handleClick}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-6 py-2 rounded-md transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
