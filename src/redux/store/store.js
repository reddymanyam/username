import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import userReducer from "../slice/userSlice";

const store = configureStore({
    
    reducer:{
        counter: counterReducer,
        userupdate: userReducer,
    },
});

export default store;