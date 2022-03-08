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
  const { currentUser, setCurrentUser, getUser } = useContext(Context);

  // if(!getUser()){
  //     return <Navigate to="login"/>
  // }
  return (
    <div>
      <Navbar />
      <TextPost />
      <ShortTextPost />
      <BildTextPost />
      <AwardPost />
    </div>
  );
};

export default Home;
