import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";


const DefaultLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-auto">
        {/* <Header /> */}
        <main className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
