import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LoadingTopBar from "../LoadingTopBar";
import styles from "./style.module.scss";

const Link = dynamic(import("next/link"), {
  loading: () => <LoadingTopBar />,
});
const MenuItem = dynamic(import("../MenuItem/index"), {
  loading: () => <LoadingTopBar />,
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function onChangeMenu() {
    if (window.innerWidth <= 1000) setMenuOpen(!menuOpen);
  }

  function resizeWindow() {
    if (window.innerWidth > 1000) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    window.onresize = resizeWindow;
  }, []);

  return (
    <header className={styles.pageHeader}>
      <div className={styles.contentHeader}>
        <input
          type="checkbox"
          checked={menuOpen}
          id="check"
          className={styles.check}
          onChange={onChangeMenu}
        />
        <button
          className={`${styles.menuButton} icon-button`}
          onClick={onChangeMenu}
        >
          {menuOpen ? <FiX size="4rem" /> : <FiMenu size="4rem" />}
        </button>

        <Link href="/">
          <a className={styles.logoPort}>
            <img
              className={styles.logo}
              src="/assets/logo-light.svg"
              alt="mayconsgs"
            />
          </a>
        </Link>

        <nav>
          <ul className="row">
            <MenuItem onClick={onChangeMenu} to="/" label="Inicio" />
            <MenuItem onClick={onChangeMenu} to="/apps" label="Aplicativos" />
            <MenuItem onClick={onChangeMenu} to="/sites" label="Sites" />
            <MenuItem onClick={onChangeMenu} to="/sobreMim" label="Sobre mim" />
            <MenuItem
              onClick={onChangeMenu}
              to="/curriculo"
              label="Currículo"
            />
            <MenuItem onClick={onChangeMenu} to="/contatos" label="Contatos" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
