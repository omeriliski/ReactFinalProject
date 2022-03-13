import { useContext, useRef, useState } from "react";
import { PostContext } from "../App";
import { Navigate } from "react-router-dom";
import {
  getFirestore,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase";
import "./CreatePicture.scss";
import { ButtonPrimary } from "../posts/Buttons";

const CreateText = () => {
  const [imageURL, setImageURL] = useState();
  const [progress, setProgress] = useState(0);

  const { currentUser, savePostData, database,getPostData } =useContext(PostContext);

  const img = useRef();
  const postTitle = useRef();
  const postText = useRef();

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const currentUsersPosts = database.find(data=>data.userSettings.uid==currentUser.uid);
    // console.log('currentUsersPosts :>> ', currentUsersPosts);

    const newPost = {
      postTitle: postTitle.current.value,
      postText: postText.current.value,
      comments: [],
      postType:"text",
      vote:[]
    };
    const newPostData = [newPost, ...database]
  
    savePostData(newPostData);
    getPostData();
  };

  if (!currentUser) return <Navigate to="login" />;
  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input ref={postTitle} type="text" placeholder="Titel hinzufügen" />
          <textarea
            ref={postText}
            rows="4"
            cols="40"
            placeholder="Text hinzufügen"
          ></textarea>
          <ButtonPrimary text="Teilen" />
        </form>
      </div>
    </div>
  );
};
export default CreateText;
