import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import "../index.css";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
// import Grocery from "./components/Grocery";


const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));

const AppLayout=()=>{

        const [userInfo,setUserInfo]=useState("");

        useEffect(()=>{
                //make an api call by passing username and password and set user info
                const data={
                        name:"Vainkatesh Kashyap"
                }
                setUserInfo(data.name);

        },[])

        //suppose Authentication code




        return (
                <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo:setUserInfo}}>
                <div className="app">
                        <Header/>
                        {/*if route is / load Body */ }
                        {/*if route is /contact load Contact */ }
                        {/*if route is /about load About */ }
                        <Outlet/>
                        <Footer/>
                </div>
                </UserContext.Provider>
                </Provider>
);
}


const router=createBrowserRouter([
        {
                path:"/",
                element:<AppLayout/>,
                children:[
                        {
                                path:"/",
                                element:<Body/>
                                // element: <UserContext.Provider value={{loggedInUser:"Vainky"}}><Body/></UserContext.Provider>
                        },
                        {
                                path:"/about",
                                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
                        },
                        {
                                path:"/contact",
                                element:<UserContext.Provider value={{loggedInUser:"Vainky"}}><Contact/></UserContext.Provider>
                        },
                        {
                                path:"/restaurants/:resId",
                                element:<RestaurantMenu/>
                        },
                        {
                                path:"/grocery",
                                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
                        },
                        {
                                path:"/cart",
                                element:<Cart/>
                        },
                        {
                                path:"/demo",
                                element:<Demo/>
                        },
                        {
                                path:"/demo2",
                                element:<Demo2/>
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