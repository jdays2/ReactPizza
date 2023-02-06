import s from "./Categories.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrendCategoryId } from "../../redux/slices/filterSlice";

import React from "react";

function Categories() {
  const categories = useSelector((state) => state.filter.categories);
  const currentCategory = useSelector(
    (state) => state.filter.currentCategoryId
  );
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                console.log(currentCategory);
                dispatch(setCurrendCategoryId(i));
              }}
              className={currentCategory === i ? "active" : ""}
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
