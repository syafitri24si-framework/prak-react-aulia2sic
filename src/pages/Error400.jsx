import ErrorPage from "../components/ErrorPage";
import errorImg from "../image/error.jpg";

export default function Error400() {
  return (
    <ErrorPage
      errorCode="400"
      description="Bad Request. Permintaan tidak valid."
      image={errorImg}
    />
  );
}