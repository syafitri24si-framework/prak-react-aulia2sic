import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // 🔥 ambil data user dari localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isLogin = localStorage.getItem("isLogin");

  // 🔥 proteksi tambahan (double safety)
  if (!isLogin) {
    navigate("/login");
    return null;
  }

  // 🔥 logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

 return (
  <div className="space-y-6">

    <PageHeader
      title="Dashboard"
      breadcrumb={["Dashboard", "Overview"]}
    >
      <div className="flex gap-3">
        <button className="bg-hijau text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition">
          + Add Data
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition"
        >
          Logout
        </button>
      </div>
    </PageHeader>

    {/* 🔥 HERO */}
    <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-hijau via-green-500 to-green-700 text-white shadow-xl">
      <div className="absolute right-0 top-0 opacity-20 text-[120px] font-bold">
        🍃
      </div>

      <h2 className="text-2xl font-bold">
        Welcome back, {user?.username} 👋
      </h2>
      <p className="text-sm opacity-90 mt-2 max-w-md">
        Kamu punya performa yang bagus hari ini. Yuk lanjutkan monitoring dan kelola bisnismu 🚀
      </p>

      <div className="mt-4 flex gap-4 text-sm">
        <div className="bg-white/20 px-3 py-1 rounded-full">
          🔥 Active
        </div>
        <div className="bg-white/20 px-3 py-1 rounded-full">
          📈 Growth +12%
        </div>
      </div>
    </div>

    {/* 🔥 STATS */}
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition group">
        <p className="text-gray-400 text-sm">Total Orders</p>
        <h3 className="text-3xl font-bold text-gray-800 mt-2 group-hover:text-hijau transition">
          1,245
        </h3>
        <p className="text-xs text-green-500 mt-2">+12% dari minggu lalu</p>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition group">
        <p className="text-gray-400 text-sm">Customers</p>
        <h3 className="text-3xl font-bold text-gray-800 mt-2 group-hover:text-hijau transition">
          892
        </h3>
        <p className="text-xs text-blue-500 mt-2">+5% pertumbuhan</p>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition group">
        <p className="text-gray-400 text-sm">Revenue</p>
        <h3 className="text-3xl font-bold text-gray-800 mt-2 group-hover:text-hijau transition">
          Rp 12.5 JT
        </h3>
        <p className="text-xs text-purple-500 mt-2">Target tercapai 80%</p>
      </div>

    </div>

    {/* 🔥 GRID 2 KOLOM */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* USER PROFILE CARD */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-lg font-bold text-gray-700 mb-4">
          Informasi Akun
        </h2>

        <div className="flex items-center gap-4 mb-4">
          <img
            src={user?.image}
            alt="profile"
            className="w-16 h-16 rounded-full object-cover border-2 border-hijau"
          />
          <div>
            <p className="font-semibold text-gray-800">{user?.username}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <p>Role: <span className="font-medium text-gray-800">Admin</span></p>
          <p>Status: <span className="text-green-500 font-medium">Online</span></p>
        </div>
      </div>

      {/* ACTIVITY */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-lg font-bold text-gray-700 mb-4">
          Aktivitas Terbaru
        </h2>

        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex justify-between">
            <span>Order baru masuk</span>
            <span className="text-gray-400">2 menit lalu</span>
          </li>
          <li className="flex justify-between">
            <span>Customer baru daftar</span>
            <span className="text-gray-400">10 menit lalu</span>
          </li>
          <li className="flex justify-between">
            <span>Pembayaran berhasil</span>
            <span className="text-gray-400">30 menit lalu</span>
          </li>
        </ul>
      </div>

    </div>

  </div>
);
}