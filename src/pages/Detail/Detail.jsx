import "./Detail.css";
import {useParams} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ContextProvider";

const Detail = () => {
    const {id}= useParams();
    const {products} = useContext(ProductContext);
    const [product, setProduct]= useState({})

    useEffect(()=>{
        const item = products.filter((e)=> e.id == id);
        setProduct(item[0])
    },[])
  return (
    <div className="Detail-Container">
        <div className="Detail-Content">
            <div className="Detail-Left">
                <h3>{product.name}</h3>
                <div>{product.description}</div>
            </div>
            <div className="Detail-Center">
                <img src={product.image} alt="shoe"/>
                <h3>${product.price}</h3>
            </div>
            <div className="Detail-Right">
                <div>Add to Cart</div>
            </div>
        </div>
    </div>
  )
}

export default Detail