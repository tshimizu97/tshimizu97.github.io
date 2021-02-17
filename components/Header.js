import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Header(props) {
  return (
    <header className={styles.header}>
        <div className={styles.header_left}>
          Takao Shimizu
        </div>
        <div className={styles.header_right}>
          <Link href="/">
            <a className={styles.header_element}>
              About
            </a>
          </Link>
          <Link href="/Work">
            <a className={styles.header_element}>
              Work
            </a>
          </Link>
          <a className={styles.header_element} href="cv.pdf" target="_blank">
            CV
          </a>
        </div>
    </header>
  )
}
