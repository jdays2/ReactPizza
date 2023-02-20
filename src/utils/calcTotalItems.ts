import { CartItem } from "../redux/slices/CartSlice";
export const calcTotalItems = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};
