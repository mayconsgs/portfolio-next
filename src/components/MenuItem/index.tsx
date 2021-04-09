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

  const routerTo = to;
  const routerPath = router.asPath;
  const match =
    routerTo != "/"
      ? routerPath.substring(1).includes(routerTo.substring(1))
      : routerTo == routerPath;

  return (
    <li className={`${styles.menuItem} ${match && styles.active}`}>
      <Link href={to}>
        <a className={styles.link} onClick={onClick}>
          {label}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
