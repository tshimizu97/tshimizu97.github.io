import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header {...pageProps} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
