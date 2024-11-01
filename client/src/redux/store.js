import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./slice/loadingSlice";
import serviceReducer from "./slice/serviceSlice";
import { thunk } from 'redux-thunk'; 

export const store = configureStore({
    reducer: {
        loading: loadingSlice,
        service: serviceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk),
});

export default store;
