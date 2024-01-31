
import { useSelector } from "react-redux";
import CartItem from "./CartItem"
import { getCartItems } from "../../redux/CartSlice";


const CartModal =({isOpen, onClose}) => {

    const cartItems = useSelector(getCartItems)
    return(
        <>
        { isOpen && (
    <div className="modal">
        <div className="modal-wrapper">
            <div className="modal-content">
                <button className="modal-close-button" onClick={() => onClose()}>X</button>
                {cartItems.map(cartItem => <CartItem cartItem={cartItem}/> )}
            </div>
        </div>
    </div>
    )}
    </>
    )
}
export default CartModal;