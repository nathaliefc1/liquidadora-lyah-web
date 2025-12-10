// src/components/Header/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import site from "../../data/siteContent";
import styles from "./Header.module.scss";
import { MessageCircle } from "lucide-react";
import logo from "../../../preview.jpeg";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img
              src={logo}
              alt="Logo liquidadora Lyah precios económicos precios de locos"
            />
          </div>
          <div>
            <Link to="/" className={styles.title}>
              {site.brand.name}
            </Link>
          </div>
        </div>

        <nav className={styles.nav}>
          {site.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={styles.navItem}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className={styles.whatsappBtn}
          onClick={() =>
            window.open(
              `https://wa.me/${site.brand.phone.replace(/\D/g, "")}`,
              "_blank"
            )
          }
          aria-label="Abrir WhatsApp"
        >
          <MessageCircle className={styles.icon} />
          WhatsApp
        </button>
      </div>
    </header>
  );
};

export default Header;
