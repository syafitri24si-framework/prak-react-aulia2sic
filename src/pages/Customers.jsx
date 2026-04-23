import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaArrowUp, FaArrowDown, FaStar, FaClock } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  return (
    <div className="space-y-6">
      
      <PageHeader
        title="Customers"
        breadcrumb={["Dashboard", "Customers"]}
      />

      <p>INI HALAMAN CUSTOMERS</p>

    </div>
  );
}