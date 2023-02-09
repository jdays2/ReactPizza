import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/CategorySlice";
import filterReducer from "./slices/FilterSlice";
import searchReducer from "./slices/SearchSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    filter: filterReducer,
    search: searchReducer,
  },
});
