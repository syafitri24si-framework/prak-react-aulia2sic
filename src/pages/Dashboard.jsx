import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaArrowUp, FaArrowDown } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Jan", orders: 40 },
  { name: "Feb", orders: 55 },
  { name: "Mar", orders: 70 },
  { name: "Apr", orders: 85 },
  { name: "May", orders: 75 },
  { name: "Jun", orders: 90 },
];

export default function Dashboard() {
  const stats = [
    { title: "Total Orders", value: 75, icon: <FaShoppingCart />, color: "hijau", change: "+12%", up: true },
    { title: "Total Delivered", value: 175, icon: <FaTruck />, color: "biru", change: "+8%", up: true },
    { title: "Total Canceled", value: 40, icon: <FaBan />, color: "merah", change: "-3%", up: false },
    { title: "Total Revenue", value: "Rp.128", icon: <FaDollarSign />, color: "kuning", change: "+21%", up: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
  title="Dashboard"
  breadcrumb={["Dashboard", "Overview"]}
>
  <button className="bg-hijau text-white px-4 py-2 rounded-lg font-bold shadow-md">
    + Add Data
  </button>
</PageHeader>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className={`bg-${stat.color}/10 rounded-xl p-3 text-${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${stat.color} text-2xl`}>{stat.icon}</div>
                </div>
                <div className={`flex items-center space-x-1 text-sm font-semibold ${stat.up ? "text-green-500" : "text-red-500"}`}>
                  {stat.up ? <FaArrowUp /> : <FaArrowDown />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-400 text-sm mt-1">{stat.title}</p>
              </div>
            </div>
            <div className={`h-1 w-full bg-${stat.color} group-hover:h-1.5 transition-all duration-300`}></div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Order Trends</h2>
          <select className="border border-gray-200 rounded-lg p-2 text-sm bg-gray-50">
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
            <Line type="monotone" dataKey="orders" stroke="#00b074" strokeWidth={3} dot={{ fill: "#00b074", r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Orders Table (Bonus) */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-gray-600">Order ID</th>
                <th className="p-3 text-gray-600">Customer</th>
                <th className="p-3 text-gray-600">Total</th>
                <th className="p-3 text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "#001", name: "Budi Santoso", total: "Rp. 250k", status: "Delivered" },
                { id: "#002", name: "Siti Nurhaliza", total: "Rp. 180k", status: "Processing" },
                { id: "#003", name: "Ahmad Dhani", total: "Rp. 320k", status: "Canceled" },
              ].map((order, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="p-3 font-medium">{order.id}</td>
                  <td className="p-3">{order.name}</td>
                  <td className="p-3">{order.total}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${order.status === "Delivered" ? "bg-green-100 text-green-600" : ""}
                      ${order.status === "Processing" ? "bg-blue-100 text-blue-600" : ""}
                      ${order.status === "Canceled" ? "bg-red-100 text-red-600" : ""}
                    `}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}