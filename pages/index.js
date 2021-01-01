import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Takao Shimizu</title>
      </Head>

      <main className={styles.horizontal_container}>
        <img
          className={styles.item}
          src="profile.jpeg"
          alt="My Profile Pic"
        />

        <div className={styles.item}>
          <article className={styles.description}>
            <h1>
              Hi, I'm Takao Shimizu.
            </h1>

            <p>
              I'm a senior studying Computer Science and Neuroscience at Middlebury College, VT.
            </p>

            <p>
              My academic interests include fairness and privacy in ML, ML applications in bioinformatics and computational neuroscience.
            </p>

            <p>
              In my free time, I enjoy bouldering, eating out with friends and family, and cooking.
            </p>
          </article>
        </div>

      </main>
    </div>
  )
}
