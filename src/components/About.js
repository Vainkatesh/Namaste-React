import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import "../../index.css";


class About extends React.Component {

    constructor(){
        super();
        // console.log("Parent Constructor");
    }

    componentDidMount () {
        // console.log("Parent componentDidMount");
    }

    render(){
        // console.log("Parent render");
        return (
            <div className="about-container">
            <h1>About (Class Component) Vainkatesh Kashyap</h1>
            {/* <h2>User : {loggedInUser}</h2> */}
            <h2>This is Namaste React Webseries Project</h2>
            {/* <User name={"Vainkatesh Kashyap (Functional Component)"}/> */}
            <UserClass name={"Vainkatesh Kashyap (Class Component)"} location={"Hyderabad (Class component)"}/>
            <UserClass name={"Elon Musk (Class Component)"} location={"Hyderabad (Class component)"}/>
            <UserClass name={"Saumya Jaiswal (Class Component)"} location={"Hyderabad (Class component)"}/>
        </div>
        );
    }
}

// const About =()=>{

//     const {loggedInUser}=useContext(UserContext);

//     return (
//         <div className="about-container">
//             <h1>About Vainkatesh Kashyap</h1>
//             <h2>User : {loggedInUser}</h2>
//             <h2>This is Namaste React Webseries Project</h2>
//             {/* <User name={"Vainkatesh Kashyap (Functional Component)"}/> */}
//             <UserClass name={"Vainkatesh Kashyap (Class Component)"} location={"Hyderabad (Class component)"}/>
//         </div>
//     );
// }

export default About;