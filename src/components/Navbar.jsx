import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {Context} from "../App";
import { getAuth, signOut } from 'firebase/auth'
import "./Navbar.scss";

const Navbar = ()=>{
    const {setCurrentUser} = useContext(Context);

    const logout=()=>{
        const auth = getAuth();
        signOut(auth)
        localStorage.removeItem("user");
        setCurrentUser(null);
      }
    return(
        <div>
            <ul>
                <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-link" to="/create">Create Post</NavLink></li>
                <li><NavLink className="nav-link" to="/login" onClick={logout}>Logout</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;