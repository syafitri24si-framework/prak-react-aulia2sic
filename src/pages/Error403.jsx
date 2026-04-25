import ErrorPage from "../components/ErrorPage";
import errorImg from "../image/error.jpg";


export default function Error403() {
  return (
    <ErrorPage
      errorCode="403"
      description="Forbidden. Akses ditolak."
      image={errorImg}
      
    />
  );
}