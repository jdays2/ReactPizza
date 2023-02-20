import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import PizzaBlockSkeleton from "../../components/PizzaBlock/PizzaBlockSkeleton";
import Categories from "../../components/Сategories/Categories";
import Sort from "../../components/Sort/Sort";

import Pagination from "./Pagination/Pagination";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import PizzaNotFound from "./PizzasNotFound/PizzasNotFound";
import React from "react";
import { selectCategory } from "../../redux/category/selectors";
import { selectFilterBySort } from "../../redux/filter/selectors";
import { getPizzas } from "../../redux/pizza/asyncActions";
import { Status } from "../../redux/pizza/types";

const Home: React.FC = () => {
  const [currendPage, setCurrendPage] = React.useState(1);
  const dispatch = useAppDispatch();
  const currentValue = useSelector(
    (state: RootState) => state.search.currentValue
  );
  const { currentCategoryId } = useSelector(selectCategory);
  const sort = useSelector(selectFilterBySort);
  const { status, items } = useSelector((state: RootState) => state.pizza);

  const category =
    currentCategoryId > 0 ? `category=${currentCategoryId}&` : "";
  const paggination = `&page=${currendPage}&limit=4`;

  React.useEffect(() => {
    dispatch(getPizzas({ sort, currentValue, paggination, category }));
    window.scroll(0, 0);
  }, [sort, currentValue, paggination, category]);

  const pizzas = items.map((p) => <PizzaBlock {...p} key={p.id} />);
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
        <div className="content__items">
          {status === Status.LOAD ? skeleton : pizzas}
          {status === Status.ERROR && <PizzaNotFound />}
        </div>
      </div>
      <Pagination setCurrendPage={setCurrendPage} />
    </div>
  );
};

export default Home;
