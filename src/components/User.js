import { useEffect, useState } from "react";

const User =({name})=>{
    const [count,setCount]=useState(0);
    const [count2]=useState(2);

    useEffect(()=>{
        const interval=setInterval(()=>{
            // console.log("Namaste React OP")
        },1000);

        // console.log("useEffect");

        return ()=>{
            clearInterval(interval);
            // console.log("useEffect return");
        }
        //This will be called while unmounting
        //Return will work as component will Unmount for cleanup
    },[])

    console.log("render");

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: Hyderabad</h2>
            <h2>Contact: vainkateshkashyap1@gmail.com</h2>
        </div>

    );
}

export default User;