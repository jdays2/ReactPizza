import s from "./Categories.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrendCategoryId,
  selectCategory,
} from "../../redux/slices/CategorySlice";

import React from "react";

const Categories: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const { categories, currentCategoryId } = useSelector(selectCategory);

  const onChangeCategory = (id: number) => {
    dispatch(setCurrendCategoryId(id));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName: string, i: number) => {
          return (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={currentCategoryId === i ? "active" : ""}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
});
export default Categories;
