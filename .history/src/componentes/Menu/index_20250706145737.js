import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { FaHome, FaUserAlt, FaLaptopCode } from "react-icons/fa";

export default function Menu() {
  return (
    <header className={styles.header}>
      <nav className={styles.navegacao}>
        <Link className={styles.link} to="/">
          <FaHome className={styles.icon} /> Inicio
        </Link>
        <Link className={styles.link} to="/sobremim">
          <FaUserAlt className={styles.icon} /> Sobre Mim
        </Link>
        <a
          className={styles.link}
          href="https://github.com/FabricioMartinhoEngeroff?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLaptopCode className={styles.icon} /> Portfólio
        </a>
      </nav>
    </header>
  );
}
