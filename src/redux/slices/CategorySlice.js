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

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCurrendCategoryId(state, action) {
      state.currentCategoryId = action.payload;
    },
  },
});

export const { setCurrendCategoryId } = categorySlice.actions;
export default categorySlice.reducer;
