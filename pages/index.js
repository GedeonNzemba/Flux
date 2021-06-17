import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../styles/Global.module.scss'
import Header from './components/Header'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Miavana</title>
        <meta name="description" content="Island Sanctuary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Fragment>
  )
}
