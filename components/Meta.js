import Head from 'next/head';
import Script from 'next/script';

function Meta() {
  return (
    <Head>
      <meta key="charset" charSet="utf-8" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      {/* Primary Meta Tag */}
      <title>Joseph Zhang – Interaction Designer</title>
      <meta name="title" content="Joseph Zhang – Interaction designer" />
      <meta
        name="description"
        content="Joseph is a designer interested in authoring tools and multimodal interaction. "
      ></meta>

      {/* Open Graph/FB */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Joseph Zhang – Interaction designer" />

      <meta
        property="og:description"
        content="Joseph is a designer interested in authoring tools and multimodal interaction. "
      />
      <meta property="og:image" content="/metatag-preview.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta
        property="twitter:title"
        content="Joseph Zhang – Interaction designer"
      />
      <meta
        property="twitter:description"
        content="Joseph is a designer interested in authoring tools and multimodal interaction. "
      />
      <meta property="twitter:image" content="/metatag-preview.jpg" />

      {/* Favicon & fonts */}
      <link key="favicon" rel="icon" href="/favicon.jpg" importance="low" />
      <link key="apple-touch-icon" rel="apple-touch-icon" href="/favicon.jpg" />
      <link rel="stylesheet" href="https://use.typekit.net/liy8bpw.css"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="stylesheet" href="https://use.typekit.net/liy8bpw.css"></link>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7T632FJ4W4"
      ></script>
    </Head>
  );
}

export default Meta;
