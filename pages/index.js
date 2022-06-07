import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nick Tech Next.js Tutorial</title>
      </Head>

      <h1 className={styles.homePageTitle} >Welcome to the Cryptocurrency API</h1>

      <Link href='/coins' > Click Here to View Realtime Data of Crpytocurrency Prices. </Link>
    </div>
  )
}
