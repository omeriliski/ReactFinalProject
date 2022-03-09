import {
  TextPost,
  AwardPost,
  BildTextPost,
  ShortTextPost,
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
      <TextPost />
      <ShortTextPost />
      {database.map((data) => {
        return data.postList.map((post) =>{
          console.log('post :>> ', post);
          return <BildTextPost post={post}/>
        }
        )
      } 
      )}
      <AwardPost />
    </div>
  );
};

export default Home;
