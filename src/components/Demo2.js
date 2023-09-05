import { useEffect, useRef, useState } from "react";


const Demo2=()=>{
    let x=0;
    const [y,setY]=useState(0);
    const ref=useRef(0);

    // console.log("rendering again...");

    const timer=useRef(null);
    useEffect(()=>{
        timer.current=setInterval(()=>{
            // console.log("Inside interval "+Math.random());
        },1000)

        return ()=>clearInterval(timer.current);
    })


    return (
        <div className="demo">
            <h1>useref() Demo</h1>
            <div>
                <button onClick={()=>{
                    x=x+1;
                    // console.log("x= "+x);
                }}>Increase x</button>
                <span>Let Variable X: {x}</span>
            </div>
            <div>
                <button onClick={()=>{
                    setY(y+1);
                }}>Increase y</button>
                <span>State Variable Y: {y}</span>
            </div>
            <div>
                <button onClick={()=>{
                    ref.current=ref.current+1;
                    // console.log("ref= "+ref.current);
                }}>Increase y</button>
                <span>Ref Variable ref: {ref.current}</span>
            </div>
            <button onClick={()=>clearInterval(timer.current)}>Stop Interval</button>
        </div>
    );
}

export default Demo2;