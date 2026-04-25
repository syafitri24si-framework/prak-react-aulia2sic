import ErrorPage from "../components/ErrorPage";
import errorImg from "../image/error.jpg";


export default function Error401() {
  return (
    <ErrorPage
      errorCode="401"
      description="Unauthorized. Kamu harus login."
      image={errorImg}
      
    />
  );
}