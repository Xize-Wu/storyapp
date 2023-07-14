import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import Cookies from 'js-cookie';
import axios from 'axios';

// import styles from '@/styles/Home.module.css'
const NoSSRHeader = dynamic(() => import('../components/Header/Header'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const username = Cookies.get('username');

  return (
    <>
    <Head>
      <title>CloudCastle</title>
    </Head>
      <NoSSRHeader username = {username}/>
     <>Here we load the article list</>
    </>
  )
}
