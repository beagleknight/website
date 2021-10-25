import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Image width="300" height="300" src="/images/Boira-transparent-small.png"/>
      <h1>@beagleknight</h1>
      <h2>Work in progress</h2>
    </div>
  )
}
