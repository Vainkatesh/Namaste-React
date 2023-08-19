import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers : {
        //action name : reducer function bound to it
        //when we will call addItem action then it will call the attached reducer arraow function here
        addItem : (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem : (state)=>{
            state.items.pop();
        },
        clearCart : (state)=>{
            // state is just a local variable and if we change reference of local variable the original state will not change
            //state=[]; this will not work as we are not mutating the state here we are only changing reference
            //console.log(current(state)); //for reading the state
            state.items.length=0;
            //Redux toolkit says either mutate the existing state (above) or return the new full state (below)
            //return {items:[]};
        }
    }
});

export const {
    addItem,
    removeItem,
    clearCart
}=cartSlice.actions;


export default cartSlice.reducer;