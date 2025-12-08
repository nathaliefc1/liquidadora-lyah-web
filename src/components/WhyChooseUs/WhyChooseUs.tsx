// src/components/WhyChooseUs/WhyChooseUs.tsx
import React from "react";
import site from "../../data/siteContent";
import styles from "./WhyChooseUs.module.scss";
import { ShieldCheck, Tag, Users, MapPin, Star, Clock } from "lucide-react";

const iconMap = [ShieldCheck, Tag, Users, MapPin, Star, Clock];

const WhyChooseUs: React.FC = () => {
  const { whyChooseUs } = site;

  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="why-heading">{whyChooseUs.title}</h2>
          {whyChooseUs.subtitle && (
            <p className={styles.subtitle}>{whyChooseUs.subtitle}</p>
          )}
        </header>

        <div className={styles.grid}>
          {whyChooseUs.bullets.map((b, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <article key={b} className={styles.card}>
                <div className={styles.iconWrap} aria-hidden>
                  <Icon />
                </div>
                <h3 className={styles.cardTitle}>{b}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
