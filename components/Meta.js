import Head from "next/head";

function Meta() {
  return (
    <Head>
      <meta key="charset" charSet="utf-8" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta
        key="description"
        name="description"
        content="Interaction designer"
      />
      <title key="title">Joseph Z</title>
      <link key="favicon" rel="icon" href="/favicon.png" importance="low" />
      <link
        key="apple-touch-icon"
        rel="apple-touch-icon"
        href="/static/favicon.png"
      />
      <link rel="stylesheet" href="https://use.typekit.net/liy8bpw.css"></link>
    </Head>
  );
}

export default Meta;
