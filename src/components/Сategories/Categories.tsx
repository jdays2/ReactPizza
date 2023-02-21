import { useSelector, useDispatch } from "react-redux";

import React from "react";
import { selectCategory } from "../../redux/category/selectors";
import { setCurrendCategoryId } from "../../redux/category/slice";

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
