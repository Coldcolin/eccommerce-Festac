import "./Card.css";
import shoe from "../../assets/shoe.avif"
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { RiApps2Fill } from "react-icons/ri";

const Card = ({id, info}) => {
    return (
        <div className="Card-Container" key={id}>
            <div className="Card-Items">
                <div className="Card-Top">
                    <Link to={`/detail/${1}`} className="Card-Circle"><RiApps2Fill/></Link>
                    <div className="Card-Circle"><GiShoppingBag/></div>
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