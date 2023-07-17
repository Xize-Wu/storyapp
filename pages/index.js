import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Cookies from 'js-cookie';
import axios from 'axios';
import StoryIntro from '../components/FrontPage/StoryIntro';
import Link from 'next/link';
// import styles from '@/styles/Home.module.css'
const NoSSRHeader = dynamic(() => import('../components/Header/Header'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  let stories = [];

  try {
    const response = await axios.get('http://localhost:3000/api/story/get_all_stories');

    stories = response.data;
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
  const { stories } = props;
  console.log(stories);

  return (
    <>
      <Head>
        <title>CloudCastle</title>
      </Head>
      <NoSSRHeader username={username} />

      {stories.map(story => (
                <Link href={`/story/${story.id}`} key={story.id}>
                  <StoryIntro title={story.title} username={story.user.username} content={story.content} />
              </Link>      
      ))}
    </>
  );
}
