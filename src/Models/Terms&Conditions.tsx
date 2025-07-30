import React from "react";

interface TermsAndConditionsProps {
  setShowTermsModal: (show: boolean) => void;
  setTermsAccepted: (accepted: boolean) => void;
  setAcknowledged: (ack: boolean) => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  setShowTermsModal,
  setTermsAccepted,
  setAcknowledged,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-[600px] h-[420px] p-6 flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-semibold text-gray-800">
          Terms and Conditions
        </h2>
        <button
          onClick={() => setShowTermsModal(false)}
          className="text-gray-400 hover:text-gray-600 text-lg"
        >
          ×
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="border border-gray-300 rounded p-3 text-xs text-gray-600 overflow-y-auto flex-1">
        {/* You can replace this with dynamic content */}
        These are the terms and conditions. Please read them carefully
        before proceeding. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod...
      </div>

      {/* Button */}
      <div className="text-right mt-4">
        <button
          type="button"
          onClick={() => {
            setTermsAccepted(true);
            setAcknowledged(true);
            setShowTermsModal(false);
          }}
          className="bg-yellow-500 text-white px-4 py-1.5 rounded text-sm"
        >
          Accept and Continue
        </button>
      </div>
    </div>
  </div>
);

export default TermsAndConditions;
