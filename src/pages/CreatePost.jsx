import {useContext,useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import {Context} from "../App";
import {Navigate} from "react-router-dom"
import "./CreatePost.scss";
import { ButtonPrimary } from '../posts/Buttons';

const CreatePost = ()=>{
    const {currentUser} = useContext(Context);
    const [imageURL,setImageURL]=useState();
    const img = useRef();
    const titel = useRef();
    const text = useRef();
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        setImageURL(URL.createObjectURL(img.current.files[0]))
        console.log("submit");
        console.log('URL.createObjectURL(img.current.files[0]) :>> ', URL.createObjectURL(img.current.files[0]));
    }
    

    if(!currentUser) return <Navigate to="login"/>
    return(
        <div>
            <Navbar/>
            <div className='form-container'>
                <form onSubmit={handleSubmit}> 
                    <input ref={img} type="file" accept='image/*' placeholder='Bild hinzufügen'/>
                    <img src={imageURL}/>
                    <input ref={titel} type="text" placeholder='Titel hinzufügen'/>
                    <textarea ref={text} rows="4" cols="40" placeholder='Text hinzufügen'></textarea>

                    <ButtonPrimary text="Teilen"/>
                </form>
            </div>
        </div>
    )
}
export default CreatePost;