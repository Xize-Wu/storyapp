import Head from 'next/head'
import Header from '../components/Header/Header';
import { Inter } from 'next/font/google'
import { AuthContextProvider } from '../components/Header/AuthContext.';
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <AuthContextProvider>
    <Head>
      <title>CloudCastle</title>
    </Head>
      <Header />
     <>Here we load the article list</>
     <></>
     </AuthContextProvider>
    </>
  )
}
