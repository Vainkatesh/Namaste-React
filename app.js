import React from "react";
import ReactDOM from "react-dom/client";

//React code 
var temp=React.createElement("div",{id:"test1"},
         React.createElement("div",{id:"test2"},
        [React.createElement("h1",{},"Welcome Vainky to React"),
        React.createElement("h2",{},"Welcome Vainky to React h2")]));

// To Pass multiple elemenest in children use array just like above h1 and h2



    
var root=ReactDOM.createRoot(document.getElementById("parent"));
root.render(temp);

//Pure JS code
// var t=document.createElement("h1");
// t.innerHTML="Hello World in JS";

// var test=document.getElementById("root");
// test.appendChild(t);

