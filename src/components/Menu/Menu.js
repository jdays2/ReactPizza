import s from "./Menu.module.css";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import pizzas from "../../assets/pizzas.json";

function Menu() {
  return (
    <div className="content__items">
      {pizzas.map((p) => {
        return <PizzaBlock {...p} key={p.id} />;
      })}
    </div>
  );
}

export default Menu;
