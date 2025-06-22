import '../styles/globals.scss';
import Page from '../components/Page';
import { GoogleAnalytics } from '@next/third-parties/google';
// import { GoogleAnalytics } from '../components/googleAnalytics';

function MyApp({ Component, pageProps }) {
  const { meta, ...otherProps } = pageProps;

  return (
    <Page meta={meta}>
      {/* <GoogleAnalytics /> */}
      <Component {...otherProps} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
    </Page>
  );
}

export default MyApp;
