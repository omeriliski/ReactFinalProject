import { useEffect,useContext } from 'react';
import Navbar from '../components/Navbar';
import {Context} from "../App";

const CreatePost = ()=>{
    const {getUser} = useContext(Context);
    // useEffect(()=>{
    //     getUser();
    // },[])
    return(
        <div>
            <Navbar/>
            CreatePost
        </div>
    )
}
export default CreatePost;