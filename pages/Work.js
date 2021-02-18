import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getPortfolioData } from './api/getPortfolio'

export async function getStaticProps() {
  const portfolioData = await getPortfolioData()
  return {
    props: {
      portfolioData
    }
  }
}

export default function Home({ portfolioData }) {
  function getTitle(title, link) {
    if (link != 'na') {
      return <a href="https://github.com/dsgelab/gmap-retrieval" target="_blank"><h2>{title}</h2></a>
    } else {
      return <h2>{title}</h2>
    }
  }

  return (
    <div className={styles.container_scrollable}>
      <Head>
        <title>Takao Shimizu</title>
      </Head>

      <main className={styles.portfolio}>
        {portfolioData.map(({ id, date, title, link, image, contentHtml }) => (
          <div className={styles.product} key={id}>
            <div className={styles.item}>
              <img
                className={styles.product_image}
                src={image}
                alt={image}
              />
            </div>
            <div className={styles.item}>
              <h3>{title}</h3>
              <div className={styles.description} dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
