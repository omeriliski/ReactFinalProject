import {
  TextPost,
  AwardPost,
  BildTextPost,
  ShortTextPost,
} from "../posts/Posttypes";
import { useContext } from "react";
import { Context } from "../App";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";
const Home = () => {
  const { postData } = useContext(Context);

//   if(!currentUser) return <Navigate to="login"/>
  
  return (
    <div>
      <TextPost />
      <ShortTextPost />
      {postData.map(post=>{
        console.log('post :>> ', post);
        return <BildTextPost post={post} />
      })
      }
      <AwardPost />
    </div>
  );
};

export default Home;
