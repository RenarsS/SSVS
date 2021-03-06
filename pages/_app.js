import "../styles/styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>SSVS</title>
          <link rel="icon" href="/SSVS_logo_v2.svg"/>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
