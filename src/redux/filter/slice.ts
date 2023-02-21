import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState, SortList } from "./types";

const initialState: FilterState = {
  sortList: [
    { name: "популярности", sort: "rating" },
    { name: "цене", sort: "price" },
    { name: "алфавиту", sort: "title" },
  ],
  currentSortList: { name: "популярности", sort: "rating" },
  isOpened: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortList(state, action: PayloadAction<SortList>) {
      state.currentSortList = action.payload;
    },
    isOpen(state, action: PayloadAction<boolean>) {
      state.isOpened = action.payload;
    },
  },
});

export const { setSortList, isOpen } = filterSlice.actions;
export default filterSlice.reducer;
