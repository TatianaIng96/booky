import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/layout/layout";
import { ParallaxProvider } from "react-scroll-parallax";
import { Provider } from "react-redux";
import store from "../store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <Layout>
          {" "}
          <Component {...pageProps} />{" "}
        </Layout>
      </ParallaxProvider>
    </Provider>
  );
}
