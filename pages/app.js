import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title> App</title>
      </Head>
       <h1 className='title'>App</h1>
    </div>
  )
}
