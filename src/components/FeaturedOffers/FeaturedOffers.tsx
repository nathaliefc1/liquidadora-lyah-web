// src/components/FeaturedOffers/FeaturedOffers.tsx
import React from "react";
import site from "../../data/siteContent";
import styles from "./FeaturedOffers.module.scss";

const FeaturedOffers: React.FC = () => {
  return (
    <section id="ofertas" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>{site.featuredOffers.title}</h2>
        </div>

        <div className={styles.grid}>
          {site.featuredOffers.items.map((it, idx) => (
            <div key={idx} className={styles.card}>
              <img src={it.image} alt={it.title} />
              <div className={styles.info}>
                <h3>{it.title}</h3>
                <p className={styles.price}>
                  {it.price}{" "}
                  {it.note && <span className={styles.note}>({it.note})</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffers;
