import { InputHTMLAttributes } from "react";
import styles from "./style.module.scss";

const TextBox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return (
    <div className={styles.textBox}>
      <input {...rest} className={`text ${rest.className ?? ""}`} />
      <div className="bottom border" />
      <div className="left border" />
      <div className="top border" />
      <div className="right border" />
    </div>
  );
};

export default TextBox;
