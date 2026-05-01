import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col p-4 gap-4">

        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <div className="flex-1">
          <Outlet />
        </div>

      </div>
    </div>
  );
}