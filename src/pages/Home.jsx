import {
  TextPost,
  AwardPost,
  BildTextPost,
  ShortTextPost,
  VideoPost,
  AudioPost,
  UmfragePost
} from "../posts/Posttypes";
import { useContext } from "react";
import { PostContext } from "../App";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";
const Home = () => {
  const { postData, database } = useContext(PostContext);

  //   if(!currentUser) return <Navigate to="login"/>

  return (
    <div>
      {
        database.map((post,index)=>{
          switch (post.postType) {
            case "picture":
              return <BildTextPost post={post} index={index}/>
            case "text":
              return <TextPost post={post} index={index}/>
            case "shortText":
              return <ShortTextPost post={post} index={index}/>
            case "awardPost":
              return <AwardPost post={post} index={index}/>
            case "video":
              return <VideoPost post={post} index={index}/>
            case "audio":
              return <AudioPost post={post} index={index}/>
            case "survey":
              return <UmfragePost post={post} index={index}/>
            default:
              break;
          }
        })
      }
    </div>
  );
};

export default Home;
