import { Link } from "react-router-dom"
import "./Login.css"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const Login =()=>{
    const [seePassword, setSeePassword] = useState(false)
    return(
        <div className="Login_Card">
            <h2>Login</h2>
            <form>
                <input placeholder="email" />
                <div>
                <input placeholder="password" type={seePassword? "text":"password"}/>
                {seePassword?<IoEyeOff onClick={()=>setSeePassword(!seePassword)}/>: <IoEye onClick={()=>setSeePassword(!seePassword)}/>}
                </div>
                <button>Login</button>
            </form>
            <p>You don't have an account? <span><Link to="/auth/signUp">Sign Up</Link></span></p>
        </div>
    )
}

export default Login