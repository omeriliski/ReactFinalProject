import {useContext} from "react";
import {Context} from "../App";
import Navbar from '../components/Navbar';
import TextPost from "../posts/Posttypes"

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
            <TextPost/>
        </div>
    )
}

export default Home;
