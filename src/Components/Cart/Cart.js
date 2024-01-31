import { useState,  } from "react"
import CartModal from "./CartModal"
import { getTotalPrice } from "../../redux/CartSlice";
import { useSelector } from "react-redux";




export const Cart = () => {
    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
    const totalPrice = useSelector(getTotalPrice)
   
    return(
        <div >
            <section className="section">
            <img className="icon" id="modal-show-button" 
            onClick={() => setModalInfoOpen(true)} src="https://img.icons8.com/?size=512&id=42382&format=png" alt="cart"/> 
            <CartModal
            isOpen ={modalInfoIsOpen}
            onClose={() => setModalInfoOpen(false)}/>
            <p>Total:$ {totalPrice}</p>
            </section>
        </div>
    )
}