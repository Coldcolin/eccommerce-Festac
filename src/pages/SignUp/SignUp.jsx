import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { signUpUser } from "../../features/auth/authSlice";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



const SignUp=()=>{
    const [seePassword, setSeePassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const User = z.object({
        name: z.string().min(3, { message: "Must be 3 or more characters long" }),
        phoneNumber: z.string().length(10, {message: "Must be greater than 10 digits"}),
        dob: z.string().date(),
        email: z.string().trim().email({message: "use a correct email"}).endsWith(".com", { message: "Only .com and .ng domains allowed" }),
        password: z.string().regex(/[!@#$%^&*(),.?":{}|<>]\d/, {message: "password must contain special character and number"})
    });
    
    const {register,handleSubmit, formState: { errors }} = useForm({ resolver: zodResolver(User) });
     


     

    const handleForm=async(t)=>{
        try{
            dispatch(signUpUser(t))
            navigate("/auth/login")
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="Sign_Card">
            <h2>Sign Up</h2>
            <form  onSubmit={handleSubmit(handleForm)}>
                <input placeholder="email" required={true} {...register("email")}/>
                {errors.email && <span className="signUpError">{errors.email.message}</span>}
                <input placeholder="name" type="text" required={true} name="name" autoComplete="off" {...register("name")}/>
                {errors.name && <span className="signUpError">{errors.name.message}</span>}
                <input placeholder="date of Birth" type="date" {...register("dob")}/>
                {errors.dob && <span className="signUpError">{errors.dob.message}</span>}
                <input placeholder="Phone Number" type="number" name="Phone Number" autoComplete="off" {...register("phoneNumber")}/>
                {errors.phoneNumber && <span className="signUpError">{errors.phoneNumber.message}</span>}
                <div>
                <input placeholder="password" type={seePassword? "text":"password"}  required={true} {...register("password")}/>
                {seePassword?<IoEyeOff onClick={()=>setSeePassword(!seePassword)}/>: <IoEye onClick={()=>setSeePassword(!seePassword)}/>}
                {errors.password && <span className="signUpError">{errors.password.message}</span>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <span><Link to="/auth/login">Log In</Link></span></p>
        </div>
    )
}

export default SignUp;