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
      </div>
    </div>
  );
}

export default PizzaNotFound;
