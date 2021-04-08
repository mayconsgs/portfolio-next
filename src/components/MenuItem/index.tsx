import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./style.module.scss";

interface MenuItemInterface {
  onClick: VoidFunction;
  label: string;
  to: string;
}

const MenuItem: React.FC<MenuItemInterface> = ({ onClick, label, to }) => {
  const router = useRouter();

  return (
    <li
      className={`${styles.menuItem} ${to == router.asPath && styles.active}`}
    >
      <Link href={to}>
        <a className={styles.link} onClick={onClick}>
          {label}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
