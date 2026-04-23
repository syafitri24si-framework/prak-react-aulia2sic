import { FaBell, FaSearch, FaMoon, FaUserCircle } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-white/50 backdrop-blur-md rounded-2xl shadow-sm border border-white/20 transition-all duration-300">
      
      {/* Search Bar */}
      <div className={`relative w-full max-w-lg transition-all duration-300 ${isSearchFocused ? "scale-105" : "scale-100"}`}>
        <input
          type="text"
          placeholder="Search Here..."
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          className="border border-gray-200 p-3 pr-10 bg-white/80 backdrop-blur-sm w-full max-w-lg rounded-xl outline-none focus:ring-2 focus:ring-hijau/50 transition-all duration-300"
        />
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-hijau transition-colors cursor-pointer" />
      </div>

      {/* Icons & Profile */}
      <div className="flex items-center space-x-4">
        
        <div className="relative p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl text-blue-600 cursor-pointer hover:scale-110 transition-transform duration-200 shadow-md">
          <FaBell />
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full px-2 py-0.5 text-xs text-white shadow-md animate-pulse">
            50
          </span>
        </div>

        <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-xl cursor-pointer hover:scale-110 transition-transform duration-200 shadow-md">
          <FcAreaChart className="text-xl" />
        </div>

        <div className="p-3 bg-gradient-to-br from-red-100 to-red-200 rounded-xl text-red-500 cursor-pointer hover:scale-110 transition-transform duration-200 shadow-md">
          <SlSettings />
        </div>

        <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl text-purple-600 cursor-pointer hover:scale-110 transition-transform duration-200 shadow-md">
          <FaMoon />
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
          <div className="text-right">
            <span className="text-sm text-gray-500">Welcome back,</span>
            <p className="font-bold text-gray-800">Aulia Syafitri</p>
          </div>
          <div className="relative group">
            <img
      src="/img/strawberryAul.jpg"  // ← GANTI DENGAN INI
      className="w-12 h-12 rounded-full border-2 border-hijau shadow-md cursor-pointer group-hover:scale-105 transition-transform duration-200 object-cover"
    />
            <div className="absolute -bottom-2 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </div>

      </div>
    </div>
  );
}