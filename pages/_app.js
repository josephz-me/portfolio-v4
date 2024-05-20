import '../styles/globals.scss';
import Page from '../components/Page';
import { GoogleAnalytics } from '@next/third-parties/google';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
    </Page>
  );
}

export default MyApp;
