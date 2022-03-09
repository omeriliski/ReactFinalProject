import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import "./App.scss";
import "./firebase";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import {
  collection,
  getFirestore,
  getDoc,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

export const PostContext = createContext();

const defaultUser = JSON.parse(localStorage.getItem("user"));
function App() {
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [database, setDatabase] = useState([]);
  const [postData, setPostData] = useState([]);

  const db = getFirestore();

  const getAllData = async () => {
    // const auth = getAuth()
    // console.log('auth :>> ', currentUser);
    // const docRef =  doc(db, "posts",currentUser.uid);
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //     state.userSettings=docSnap.data().userSettings;
    // }
    // else console.log("No such document!");

    const querySnapshot = await getDocs(collection(db, "posts"));
    const arr = [];
    querySnapshot.forEach((doc) => {
      // setPostData(doc.data());
      arr.push(doc.data());
    });
    setDatabase(arr);
  };

  // it gets only currentUser's posts
  const getPostData = async (userId) => {
    const docRef = doc(db, "posts", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return [];
    }
  };

  const savePostData = async (newPostData, userId) => {
    const postsRef = collection(db, "posts");
    setPostData(newPostData.postList);
    await setDoc(doc(postsRef, userId), newPostData);
  };

  console.log("database :>> ", database);
  console.log("postData :>> ", postData);

  useEffect(() => {
    getAllData();
    if (currentUser) {
      // it get's the current users post and sets the postData state
      getPostData(currentUser.uid)
      .then((res) => {
        console.log('res :>> ', res);
        res.length>0 ? setPostData(res.postList) :setPostData([]);
      });
    }
  }, []);
  return (
    <PostContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        postData,
        setPostData,
        savePostData,
        database,
        getAllData,
        getPostData,
      }}
    >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/*"
            element={
              currentUser ? <Navigate to="/" /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </PostContext.Provider>
  );
}

export default App;
