import { CartItem } from "../redux/slices/CartSlice";
export const calcTotalItems = (items: CartItem[]) => {
  return items.reduce((sum, obj) => sum + obj.count, 0);
};
