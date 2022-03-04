import {useRef} from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from "react-router-dom";

const Login=()=>{
    const email = useRef();
    const password = useRef();
    const auth = getAuth();
    const navigate = useNavigate();

    const eventHandler=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(()=>{
            console.log('logged in :>> ');
            navigate("/home");
        })
        .catch (e=>{
          alert(e.message)
      })
    }
    return(
        <div>
            <h1>Login</h1>
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
            </form>
        </div>
    )
}

export default Login;