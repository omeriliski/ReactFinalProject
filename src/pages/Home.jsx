import {
  TextPost,
  AwardPost,
  BildTextPost,
  ShortTextPost,
  Post,
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
      {/* {database.map((post, index) => (
        <Post post={post} index={index} />
      ))} */}

      {/* <TextPost />
      <ShortTextPost /> */}
      { database?.map((post,index) => <BildTextPost post={post} index={index}/>)}
      {/* <AwardPost /> */}
    </div>
  );
};

export default Home;
