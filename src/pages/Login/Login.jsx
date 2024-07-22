import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";

const Login =()=>{
    const [seePassword, setSeePassword] = useState(false);
    const [loginInfo, setLoginInfo] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const checkIfLoggedIn = useSelector((state)=> state.isLoggedIn);
    // console.log(useSelector((state)=> state.users))
    const loginFunc=(e)=>{
        e.preventDefault()
        dispatch(loginUser(loginInfo));
    }
    useEffect(()=>{
        if(checkIfLoggedIn === true){
            navigate("/")
        }
    },[checkIfLoggedIn])
    return(
        <div className="Login_Card">
            <h2>Login</h2>
            <form onSubmit={(e)=>loginFunc(e)}>
                <input placeholder="email" name="email" onChange={(e)=> setLoginInfo((r)=> {return {...r, email: e.target.value}})} required={true} />
                <div>
                <input placeholder="password" type={seePassword? "text":"password"} onChange={(e)=> setLoginInfo((r)=> {return {...r, password: e.target.value}})} required={true} />
                {seePassword?<IoEyeOff onClick={()=>setSeePassword(!seePassword)}/>: <IoEye onClick={()=>setSeePassword(!seePassword)}/>}
                </div>
                <button type="submit">Login</button>
            </form>
            <p>You don't have an account? <span><Link to="/auth/signUp">Sign Up</Link></span></p>
        </div>
    )
}

export default Login