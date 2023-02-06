import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortList: [
    { name: "популярности", sort: "rating" },
    { name: "цене", sort: "price" },
    { name: "алфавиту", sort: "title" },
  ],
  currentSortList: { name: "популярности", sort: "rating" },
  isOpen: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortList(state, action) {
      state.currentSortList = action.payload;
    },
    isOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { setSortList, isOpen } = filterSlice.actions;
export default filterSlice.reducer;
