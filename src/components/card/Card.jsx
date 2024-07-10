import "./Card.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { RiApps2Fill } from "react-icons/ri";
import { ProductContext } from "../../context/ContextProvider";

const Card = ({info}) => {
    const {cartDispatch} = useContext(ProductContext);

    const addToCart=()=>{
        cartDispatch({type: "addToCart", payload: info})
    }

    return (
        <div className="Card-Container" key={info.id}>
            <div className="Card-Items">
                <div className="Card-Top">
                    <Link to={`/detail/${info.id}`} className="Card-Circle"><RiApps2Fill/></Link>
                    <div className="Card-Circle" onClick={addToCart} style={{cursor: "pointer"}}><GiShoppingBag/></div>
                </div>
                <div className="Card-Image">
                    <img src={info.image} alt="shoe"/>
                </div>
                <div className="Card-Details">
                    <h3>{info.name}</h3>
                    <p>${info.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card