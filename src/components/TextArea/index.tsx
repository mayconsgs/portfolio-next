import React, { TextareaHTMLAttributes } from "react";
import styles from "./style.module.scss";

const TextArea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  ...rest
}) => {
  return (
    <div className={styles.textArea}>
      <textarea {...rest} />
      <div className="bottom border" />
      <div className="left border" />
      <div className="top border" />
      <div className="right border" />
    </div>
  );
};

export default TextArea;
