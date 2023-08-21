import { useMemo, useState } from "react";
import "../../index.css";
import { findNthPrime } from "../utils/constants";

const Demo=()=>{
    const [nthPrime,setNthPrime]=useState(0);
    const[isDarkTheme,setDarkTheme]=useState(false);

    // const prime=findNthPrime(nthPrime);
    const cahedPrime=useMemo(()=>findNthPrime(nthPrime),[nthPrime]);
    // console.log("rendering again...");

    return (
        <div className="demo">
            <div className={isDarkTheme?"demo-box-dark":"demo-box-light"}>
                <h1>useMemo() Demo</h1>
                <div className={isDarkTheme?"demo-box-dark-text":"demo-box-light-text"}>Find Nth Prime Number</div>
                <input type="text" value={nthPrime} onChange={(e)=>setNthPrime(e.target.value)}/>
                <div className={isDarkTheme?"demo-box-dark-text":"demo-box-light-text"}>Nth Prime Number: {cahedPrime}</div>

                <button className={isDarkTheme?"demo-box-dark-button":"demo-box-light-buttton"} onClick={()=>setDarkTheme(!isDarkTheme)}>Change Theme</button>
            </div>
        </div>
    );
}

export default Demo;