export type SortList = {
  name: string;
  sort: "rating" | "price" | "title";
};

export interface FilterState {
  sortList: SortList[];
  currentSortList: SortList;
  isOpened: boolean;
}
