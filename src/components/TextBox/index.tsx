import { InputHTMLAttributes } from "react";
import styles from "./style.module.scss";

const TextBox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return (
    <div className={styles.textBox}>
      <input {...rest} className={`text ${rest.className ?? ""}`} />
      <div className={`${styles.bottom} ${styles.border}`} />
      <div className={`${styles.left} ${styles.border}`} />
      <div className={`${styles.top} ${styles.border}`} />
      <div className={`${styles.right} ${styles.border}`} />
    </div>
  );
};

export default TextBox;
