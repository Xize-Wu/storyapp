import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import Cookies from 'js-cookie';
import axios from 'axios';
import StoryIntro from '../components/FrontPage/StoryIntro';
// import styles from '@/styles/Home.module.css'
const NoSSRHeader = dynamic(() => import('../components/Header/Header'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  return {
    props: {
      stories: [
        {
          id: 1,
          title: "My First Story",
          username: "A",
          text: "This is my first story!"
        },
        {
          id: 2,
          title: "My Second Story",
          username: "B",
          text: "This is my second story!"
        }
      ]
    }
  };
}


export default function Home(props) {
  const username = Cookies.get('username');
  const {stories} = props;
  console.log(stories)

  return (
    <>
    <Head>
      <title>CloudCastle</title>
    </Head>
      <NoSSRHeader username = {username}/>

{stories.map(story=><StoryIntro title = {story.title} username = {story.username} text = {story.text}/>)}
  </>
  )
}
