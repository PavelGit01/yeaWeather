import { City } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitState {
  savedCities: City[];
}

const initialState: InitState = {
  savedCities: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "savedCities",

  initialState,

  reducers: {
    addSavedCity: (state:InitState, action: PayloadAction<City>) => {
      const { id, name } = action.payload;
      if (!state.savedCities.some((savedCity) => savedCity.id === id)) {
        const updatedCities = [{ id, name }, ...state.savedCities];

        state.savedCities = updatedCities;

        localStorage.setItem("favorites", JSON.stringify(updatedCities));
      }
    },
    
    removeSavedCity: (state:InitState, action: PayloadAction<number>) => {
      const updatedCities = state.savedCities.filter(
        (savedCity) => savedCity.id !== action.payload
      );

      state.savedCities = updatedCities;

      localStorage.setItem("favorites", JSON.stringify(updatedCities));
    },
  },
});

export const { addSavedCity, removeSavedCity } = favoritesSlice.actions;

export default favoritesSlice.reducer;
