import "./CartItems.css"
import shoe from "../../assets/shoe.avif"

const CartItems = () => {
  return (
    <div className="CartItemContainer">
    <div className="CartItemImage">
        <img src={shoe} alt="sale"/>
    </div>
    <div className="CartDetails">
        <h3>Info Title</h3>
        <p>info?.description</p>
        <div className="CartItemsInfo">
            <p>#{400}</p>
            <button className="CartItemDelete">Delete</button>
            <div className="CartActions">
                <button>-</button>
                <p>{1}</p>
                <button>+</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default CartItems