import { Cart } from "../Cart/Cart"
import Filter from "./Filter"


export const AllCatagories = () => {
    return(<div className="category">
        {["ALL", "BIRTHDAY", "ANNIVERSARY", "VALENTINE'S DAY", "ENGAGEMENT"].map(category => <Filter category={category}/>)}
        <Cart/>
        </div>)
}