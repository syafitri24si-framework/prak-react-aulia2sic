import { FaPlus, FaTachometerAlt, FaShoppingBag, FaUsers, FaChartLine, FaCog } from "react-icons/fa";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, active: true },
    { name: "Orders", icon: <FaShoppingBag />, active: false },
    { name: "Customers", icon: <FaUsers />, active: false },
    { name: "Analytics", icon: <FaChartLine />, active: false },
    { name: "Settings", icon: <FaCog />, active: false },
  ];

  return (
    <div className="flex min-h-screen w-80 flex-col bg-white/90 backdrop-blur-md shadow-2xl rounded-r-3xl border-r border-white/30 transition-all duration-300">

      {/* Logo */}
      <div className="flex flex-col p-6 border-b border-gray-100">
        <span className="font-poppins text-[48px] text-gray-800 tracking-tight">
          Sedap <b className="text-hijau drop-shadow-md">.</b>
        </span>
        <span className="font-semibold text-gray-400 text-sm">
          Modern Admin Dashboard
        </span>
      </div>

      {/* Menu */}
      <div className="mt-6 px-4">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Main Menu</p>
        <ul className="space-y-2">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center space-x-3 cursor-pointer rounded-xl p-3 font-medium transition-all duration-200 ${
                item.active
                  ? "bg-gradient-to-r from-hijau to-green-400 text-white shadow-lg"
                  : "text-gray-600 hover:bg-green-50 hover:text-hijau"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
              {item.active && (
                <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-auto p-4">
        <div className="bg-gradient-to-br from-hijau to-green-600 px-4 py-4 rounded-2xl shadow-xl mb-6 transition-all duration-300 hover:scale-[1.02]">
          <div className="text-white text-sm space-y-3">
            <span className="font-semibold">Organize your menus through button below!</span>
            <div className="flex justify-between items-center p-2 bg-white/20 backdrop-blur-md rounded-xl cursor-pointer hover:bg-white/30 transition-all group">
              <div className="flex items-center space-x-2 text-white">
                <FaPlus className="group-hover:rotate-90 transition-transform duration-300" />
                <span className="font-medium">Add Menus</span>
              </div>
              <img
                src="https://avatar.iran.liara.run/public/28"
                className="w-8 h-8 rounded-full border-2 border-white shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <span className="font-bold text-gray-500 text-sm">Sedap Restaurant Admin Dashboard</span>
          <p className="font-light text-gray-400 text-xs mt-1">
            &copy; 2025 All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}