import { CDN_URL } from "../utils/constants";

const RestaurentCard=({resData})=>{

    const {name,cuisines,costForTwo,sla,avgRatingString,cloudinaryImageId}=resData?.info;
    return (
            <div className="res-card">
                    <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
                    <h3>{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{avgRatingString} stars</h4>
                    <h4>{sla?.deliveryTime} minutes</h4>
                    <h4>{costForTwo}</h4>
            </div>
    );
}

export default RestaurentCard;