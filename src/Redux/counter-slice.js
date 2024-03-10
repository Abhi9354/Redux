import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counterSlice",
    initialState:{counter:0},
    reducers:{
        plus(state,action){
            state.counter=state.counter+action.payload;
        },
        minus(state,action){
            state.counter=state.counter+action.payload;
           
        }
    }

})
export const {plus , minus} =counterSlice.actions;
export default counterSlice.reducer;