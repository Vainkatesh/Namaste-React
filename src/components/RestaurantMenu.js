import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import "../../index.css";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{

    const [expandedCategory,setExpandedCategory]=useState("");

    const {resId}=useParams();

    const resDetails=useRestaurantMenu(resId);

// console.log("test render");
    if(resDetails===null){
        return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage}=resDetails?.cards[0]?.card?.card?.info;
    // const {itemCards}=resDetails?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories=resDetails?.cards[resDetails?.cards?.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
// console.log(resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards);
    // console.log(categories);

    return (
        <div className="res-menu">
            <h1 className="res-name">{name}</h1>
            <p className="res-cuisine">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2 className="res-menu">Menu</h2>
            <ul>
                {categories?.map(category=>(
                    <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} expandedCategory={expandedCategory} setExpandedCategory={setExpandedCategory}/>
                ))}
                {/* {itemCards?.map(item=><li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {(item?.card?.info?.price || item?.card?.info?.defaultPrice)/100}</li>)} */}
                {/* <li>Biryanis</li>
                <li>Burgers</li>
                <li>Diet Coke</li> */}
            </ul>
        </div>
    );
}

export default RestaurantMenu;