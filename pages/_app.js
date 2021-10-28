import "../styles/styles.css";
import {Head} from "next/document";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>SSVS</title>
          <link rel="shortcut icon" href="../public/SSVS_logo_v2.svg"/>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
