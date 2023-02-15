import s from "./Categories.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrendCategoryId,
  selectCategory,
} from "../../redux/slices/CategorySlice";

import React from "react";

function Categories() {
  const dispatch = useDispatch();

  const { categories, currentCategoryId } = useSelector(selectCategory);

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                console.log(currentCategoryId);
                dispatch(setCurrendCategoryId(i));
              }}
              className={currentCategoryId === i ? "active" : ""}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
