import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";

function FullPizza() {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState();

  useEffect(() => {
    axios
      .get(`https://63de555b9fa0d60060fce0cd.mockapi.io/api/items/${id}`)
      .then((data) => setPizza(data.data));
  }, [id]);

  if (pizza) {
    console.log(pizza);
    return (
      <div>
        <img src={pizza.imageUrl} />
        <div>{pizza.title}</div>
      </div>
    );
  }

  return <div></div>;
}

export default FullPizza;
