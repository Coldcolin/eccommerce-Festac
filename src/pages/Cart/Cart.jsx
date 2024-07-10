import CartItems from "../../components/CartItems/CartItems"
import "./Cart.css"
import { useContext } from "react";
import { ProductContext } from "../../context/ContextProvider";

const Cart = () => {
    const {cart} = useContext(ProductContext);
    console.log(cart)
  return (
    <div className="Cart-Container">
        <div className="Cart-Info">
            <div>Total: #{0}</div>
            <div className="CartClear">Clear Cart</div>
            <div className="CartClear">Pay</div>
            <div>Total Quantity: {0}</div>
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