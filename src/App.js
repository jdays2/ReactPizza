import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import "./scss/app.scss";

import { Route, Routes } from "react-router-dom";
import React from "react";
import FullPizza from "./pages/FullPizza/FullPizza";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />

        <Routes>
          <Route
            path="/"
            element={
              <Home searchValue={searchValue} setSearchValue={setSearchValue} />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
