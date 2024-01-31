
import { useDispatch } from "react-redux";
import dataFlowers from "../../data/dataFlowers";
import { removeItemFromCart } from "../../redux/CartSlice";

const CartItem = ({cartItem}) => {
    console.log(cartItem)
    const flowers = dataFlowers.find(item => item.id === cartItem.flowerId)
    const dispatch = useDispatch()
    
    return(
        <div className="cart-items">
        <div className="">
        <p>{flowers.name}</p>
        <p>{cartItem.quantity} bouquet(s)</p>
        <p>Price: $ {flowers.price * cartItem.quantity}</p>
        </div>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))} >
        <img className="icon-delete"  src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete"/> 
        </span>
        {/* <button className="checkout_btn">Checkout</button> */}

        </div>
        )
}
export default CartItem;