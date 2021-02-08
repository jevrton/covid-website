import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'

export default function Home(props){
  console.log("data", props)
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
          covid world informations
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>World Infections &rarr;</h3>
            <p>{props.cases} cases</p>
          </div>
          <div className={styles.card}>
            <h3>World Deaths &rarr;</h3>
            <p>{props.deaths} deaths</p>
          </div>
          <div className={styles.card}>
            <h3>World Cures &rarr;</h3>
            <p>{props.recovered} cures</p>
          </div>
          <a href='/countries' className={styles.card}>
            <h3>Countries &rarr;</h3>
            <p>click to see other countries</p>
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

Home.getInitialProps = async function(){
  const response_all = await fetch('https://coronavirus-19-api.herokuapp.com/all')
  const data_all = await response_all.json()

  return (
    data_all
  )
}