export const getPizzaByLS = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};
