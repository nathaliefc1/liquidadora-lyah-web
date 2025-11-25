import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link to="/">Liquidadora Lyah</Link>
        </div>
        <nav className={styles.nav}>
          <a href="#offers">Ofertas</a>
          <a href="#categories">Categorías</a>
          <Link to="/terms">Términos</Link>
        </nav>
      </div>
    </header>
  );
};
