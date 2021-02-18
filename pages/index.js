import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Takao Shimizu</title>
      </Head>

      <main className={styles.main_horizontal}>
        <div className={styles.item_horizontal}>
          <img
            className={styles.image}
            src="profile.jpeg"
            alt="My Profile Pic"
          />
        </div>

        <div className={styles.item_horizontal}>
          <article className={styles.description}>
            <h1>
              Hi, I'm Takao Shimizu.
            </h1>

            <p>
              I'm a recent graduate with B.A in Computer Science and Neuroscience from Middlebury College, VT.
            </p>

            <p>
              My academic interests include fairness and privacy in ML, ML applications in biosciences, and computational neuroscience.
            </p>

            <p>
              In my free time, I enjoy bouldering, eating out with friends and family, cooking and learning something new.
            </p>

            <div className={styles.logos}>
              <a href="https://www.linkedin.com/in/takao-shimizu-880b2814a/" target="_blank">
                <img className={styles.logo} src="linkedin_logo.png" alt="linkedin" />
              </a>
              <a href="https://github.com/tshimizu97" target="_blank">
                <img className={styles.logo} src="github_logo.png" alt="github" />
              </a>
            </div>
          </article>
        </div>

      </main>
    </div>
  )
}
