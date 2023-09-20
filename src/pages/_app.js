import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout>
        {" "}
        <Component {...pageProps} />{" "}
      </Layout>
    </ParallaxProvider>
  );
}
