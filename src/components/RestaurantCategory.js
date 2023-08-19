import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const RestaurantCategory=({data,expandedCategory,setExpandedCategory})=>{

    // const [showItems,setShowItems]=useState(false);
    // const [toggle,setToggle]=useState(expandedCategory===data.title?true:false);
    // useEffect(()=>{
    //     setToggle(expandedCategory);
    // },[expandedCategory])

    const handleClick=()=>{
            setExpandedCategory(data?.title);
            // setToggle(!toggle);
            // console.log("clicked");
            // console.log(data.title);
            // console.log(expandedCategory);
            // setShowItems(!showItems);
    }

    // console.log(data);
    return (
        <div className="category">
            {/* Accordian Header */}
            <div className="category-header" onClick={handleClick}>
                <span className="category-header-name">{data?.title} ({data?.itemCards?.length})</span>
                <span className="category-header-arrow">⬇️</span>
                
            </div>
            {/* Accordian Body */}
            {(expandedCategory===data?.title) && <ItemList items={data?.itemCards}/>}
        </div>
    );
}

export default RestaurantCategory;