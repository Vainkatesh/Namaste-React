import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");

    const {loggedInUser}=useContext(UserContext);

    return (
    <div className="header">
            <div className="logo-container">
                    <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                    <ul>
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
                            <li key="cart">Cart</li>
                            <li key="log" onClick={()=>btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</li>
                            <li key="user">{loggedInUser}</li>
                    </ul>
            </div>
    </div>
);
}

export default Header;