import { ButtonHTMLAttributes } from "react";
import styles from "./style.module.scss";

const RaisedButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${styles.raisedButton} ${rest.className ?? ""}`}
    >
      {children}
      <div className={`${styles.bottom} ${styles.border}`} />
      <div className={`${styles.left} ${styles.border}`} />
      <div className={`${styles.top} ${styles.border}`} />
      <div className={`${styles.right} ${styles.border}`} />
    </button>
  );
};

export default RaisedButton;
