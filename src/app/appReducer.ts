import { favoritesReducer, historyReducer } from "@/entities/weather";
import { weatherApi } from "@/entities/weather/api/api";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [weatherApi.reducerPath]: weatherApi.reducer,
  favorites: favoritesReducer,
  history: historyReducer
});
