import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/ordersData";

export default function Orders() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">

      <PageHeader
        title="Orders"
        breadcrumb={["Dashboard", "Orders"]}
      >
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-hijau text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition"
        >
          + Add Order
        </button>
      </PageHeader>

      {/* FORM */}
      {showForm && (
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          <h2 className="font-bold text-lg text-gray-700">Add New Order</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Customer Name" className="border p-3 rounded-lg focus:ring-2 focus:ring-hijau outline-none" />
            
            <select className="border p-3 rounded-lg">
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

            <input placeholder="Total Price" className="border p-3 rounded-lg" />
            <input type="date" className="border p-3 rounded-lg" />
          </div>

          <button className="bg-hijau text-white px-4 py-2 rounded-lg">
            Save
          </button>
        </div>
      )}

      {/* TABLE */}
      <div className="bg-white p-6 rounded-2xl shadow-md overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm border-b">
              <th className="pb-3">ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {ordersData.map((o, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 font-medium">{o.id}</td>
                <td>{o.customer}</td>

                {/* STATUS */}
                <td>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${o.status === "Completed" ? "bg-green-100 text-green-600" : ""}
                    ${o.status === "Pending" ? "bg-blue-100 text-blue-600" : ""}
                    ${o.status === "Cancelled" ? "bg-red-100 text-red-600" : ""}
                  `}>
                    {o.status}
                  </span>
                </td>

                <td>Rp {parseInt(o.total.replace(/\D/g, "")).toLocaleString("id-ID")}</td>
                <td>{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}