import "./Category.css";
import Boots from "../../assets/Boots.jpg"
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <Link to={`/category/1`} className="Category-Holder">
        <div className="Category-Left">
            Category
        </div>
        <div className="Category-Right">
            <img src={Boots} alt="Category"/>
        </div>
    </Link>
  )
}

export default Category