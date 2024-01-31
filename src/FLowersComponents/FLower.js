import { useState } from "react"
import ChangeQuantity from "../Components/Cart/ChangeQuantity"
import { addItemToCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";

export const Flower= ( {flower}) => {
    const [quantity, setQuantity]= useState(1);
    const dispatch= useDispatch();

    return(
        <div className="bouquets_item">
              <img className="bouquets" src={`./${flower.img}.jpg`} alt="bouquet"/>
              <p>{flower.name}</p>
            <p> $ {flower.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <div className="container-quantity">
            <button onClick={() => {dispatch(addItemToCart({flower, quantity}))}} className="btn-quantity">Add to cart</button>
            </div>
            </div>
    )
    }