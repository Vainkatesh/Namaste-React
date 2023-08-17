import React,{ useState,useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
// import { restaurants } from "../utils/mockData";
import Shimmer from "./Shimmer";
import "../../index.css";

const Body = () =>{

    const [restaurantData,setRestaurantData]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);

    const [searchtext,setSearchText]=useState("");

    useEffect(()=>{
        fetchData("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.439852&lng=78.383729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",4);
    },[]);
        

    const fetchData= async (url,index) =>{
        const data=await fetch(url);
        const json=await data.json();

        console.log(json);
        // const newResData=[...restaurantData,...json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants]
        
        setRestaurantData(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const filterTopRatedRestaurents=()=>{
        const filteredRestaurents=restaurantData.filter(res=> res.info.avgRating>=4);
        setFilteredRestaurants(filteredRestaurents);
    }

    const showMoreRestaurents=()=>{
        //fetchData("https://www.swiggy.com/dapi/restaurants/list/update?lat=17.439852&lng=78.383729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",0);
    }

    const search=()=>{
        console.log(restaurantData);
        const filteredData=restaurantData.filter(res=>res?.info?.name?.toLowerCase()?.includes(searchtext.toLowerCase()));
        setFilteredRestaurants(filteredData);
    }

//Shimmer UI
// if(restaurantData.length===0){
//     return <Shimmer/>
// }

    return (
            <div className="body">
                    <div className="search-container">
                            <input className="search-input" value={searchtext} onChange={(e)=>setSearchText(e.target.value)} />
                            <button className="search-button" onClick={search}>Search</button>
                            <button className="top-rated-res" onClick={filterTopRatedRestaurents}>Top Rated Restaurents</button>
                            <button className="all-res" onClick={()=>setFilteredRestaurants(restaurantData)}>Show All Restaurents</button>
                            <button className="show-more" onClick={showMoreRestaurents}>Show More Restaurents</button>
                    </div>
                    {filteredRestaurants.length===0?<Shimmer/>:
                    (<div className="res-container">
                            {filteredRestaurants.map(restaurant=><RestaurentCard key={restaurant?.info?.id} resData={restaurant}/>)}
                            {/* <RestaurentCard resData={restaurants[0]}/>
                            <RestaurentCard resData={restaurants[1]}/> */}
                    </div>)}
            </div>
    );
}


export default Body;