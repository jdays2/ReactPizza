import s from "./Home.module.css";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import PizzaBlockSkeleton from "../../components/PizzaBlock/PizzaBlockSkeleton";
import Categories from "../../components/Сategories/Categories";
import Sort from "../../components/Sort/Sort";

import React from "react";
import Pagination from "./Pagination/Pagination";
import { useSelector } from "react-redux";

function Home({ searchValue }) {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [sortList, setSortList] = React.useState({
    name: "популярности",
    sort: "rating",
  });
  const [currendPage, setCurrendPage] = React.useState(1);

  const categoryId = useSelector((state) => state.category.currentCategoryId);

  const category = categoryId > 0 ? `category=${categoryId}&` : "";
  const paggination = `&page=${currendPage}&limit=4`;

  React.useEffect(() => {
    setIsLoading(true);
    window.scroll(0, 0);
    fetch(
      `https://63de555b9fa0d60060fce0cd.mockapi.io/api/items?${category}sortBy=${sortList.sort}&search=${searchValue}${paggination}`
    )
      .then((data) => data.json())
      .then((state) => {
        setData(state);
        setIsLoading(false);
      });
  }, [category, sortList, searchValue, paggination]);

  const pizzas = data.map((p) => <PizzaBlock {...p} key={p.id} />);
  const skeleton = [...new Array(6)].map((_, i) => (
    <PizzaBlockSkeleton key={i} />
  ));

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} />
          <Sort value={sortList} setSort={(i) => setSortList(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      </div>
      <Pagination setCurrendPage={setCurrendPage} />
    </div>
  );
}

export default Home;
