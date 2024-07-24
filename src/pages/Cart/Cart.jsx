import CartItems from "../../components/CartItems/CartItems"
import "./Cart.css"
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ContextProvider";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../features/auth/authSlice";

const Cart = () => {
    const { cartDispatch, total, quant} = useContext(ProductContext);
    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.cart)
    

  return (
    <div className="Cart-Container">
        <div className="Cart-Info">
            <div>Total: ${total}</div>
            <div className="CartClear" onClick={()=> dispatch(clearCart())}>Clear Cart</div>
            <div className="CartClear">Pay</div>
            <div>Total Items: {cart.length}</div>
            <div>Total Quantity: {quant}</div>
        </div>
        <div className="CartHolder">
            {
                cart.map((e, i)=>(
                    <CartItems key={e.id} info={e}/>
                ))
            }
        </div>
    </div>
  )
}

export default Cart