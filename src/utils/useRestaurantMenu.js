import { useState,useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resDetails,setResDetails]=useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async ()=>{
        const data=await fetch(MENU_URL+resId);
        const json=await data.json();
        setResDetails(json?.data);
    }

    return resDetails;

}

export default useRestaurantMenu;