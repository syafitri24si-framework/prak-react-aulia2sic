import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md w-full transition-all duration-300 hover:shadow-2xl">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 text-red-500 p-5 rounded-full text-4xl animate-pulse">
            <FaExclamationTriangle />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          Halaman Tidak Ditemukan
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6">
          Sepertinya halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-hijau text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
        >
          <FaArrowLeft />
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}