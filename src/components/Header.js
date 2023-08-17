import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    return (
    <div className="header">
            <div className="logo-container">
                    <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                    <ul>
                            <li key="Home">Home</li>
                            <li key="aboutus">About us</li>
                            <li key="contactus">Contact us</li>
                            <li key="cart">Cart</li>
                            <li key="log" onClick={()=>btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</li>
                    </ul>
            </div>
    </div>
);
}

export default Header;