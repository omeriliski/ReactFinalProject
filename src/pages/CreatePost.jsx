import { useEffect,useContext } from 'react';
import Navbar from '../components/Navbar';
import {Context} from "../App";
import {Navigate} from "react-router-dom"
import Login from './Login';

const CreatePost = ()=>{
    const {currentUser} = useContext(Context);
   
    if(!currentUser) return <Navigate to="login"/>
    return(
        <div>
            <Navbar/>
            CreatePost
        </div>
    )
}
export default CreatePost;