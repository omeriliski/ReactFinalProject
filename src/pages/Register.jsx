import {useRef} from "react";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import {useNavigate} from "react-router-dom";

const Register=()=>{
    const username = useRef();
    const email = useRef();
    const password1 = useRef();
    const password2 = useRef();
    const auth = getAuth();
    const navigate = useNavigate();

    const eventHandler=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email.current.value, password1.current.value)
        .then(()=>{
            console.log('registered :>> ');
            //   router.push('/')
            navigate("/login");
        })
        .catch (e=>{
          alert(e.message)
      })
    }
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={eventHandler}>
                <div>
                    <input type="text" ref={username}/>
                </div>
                <div>
                    <input type="email" ref={email}/>
                </div>
                <div>
                    <input type="password" ref={password1} />
                </div>
                <div>
                    <input type="password" ref={password2} />
                </div>
                <div>
                    <input type="submit" value="Register"/>
                </div>
            </form>
        </div>
    )
}

export default Register;