import { useContext, useRef, useState } from "react";
import { PostContext } from "../App";
import { Navigate } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import "./CreatePostInput.scss";
import { ButtonPrimary } from "../posts/Buttons";

const CreateSurvey = () => {
  const { currentUser, savePostData, database, getPostData } =
    useContext(PostContext);
  const [optionsCount, setOptionsCount] = useState(1);
  const [options, setOptions] = useState([]);

  const question = useRef();

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      question: question.current.value,
      options,
      comments: [],
      postType: "survey",
      vote: [],
      email: currentUser.email
    };
    const newPostData = [newPost, ...database];
    savePostData(newPostData);
    getPostData();
  };
  const optionsFunction = () => setOptionsCount(optionsCount + 1);
  const getOptions = (e, index) => {
    const arr = [...options];
    arr[index] = e.target.value;
    setOptions(arr);
    console.log("arr :>> ", arr);
  };

  if (!currentUser) return <Navigate to="login" />;
  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <textarea
            ref={question}
            rows="4"
            cols="40"
            placeholder="Frage hinzufügen"
          ></textarea>
          {[...Array(optionsCount)].map((item, index) => (
            <input
              onChange={(e) => getOptions(e, index)}
              type="text"
              placeholder="Option hinzufügen"
            />
          ))}
          <input type="button" value="add" onClick={optionsFunction} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default CreateSurvey;
