import React from "react";
import site from "../../data/siteContent";
import styles from "./FeaturedOffers.module.scss";

const formatPrice = (value?: string, currency = "CLP") => {
  if (!value) return "";
  // Formatea con punto de miles (simple)
  const num = Number(String(value).replace(/\D/g, ""));
  return num
    ? `${num.toLocaleString("es-CL")} ${currency}`
    : `${value} ${currency}`;
};

const FeaturedOffers: React.FC = () => {
  const items = site.featuredOffers.items;

  return (
    <section id="ofertas" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>{site.featuredOffers.title}</h2>
        </div>

        <div className={styles.list}>
          {items.map((it) => (
            <article key={it.id} className={styles.card}>
              <div className={styles.media}>
                <img src={it.image} alt={it.title} loading="lazy" />
              </div>

              <div className={styles.info}>
                <h3 className={styles.title}>{it.title}</h3>

                <div className={styles.priceRow}>
                  {it.oldPrice && (
                    <del className={styles.oldPrice}>
                      {formatPrice(it.oldPrice, it.currency)}
                    </del>
                  )}
                  <strong className={styles.currentPrice}>
                    {formatPrice(it.price, it.currency)}
                  </strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffers;
