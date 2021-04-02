import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" id="icon-webSite" href="favicon.svg" />

          <meta
            name="keywords"
            content="mayconsgs, programador, desenvolvedor, web, sistemas, Maycon, Santos, Flutter, React, JavaScript, Mobile, iOS, Android, Aplicativo"
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
