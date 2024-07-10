import "./CartItems.css"
import shoe from "../../assets/shoe.avif"
import { useContext } from "react"
import { ProductContext } from "../../context/ContextProvider"

const CartItems = ({info}) => {
    const {cartDispatch} = useContext(ProductContext)
  return (
    <div className="CartItemContainer">
    <div className="CartItemImage">
        <img src={info.image} alt="sale"/>
    </div>
    <div className="CartDetails">
        <h3>{info.name}</h3>
        <p>{info.description}</p>
        <div className="CartItemsInfo">
            <p>#{info.price}</p>
            <button className="CartItemDelete">Delete</button>
            <div className="CartActions">
                <button disabled={info.QTY === 1} onClick={()=> cartDispatch({type: "decrease", payload: info})}>-</button>
                <p>{info.QTY}</p>
                <button onClick={()=> cartDispatch({type: "increase", payload: info})}>+</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default CartItems