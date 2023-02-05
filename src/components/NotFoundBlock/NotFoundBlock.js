import styles from "./NotFoundBlock.module.scss";

function NotFoundBlockInfo() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😔</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.discription}>
        К сожалению мы не можем ничего найти по вашему запросу.
      </p>
      {/* <img
        className={styles.img}
        src="https://www.dominos.bg/images/error404.png"
      /> */}
    </div>
  );
}

export default NotFoundBlockInfo;
