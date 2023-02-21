import { RootState } from "../store";

export const selectFilter = (state: RootState) => state.filter;
export const selectFilterBySort = (state: RootState) =>
  state.filter.currentSortList.sort;
