import { sum } from "../sum";

test("Sum function should calculate the sum of 2 numbers",()=>{
    const res=sum(4,5);

    //Assertion
    expect(res).toBe(9);
})