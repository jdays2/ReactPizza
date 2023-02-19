import s from "./PizzaBlock.module.css";
import { Link } from "react-router-dom";
import React from "react";
import { addItems } from "../../redux/slices/CartSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";

type PizzaBlockProps = {
  imageUrl: string;
  title: string;
  sizes: number[];
  price: number;
  types: number[];
  id: string;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  imageUrl,
  title,
  sizes,
  price,
  types,
  id,
}) => {
  const typeNames = ["тонкое", "традиционное"];
  const dispatch = useAppDispatch();
  const chosenPizzaCount = useSelector((state: RootState) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  const count = chosenPizzaCount ? chosenPizzaCount.count : 0;

  const [activeType, setActiveType] = React.useState<number>(0);

  const [activeSize, setActiveSize] = React.useState<number>(0);

  const addToCart = () => {
    const item = {
      id,
      title,
      type: typeNames[activeType],
      sizes: sizes[activeSize],
      imageUrl,
      price,
      count: 0,
    };
    dispatch(addItems(item));
  };

  return (
    <div className="pizza-block__wrapper">
      <div className="pizza-block">
        <Link to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </Link>
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((t, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setActiveType(i);
                  }}
                  className={activeType === i ? "active" : ""}
                >
                  {typeNames[t]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((s, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setActiveSize(i);
                  }}
                  className={activeSize === i ? "active" : ""}
                >
                  {s}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button
            onClick={addToCart}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {count ? <i>{count}</i> : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
