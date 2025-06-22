import Head from 'next/head';
import Script from 'next/script';

function Meta({
  title = 'Joseph Zhang – Interaction Designer',
  description = 'Joseph is a designer interested in authoring tools and multimodal interaction',
  image = '/metadata/main.jpg',
  url = 'www.joseph.cv',
}) {
  return (
    <Head>
      <meta key="charset" charSet="utf-8" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      {/* Primary Meta Tag */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph/FB */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Favicon & fonts */}
      <link key="favicon" rel="icon" href="/favicon.jpg" importance="low" />
      <link key="apple-touch-icon" rel="apple-touch-icon" href="/favicon.jpg" />
      <link rel="stylesheet" href="https://use.typekit.net/liy8bpw.css"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="stylesheet" href="https://use.typekit.net/liy8bpw.css"></link>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-7T632FJ4W4"></script>
    </Head>
  );
}

export default Meta;
