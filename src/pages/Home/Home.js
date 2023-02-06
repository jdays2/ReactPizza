import s from "./Home.module.css";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import PizzaBlockSkeleton from "../../components/PizzaBlock/PizzaBlockSkeleton";
import Categories from "../../components/Сategories/Categories";
import Sort from "../../components/Sort/Sort";

import React from "react";

function Home() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortList, setSortList] = React.useState({
    name: "популярности",
    sort: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);
    window.scroll(0, 0);
    fetch(
      `https://63de555b9fa0d60060fce0cd.mockapi.io/api/items?category=` +
        categoryId
    )
      .then((data) => data.json())
      .then((state) => {
        setData(state);
        setIsLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onClickCategories={(id) => {
              setCategoryId(id);
            }}
          />
          <Sort value={sortList} setSort={(i) => setSortList(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, i) => <PizzaBlockSkeleton key={i} />)
            : data.map((p) => <PizzaBlock {...p} key={p.id} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
