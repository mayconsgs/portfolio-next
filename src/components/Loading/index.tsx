import React from "react";
import styles from "./style.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.circle} />
      <div className={styles.circle + " " + styles.animation} />
    </div>
  );
};

export default Loading;
