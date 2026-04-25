import PageHeader from "./PageHeader";
import { Link } from "react-router-dom";

export default function ErrorPage(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6">

      <PageHeader
        title={`Error ${props.errorCode}`}
        breadcrumb={["Dashboard", `Error ${props.errorCode}`]}
      />

      <img
        src={props.image}
        alt="error"
        className="w-72"
      />

      <h1 className="text-6xl font-bold text-gray-800">
        {props.errorCode}
      </h1>

      <p className="text-gray-500 max-w-md">
        {props.description}
      </p>

      <Link to="/">
  <button className="bg-hijau text-white px-6 py-2 rounded-lg shadow-md">
    Back to Dashboard
  </button>
</Link>

    </div>
  );
}