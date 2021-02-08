import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'

export default function Home(){
    return (
        <div className={styles.container}>
      <Head>
        <title>COVID ON</title>
        <link rel="icon" href="/corona-icon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href='/'>COVID ON</a>
        </h1>
        <p className={styles.description}>
          countries list
        </p>
        <div className={styles.grid}>
          <a href='/country/brazil' className={styles.card}>
            <h3>Brazil &rarr;</h3>
            <p>open more infos</p>
          </a>
          <div className={styles.card}>
            <h3>United States of America &rarr;</h3>
            <p>open more infos</p>
          </div>
          <div className={styles.card}>
            <h3>China &rarr;</h3>
            <p>open more infos</p>
          </div>
          <a href='/countries' className={styles.card}>
            <h3>Countries &rarr;</h3>
            <p>open more infos</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/jevrton/"
          target="_blank"
        >
          Developed by{' '}
          <img src="/linkedin.svg" alt="linkedin logo" className={styles.logo} />
        </a>
      </footer>
    </div>
    )
}