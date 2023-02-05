import s from "./Menu.module.css";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import PizzaBlockSkeleton from "./PizzaBlock/PizzaBlockSkeleton";

import React from "react";

function Menu() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63de555b9fa0d60060fce0cd.mockapi.io/api/items")
      .then((data) => data.json())
      .then((state) => {
        setIsLoading(false);
        setData(state);
      });
  }, []);

  return (
    <div className="content__items">
      {isLoading
        ? [...new Array(6)].map((_, i) => <PizzaBlockSkeleton key={i} />)
        : data.map((p) => <PizzaBlock {...p} key={p.id} />)}
      {/* {data.map((p) => {
        return <PizzaBlock {...p} key={p.id} />;
      })} */}
    </div>
  );
}

export default Menu;
