import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import CreatePost from './pages/CreatePost';
import './App.scss';
import "./firebase";

import  Navbar from './components/Navbar';

import {Routes,Route, Navigate} from "react-router-dom";
import {useState,createContext } from 'react';

export const Context = createContext();

const defaultUser=JSON.parse(localStorage.getItem("user"))
function App() {
  const [currentUser,setCurrentUser] = useState(defaultUser);

  return (
    <Context.Provider value={{currentUser,setCurrentUser}}>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/create' element={<CreatePost/> }/>
        
        <Route path='/login' element={<Login/> }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/*' element={currentUser ? <Navigate to="/"/>:<Navigate to="/login"/>}/>
      </Routes>
    </div>
    </Context.Provider>
  );
}

export default App;