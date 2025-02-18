import { createSlice } from "@reduxjs/toolkit";
import { City } from "@/shared/types";

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
      const { id, name } = action.payload;

      const filtredHistoryCities = state.historyCities.filter(
        (city) => city.id !== id
      );
      const newHistoryCities = [{ id, name }, ...filtredHistoryCities];

      state.historyCities = newHistoryCities;

      localStorage.setItem("history", JSON.stringify(newHistoryCities));
    },
    removeHistoryCities: (state) => {
      state.historyCities = [];

      localStorage.removeItem("history");
    },
  },
});

export const { addHistoryCity, removeHistoryCities } = historySlice.actions;

export default historySlice.reducer;
