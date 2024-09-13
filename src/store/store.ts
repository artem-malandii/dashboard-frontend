import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reportsApi} from "./slices/reports/reports";

const rootReducer = combineReducers({
    [reportsApi.reducerPath]: reportsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reportsApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
});

export const setupStore = () => store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
