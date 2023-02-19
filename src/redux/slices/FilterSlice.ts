import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type SortList = {
  name: string;
  sort: "rating" | "price" | "title";
};

interface FilterState {
  sortList: SortList[];
  currentSortList: SortList;
  isOpened: boolean;
}

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

export const selectFilter = (state: RootState) => state.filter;
export const selectFilterBySort = (state: RootState) =>
  state.filter.currentSortList.sort;

export const { setSortList, isOpen } = filterSlice.actions;
export default filterSlice.reducer;
