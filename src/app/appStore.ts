import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./appReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { weatherApi } from "@/entities/weather/api/api";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
