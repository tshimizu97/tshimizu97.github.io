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
  return (
    <div className={styles.container_scrollable}>
      <Head>
        <title>Takao Shimizu</title>
      </Head>

      <main className={styles.portfolio}>
        {portfolioData.map(({ id, date, title, image, contentHtml }) => (
          <div className={styles.product} key={id}>
            <div className={styles.item}>
              <img
                className={styles.product_image}
                src={image}
                alt={title}
              />
            </div>
            <div className={styles.item}>
              <h2>{title}</h2>
              <div className={styles.description} dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
