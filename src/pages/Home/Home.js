import s from "./Home.module.css";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import PizzaBlockSkeleton from "../../components/PizzaBlock/PizzaBlockSkeleton";
import Categories from "../../components/Сategories/Categories";
import Sort from "../../components/Sort/Sort";

import React from "react";

function Home() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63de555b9fa0d60060fce0cd.mockapi.io/api/items")
      .then((data) => data.json())
      .then((state) => {
        setData(state);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <PizzaBlockSkeleton key={i} />)
          : data.map((p) => <PizzaBlock {...p} key={p.id} />)}
        {/* {data.map((p) => {
        return <PizzaBlock {...p} key={p.id} />;
      })} */}
      </div>
    </>
  );
}

export default Home;
