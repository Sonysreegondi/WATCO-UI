import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-blue-600">Watco Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-700">Welcome, User</span>
        {/* You can add avatar, logout button, etc., here */}
      </div>
    </header>
  );
};

export default Header;
