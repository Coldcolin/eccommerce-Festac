import CartItems from "../../components/CartItems/CartItems"
import "./Cart.css"

const Cart = () => {
    const cartItems = Array(5).fill(0).map((_, i)=> i + 1)
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
                cartItems.map((e)=>(
                    <CartItems key={e?.id} info={e}/>
                ))
            }
        </div>
    </div>
  )
}

export default Cart