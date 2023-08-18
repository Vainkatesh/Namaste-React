import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{



    const {resId}=useParams();

    const resDetails=useRestaurantMenu(resId);

// console.log("test render");
    if(resDetails===null){
        return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage}=resDetails?.cards[0]?.card?.card?.info;
    const {itemCards}=resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
// console.log(resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards);
 

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map(item=><li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {(item?.card?.info?.price || item?.card?.info?.defaultPrice)/100}</li>)}
                {/* <li>Biryanis</li>
                <li>Burgers</li>
                <li>Diet Coke</li> */}
            </ul>
        </div>
    );
}

export default RestaurantMenu;