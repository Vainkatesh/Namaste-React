import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");

    const {loggedInUser}=useContext(UserContext);

    const onlineStatus=useOnlineStatus();

    //Subscribing to the store by using selector
    const cartItems=useSelector((store)=>store.cart.items);

    return (
    <div className="header">
            <div className="logo-container">
                    <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                    <ul>
                            <li key="status">Online Status: {onlineStatus?"✅":"🔴"}</li>
                            <li key="Home">
                                <Link to="/">Home</Link> 
                            </li>
                            <li key="aboutus">
                                <Link to="/about">About us</Link>
                            </li>
                            <li key="contactus">
                                <Link to="/contact">Contact us</Link> 
                            </li>
                            <li key="grocery">
                                <Link to="/grocery">Grocery</Link> 
                            </li>
                            <li key="cart">
                                <Link to="/cart">Cart: ({cartItems?.length} items)</Link>
                            </li>
                            <li key="log" onClick={()=>btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</li>
                            <li key="user">{loggedInUser}</li>
                    </ul>
            </div>
    </div>
);
}

export default Header;