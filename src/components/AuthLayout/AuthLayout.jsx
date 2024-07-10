import {Outlet}from "react-router-dom";

const AuthLayout=()=>{
    return(
        <div>
            <div>Header</div>
            <div>Hero</div>
            <Outlet/>
            <div>Footer</div>
        </div>
        
    )
}

export default AuthLayout