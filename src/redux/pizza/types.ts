export enum Status {
  LOAD = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type PizzaItem = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type GetPizzaParams = {
  sort: string;
  currentValue: string;
  paggination: string;
  category: string;
};

export interface PizzaState {
  items: PizzaItem[];
  status: Status;
}
