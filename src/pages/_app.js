import 'bootstrap/dist/css/bootstrap.min.css'; // <== penting!
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
