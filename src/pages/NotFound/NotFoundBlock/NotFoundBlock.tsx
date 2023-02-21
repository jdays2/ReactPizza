import styles from "./NotFoundBlock.module.scss";
import React from "react";

const NotFoundBlockInfo: React.FC = () => {
  return (
    <div className="content">
      <div className={styles.root}>
        <h1>
          <span>😔</span>
          <br />
          Ничего не найдено
        </h1>
        <p className={styles.discription}>
          К сожалению мы не можем ничего найти по вашему запросу.
        </p>
      </div>
    </div>
  );
};

export default NotFoundBlockInfo;
