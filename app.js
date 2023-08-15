import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



const heading=React.createElement("h1",{id:"heading"},"Namaste Vainkatesh");


//JSX - html like - xml like
const JSXHeading=(<h1 id="heading" className="haeding" tabIndex="5">
        Namaste Vainkatesh with JSX
        </h1>);

const Title=()=>{
       return <div className="container"><h1>Title Component</h1></div>;
};
const HeadingComponent=()=>{
        return (<div>
                {Title()}
                <Title/>
                {100+200}
                {console.log("test Vainky")}
                <h1>Functional component</h1>
                </div>);
};

const root= ReactDOM.createRoot(document.getElementById("root"));


//root.render(JSXheading);

root.render(<HeadingComponent/>);