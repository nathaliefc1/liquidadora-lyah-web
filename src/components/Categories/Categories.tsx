// src/components/Categories/Categories.tsx
import React from "react";
import site from "../../data/siteContent";
import styles from "./Categories.module.scss";
import {
  ShoppingCart,
  Snowflake,
  Droplet,
  Coffee,
  Candy,
  Package,
  Heart,
  Sparkles,
  Leaf,
} from "lucide-react";

const iconMap = [
  ShoppingCart,
  Package,
  Snowflake,
  Leaf,
  Coffee,
  Candy,
  Heart,
  Sparkles,
  Droplet,
];

const Categories: React.FC = () => {
  const items = site.categories.list;
  return (
    <section id="productos" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>{site.categories.title}</h2>
          <p>{site.categories.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {items.map((name, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <article key={name} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon />
                </div>
                <h3>{name}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
