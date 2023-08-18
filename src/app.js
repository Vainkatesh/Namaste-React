import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import "../index.css";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout=()=>(
        <div className="app">
                <Header/>
                {/*if route is / load Body */ }
                {/*if route is /contact load Contact */ }
                {/*if route is /about load About */ }
                <Outlet/>
                <Footer/>
        </div>
);


const router=createBrowserRouter([
        {
                path:"/",
                element:<AppLayout/>,
                children:[
                        {
                                path:"/",
                                element:<Body/>
                        },
                        {
                                path:"/about",
                                element:<About/>
                        },
                        {
                                path:"/contact",
                                element:<Contact/>
                        },
                        {
                                path:"/restaurants/:resId",
                                element:<RestaurantMenu/>
                        }
                ],
                errorElement:<Error/>,
        },
        // {
        //         path:"/about",
        //         element:<About/>
        // },
        // {
        //         path:"/contact",
        //         element:<Contact/>
        // }
]);


const root= ReactDOM.createRoot(document.getElementById("root"));




root.render(<RouterProvider router={router}/>);