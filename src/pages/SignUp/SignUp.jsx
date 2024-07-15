import { Link } from "react-router-dom";
import "./SignUp.css"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { signUpUser } from "../../features/auth/authSlice";


const SignUp=()=>{
    const [seePassword, setSeePassword] = useState(false);
    const [userInfo, setUserInfo]= useState({})
    const dispatch = useDispatch()

    const handleForm=(t)=>{
        t.preventDefault();
        dispatch(signUpUser(userInfo))
    }
    return(
        <div className="Sign_Card">
            <h2>Sign Up</h2>
            <form onSubmit={handleForm}>
                <input placeholder="email" type="email" onChange={(e)=> setUserInfo((p)=> {return {...p, email: e.target.value}} )}/>
                <input placeholder="name" type="text" onChange={(e)=> setUserInfo((p)=> {return {...p, name: e.target.value}} )}/>
                <input placeholder="date of Birth" type="date" onChange={(e)=> setUserInfo((p)=> {return {...p, dob: e.target.value}} )}/>
                <div>
                <input placeholder="password" type={seePassword? "text":"password"} onChange={(e)=> setUserInfo((p)=> {return {...p, password: e.target.value}} )}/>
                {seePassword?<IoEyeOff onClick={()=>setSeePassword(!seePassword)}/>: <IoEye onClick={()=>setSeePassword(!seePassword)}/>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <span><Link to="/auth/login">Log In</Link></span></p>
        </div>
    )
}

export default SignUp;