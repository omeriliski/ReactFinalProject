import {  NavLink,useNavigate } from "react-router-dom";
import { useContext } from "react";
import {Context} from "../App";
import { getAuth, signOut } from 'firebase/auth'
import "./Navbar.scss";
import Plus from "../posts/img/plus.svg";
import Logo from "../posts/img/logo.svg";

const Navbar = ()=>{
    const {currentUser,setCurrentUser} = useContext(Context);
    const navigate = useNavigate();

            const logout = () => {
              const auth = getAuth();
              signOut(auth);
              localStorage.removeItem("user");
              setCurrentUser(null);
            };

  return (
    <div className="header-wrapper">
      <NavLink to="/" className="logo">
        <img src={Logo} />
      </NavLink>

      <NavLink to="/create" className="plus-for-post">
        <img src={Plus} />{" "}
      </NavLink>

      <div className="hamburger-menu"></div>
      <NavLink to="/login" onClick={logout} className="logout-button">
        Logout
      </NavLink>
    </div>
  );
}
export default Navbar;

