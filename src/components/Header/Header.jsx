import "./Header.css";
import { CgMenuGridR } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import {useContext} from "react"
import { ProductContext } from "../../context/ContextProvider";

const Header = () => {
    const {cart} = useContext(ProductContext)
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
            <p>$230</p>
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