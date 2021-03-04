import React, { ButtonHTMLAttributes } from "react";
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
      <div className="bottom border" />
      <div className="left border" />
      <div className="top border" />
      <div className="right border" />
    </button>
  );
};

export default RaisedButton;
