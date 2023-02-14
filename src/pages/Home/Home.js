import s from "./Home.module.css";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import PizzaBlockSkeleton from "../../components/PizzaBlock/PizzaBlockSkeleton";
import Categories from "../../components/Сategories/Categories";
import Sort from "../../components/Sort/Sort";

import React from "react";
import Pagination from "./Pagination/Pagination";
import { useSelector } from "react-redux";
import { fetchPizza } from "../../redux/slices/PizzaSlice";
import { useDispatch } from "react-redux";

function Home({ searchValue }) {
  const [data, setData] = React.useState([]);

  const [currendPage, setCurrendPage] = React.useState(1);
  const dispatch = useDispatch();
  const currentValue = useSelector((state) => state.search.currentValue);
  const categoryId = useSelector((state) => state.category.currentCategoryId);
  const sort = useSelector((state) => state.filter.currentSortList.sort);
  const category = categoryId > 0 ? `category=${categoryId}&` : "";
  const paggination = `&page=${currendPage}&limit=4`;

  React.useEffect(() => {
    dispatch(fetchPizza({ sort, currentValue, paggination, category }));
    window.scroll(0, 0);
  }, []);

  const pizzas = data.map((p) => <PizzaBlock {...p} key={p.id} />);
  const skeleton = [...new Array(6)].map((_, i) => (
    <PizzaBlockSkeleton key={i} />
  ));

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      </div>
      <Pagination setCurrendPage={setCurrendPage} />
    </div>
  );
}

export default Home;
