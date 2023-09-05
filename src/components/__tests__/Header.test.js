import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header test cases",()=>{
    it("Should render header component with a login button",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                 <Header/>
            </Provider>
            </BrowserRouter>
       );

       const login=screen.getByText("Login");
       expect(login).toBeTruthy();
    })

    it("Should render header component with a cart items 0",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                 <Header/>
            </Provider>
            </BrowserRouter>
       );

       const cart=screen.getByText("Cart: (0 items)");
       expect(cart).toBeTruthy();
    })

    it("Should render header component with a cart items",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                 <Header/>
            </Provider>
            </BrowserRouter>
       );

       const cart=screen.getByText(/Cart/);
       expect(cart).toBeTruthy();
    })

    it("Should render header component with a logout button once we click on login",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                 <Header/>
            </Provider>
            </BrowserRouter>
       );

       const login=screen.getByText("Login");
       expect(login).toBeTruthy();

       fireEvent.click(login);

       const logout=screen.getByText("Logout");
       expect(logout).toBeTruthy();
    })
})