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
  let stories = [];

  try {
    // Make an HTTP request to your backend API to fetch all stories
    const response = await axios.get('http://localhost:3000/api/story/get_all_stories');

    // Assuming the response contains an array of story objects
    stories = response.data;
    console.log("stories", stories)
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return {
    props: {
      stories
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
{/* <ul>
  {stories.map(story=><li key={story.id}>{story.title}</li>)}
</ul> */}
{stories.map(story=><StoryIntro title = {story.title} username = {story.user_id} content = {story.content}/>)}
  </>
  )
}
