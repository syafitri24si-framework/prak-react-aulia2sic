import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import productsData from "../data/productsData";

export default function Products() {
  return (
    <div className="space-y-6">
      <PageHeader title="Products" breadcrumb={["Dashboard", "Products"]} />

      <div className="bg-white p-6 rounded-2xl shadow-md overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm border-b">
              <th className="pb-3">ID</th>
              <th>Title</th>
              <th>Code</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3">{item.id}</td>
                <td className="py-3">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-emerald-400 hover:text-emerald-500"
                  >
                    {item.title}
                  </Link>
                </td>
                <td>{item.code}</td>
                <td>{item.category}</td>
                <td>{item.brand}</td>
                <td>Rp {item.price.toLocaleString("id-ID")}</td>
                <td>{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}