import s from "./Categories.module.css";
import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    { name: "Все", id: 0 },
    { name: "Мясные", id: 1 },
    { name: "Вегетарианская", id: 2 },
    { name: "Гриль", id: 3 },
    { name: "Острые", id: 4 },
    { name: "Закрытые", id: 5 },
  ];

  function getIndex(index) {
    setActiveIndex(index);
    console.log(activeIndex);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((c) => {
          return (
            <li
              key={c.id}
              onClick={() => {
                getIndex(c.id);
              }}
              className={activeIndex === c.id ? "active" : ""}
            >
              {c.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
