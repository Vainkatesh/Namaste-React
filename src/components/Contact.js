import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact=()=>{

    const {loggedInUser}=useContext(UserContext);

    return (
        <div className="contact-container">
            <h1>Contact Vainkatesh Kashyap</h1>
            <h2>User Name: {loggedInUser}</h2>
        </div>
    );
}

export default Contact;