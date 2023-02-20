import { calcTotalPrice } from "./calcTotalPrice";
import { calcTotalItems } from "./calcTotalItems";
export const getPizzaByLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalItems = calcTotalItems(items);
  const totalPrice = calcTotalPrice(items);

  return {
    items,
    totalPrice,
    totalItems,
  };
};
