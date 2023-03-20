import { configureStore } from "@reduxjs/authApi";
import { authApi } from "./authApi";

export const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})