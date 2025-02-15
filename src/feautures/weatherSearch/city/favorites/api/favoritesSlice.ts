import { City } from "@/shared/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitState {
  savedCities: City[];
}

const initialState: InitState = {
  savedCities: [],
};

const favoritesSlice = createSlice({
  name: "savedCities",
  initialState,
  reducers: {
    addSavedCity: (state, action) => {
      const { id, cityName } = action.payload;
      if (!state.savedCities.some((savedCity) => savedCity.id === id)) {
        state.savedCities.push({ id, cityName });
      }
    },
    removeSavedCity: (state, action) => {
      const id = action.payload;
      state.savedCities = state.savedCities.filter(
        (savedCity) => savedCity.id !== id
      );
    },
  },
});

export const { addSavedCity, removeSavedCity } = favoritesSlice.actions;

export default favoritesSlice.reducer;
