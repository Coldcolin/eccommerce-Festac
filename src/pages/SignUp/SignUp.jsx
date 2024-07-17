import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { signUpUser } from "../../features/auth/authSlice";


const SignUp=()=>{
    const [seePassword, setSeePassword] = useState(false);
    const [seeError, setSeeError] = useState(false);
    const [userInfo, setUserInfo]= useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleForm=(t)=>{
        t.preventDefault();
        const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/; 
        const numberRegex = /\d/;

        if(specialCharacterRegex.test(userInfo.password) && numberRegex.test(userInfo.password)){
            dispatch(signUpUser(userInfo));
            navigate("/auth/login")
        }else{
            setSeeError(true)
        }
    }

    useEffect(()=>{
        const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/; 
        const numberRegex = /\d/;

        if(specialCharacterRegex.test(userInfo.password) && numberRegex.test(userInfo.password)){
            setSeeError(false)
        }
    },[userInfo.password])
    return(
        <div className="Sign_Card">
            <h2>Sign Up</h2>
            <form onSubmit={handleForm} >
                <input placeholder="email" type="email" onChange={(e)=> setUserInfo((p)=> {return {...p, email: e.target.value}} )} required={true} />
                <input placeholder="name" type="text" onChange={(e)=> setUserInfo((p)=> {return {...p, name: e.target.value}} )} required={true} name="name" autoComplete="off"/>
                <input placeholder="date of Birth" type="date" onChange={(e)=> setUserInfo((p)=> {return {...p, dob: e.target.value}} )}/>
                <input placeholder="Phone Number" type="number" onChange={(e)=> setUserInfo((p)=> {return {...p, phoneNumber: e.target.value}})} required={true} name="Phone Number" autoComplete="off"/>
                {seeError === false? null:<section className="signUpError">password should contain 1 special character, 1 number</section>}
                <div>
                <input placeholder="password" type={seePassword? "text":"password"} onChange={(e)=> setUserInfo((p)=> {return {...p, password: e.target.value}})} required={true} />
                {seePassword?<IoEyeOff onClick={()=>setSeePassword(!seePassword)}/>: <IoEye onClick={()=>setSeePassword(!seePassword)}/>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <span><Link to="/auth/login">Log In</Link></span></p>
        </div>
    )
}

export default SignUp;