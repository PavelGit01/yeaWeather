import { City } from "@/shared/types";
import { createSlice } from "@reduxjs/toolkit";

type InitState = {
  historyCities: City[];
};

const initialState: InitState = {
  historyCities: JSON.parse(localStorage.getItem("history") || "[]"),
};
const historySlice = createSlice({
  name: "historyCity",
  initialState,
  reducers: {
    addHistoryCity: (state, action) => {
      const { id, cityName } = action.payload;

      const updatedHistoryCities = state.historyCities.filter(
        (city) => city.id !== id
      );

      state.historyCities = [{ id, cityName }, ...updatedHistoryCities];
    },
    removeHistoryCities: (state) => {
      state.historyCities = [];
    },
  },
});

export const { addHistoryCity, removeHistoryCities } = historySlice.actions;

export default historySlice.reducer;
