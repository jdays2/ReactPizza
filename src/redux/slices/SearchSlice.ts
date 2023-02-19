import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";

interface SearchState {
  currentValue: string;
}

const initialState: SearchState = {
  currentValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentValue(state, action: PayloadAction<string>) {
      return produce(state, (draft) => {
        draft.currentValue = action.payload;
      });
    },
  },
});

export const { setCurrentValue } = searchSlice.actions;
export default searchSlice.reducer;
