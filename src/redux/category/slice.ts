import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CategoryState } from "./types";

const initialState: CategoryState = {
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
    setCurrendCategoryId(state, action: PayloadAction<number>) {
      state.currentCategoryId = action.payload;
    },
  },
});

export const { setCurrendCategoryId } = categorySlice.actions;
export default categorySlice.reducer;
