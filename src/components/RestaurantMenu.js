import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu=()=>{

    const [resDetails,setResDetails]=useState(null);

    const {resId}=useParams();


    useEffect(()=>{
        fetchMenu();
        // console.log("Loaded again for "+resId);
    },[]);
// console.log("test render");

    const fetchMenu=async ()=>{
        const data=await fetch(MENU_URL+resId);
        const json=await data.json();
        setResDetails(json?.data);
    }
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