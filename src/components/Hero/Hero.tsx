// src/components/Hero/Hero.tsx
import React from "react";
import site from "../../data/siteContent";
import styles from "./Hero.module.scss";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToOffers = () => {
    const el = document.getElementById("ofertas");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const heroImage =
    site.hero.images[0] ?? "/src/assets/images/fachada/fachada-1";

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>{site.hero.title}</h1>
          <p className={styles.subtitle}>{site.hero.subtitle}</p>
          <button className={styles.cta} onClick={scrollToOffers}>
            {site.hero.cta}
            <ArrowDown className={styles.ctaIcon} />
          </button>
        </div>
        <div className={styles.media}>
          <img src={heroImage} alt={`${site.brand.name} fachada`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
