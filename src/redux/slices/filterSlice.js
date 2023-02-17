import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setSortList(state, action) {
      state.currentSortList = action.payload;
    },
    isOpen(state, action) {
      state.isOpened = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filter;
export const selectFilterBySort = (state) => state.filter.currentSortList.sort;

export const { setSortList, isOpen } = filterSlice.actions;
export default filterSlice.reducer;
