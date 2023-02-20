import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GetPizzaParams, PizzaItem } from "./types";

export const getPizzas = createAsyncThunk(
  "pizza/fetchPizza",
  async (params: GetPizzaParams) => {
    const { sort, currentValue, paggination, category } = params;
    const { data } = await axios.get<PizzaItem[]>(
      `https://63de555b9fa0d60060fce0cd.mockapi.io/api/items?${category}sortBy=${sort}&search=${currentValue}${paggination}`
    );
    return data;
  }
);
