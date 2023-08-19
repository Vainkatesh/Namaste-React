import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About =()=>{

    const {loggedInUser}=useContext(UserContext);

    return (
        <div className="about-container">
            <h1>About Vainkatesh Kashyap</h1>
            <h2>User : {loggedInUser}</h2>
        </div>
    );
}

export default About;