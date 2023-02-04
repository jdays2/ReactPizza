import s from "./Menu.module.css";
import PizzaBlock from "./PizzaBlock/PizzaBlock";

import React from "react";

function Menu() {
  const [data, setData] = React.useState([]);

  fetch("https://63de555b9fa0d60060fce0cd.mockapi.io/api/items")
    .then((response) => response.json())
    .then((json) => setData(json));

  return (
    <div className="content__items">
      {data.map((p) => {
        return <PizzaBlock {...p} key={p.id} />;
      })}
    </div>
  );
}

export default Menu;
