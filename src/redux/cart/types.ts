export type CartItem = {
  id: string;
  title: string;
  type: string;
  sizes: number;
  imageUrl: string;
  price: number;
  count: number;
};

export type PlusMinus = {
  id: string;
  value: boolean;
};

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
}
