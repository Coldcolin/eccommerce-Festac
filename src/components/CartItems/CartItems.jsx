import "./CartItems.css"
import { useDispatch } from "react-redux"
import { increaseQuantity, decreaseQuantity, deleteItem } from "../../features/auth/authSlice"

const CartItems = ({info}) => {
    const dispatch = useDispatch()
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
            <button className="CartItemDelete" onClick={()=> dispatch(deleteItem(info.id))}>Delete</button>
            <div className="CartActions">
                <button disabled={info.QTY === 1} onClick={()=> dispatch(decreaseQuantity(info))}>-</button>
                <p>{info.QTY}</p>
                <button onClick={()=> dispatch(increaseQuantity(info))}>+</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default CartItems