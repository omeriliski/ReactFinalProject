import {useContext} from "react";
import {Context} from "../App";
import { useEffect } from "react";
import Navbar from '../components/Navbar';

const Home=()=>{
    const {currentUser, setCurrentUser, getUser}=useContext(Context);

    // useEffect(()=>{
    //     getUser();
    //   },[])

    // useEffect(()=>{
    //     const auth = getAuth();
    //     auth.onAuthStateChanged(user=>{
    //         console.log('user :>> ',user);
    //         setUser(user);
    //       })
    // },[])
    return(
        <div>
            <Navbar/>
            Welcome {currentUser?.email}
        </div>
    )
}

export default Home;