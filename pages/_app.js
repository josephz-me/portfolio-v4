import '../styles/globals.scss';
import Page from '../components/Page';
import { GoogleAnalytics } from '@next/third-parties/google';
// import { GoogleAnalytics } from '../components/googleAnalytics';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      {/* <GoogleAnalytics /> */}
      <Component {...pageProps} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
    </Page>
  );
}

export default MyApp;
