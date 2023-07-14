import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
import Cookies from 'js-cookie';
import axios from "axios";
import Story from "../../components/StoryPage/Story";

export default function StoryPage (){
  const router = useRouter()
  const NoSSRHeader = dynamic(() => import('../../components/Header/Header'), { ssr: false })
  const username = Cookies.get('username');

  axios.post('/api/story/getstory', router.query)
    .then(
      res => (
        console.log("response received!")
      )
    )
    .catch(error => {
      console.error(error);
    });
  

  return (
    <>
    <NoSSRHeader username = {username}/>
    <Story/>
    </>
  )
}