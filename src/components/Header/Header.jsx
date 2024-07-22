import "./Header.css";
import { CgMenuGridR } from "react-icons/cg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import {useContext, useEffect} from "react"
import { ProductContext } from "../../context/ContextProvider";
import { FaUser } from "react-icons/fa";
import { logOut } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {cart, total} = useContext(ProductContext);
    const checkIfLoggedIn = useSelector((state)=> state.isLoggedIn);
    useEffect(()=>{
        if(checkIfLoggedIn === false){
            navigate("/auth/login")
        }
    },[checkIfLoggedIn])
  return (
    <div className="Header-Container">
    <section className="Header-Logo">
        <div className="Header-Logo-Item">C</div>
        <div>shoehub</div>
    </section>
    <section className="Header-Navs">
        <NavLink to="/" style={({isActive})=> isActive ? {color: "#FF741A"}:{color: "black"}}>Home</NavLink>
        <NavLink to="/categories" style={({isActive})=> isActive ? {color: "#FF741A"}:{color: "black"}}>Categories</NavLink>
        <NavLink to="/post" style={({isActive})=> isActive ? {color: "#FF741A"}:{color: "black"}}>Post</NavLink>
    </section>
    <section>
        <div className="Header-Cart">
            <div onClick={()=>dispatch(logOut())}>LogOut</div>
            <p>${total}</p>
            <Link to="/Cart">
                <GiShoppingBag/>
                <div>{cart.length}</div>
            </Link>
            
        </div>
        <div className="Header-Burger">
            <CgMenuGridR />
        </div>
    </section>
    </div>
  )
}

export default Header