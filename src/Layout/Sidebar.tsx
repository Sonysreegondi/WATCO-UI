import { JSX, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  HomeIcon,
  UsersIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const iconMap: Record<string, JSX.Element> = {
  DASHBOARD: <HomeIcon className="h-5 w-5 text-gray-600" />,
  PARTNERS: <UsersIcon className="h-5 w-5 text-gray-600" />,
  ROLES: <ShieldCheckIcon className="h-5 w-5 text-gray-600" />,
  CONFIG: <Cog6ToothIcon className="h-5 w-5 text-gray-600" />,
};

const privileges = ["DASHBOARD", "PARTNERS", "ROLES"]; // ← this should come from user data

const sidebarItems = [
  { label: "Dashboard", path: "/watco/admindashboard", key: "DASHBOARD" },
  { label: "Roles", path: "/watco/roles", key: "ROLES" },
];

export default function Sidebar() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const navigate = useNavigate(); // ✅ useNavigate hook

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleLogout = () => {
    // ✅ Clear session or token if needed
    // localStorage.removeItem("token");

    navigate("/login"); // ✅ Correct navigation
  };

  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col">
      {/* Logo */}
      <div className="p-4">
        <img
          src="/assets/icons/Watco-logo.svg"
          alt="Watco Logo"
          className="h-12"
        />
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-1 px-4 space-y-2 text-gray-700">
        {sidebarItems
          .filter((item) => privileges.includes(item.key))
          .map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-100"
            >
              {iconMap[item.key]}
              <span>{item.label}</span>
            </Link>
          ))}

        {/* Accordion Section */}
        <div>
          <button
            onClick={() => toggleAccordion("CONFIG")}
            className="flex justify-between items-center w-full py-2 px-3 rounded hover:bg-gray-100"
          >
            <span>Configurations</span>
            <ChevronDownIcon
              className={`h-5 w-5 transition-transform ${
                openAccordion === "CONFIG" ? "rotate-180" : ""
              }`}
            />
          </button>

          {openAccordion === "CONFIG" && (
            <div className="ml-4 space-y-1">
              <Link
                to="/fibrez/settings"
                className="block py-1 px-3 rounded hover:bg-gray-100"
              >
                Settings
              </Link>
              <Link
                to="/fibrez/preferences"
                className="block py-1 px-3 rounded hover:bg-gray-100"
              >
                Preferences
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t mt-auto">
        <div className="text-sm font-semibold text-gray-800">Jagadeesh</div>
        <div className="text-xs text-gray-500">Admin</div>
        <button
          className="mt-2 text-sm text-red-500 hover:underline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
