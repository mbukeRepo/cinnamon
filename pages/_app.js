import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
