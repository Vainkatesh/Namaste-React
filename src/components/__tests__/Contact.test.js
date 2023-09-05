import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


describe("Contact us page test cases",()=>{
    test("Should load contact us component",()=>{
        render(<Contact/>);
    
        const headings=screen.getAllByRole("heading");
    
        //Assertion
        expect(headings[0]).toBeInTheDocument();
    })
    
    //test and it are same
    it("Should load user name of contact us component",()=>{
        render(<Contact/>);
    
        const username=screen.getByText("Contact Vainkatesh Kashyap");
    
        //Assertion
        expect(username).toBeInTheDocument();
    })
})
