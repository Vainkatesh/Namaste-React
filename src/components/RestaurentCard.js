import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurentCard=({resData})=>{

    const {name,cuisines,costForTwo,sla,avgRatingString,cloudinaryImageId}=resData?.info;

    const {loggedInUser}=useContext(UserContext);


    return (
            <div className="res-card">
                    <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
                    <h3>{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{avgRatingString} stars</h4>
                    <h4>{sla?.deliveryTime} minutes</h4>
                    <h4>{costForTwo}</h4>
                    <h4>User: {loggedInUser}</h4>
            </div>
    );
}

const withPromotedLabel=(RestaurentCard)=>{
        //retunrs a new component(which is basically a function only so here instaed of naming the new component we are returning arrow function)
        //Now whatever props we pass to restaurent card should be passed here as well, 
        //when we use thsi new component, the arguments passed will come as parameters of the new function, params of arraow function (props here)
        return (props)=>{
                return (
                        <div>
                                <div>Promoted</div>
                                <RestaurentCard {...props}/>
                        </div>
                );
        };
}

export {withPromotedLabel};

export default RestaurentCard;