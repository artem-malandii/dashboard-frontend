import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { reportsApi } from "./slices/reports/reports";
import { timeDoctorApi } from "./slices/time-doctor/time-doctor";

const rootReducer = combineReducers({
  [reportsApi.reducerPath]: reportsApi.reducer,
  [timeDoctorApi.reducerPath]: timeDoctorApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      reportsApi.middleware,
      timeDoctorApi.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

export const setupStore = () => store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
