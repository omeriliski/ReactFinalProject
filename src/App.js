import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import CreatePost from './pages/CreatePost';
import './App.scss';
import "./firebase";
import {Routes,Route, Navigate} from "react-router-dom";
import { useEffect, useState,createContext } from 'react';

export const Context = createContext();


function App() {
  const [currentUser,setCurrentUser] = useState(null);

  const getUser=()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(user);
    console.log('app user :>> ', user);
  }
  
  useEffect(()=>{
    getUser();
  },[])

  // useEffect(()=>{
  //   const auth = getAuth();
  //   console.log('auth app:>> ', auth);
    
  //   // for (const key in auth) {
  //     //   console.log('key :>> ',key, auth[key]);
  //     // }
  //   auth.onAuthStateChanged(user=>{
  //     console.log('user :>> ',user);
  //     setUser(user);
  //   })
  // },[])
  return (
    <Context.Provider value={{currentUser,setCurrentUser,getUser}}>
    <div className="App">
      <Routes>
        <Route index element={<Home/>  }/>
        <Route path='/create' element={<CreatePost/> }/>
        <Route path='/login' element={<Login/> }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/*' element={<Navigate to="/"/>}/>
      </Routes>
    </div>
    </Context.Provider>
  );
}

export default App;