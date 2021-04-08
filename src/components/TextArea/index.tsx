import React, { TextareaHTMLAttributes } from "react";
import styles from "./style.module.scss";

const TextArea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  ...rest
}) => {
  return (
    <div className={styles.textArea}>
      <textarea {...rest} />
      <div className={`${styles.bottom} ${styles.border}`} />
      <div className={`${styles.left} ${styles.border}`} />
      <div className={`${styles.top} ${styles.border}`} />
      <div className={`${styles.right} ${styles.border}`} />
    </div>
  );
};

export default TextArea;
