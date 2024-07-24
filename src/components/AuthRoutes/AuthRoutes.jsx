import { useSelector } from "react-redux";
import {Navigate, Outlet}from "react-router-dom";

const AuthRoutes=()=>{
    const checkIfLoggedIn = useSelector((state)=> state.isLoggedIn);
    
    return(
        <>
        {checkIfLoggedIn? <Outlet/>:<Navigate to="/auth/login" replace={true}/>}
        </>
    )
}

export default AuthRoutes