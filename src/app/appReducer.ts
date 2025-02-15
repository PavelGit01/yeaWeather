import { favoritesReducer, historyReducer } from "@/feautures/weatherSearch";
import { weatherApi } from "@/feautures/weatherSearch/api/api";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [weatherApi.reducerPath]: weatherApi.reducer,
  favorites: favoritesReducer,
  history: historyReducer,
});
