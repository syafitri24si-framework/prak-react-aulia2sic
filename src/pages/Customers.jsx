import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customersData";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">

      <PageHeader
        title="Customers"
        breadcrumb={["Dashboard", "Customers"]}
      >
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-hijau text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition"
        >
          + Add Customer
        </button>
      </PageHeader>

      {/* FORM */}
      {showForm && (
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4 animate-fade-in">
          <h2 className="font-bold text-lg text-gray-700">Add New Customer</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Name" className="border p-3 rounded-lg focus:ring-2 focus:ring-hijau outline-none" />
            <input placeholder="Email" className="border p-3 rounded-lg focus:ring-2 focus:ring-hijau outline-none" />
            <input placeholder="Phone" className="border p-3 rounded-lg focus:ring-2 focus:ring-hijau outline-none" />
            <select className="border p-3 rounded-lg">
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>
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
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Loyalty</th>
            </tr>
          </thead>

          <tbody>
            {customersData.map((c, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 font-medium">{c.id}</td>
                <td>{c.name}</td>
                <td className="text-gray-500">{c.email}</td>
                <td>{c.phone}</td>

                {/* BADGE */}
                <td>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${c.loyalty === "Gold" ? "bg-yellow-100 text-yellow-600" : ""}
                    ${c.loyalty === "Silver" ? "bg-gray-200 text-gray-600" : ""}
                    ${c.loyalty === "Bronze" ? "bg-orange-100 text-orange-600" : ""}
                  `}>
                    {c.loyalty}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}