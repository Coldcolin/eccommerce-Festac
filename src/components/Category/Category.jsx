import "./Category.css";
import Boots from "../../assets/Boots.jpg"
import { Link } from "react-router-dom";

const Category = ({vals}) => {
  return (
    <Link to={`/category/1`} className="Category-Holder">
        <div className="Category-Left">
            {vals.cat}
        </div>
        <div className="Category-Right">
            <img src={vals.img} alt="Category"/>
        </div>
    </Link>
  )
}

export default Category