// src/components/WhyChooseUs/WhyChooseUs.tsx
import React from "react";
import site from "../../data/siteContent";
import styles from "./WhyChooseUs.module.scss";

const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>{site.whyChooseUs.title}</h2>
          <p>{site.whyChooseUs.subtitle}</p>
        </div>

        <ul className={styles.list}>
          {site.whyChooseUs.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
