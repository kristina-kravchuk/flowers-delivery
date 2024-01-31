import dataFlowers from "../data/dataFlowers"
import { Flower } from "./FLower"
import { useSelector } from "react-redux"
import { getSelectedCategory } from "../redux/FlowersSlice"


export const Flowers= () => {

    const selectedCategory=useSelector(getSelectedCategory)
return(
    <div className="bouquets_container">
        {dataFlowers

        .filter(flower => {
            if(selectedCategory === 'ALL') return true;
            return selectedCategory === flower.category;
        })
        .map(flower => <Flower flower={flower}/>)}
    </div>
)
}