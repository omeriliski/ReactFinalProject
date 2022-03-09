import {useRef, useContext} from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {NavLink, useNavigate} from "react-router-dom";
import {PostContext} from "../App";


const Login=()=>{
    const email = useRef();
    const password = useRef();
    const auth = getAuth();
    const navigate = useNavigate();

    const {setCurrentUser} = useContext(PostContext);

    const eventHandler=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((res)=>{
            console.log('logged in :>> ',res.user);
            localStorage.setItem("user",JSON.stringify(res.user));
            setCurrentUser(res.user);
            navigate("/");
        })
        .catch (e=>{
          alert(e.message)
      })
    }
    return(
        <div>
            <h1>Anmelden</h1>
            <form onSubmit={eventHandler}>
                <div>
                    <input type="email" ref={email}/>
                </div>
                <div>
                    <input type="password" ref={password} />
                </div>
                <div>
                    <input type="submit" value="Login"/>
                </div>
                <NavLink to="/register">Registrieren</NavLink>
            </form>
        </div>
    )
}

export default Login;