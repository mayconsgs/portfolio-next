import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";

interface MenuItemInterface {
  onClick: VoidFunction;
  label: string;
  to: string;
}

const MenuItem: React.FC<MenuItemInterface> = ({ onClick, label, to }) => {
  return (
    <li className={styles.menuItem}>
      <Link href={to}>
        <a className={styles.link} onClick={onClick}>
          {label}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
