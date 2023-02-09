import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  currentValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentValue(state, action) {
      return produce(state, (draft) => {
        draft.currentValue = action.payload;
      });
    },
  },
});

export const { setCurrentValue } = searchSlice.actions;
export default searchSlice.reducer;
