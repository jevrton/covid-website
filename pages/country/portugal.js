import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'

export default function Home(props){
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
          Portugal covid informations
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Infections &rarr;</h3>
            <p>{props.cases} total cases</p>
            <p>{props.todayCases} today cases</p>
          </div>
          <div className={styles.card}>
            <h3>Deaths &rarr;</h3>
            <p>{props.deaths} deaths</p>
            <p>{props.todayDeaths} today deaths</p>
          </div>
          <div className={styles.card}>
            <h3>Cures &rarr;</h3>
            <p>{props.recovered} cures</p>
            <p>{props.active} active</p>
          </div>
          <div className={styles.card}>
            <h3>Tests &rarr;</h3>
            <p>{props.totalTests} tests</p>
            <p>{props.critical} critical</p>
          </div>
          <a href='../countries' className={styles.card}>
            <h3>&larr; back</h3>
            <p>go back to countries list</p>
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
  const response_all = await fetch('https://coronavirus-19-api.herokuapp.com/countries/portugal')
  const data_all = await response_all.json()

  return (
    data_all
  )
}