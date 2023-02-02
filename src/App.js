import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Sort from "./components/Sort/Sort";
import Categories from "./components/Сategories/Categories";
import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
