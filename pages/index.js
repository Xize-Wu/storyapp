import Head from 'next/head'
import Header from '../components/Header/Header';
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>CloudCastle</title>
    </Head>
      <Header />
     <h1>CloudCastle</h1>
     <>Here we load the article list</>
     <></>
    </>
  )
}
