import React,{ useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { restaurants } from "../utils/mockData";
import "../../index.css";

const Body = () =>{

    const [restaurantData,setRestaurantData]=useState(restaurants);

    const filterTopRatedRestaurents=()=>{
        const filteredRestaurents=restaurantData.filter(res=> res.info.avgRating>=4);
        setRestaurantData(filteredRestaurents);
    }

    return (
            <div className="body">
                    <div className="search-container">
                            <input className="search-input"/>
                            <button className="search-button">Search</button>
                            <button className="top-rated-res" onClick={filterTopRatedRestaurents}>Top Rated Restaurents</button>
                            <button className="top-rated-res" onClick={()=>setRestaurantData(restaurants)}>Show All Restaurents</button>
                    </div>
                    <div className="res-container">
                            {restaurantData.map(restaurant=><RestaurentCard key={restaurant?.info?.id} resData={restaurant}/>)}
                            {/* <RestaurentCard resData={restaurants[0]}/>
                            <RestaurentCard resData={restaurants[1]}/> */}
                    </div>
            </div>
    );
}


export default Body;