import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald:wght@500&display=swap"
            rel="stylesheet"
          />
          <link href="/avatar-small.png" rel="shortcut icon" />
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <link
            href="/static/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/avatar-small.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/avatar-small.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#3182CE" name="theme-color" />
          <meta content="#3182CE" name="msapplication-TileColor" />
          <meta
            content="/static/favicons/browserconfig.xml"
            name="msapplication-config"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
