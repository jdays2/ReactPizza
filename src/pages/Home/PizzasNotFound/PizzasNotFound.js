import styles from "./PizzaNotFound.module.css";
function PizzaNotFound() {
  return (
    <div className={styles.content}>
      <div className={styles.content}>
        <h1>
          <span>😔</span>
          <br />
          Ошибка
        </h1>
        <p>К сожалению, возникла ошибка при запросе на сервер.</p>
        <img
          className={styles.img}
          src="https://www.dominos.bg/images/error404.png"
        />
      </div>
    </div>
  );
}

export default PizzaNotFound;
