import "../styles/globals.css";
import "../styles/nprogress.css";
import Page from "../components/Page";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />;
    </Page>
  );
}

export default MyApp;
