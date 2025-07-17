import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/watco/dashboard" },
    // { name: "Profile", path: "/watco/profile" },
    // Add more items as needed
  ];

  return (
    <aside className="w-64 h-full bg-blue-900 text-white flex flex-col p-4">
      <div className="text-2xl font-bold mb-6">Watco</div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `py-2 px-4 rounded hover:bg-blue-700 ${
                isActive ? "bg-blue-700 font-semibold" : "text-white"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
