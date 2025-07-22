import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  date: string;
}

type Props = {
  title: string;
  btn?: string | null;
  navigateRoute?: string | (() => void);
};

const TopHeader = ({ title, btn, navigateRoute }: Props) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  const notifications: NotificationItem[] = [
    {
      id: "1",
      title: "New Ticket!",
      message: "No signal for Customer TC72249938",
      date: "2025-05-29",
    },
    {
      id: "2",
      title: "New Ticket!",
      message: "dafasafad for Customer TC72249938",
      date: "2025-05-27",
    },
  ];

  const handleNavigation = (route: string | (() => void)) => {
    if (typeof route === "string") {
      navigate(route);
    } else {
      route();
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="grid md:grid-cols-2 items-center py-4 px-4 border-b border-gray-200 relative">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

      <div className="flex justify-end items-center space-x-4">
        {btn && navigateRoute && (
          <button
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
            onClick={() => handleNavigation(navigateRoute)}
          >
            {btn}
          </button>
        )}

        {/* Notification Icon */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="bg-gray-100 p-2 rounded-md hover:bg-gray-200"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a1 1 0 10-2 0v1.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md z-20">
              <div className="p-4 border-b text-gray-800 font-semibold text-sm">
                Notifications
              </div>
              <ul className="max-h-60 overflow-y-auto">
                {notifications.map((note) => (
                  <li
                    key={note.id}
                    className="px-4 py-2 text-sm hover:bg-gray-100 border-b"
                  >
                    <div className="text-purple-600 font-semibold">
                      {note.title}
                    </div>
                    <div className="text-gray-700 text-sm">
                      {note.message}
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      {note.date}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;