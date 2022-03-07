import {useContext} from "react";
import {Context} from "../App";
import Navbar from '../components/Navbar';
import TextPost from "../posts/Posttypes"
import {Navigate} from "react-router-dom"
const Home=()=>{
    const {currentUser, setCurrentUser}=useContext(Context);
    
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
