import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchState } from "./types";

const initialState: SearchState = {
  currentValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentValue(state, action: PayloadAction<string>) {
      state.currentValue = action.payload;
    },
  },
});

export const { setCurrentValue } = searchSlice.actions;
export default searchSlice.reducer;
