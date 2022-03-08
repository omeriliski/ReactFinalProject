import {useContext} from "react";
import { Context } from "../App";
import {Navigate} from "react-router-dom"
import Navbar from '../components/Navbar';
import TextPost from "../posts/Posttypes"

const Home=()=>{
    const {currentUser}=useContext(Context); 

    if(!currentUser) return <Navigate to="login"/>
    return(
        <div>
            <Navbar/>
            Welcome {currentUser.email}
            <TextPost/>
        </div>
    )
}
export default Home;