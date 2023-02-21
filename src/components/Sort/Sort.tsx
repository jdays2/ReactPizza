import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";
import { isOpen, setSortList } from "../../redux/filter/slice";
import { SortList } from "../../redux/filter/types";

import { useAppDispatch } from "../../redux/store";

const Sort: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();

  const { isOpened, sortList, currentSortList } = useSelector(selectFilter);

  const sortRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current))
        return dispatch(isOpen(false));
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const onClickHandler = (s: SortList) => {
    dispatch(isOpen(!isOpened));
    dispatch(setSortList(s));
  };

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span
          onClick={() => {
            dispatch(isOpen(!isOpened));
          }}
        >
          {currentSortList.name}
        </span>
      </div>
      {isOpened && (
        <div className="sort__popup">
          <ul>
            {sortList.map((s, i: number) => (
              <li
                className={currentSortList.sort === s.sort ? "active" : ""}
                key={i}
                onClick={() => onClickHandler(s)}
              >
                {s.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
