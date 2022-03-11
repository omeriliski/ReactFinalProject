import { useContext, useRef, useState } from "react";
import { PostContext } from "../App";
import { Navigate } from "react-router-dom";
import {
  collection,
  getFirestore,
  getDoc,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase";
import "./CreatePost.scss";
import { ButtonPrimary } from "../posts/Buttons";

const CreatePost = () => {
  const [imageURL, setImageURL] = useState();
  const [progress, setProgress] = useState(0);

  const { currentUser, postData, savePostData, database, getAllData } =
    useContext(PostContext);

  const img = useRef();
  const postTitle = useRef();
  const postText = useRef();

  const db = getFirestore();

  const createPostData = async (imgUrl) => {
    // const currentUsersPosts = database.find(data=>data.userSettings.uid==currentUser.uid);
    // console.log('currentUsersPosts :>> ', currentUsersPosts);

    const newPost = {
      postTitle: postTitle.current.value,
      postText: postText.current.value,
      imgUrl,
      comments: [],
      like: 0,
      dislike: 0,
      postType:"BildTextPost"
    };
    const newPostData = [...database, newPost]
    //   userSettings: {
    //     userId: currentUser.uid,
    //     userEmail: currentUser.email,
    //   },
    
    savePostData(newPostData);
    getAllData();
  };

  const uploadFile = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log("err :>> ", err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((imgUrl) =>
          createPostData(imgUrl)
        );
      }
    );

    // const storage = getStorage();
    //const storageRef = ref(storage, URL.createObjectURL(img.current.files[0]));

    // 'file' comes from the Blob or File API
    // uploadBytes(storageRef, file).then((snapshot) => {
    //   console.log('Uploaded a blob or file!');
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setImageURL(URL.createObjectURL(img.current.files[0]));
    console.log(
      "URL.createObjectURL(img.current.files[0]) :>> ",
      URL.createObjectURL(img.current.files[0])
    );
    const url = uploadFile(img.current.files[0]);
    console.log("imageURL :>> ", imageURL);
  };

  if (!currentUser) return <Navigate to="login" />;
  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            ref={img}
            type="file"
            accept="image/*"
            placeholder="Bild hinzufügen"
          />
          <img src={imageURL} />

          <h3>Uploaded {progress} %</h3>
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
export default CreatePost;
