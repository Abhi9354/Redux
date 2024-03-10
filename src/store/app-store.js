import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../Redux/counter-slice";
export const store=configureStore({
    reducer:{counterSlice}
});