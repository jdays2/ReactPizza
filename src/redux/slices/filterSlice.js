import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ],
  currentCategoryId: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCurrendCategoryId(state, action) {
      state.currentCategoryId = action.payload;
    },
  },
});

export const { setCurrendCategoryId } = filterSlice.actions;
export default filterSlice.reducer;
