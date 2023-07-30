import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import axios from "axios";
import Story from "../../components/StoryPage/Story";

export async function getStaticProps(context) {
  const { params } = context;
  const storyId = params.storyid;

    await axios.get('/api/story/getstory', storyId)
    .then(
      res => (
        console.log("response received!")
      )
    )
    .catch(error => {
      console.error(error);
    });


}

export async function getStaticPaths(){
  return{
    paths: [
      {params:{storyid:'1'}},
      {params:{storyid:'2'}},
      {params:{storyid:'3'}}
    ],
    fallback:false
  }
}

export default function StoryPage() {
  const router = useRouter();
  const NoSSRHeader = dynamic(() => import('../../components/Header/Header'), { ssr: false });
  const username = Cookies.get('username');

  return (
    <>
      <NoSSRHeader username={username} />
      <Story />
    </>
  );
}