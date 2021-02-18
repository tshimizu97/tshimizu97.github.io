import '../styles/globals.css'
import Header from '../components/Header'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head> <meta name="viewport" content="width=device-width" /> </Head>
      <Header {...pageProps} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
