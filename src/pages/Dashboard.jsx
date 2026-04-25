import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Dashboard"
        breadcrumb={["Dashboard", "Overview"]}
      >
        <button className="bg-hijau text-white px-4 py-2 rounded-lg font-semibold shadow-md">
          + Add Data
        </button>
      </PageHeader>

      <p>INI HALAMAN DASHBOARD</p>

    </div>
  );
}